import nodemailer from 'nodemailer'

// Rate limiting (in-memory, resets on cold start)
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 3

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method === 'GET') {
    return res.status(200).json({ message: 'Contact API is running. Use POST to send a message.' })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown'
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter((t) => now - t < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' })
  }
  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)

  const { name, email, subject, message } = req.body

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (typeof name !== 'string' || name.trim().length === 0 || name.length > 200) {
    return res.status(400).json({ error: 'Invalid name.' })
  }

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  if (typeof subject !== 'string' || subject.trim().length === 0 || subject.length > 300) {
    return res.status(400).json({ error: 'Invalid subject.' })
  }

  if (typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
    return res.status(400).json({ error: 'Invalid message.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\nSubject: ${subject.trim()}\n\nMessage:\n${message.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001947; border-bottom: 1px solid #c4c6d2; padding-bottom: 12px;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> <a href="mailto:${email.trim()}">${email.trim()}</a></p>
          <p><strong>Subject:</strong> ${subject.trim()}</p>
          <hr style="border: none; border-top: 1px solid #c4c6d2; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${message.trim()}</p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Message sent successfully.' })
  } catch (err) {
    console.error('Email send error:', err.message)
    return res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}
