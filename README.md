## ExpersTech – AI‑Powered Software Studio (Next.js 14)

Modern marketing site and booking experience for ExpersTech. Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Includes a Cal.com scheduler modal, contact and booking email APIs, responsive mobile navigation, portfolio, services, about, careers, and contact pages.

### Highlights
- **Modern UI**: Animated hero, tech stack carousel, easy steps, testimonials, and polished footer
- **Mobile‑first**: Compact typography, stacked grids, bottom navigation bar on scroll
- **Booking**: Cal.com embed (modal) via `NEXT_PUBLIC_CAL_LINK`; graceful fallback to internal scheduler
- **Email**: Server routes for contact and bookings using Nodemailer (Gmail app password ready)
- **Calendar**: Optional Google Calendar + Meet creation for bookings
- **Pages**: Home, Services, About, Careers, Portfolio (list + detail), Contact
- **Live Chat**: tawk.to widget (site‑wide)
- **WhatsApp**: Floating and inline CTA buttons

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Icons**: lucide-react
- **Email**: Nodemailer
- **Calendar (optional)**: Google Calendar API via `googleapis`

---

## Getting Started (Local)

1) Install dependencies
```bash
npm install
```

2) Configure environment variables – create `.env.local` in `hamada-solutions/`:
```bash
# Cal.com – use your public path (no https, no query)
NEXT_PUBLIC_CAL_LINK=expers-tech-kzscfg/it-consultant

# SMTP (supports SMTP_* or MAIL_* names)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=xperstech@gmail.com
SMTP_PASS=YOUR_GMAIL_APP_PASSWORD
MAIL_TO=xperstech@gmail.com
MAIL_FROM=xperstech@gmail.com

# Timezone used for calendar fallbacks (ICS)
COMPANY_TIMEZONE=Africa/Nairobi

# Live Chat (tawk.to) – optional; defaults are hardcoded if not set
NEXT_PUBLIC_TAWK_PROPERTY_ID=68bc551067c586192c668ceb
NEXT_PUBLIC_TAWK_WIDGET_ID=1j4fqoiml

# WhatsApp – number must be digits only (no +, no spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=252610848453
NEXT_PUBLIC_MESSAGE=Fadlan, waxaan jeclaan lahaa inaan kula xiriiro

# Optional Google Calendar (for Meet links)
# GOOGLE_CLIENT_ID=...
# GOOGLE_CLIENT_SECRET=...
# GOOGLE_REFRESH_TOKEN=...
# GOOGLE_CALENDAR_ID=primary
```

3) Run the dev server
```bash
npm run dev
```

Open `http://localhost:3000`.

---

## Booking – Cal.com
- The site opens a modal with Cal.com using the value of `NEXT_PUBLIC_CAL_LINK` (e.g., `expers-tech-kzscfg/it-consultant`).
- Placeholders for built‑in name/email fields are controlled by Cal.com. For custom placeholders, add your own fields in Cal.com → Event Types → Booking questions.

### Fallback scheduler
If `NEXT_PUBLIC_CAL_LINK` is missing, the internal scheduler modal is used (responsive calendar/time pick/confirmation form).

---

## Live Chat – tawk.to
- Implemented via `app/components/TawkChat.tsx`, loaded site‑wide in `app/layout.tsx`.
- Uses `NEXT_PUBLIC_TAWK_PROPERTY_ID` and `NEXT_PUBLIC_TAWK_WIDGET_ID` (falls back to defaults if not set).
- To change the property/widget, set the envs and restart the server.

---

## WhatsApp CTA
- Component: `app/components/WhatsAppButton.tsx`.
- Two variants:
  - Floating: auto‑pulsing circular button (also supports hint bubble) – used inside the hero background.
  - Inline: small round icon used next to the hero CTAs (Book / View portfolio).
- Configuration:
  - `NEXT_PUBLIC_WHATSAPP_NUMBER` – digits only.
  - `NEXT_PUBLIC_MESSAGE` – default prefilled message.
- UI details:
  - Inline variant shows a flashing ring and, after ~2s, a hint bubble with the text “Fadlan, waxaan jeclaan lahaa inaan kula xiriiro”.

---

## Email & Calendar

### Contact API
- `POST /api/contact` sends an HTML email containing the message details.
- Uses Gmail (recommended) or any SMTP provider. For Gmail, create an **App Password** (2‑Step Verification required) and put it in `SMTP_PASS`.

### Booking API
- `POST /api/booking` emails booking details to the company.
- If Google Calendar is configured, it creates an event and returns a Meet link. Without Google, an `.ics` invite is attached.

---

## Deploying to Vercel (Free)
1) Push this directory to a GitHub repo.
2) In Vercel, import the repo.
3) Framework Preset: Next.js; Root Directory: `hamada-solutions`.
4) Add the environment variables (Project → Settings → Environment Variables):
   - `NEXT_PUBLIC_CAL_LINK`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
   - `MAIL_TO`, `MAIL_FROM`
   - `COMPANY_TIMEZONE`
   - `NEXT_PUBLIC_TAWK_PROPERTY_ID`, `NEXT_PUBLIC_TAWK_WIDGET_ID`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`, `NEXT_PUBLIC_MESSAGE`
   - Optionally: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CALENDAR_ID`
5) Deploy.

---

## Project Structure (key parts)
```
app/
  api/
    booking/route.ts        # Booking email + optional Google Meet, ICS fallback
    contact/route.ts        # Contact email endpoint
  components/
    CalScheduler.tsx        # Cal.com iframe modal
    BookingScheduler.tsx    # Internal scheduler (fallback)
    Navigation.tsx          # Header + mobile bottom nav on scroll
    Footer.tsx              # Responsive footer
    TawkChat.tsx            # tawk.to loader (site‑wide)
    WhatsAppButton.tsx      # Floating/inline WhatsApp CTA
    ...                     # Hero, TechStack, EasySteps, WhyChooseUs, Testimonials, etc.
  about/, services/, careers/, contact/, portfolio/  # Pages
```

---

## Common Issues
- **Email fails**: Verify `SMTP_*` values and that `SMTP_PASS` is a Gmail App Password (not your login password). Restart the server after env changes.
- **Cal widget blank**: Ensure `NEXT_PUBLIC_CAL_LINK` is set and the event is **Public**. Hard refresh or allow third‑party cookies.
- **WhatsApp not visible**: Ensure `NEXT_PUBLIC_WHATSAPP_NUMBER` (digits only) is set and the dev server restarted. Inline icon still opens WhatsApp composer if the number is missing.

---

## License
This project is provided as‑is for internal/portfolio use by ExpersTech.


