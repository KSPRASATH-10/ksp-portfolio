import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PERSONAL } from '../utils/constants'

const HOME_LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Stats',        href: '#stats' },
  { label: 'Work With Me', href: '#hire' },
  { label: 'Contact',      href: '#contact' },
]

export function Navbar({ theme, toggleTheme }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isMobile,  setIsMobile]  = useState(window.innerWidth <= 768)
  const location = useLocation()
  const isProjectsPage = location.pathname === '/projects'

  /* ── Track scroll for glassmorphism effect ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Track viewport width to switch between mobile/desktop layouts ── */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (!mobile) setMenuOpen(false) // auto-close dropdown when resizing to desktop
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* ── Close menu when route changes ── */
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  /* ── Smooth scroll handler for anchor links ── */
  const handleAnchorClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    // Small delay so menu close animation doesn't fight the scroll
    setTimeout(() => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 80)
  }

  return (
    <nav
      style={{
        position:     'fixed',
        top:          0,
        left:         0,
        right:        0,
        zIndex:       100,
        background:   scrolled ? 'rgba(15,15,26,0.90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition:   'background 0.3s, border-color 0.3s',
      }}
    >
      {/* ── Main bar ── */}
      <div
        style={{
          width:          '100%',
          padding:        isMobile ? '0 20px' : '0 48px',
          height:         64,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — always far left, always links to home */}
        <Link
          to="/"
          style={{
            textDecoration:          'none',
            fontFamily:              'Syne, sans-serif',
            fontWeight:              800,
            fontSize:                26,
            background:              'linear-gradient(135deg, var(--accent), var(--cyan))',
            WebkitBackgroundClip:    'text',
            WebkitTextFillColor:     'transparent',
            flexShrink:              0,
          }}
        >
          {PERSONAL.initials}
        </Link>

        {/* ── DESKTOP: horizontal links — only render when NOT mobile ── */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {isProjectsPage ? (
              <Link
                to="/"
                style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                ← Portfolio
              </Link>
            ) : (
              HOME_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={e => handleAnchorClick(e, link.href)}
                  style={{ color: 'var(--muted)', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.2s', whiteSpace: 'nowrap', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                >
                  {link.label}
                </a>
              ))
            )}

            {/* Theme toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                background:   'var(--glass)',
                border:       '1px solid var(--glass-border)',
                borderRadius: 50,
                width:        40,
                height:       40,
                cursor:       'pointer',
                fontSize:     17,
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                flexShrink:   0,
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>
          </div>
        )}

        {/* ── MOBILE: hamburger + theme toggle — only render when mobile ── */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              style={{
                background:   'var(--glass)',
                border:       '1px solid var(--glass-border)',
                borderRadius: 50,
                width:        36,
                height:       36,
                cursor:       'pointer',
                fontSize:     15,
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
              }}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(o => !o)}
              style={{
                background:   'var(--glass)',
                border:       '1px solid var(--glass-border)',
                borderRadius: 8,
                width:        40,
                height:       36,
                cursor:       'pointer',
                fontSize:     20,
                display:      'flex',
                alignItems:   'center',
                justifyContent: 'center',
                color:        'var(--text)',
              }}
            >
              {menuOpen ? '✕' : '☰'}
            </motion.button>
          </div>
        )}
      </div>

      {/* ── MOBILE DROPDOWN — only renders when mobile AND open ── */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{
              overflow:    'hidden',
              background:  'rgba(15,15,26,0.97)',
              borderTop:   '1px solid rgba(255,255,255,0.07)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div style={{ padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {isProjectsPage ? (
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color:          'var(--text)',
                    textDecoration: 'none',
                    fontSize:       16,
                    fontWeight:     500,
                    padding:        '12px 16px',
                    borderRadius:   10,
                    display:        'block',
                  }}
                >
                  ← Back to Portfolio
                </Link>
              ) : (
                HOME_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={e => handleAnchorClick(e, link.href)}
                    style={{
                      color:          'var(--text)',
                      textDecoration: 'none',
                      fontSize:       16,
                      fontWeight:     500,
                      padding:        '12px 16px',
                      borderRadius:   10,
                      display:        'block',
                      cursor:         'pointer',
                      transition:     'background 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(108,99,255,0.12)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    {link.label}
                  </a>
                ))
              )}

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />

              {/* Theme toggle row in dropdown */}
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false) }}
                style={{
                  background:  'none',
                  border:      'none',
                  color:       'var(--muted)',
                  fontSize:    14,
                  textAlign:   'left',
                  cursor:      'pointer',
                  padding:     '10px 16px',
                  borderRadius: 10,
                  fontFamily:  "'DM Sans', sans-serif",
                }}
              >
                {theme === 'dark' ? '☀️  Switch to Light Mode' : '🌙  Switch to Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}