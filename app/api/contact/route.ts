export const runtime = 'nodejs';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function getTransport() {
  // Support both SMTP_* and MAIL_* variable styles
  const host = process.env.SMTP_HOST || process.env.MAIL_SERVER;
  const port = Number(process.env.SMTP_PORT || process.env.MAIL_PORT || 587);
  const user = process.env.SMTP_USER || process.env.MAIL_USERNAME;
  const pass = process.env.SMTP_PASS || process.env.MAIL_PASSWORD;

  if (!host || !user || !pass) {
    throw new Error('Missing SMTP configuration. Please set SMTP_HOST/MAIL_SERVER, SMTP_PORT/MAIL_PORT, SMTP_USER/MAIL_USERNAME, SMTP_PASS/MAIL_PASSWORD.');
  }

  const secure = port === 465 || String(process.env.SMTP_SECURE || process.env.MAIL_USE_SSL).toLowerCase() === 'true';

  const isGmail = /gmail\.com$/i.test(host);
  if (isGmail) {
    return nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
  }
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = getTransport();

    const fallbackUser = (process.env.SMTP_USER || process.env.MAIL_USERNAME) as string;
    const to = process.env.MAIL_TO || fallbackUser;
    const from = process.env.MAIL_FROM || fallbackUser;

    const subject = `New Contact · ${name}`;
    const plain = `New message\n\nName: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ''}${company ? `\nCompany: ${company}` : ''}${service ? `\nService: ${service}` : ''}\n\nMessage:\n${message}`;
    const html = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:24px 0;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;font-family:Inter,Arial,sans-serif;color:#111827;">
              <tr>
                <td style="padding:16px 20px;background:linear-gradient(90deg,#FF8C00,#FF6B35);border-radius:12px 12px 0 0;color:#fff;font-weight:700;font-size:16px;">New message from your website</td>
              </tr>
              <tr>
                <td style="padding:20px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                    <tr>
                      <td style="width:140px;color:#6b7280;">Name</td>
                      <td style="font-weight:600;">${name}</td>
                    </tr>
                    <tr>
                      <td style="width:140px;color:#6b7280;">Email</td>
                      <td>${email}</td>
                    </tr>
                    ${phone ? `<tr><td style=\"width:140px;color:#6b7280;\">Phone</td><td>${phone}</td></tr>` : ''}
                    ${company ? `<tr><td style=\"width:140px;color:#6b7280;\">Company</td><td>${company}</td></tr>` : ''}
                    ${service ? `<tr><td style=\"width:140px;color:#6b7280;\">Service</td><td style=\"text-transform:capitalize;\">${service}</td></tr>` : ''}
                  </table>
                  <div style="margin-top:16px;padding-top:12px;border-top:1px solid #e5e7eb;">
                    <div style="color:#6b7280;margin-bottom:6px;">Message</div>
                    <div style="white-space:pre-wrap;">${message}</div>
                  </div>
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
      replyTo: email,
    });
    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error('Contact email error:', err?.message, err);
    return NextResponse.json({ ok: false, error: err?.message || 'Server error' }, { status: 500 });
  }
}


