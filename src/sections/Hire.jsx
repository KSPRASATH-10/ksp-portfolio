import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Reveal } from '../components/Reveal'
import { SERVICES, WHY_ME, PERSONAL, EMAILJS_CONFIG } from '../utils/constants'

const INITIAL_FORM = { name: '', email: '', type: 'Portfolio Website', budget: '', message: '' }

function ContactForm() {
  const formRef  = useRef(null)
  const [form,   setForm]   = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey,
      )
      setStatus('success')
      setForm(INITIAL_FORM)
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <div style={{ maxWidth: 660, margin: '0 auto' }}>
      <div
        className="glass hire-form-card"
        style={{ padding: '44px 48px', borderRadius: 24, border: '1px solid rgba(108,99,255,0.22)' }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>💬</div>
          <h3 style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800, marginBottom: 8 }}>Start a Project</h3>
          <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7 }}>
            Tell me about your vision and I'll reply within 24 hours.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div className="field-wrap">
              <span className="field-icon">👤</span>
              <input
                name="from_name" placeholder="Your Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                required
              />
            </div>
            <div className="field-wrap">
              <span className="field-icon">✉️</span>
              <input
                name="from_email" type="email" placeholder="Email Address"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                required
              />
            </div>
          </div>

          <div className="field-wrap">
            <span className="field-icon">🗂</span>
            <select
              name="project_type"
              value={form.type}
              onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
            >
              <option>Portfolio Website</option>
              <option>Business Website</option>
              <option>Web Application</option>
              <option>Landing Page</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field-wrap">
            <span className="field-icon">💰</span>
            <input
              name="budget" placeholder="Budget (e.g. ₹5,000 – ₹15,000)"
              value={form.budget}
              onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}
            />
          </div>

          <div className="field-wrap ta-wrap">
            <span className="field-icon">📝</span>
            <textarea
              name="message" rows={5}
              placeholder="Describe your project — goals, features, timeline..."
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              required
            />
          </div>

          <div
            className="btn-row"
            style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 4 }}
          >
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="btn-primary" type="submit"
              disabled={status === 'sending'}
              style={{ opacity: status === 'sending' ? 0.65 : 1, cursor: status === 'sending' ? 'wait' : 'pointer', minWidth: 160 }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message →'}
            </motion.button>

            <motion.a
              href={PERSONAL.whatsapp} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >
              <button type="button" className="btn-outline" style={{ borderColor: '#25D366', color: '#25D366' }}>
                💬 WhatsApp
              </button>
            </motion.a>
          </div>

          {status === 'success' && (
            <div style={{ padding: '14px 20px', borderRadius: 12, background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#22c55e', fontSize: 15, textAlign: 'center' }}>
              ✓ Message sent! I'll reply within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div style={{ padding: '14px 20px', borderRadius: 12, background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', fontSize: 15, textAlign: 'center' }}>
              ✗ Something went wrong. Email me at {PERSONAL.email}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export function Hire() {
  return (
    <section id="hire" className="section">
      <Reveal><div className="section-label">Let's build together</div></Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-title">Available for <span className="gradient-text">Freelance</span></h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="section-sub">
          Looking to build your next digital product? I deliver high-quality web solutions that drive real results.
        </p>
      </Reveal>

      {/*
        Services grid:
        justify-content: center   — centres the row when 3 cards don't
                                    quite fill the container width.
        justify-items: center     — centres card content inside each cell.
        Max card width via minmax prevents cards from stretching too wide
        on large screens when only 1-2 show.
      */}
      <div
        className="services-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 320px))',
          gap: 20,
          marginBottom: 64,
          justifyContent: 'center',
        }}
      >
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <motion.div
              className="glass"
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(108,99,255,0.18)' }}
              style={{
                padding: 'clamp(22px,3vw,32px)',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div style={{ fontSize: 'clamp(32px,4vw,40px)', marginBottom: 4 }}>{s.icon}</div>
              <h3 style={{ fontSize: 'clamp(17px,2.5vw,20px)', fontWeight: 800 }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
              <span style={{
                marginTop: 8, padding: '6px 16px', borderRadius: 50,
                background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.3)',
                fontSize: 13, color: 'var(--accent)', fontWeight: 600,
              }}>
                {s.price}
              </span>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Why choose me */}
      <Reveal delay={0.05}>
        <h3 style={{ fontSize: 'clamp(24px,4vw,32px)', fontWeight: 800, textAlign: 'center', marginBottom: 32 }}>
          Why Choose <span className="gradient-text">Me</span>
        </h3>
      </Reveal>

      {/*
        Why-me grid — same centering approach.
        minmax(180px, 240px) caps card width so 4 cards don't stretch ugly on wide screens.
      */}
      <div
        className="whyme-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 240px))',
          gap: 16,
          marginBottom: 72,
          justifyContent: 'center',
        }}
      >
        {WHY_ME.map((w, i) => (
          <Reveal key={w.label} delay={i * 0.08}>
            <div
              className="glass"
              style={{
                padding: 'clamp(18px,2.5vw,24px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                height: '100%',
              }}
            >
              <span style={{ fontSize: 'clamp(22px,3vw,28px)' }}>{w.icon}</span>
              <div style={{ fontWeight: 700, fontSize: 'clamp(14px,2vw,16px)', fontFamily: "'Syne', sans-serif" }}>{w.label}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.6 }}>{w.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <ContactForm />
      </Reveal>
    </section>
  )
}