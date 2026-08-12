import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['POST'],
  })
)

// Rate limiting (simple in-memory)
const rateLimitMap = new Map()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 3 // max 3 requests per minute per IP

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress
  const now = Date.now()
  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter((t) => now - t < RATE_LIMIT_WINDOW)

  if (recentRequests.length >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please wait a moment before trying again.' })
  }

  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  next()
}

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Verify transporter on startup
transporter.verify().then(() => {
  console.log('Email transporter is ready')
}).catch((err) => {
  console.warn('Email transporter verification failed:', err.message)
  console.warn('Make sure EMAIL_USER and EMAIL_PASS are set in .env')
})

// Contact endpoint
app.post('/api/contact', rateLimit, async (req, res) => {
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
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.listen(PORT, () => {
  console.log(`Contact API server running on port ${PORT}`)
})
