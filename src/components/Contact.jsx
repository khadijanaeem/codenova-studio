import { useState } from 'react'

// Get a free access key at https://web3forms.com (just enter an email, no
// account/password needed) and put it in a .env file at the project root as:
//   VITE_WEB3FORMS_KEY=your-key-here
// See the README for full setup steps.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      // No key configured yet — see the comment above and the README.
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${form.name} via Code Nova Studio`,
          name: form.name,
          company: form.company,
          email: form.email,
          message: form.message,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-form-wrap">
          <p className="eyebrow">Get In Touch</p>
          <h2>Tell us what is breaking or slowing your operations?</h2>

          {status === 'sent' ? (
            <p className="form-success">
              Thanks — your message has been sent. We'll get back to you shortly.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="company"
                placeholder="Company (optional)"
                value={form.company}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
              <label className="consent">
                <input type="checkbox" required />
                By checking this box, you consent to receive communications from
                Code Nova Studio related to your inquiry. Placeholder consent text —
                update to match your actual policy.
              </label>

              {status === 'error' && (
                <p className="form-error">
                  {WEB3FORMS_ACCESS_KEY
                    ? "Something went wrong sending your message — please try again or email us directly."
                    : 'Form is not connected yet — add a VITE_WEB3FORMS_KEY in .env (see README).'}
                </p>
              )}

              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Submit'}
              </button>
            </form>
          )}
        </div>

        {/* <div className="contact-direct">
          <h3>Or reach us directly</h3>
          <div className="contact-block">
            <span className="contact-label">Founder</span>
            <a href="mailto:founder@codenovastudio.com">founder@codenovastudio.com</a>
          </div>
          <div className="contact-block">
            <span className="contact-label">Support</span>
            <a href="mailto:support@codenovastudio.com">support@codenovastudio.com</a>
          </div>
          <p className="placeholder-note">Placeholder emails — replace with your real addresses.</p>
        </div> */}
      </div>
    </section>
  )
}
