import { Resend } from 'resend';
import { NextResponse } from 'next/server';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const validatePayload = (payload: ContactPayload) => {
  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return 'Name, email, and message are required.';
  }

  if (!isEmail(email)) {
    return 'Please provide a valid email address.';
  }

  if (name.length > 120) {
    return 'Name is too long.';
  }

  if (message.length > 5000) {
    return 'Message is too long.';
  }

  return null;
};

export async function POST(request: Request) {
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!process.env.RESEND_API_KEY || !from || !to) {
    return NextResponse.json(
      { error: 'Server email configuration is missing.' },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const validationError = validatePayload(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const { name, email, message } = payload;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
  const submittedAt = new Date().toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    hour12: false,
  });

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New Portfolio Contact</title>
        </head>
        <body style="margin:0;padding:0;background:#080d1a;font-family:Inter,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#e6edf7;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#080d1a;padding:32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;background:linear-gradient(180deg,#0f1b35 0%,#0c1529 100%);border:1px solid #1d315d;border-radius:18px;overflow:hidden;">
                  <tr>
                    <td style="padding:28px 28px 18px;background:radial-gradient(circle at top right,rgba(100,255,218,0.2),transparent 45%),#0f1b35;">
                      <p style="margin:0 0 10px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#7ee9d3;">Portfolio Contact</p>
                      <h1 style="margin:0;font-size:24px;line-height:1.3;color:#f2f6ff;">New message received</h1>
                      <p style="margin:10px 0 0;font-size:14px;color:#9eb0d1;">
                        A new submission came from your website contact form.
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:8px 28px 0;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                        <tr>
                          <td style="width:120px;padding:10px 12px;background:#111f3c;border:1px solid #213867;border-radius:10px;color:#88a0c8;font-size:12px;">Name</td>
                          <td style="padding:10px 14px;background:#0b1530;border:1px solid #1a2e57;border-radius:10px;color:#e6edf7;font-size:14px;">${safeName}</td>
                        </tr>
                        <tr>
                          <td style="width:120px;padding:10px 12px;background:#111f3c;border:1px solid #213867;border-radius:10px;color:#88a0c8;font-size:12px;">Email</td>
                          <td style="padding:10px 14px;background:#0b1530;border:1px solid #1a2e57;border-radius:10px;color:#8fead6;font-size:14px;">
                            <a href="mailto:${safeEmail}" style="color:#8fead6;text-decoration:none;">${safeEmail}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="width:120px;padding:10px 12px;background:#111f3c;border:1px solid #213867;border-radius:10px;color:#88a0c8;font-size:12px;">Submitted</td>
                          <td style="padding:10px 14px;background:#0b1530;border:1px solid #1a2e57;border-radius:10px;color:#c7d4ea;font-size:14px;">${submittedAt}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:18px 28px 12px;">
                      <div style="padding:18px;background:#0b1530;border:1px solid #1a2e57;border-radius:12px;">
                        <p style="margin:0 0 10px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#88a0c8;">Message</p>
                        <p style="margin:0;font-size:15px;line-height:1.7;color:#e6edf7;">${safeMessage}</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:10px 28px 26px;">
                      <a
                        href="mailto:${safeEmail}?subject=Re:%20Portfolio%20contact"
                        style="display:inline-block;background:linear-gradient(135deg,#64ffda,#39c5ff);color:#0a162f;text-decoration:none;font-weight:700;font-size:13px;padding:11px 16px;border-radius:10px;"
                      >
                        Reply to ${safeName}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:14px 28px;border-top:1px solid #1c315d;background:#0a1328;">
                      <p style="margin:0;font-size:12px;color:#7f95bb;">
                        Sent automatically from your portfolio contact form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || 'Failed to send message.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
