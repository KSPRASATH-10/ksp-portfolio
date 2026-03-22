import { motion } from 'framer-motion'
import { Reveal }  from '../components/Reveal'
import { PERSONAL } from '../utils/constants'

const CONTACT_LINKS = [
  { label: 'Email',    value: PERSONAL.email,              href: `mailto:${PERSONAL.email}`, icon: '✉️' },
  { label: 'GitHub',   value: 'github.com/KSPRASATH-10',      href: PERSONAL.github,            icon: '⬡'  },
  { label: 'LinkedIn', value: 'linkedin.com/in/sakthi-prasath-k', href: PERSONAL.linkedin,          icon: '💼' },
]

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, rgba(108,99,255,0.06), rgba(0,212,255,0.03))',
      }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <Reveal><div className="section-label">Get in touch</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ color: 'var(--muted)', marginBottom: 48, fontSize: 'clamp(14px,2vw,17px)', lineHeight: 1.7 }}>
            Whether it's a job opportunity, a freelance project, or just a hello — my inbox is always open.
          </p>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {CONTACT_LINKS.map((link, i) => (
            <Reveal key={link.label} delay={i * 0.1}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 6 }}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div
                  className="glass"
                  style={{ padding: 'clamp(14px,2.5vw,20px) clamp(16px,3vw,28px)', display: 'flex', alignItems: 'center', gap: 16, transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                >
                  <span style={{ fontSize: 'clamp(20px,3vw,24px)', flexShrink: 0 }}>{link.icon}</span>
                  <div style={{ textAlign: 'left', minWidth: 0 }}>
                    <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                      {link.label}
                    </div>
                    <div style={{ fontSize: 'clamp(13px,2vw,16px)', color: 'var(--accent)', marginTop: 2, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {link.value}
                    </div>
                  </div>
                  <span style={{ marginLeft: 'auto', color: 'var(--muted)', flexShrink: 0 }}>↗</span>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}