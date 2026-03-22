import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ALL_PROJECTS } from '../utils/constants'

/* ── Filter chip ── */
function Chip({ label, active, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      style={{
        padding:      '8px 20px',
        borderRadius: 50,
        border:       active ? 'none' : '1px solid var(--glass-border)',
        background:   active
          ? 'linear-gradient(135deg, var(--accent), var(--purple))'
          : 'var(--glass)',
        color:        active ? '#fff' : 'var(--muted)',
        fontSize:     14,
        fontWeight:   500,
        cursor:       'pointer',
        backdropFilter: 'blur(10px)',
        transition:   'color 0.2s',
        fontFamily:   "'DM Sans', sans-serif",
      }}
    >
      {label}
    </motion.button>
  )
}

/* ── Single project card ── */
function AllProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false)

  const EMOJI_MAP = {
    'Full Stack': '🖥',
    'Frontend':   '🎨',
    'Backend':    '⚙️',
    'Client':     '🤝',
    'Tool':       '🛠',
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass"
      whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(108,99,255,0.2)' }}
      style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 'clamp(20px,3vw,28px)', height: '100%' }}
    >
      {/* Category + year row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          {project.category?.toUpperCase()}
        </span>
        {project.year && (
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{project.year}</span>
        )}
      </div>

      {/* Thumbnail */}
      <div style={{ height: 148, borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 42 }}>
        {EMOJI_MAP[project.category] || '🖥'}
      </div>

      <h3 style={{ fontSize: 'clamp(17px,2.5vw,20px)', fontWeight: 800 }}>{project.title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65, flex: 1 }}>{project.desc}</p>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map(t => (
          <span key={t} style={{ padding: '4px 10px', borderRadius: 50, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', fontSize: 11, color: 'var(--cyan)', fontWeight: 500 }}>{t}</span>
        ))}
      </div>

      {/* Expandable details */}
      <AnimatePresence>
        {showDetails && project.details && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingTop: 12, borderTop: '1px solid var(--glass-border)' }}>
              {project.details.features && (
                <>
                  <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 8 }}>✦ Features</div>
                  <ul style={{ paddingLeft: 16, margin: '0 0 12px' }}>
                    {project.details.features.map(f => (
                      <li key={f} style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 4 }}>{f}</li>
                    ))}
                  </ul>
                </>
              )}
              {project.details.challenges && (
                <>
                  <div style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 6 }}>⚡ Challenge</div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{project.details.challenges}</p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {project.details && (
          <button
            className="btn-outline"
            style={{ padding: '8px 16px', fontSize: 13 }}
            onClick={() => setShowDetails(s => !s)}
          >
            {showDetails ? 'Less ▲' : 'Details ▼'}
          </button>
        )}
        {project.live && project.live !== '#' && (
          <a href={project.live} target="_blank" rel="noreferrer">
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: 13 }}>Live ↗</button>
          </a>
        )}
        {project.github && project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noreferrer">
            <button className="btn-outline" style={{ padding: '8px 16px', fontSize: 13 }}>GitHub</button>
          </a>
        )}
      </div>
    </motion.div>
  )
}

/* ── All Projects Page ── */
export function AllProjects({ theme, toggleTheme }) {
  const categories = ['All', ...Array.from(new Set(ALL_PROJECTS.map(p => p.category)))]
  const [active, setActive]   = useState('All')
  const [search, setSearch]   = useState('')

  const filtered = ALL_PROJECTS.filter(p => {
    const matchCat    = active === 'All' || p.category === active
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.tech.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchCat && matchSearch
  })

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} allProjectsPage />

      {/* all-projects-page class for responsive padding overrides */}
      <div
        className="all-projects-page"
        style={{ padding: '120px 60px 100px', maxWidth: 1200, margin: '0 auto' }}
      >
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <Link
            to="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--muted)', textDecoration: 'none', fontSize: 15, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            ← Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div className="section-label">Complete collection</div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,64px)', fontWeight: 800, lineHeight: 1.05, marginBottom: 16 }}>
            All <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 17, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Every project I've built — personal, freelance, and experimental. Filter by category or search by tech.
          </p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, marginBottom: 48 }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
            <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontSize: 16, opacity: 0.5, pointerEvents: 'none' }}>🔍</span>
            <input
              placeholder="Search by title or tech stack…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: 46 }}
            />
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <Chip key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
            ))}
          </div>
        </motion.div>

        {/* Count */}
        <motion.div layout style={{ textAlign: 'center', marginBottom: 32, color: 'var(--muted)', fontSize: 14 }}>
          Showing <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <AllProjectCard key={p.title} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--muted)' }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontSize: 17 }}>No projects match "{search}" in {active === 'All' ? 'any category' : active}.</p>
            <button className="btn-outline" style={{ marginTop: 20, padding: '10px 24px' }} onClick={() => { setSearch(''); setActive('All') }}>
              Clear filters
            </button>
          </motion.div>
        )}
      </div>

      <Footer />
    </>
  )
}