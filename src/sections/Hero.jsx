import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from '../components/Typewriter'

const TYPING_TEXTS = [
  'I build scalable web applications',
  'I create real-world solutions',
  'I turn ideas into digital products',
]

/* ─────────────────────────────────────────────
   Floating Particles Canvas
   - ~80 particles, random size 1–3px
   - Colours: accent indigo, purple, cyan
   - Drift upward slowly, fade in/out at edges
   - Fully responsive, redraws on resize
───────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const COLOURS = [
      'rgba(108,99,255,',   // accent indigo
      'rgba(139,92,246,',   // purple
      'rgba(0,212,255,',    // cyan
      'rgba(168,148,255,',  // light purple
    ]

    const COUNT = 80

    // Resize canvas to fill its container
    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Build particles
    const particles = Array.from({ length: COUNT }, () => makeParticle(canvas))

    function makeParticle(c, startAtBottom = false) {
      return {
        x:      Math.random() * c.width,
        y:      startAtBottom ? c.height + Math.random() * 100 : Math.random() * c.height,
        r:      Math.random() * 2 + 0.8,          // radius 0.8–2.8px
        speed:  Math.random() * 0.4 + 0.15,       // drift speed
        drift:  (Math.random() - 0.5) * 0.3,      // horizontal sway
        alpha:  Math.random() * 0.5 + 0.2,        // max opacity 0.2–0.7
        colour: COLOURS[Math.floor(Math.random() * COLOURS.length)],
        phase:  Math.random() * Math.PI * 2,       // sine wave phase
        freq:   Math.random() * 0.008 + 0.003,    // sine wave frequency
      }
    }

    let frame
    let tick = 0

    const draw = () => {
      tick++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        // Move upward + gentle horizontal sway
        p.y -= p.speed
        p.x += p.drift + Math.sin(tick * p.freq + p.phase) * 0.4

        // Fade in near bottom, fade out near top
        const topFade    = Math.min(1, p.y / 80)
        const bottomFade = Math.min(1, (canvas.height - p.y) / 80)
        const opacity    = p.alpha * topFade * bottomFade

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.colour + opacity + ')'
        ctx.fill()

        // Wrap horizontally
        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10

        // Reset when it drifts off the top
        if (p.y < -10) {
          particles[i] = makeParticle(canvas, true)
        }
      })

      frame = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:   'absolute',
        inset:      0,
        width:      '100%',
        height:     '100%',
        pointerEvents: 'none',
        zIndex:     0,
      }}
    />
  )
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight:  '100vh',
        display:    'flex',
        alignItems: 'center',
        padding:    '80px 24px 60px',
        position:   'relative',
        overflow:   'hidden',
      }}
    >
      {/* Floating particles behind everything */}
      <ParticleCanvas />

      {/* Hero content — above the canvas */}
      <div
        style={{
          maxWidth:  900,
          margin:    '0 auto',
          textAlign: 'center',
          width:     '100%',
          position:  'relative',
          zIndex:    1,
          animation: 'fadeUp 0.9s ease both',
        }}
      >
        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display:      'inline-flex',
            alignItems:   'center',
            gap:          8,
            padding:      '8px 20px',
            borderRadius: 50,
            background:   'rgba(108,99,255,0.12)',
            border:       '1px solid rgba(108,99,255,0.25)',
            marginBottom: 32,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', animation: 'pulse 2s infinite', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}>
            Available for hire
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 'clamp(40px,9vw,96px)', fontWeight: 800, lineHeight: 1.0, marginBottom: 24 }}
        >
          Hi, I'm <span className="gradient-text">Sakthi</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ fontSize: 'clamp(18px,3.5vw,32px)', fontWeight: 600, marginBottom: 20, minHeight: 48 }}
        >
          <Typewriter texts={TYPING_TEXTS} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'var(--muted)', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.7 }}
        >
          Full Stack Developer crafting modern web experiences with React, Node.js, and a passion
          for clean code. Open to placement and freelance opportunities.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="btn-row"
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a href="#projects" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <button className="btn-primary">View Projects</button>
          </motion.a>
          <motion.a href="/resume.pdf" download whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <button className="btn-outline">⬇ Resume</button>
          </motion.a>
          <motion.a href="#hire" onClick={e => { e.preventDefault(); document.getElementById('hire')?.scrollIntoView({ behavior: 'smooth' }) }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <button className="btn-primary" style={{ background: 'linear-gradient(135deg, var(--purple), var(--cyan))' }}>
              Hire Me
            </button>
          </motion.a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}
        >
          {[['React', '⚛'], ['Node.js', '🟢'], ['MongoDB', '🍃'], ['C++', '💻']].map(([tech, emoji]) => (
            <motion.div
              key={tech}
              whileHover={{ y: -4 }}
              className="glass"
              style={{
                padding:    'clamp(8px,1.5vw,12px) clamp(14px,2vw,22px)',
                display:    'flex',
                alignItems: 'center',
                gap:        8,
                fontSize:   'clamp(12px,1.5vw,14px)',
                fontWeight: 500,
              }}
            >
              <span style={{ fontSize: 'clamp(16px,2vw,20px)' }}>{emoji}</span>{tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}