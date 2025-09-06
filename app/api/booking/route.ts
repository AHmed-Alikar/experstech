export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
function to24(input: string): string {
  if (/am|pm/i.test(input)) {
    const [time, suffixRaw] = input.split(' ');
    const suffix = suffixRaw?.toUpperCase() as 'AM' | 'PM';
    let [h, m] = time.split(':').map(Number);
    if (suffix === 'PM' && h !== 12) h += 12;
    if (suffix === 'AM' && h === 12) h = 0;
    return `${String(h).padStart(2, '0')}:${String(m || 0).padStart(2, '0')}`;
  }
  return input;
}

type BookingPayload = {
  name: string;
  email: string;
  date: string; // ISO date string
  time: string; // e.g., "14:00" or "2:00 PM"
  phone?: string;
  company?: string;
  service?: string;
  notes?: string;
};

function getTransport() {
  const host = process.env.SMTP_HOST || process.env.MAIL_SERVER;
  const port = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587);
  const user = process.env.SMTP_USER || process.env.MAIL_USERNAME;
  const pass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD;
  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration');
  }
  const secure = port === 465 || String(process.env.SMTP_SECURE || process.env.MAIL_USE_SSL).toLowerCase() === 'true';
  const isGmail = /gmail\.com$/i.test(host);
  if (isGmail) {
    return nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
  }
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

async function createGoogleCalendarEvent(payload: BookingPayload) {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
    GOOGLE_CALENDAR_ID,
    COMPANY_TIMEZONE,
  } = process.env as Record<string, string>;

  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN || !GOOGLE_CALENDAR_ID) {
    return null; // Google integration not configured
  }

  const oauth2Client = new google.auth.OAuth2({
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
  } as any);
  oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  // Build start and end times
  const tz = COMPANY_TIMEZONE || 'Africa/Nairobi';
  const start = new Date(`${payload.date}T${payload.time}`);
  const end = new Date(start.getTime() + 30 * 60 * 1000); // 30 minutes

  const event = await calendar.events.insert({
    calendarId: GOOGLE_CALENDAR_ID,
    conferenceDataVersion: 1,
    requestBody: {
      summary: `Consultation: ${payload.name}`,
      description: `Service: ${payload.service || 'N/A'}\nCompany: ${payload.company || 'N/A'}\nPhone: ${payload.phone || 'N/A'}\nNotes: ${payload.notes || ''}`,
      start: { dateTime: start.toISOString(), timeZone: tz },
      end: { dateTime: end.toISOString(), timeZone: tz },
      attendees: [{ email: payload.email }],
      conferenceData: { createRequest: { requestId: `meet-${Date.now()}` } },
    },
  });

  const meet = event.data.hangoutLink || (event.data.conferenceData?.entryPoints || []).find((e: any) => e.entryPointType === 'video')?.uri;
  return { eventId: event.data.id, meetLink: meet };
}

export async function POST(req: NextRequest) {
  try {
    const payload = (await req.json()) as BookingPayload;
    if (!payload?.name || !payload?.email || !payload?.date || !payload?.time) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Try to create Calendar event (optional)
    const calendarResult = await createGoogleCalendarEvent(payload).catch((e) => {
      console.error('Calendar error:', e?.message || e);
      return null;
    });

    // Create a basic ICS invite as fallback if Google not configured
    const startIso = `${payload.date}T${to24(payload.time)}:00Z`;
    const endIso = new Date(new Date(startIso).getTime() + 30 * 60 * 1000).toISOString().replace(/\.\d{3}Z$/, 'Z');
    const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//ExpersTech//Booking//EN\nBEGIN:VEVENT\nUID:${Date.now()}@experstech\nDTSTAMP:${startIso.replace(/[-:]/g,'').replace(/\.\d{3}Z/,'Z')}\nDTSTART:${startIso.replace(/[-:]/g,'').replace(/\.\d{3}Z/,'Z')}\nDTEND:${endIso.replace(/[-:]/g,'').replace(/\.\d{3}Z/,'Z')}\nSUMMARY:Consultation: ${payload.name}\nDESCRIPTION:${(payload.notes||'').replace(/\n/g,'\\n')}\nEND:VEVENT\nEND:VCALENDAR`;

    // Send email to company
    const transporter = getTransport();
    const fallbackUser = (process.env.SMTP_USER || process.env.MAIL_USERNAME) as string;
    const to = process.env.MAIL_TO || fallbackUser;
    const from = process.env.MAIL_FROM || fallbackUser;

    const subject = `New Booking · ${payload.name} — ${payload.date} ${payload.time}`;
    const plain = `New booking\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone || ''}\nCompany: ${payload.company || ''}\nService: ${payload.service || ''}\nDate/Time: ${payload.date} ${payload.time}\nMeet: ${calendarResult?.meetLink || 'N/A'}\n\nNotes:\n${payload.notes || ''}`;
    const html = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;font-family:Inter,Arial,sans-serif;color:#111827;">
              <tr>
                <td style="padding:16px 20px;background:linear-gradient(90deg,#FF8C00,#FF6B35);border-radius:12px 12px 0 0;color:#fff;font-weight:700;font-size:16px;">New booking received</td>
              </tr>
              <tr>
                <td style="padding:20px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                    <tr><td style="width:160px;color:#6b7280;">Name</td><td style="font-weight:600;">${payload.name}</td></tr>
                    <tr><td style="width:160px;color:#6b7280;">Email</td><td>${payload.email}</td></tr>
                    ${payload.phone ? `<tr><td style=\"width:160px;color:#6b7280;\">Phone</td><td>${payload.phone}</td></tr>` : ''}
                    ${payload.company ? `<tr><td style=\"width:160px;color:#6b7280;\">Company</td><td>${payload.company}</td></tr>` : ''}
                    ${payload.service ? `<tr><td style=\"width:160px;color:#6b7280;\">Service</td><td style=\"text-transform:capitalize;\">${payload.service}</td></tr>` : ''}
                    <tr><td style="width:160px;color:#6b7280;">Date / Time</td><td>${payload.date} ${payload.time}</td></tr>
                    ${calendarResult?.meetLink ? `<tr><td style=\"width:160px;color:#6b7280;\">Google Meet</td><td><a href=\"${calendarResult.meetLink}\">${calendarResult.meetLink}</a></td></tr>` : ''}
                  </table>
                  ${payload.notes ? `<div style=\"margin-top:16px;padding-top:12px;border-top:1px solid #e5e7eb;\"><div style=\"color:#6b7280;margin-bottom:6px;\">Notes</div><div style=\"white-space:pre-wrap;\">${payload.notes}</div></div>` : ''}
                </td>
              </tr>
              <tr>
                <td style="padding:12px 20px;color:#6b7280;font-size:12px;border-top:1px solid #e5e7eb;border-radius:0 0 12px 12px;">Sent automatically • ExpersTech</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>`;

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text: plain,
      html,
      replyTo: payload.email,
      attachments: !calendarResult?.meetLink ? [{ filename: 'invite.ics', content: ics, contentType: 'text/calendar' }] : undefined,
    });

    // Response sent back to UI, include meet link if created
    return NextResponse.json({ ok: true, meetLink: calendarResult?.meetLink || null, id: info.messageId });
  } catch (err: any) {
    console.error('Booking error:', err?.message, err);
    return NextResponse.json({ ok: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}


