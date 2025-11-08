import nodemailer from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: string) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.info('Email stubbed', { to, subject });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM ?? 'AstroKalki <no-reply@astrokalki.com>',
    to,
    subject,
    html
  });
}
