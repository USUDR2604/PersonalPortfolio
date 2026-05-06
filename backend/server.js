require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #1D9E75; padding-bottom: 0.5rem;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Name</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Email</strong></td>
              <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Phone</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;"><strong>Subject</strong></td>
              <td style="padding: 8px 0; color: #0f172a;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 1.5rem;">
            <p style="color: #64748b; margin-bottom: 0.5rem;"><strong>Message</strong></p>
            <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; color: #0f172a; line-height: 1.6;">
              ${message.replace(/\n/g, '<br/>')}
            </div>
          </div>
          <p style="margin-top: 1.5rem; font-size: 0.75rem; color: #94a3b8;">
            Sent from UltraUnityVerse Portfolio · ${new Date().toLocaleString()}
          </p>
        </div>
      `
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
