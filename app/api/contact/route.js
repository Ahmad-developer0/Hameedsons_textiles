import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function validate(body) {
  const errors = [];
  if (!body) errors.push('No data provided');
  const { name, email, subject, message, phone } = body || {};
  if (!name || typeof name !== 'string' || name.trim().length < 2) errors.push('Valid name is required');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Valid email is required');
  if (!subject || typeof subject !== 'string' || subject.trim().length < 2) errors.push('Valid subject is required');
  if (!message || typeof message !== 'string' || message.trim().length < 5) errors.push('Valid message is required');
  if (phone && typeof phone !== 'string') errors.push('Phone must be a string');
  return { valid: errors.length === 0, errors };
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null);
    const { valid, errors } = validate(body);
    if (!valid) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const host = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
    const port = Number(process.env.ZOHO_SMTP_PORT || 465);
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;

    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: 'Email service is not configured.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const { name, email, subject, message, phone } = body;

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
        <p style="margin:0 0 16px;">You have received a new message from the website contact form.</p>
        <table style="border-collapse: collapse; width:100%;">
          <tbody>
            <tr>
              <td style="padding:8px; font-weight:600; width:140px;">Name</td>
              <td style="padding:8px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Email</td>
              <td style="padding:8px;">${escapeHtml(email)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Phone</td>
              <td style="padding:8px;">${escapeHtml(phone || '')}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Subject</td>
              <td style="padding:8px;">${escapeHtml(subject)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600; vertical-align: top;">Message</td>
              <td style="padding:8px; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const to = 'info@hameedsonstextiles.com';

    await transporter.sendMail({
      from: `Hameed Sons Website <${user}>`,
      to,
      subject: `[Website] ${subject}`,
      text: `New message from ${name} <${email}>\nPhone: ${phone || '-'}\n\n${message}`,
      html,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'Failed to send message.' }, { status: 500 });
  }
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
