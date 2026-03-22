import { motion } from 'framer-motion'
import { PERSONAL } from '../utils/constants'

const FOOTER_LINKS = [
  ['Home',     '#hero'],
  ['Skills',   '#skills'],
  ['Projects', '#projects'],
  ['Stats',    '#stats'],
  ['Contact',  '#contact'],
]

const SOCIALS = [
  { label: 'GitHub',   href: PERSONAL.github,           icon: '⬡' },
  { label: 'LinkedIn', href: PERSONAL.linkedin,          icon: '💼' },
  { label: 'Email',    href: `mailto:${PERSONAL.email}`, icon: '✉️' },
]

export function Footer() {
  return (
    <footer style={{ padding: '40px 60px 28px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Logo */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(24px,4vw,30px)',
            background: 'linear-gradient(135deg, var(--accent), var(--cyan))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: 20,
          }}
        >
          {PERSONAL.initials}
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 'clamp(14px,3vw,28px)', justifyContent: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
          {FOOTER_LINKS.map(([label, href]) => (
            <a key={label} href={href} style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>
              {label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 24 }}>
          {SOCIALS.map(({ label, href, icon }) => (
            <motion.a
              key={label} href={href} target="_blank" rel="noreferrer"
              whileHover={{ y: -3 }}
              style={{
                width: 42, height: 42, borderRadius: '50%',
                background: 'var(--glass)', border: '1px solid var(--glass-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', fontSize: 16,
              }}
            >
              {icon}
            </motion.a>
          ))}
        </div>

        <p style={{ color: 'var(--muted)', fontSize: 13 }}>
          © {new Date().getFullYear()} {PERSONAL.name} · Built with React &amp; ❤️
        </p>
      </div>
    </footer>
  )
}