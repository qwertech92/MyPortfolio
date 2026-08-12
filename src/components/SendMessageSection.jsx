import { useState } from 'react'

export default function SendMessageSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setErrorMessage('')

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setErrorMessage('All fields are required.')
      setStatus('error')
      return
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact'
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to send message. Please try again.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please try again later.')
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full px-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30'

  return (
    <section id="send-message" className="relative flex flex-col w-full px-4 lg:px-[48px] py-24">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <h2 className="font-display-lg text-display-lg text-primary">Send Message</h2>
          <div className="h-[1px] flex-1 bg-outline-variant" />
        </div>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Have a question or want to work together? Send me a message directly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[640px] flex flex-col gap-5" noValidate>
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest text-[12px]">
              Name <span className="text-error">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={inputClasses}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest text-[12px]">
              Email <span className="text-error">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={inputClasses}
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-subject" className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest text-[12px]">
              Subject <span className="text-error">*</span>
            </label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              className={inputClasses}
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest text-[12px]">
              Message <span className="text-error">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              className={`${inputClasses} resize-none`}
              required
            />
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center gap-2 p-3 bg-primary/5 border border-primary/20 rounded-xl">
              <span className="material-symbols-outlined text-[20px] text-primary">check_circle</span>
              <span className="font-body-md text-body-md text-primary">Message sent successfully!</span>
            </div>
          )}

          {status === 'error' && errorMessage && (
            <div className="flex items-center gap-2 p-3 bg-error/5 border border-error/20 rounded-xl">
              <span className="material-symbols-outlined text-[20px] text-error">error</span>
              <span className="font-body-md text-body-md text-error">{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="self-start inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-technical-label text-technical-label rounded-xl shadow-sm hover:shadow-md hover:bg-on-primary-fixed-variant transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-sm"
          >
            {status === 'submitting' ? (
              <>
                <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                SENDING...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px]">send</span>
                SEND MESSAGE
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
