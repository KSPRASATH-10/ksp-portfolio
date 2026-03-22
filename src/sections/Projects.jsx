import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { PROJECTS, CLIENT_PROJECTS } from '../utils/constants'

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)',
          zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 16, backdropFilter: 'blur(8px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
          className="glass"
          style={{ maxWidth: 620, width: '100%', padding: 'clamp(24px,4vw,40px)', borderRadius: 20, maxHeight: '90vh', overflowY: 'auto' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
            <h3 style={{ fontSize: 'clamp(20px,3vw,26px)', fontWeight: 800, flex: 1, marginRight: 12 }}>{project.title}</h3>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text)', fontSize: 26, cursor: 'pointer', opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>✕</button>
          </div>
          <div style={{ height: 160, borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,255,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, marginBottom: 24 }}>🖥</div>
          <p style={{ color: 'var(--muted)', marginBottom: 24, lineHeight: 1.75, fontSize: 15 }}>{project.desc}</p>
          <h4 style={{ marginBottom: 12, fontSize: 15, color: 'var(--accent)', fontWeight: 700 }}>✦ Key Features</h4>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            {project.details.features.map(f => (
              <li key={f} style={{ marginBottom: 8, color: 'var(--muted)', lineHeight: 1.6, fontSize: 14 }}>{f}</li>
            ))}
          </ul>
          <h4 style={{ marginBottom: 12, fontSize: 15, color: 'var(--accent)', fontWeight: 700 }}>⚡ Challenges</h4>
          <p style={{ color: 'var(--muted)', marginBottom: 28, lineHeight: 1.75, fontSize: 14 }}>{project.details.challenges}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {project.tech.map(t => (
              <span key={t} style={{ padding: '5px 12px', borderRadius: 50, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', fontSize: 12, color: 'var(--cyan)', fontWeight: 500 }}>{t}</span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={project.live} target="_blank" rel="noreferrer">
              <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 14 }}>🔗 Live Demo</button>
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              <button className="btn-outline" style={{ padding: '10px 22px', fontSize: 14 }}>⬡ GitHub</button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function ProjectCard({ project, onClick, featured = true }) {
  return (
    <motion.div
      className="glass"
      whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(108,99,255,0.2)' }}
      style={{ padding: 'clamp(20px,3vw,28px)', cursor: 'default', display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}
    >
      {featured && (
        <div style={{ fontSize: 11, color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          FEATURED PROJECT
        </div>
      )}
      <div style={{ height: 150, borderRadius: 12, background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(139,92,246,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44 }}>
        {featured ? '🖥' : '🎨'}
      </div>
      <h3 style={{ fontSize: 'clamp(17px,2.5vw,21px)', fontWeight: 800 }}>{project.title}</h3>
      <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.65, flex: 1 }}>{project.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {project.tech.map(t => (
          <span key={t} style={{ padding: '4px 10px', borderRadius: 50, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', fontSize: 11, color: 'var(--cyan)', fontWeight: 500 }}>{t}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {featured && (
          <motion.button
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{ padding: '8px 18px', fontSize: 13 }}
            onClick={() => onClick(project)}
          >
            View Details
          </motion.button>
        )}
        <a href={project.live} target="_blank" rel="noreferrer">
          <button className="btn-outline" style={{ padding: '8px 18px', fontSize: 13 }}>Live ↗</button>
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          <button className="btn-outline" style={{ padding: '8px 18px', fontSize: 13 }}>GitHub</button>
        </a>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const [modal, setModal] = useState(null)

  return (
    <section id="projects" className="section">
      <Reveal><div className="section-label">My work</div></Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="section-sub">Projects built with real-world requirements. Click a card to explore details.</p>
      </Reveal>

      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 64,
          alignItems: 'stretch',
          /* centers orphan cards when the last row is not full */
          justifyContent: 'center',
        }}
      >
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} style={{ height: '100%' }}>
            <ProjectCard project={p} onClick={setModal} featured />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <h2 style={{ fontSize: 'clamp(26px,4vw,34px)', fontWeight: 800, textAlign: 'center', marginBottom: 12 }}>
          Client-Style <span className="gradient-text">Work</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="section-sub" style={{ marginBottom: 36 }}>UI-focused builds highlighting design and responsiveness.</p>
      </Reveal>

      <div
        className="projects-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'stretch',
          justifyContent: 'center',
          marginBottom: 56,
        }}
      >
        {CLIENT_PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} style={{ height: '100%' }}>
            <ProjectCard project={p} onClick={() => {}} featured={false} />
          </Reveal>
        ))}
      </div>

      {/* ── View More Projects button ── */}
      <Reveal delay={0.2}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(108,99,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '15px 36px',
                borderRadius: 50,
                background: 'linear-gradient(135deg, var(--accent), var(--purple))',
                color: '#fff',
                border: 'none',
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 4px 20px rgba(108,99,255,0.35)',
              }}
            >
              View All Projects
              <span style={{ fontSize: 18 }}>→</span>
            </motion.button>
          </Link>
        </div>
      </Reveal>

      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </section>
  )
}