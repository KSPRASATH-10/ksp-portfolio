import { motion } from 'framer-motion'
import { Reveal } from '../components/Reveal'
import { SKILLS_DATA } from '../utils/constants'

export function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal><div className="section-label">What I know</div></Reveal>
      <Reveal delay={0.1}>
        <h2 className="section-title">Skills &amp; <span className="gradient-text">Expertise</span></h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="section-sub">Technologies I've worked with across the full stack.</p>
      </Reveal>

      {/*
        Key fixes:
        1. minmax(260px, 1fr) — wider minimum so "Programming" heading never clips
        2. align-items: stretch — all cards in a row grow to the tallest card's height
        3. The Reveal wrapper is set to height:100% so the motion.div inside
           can also be height:100% and fill the grid cell properly
      */}
      <div className="skills-grid">
        {SKILLS_DATA.map((item, i) => (
          <Reveal key={item.cat} delay={i * 0.1} style={{ height: '100%' }}>
            <motion.div
              className="glass skill-card"
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(108,99,255,0.2)' }}
            >
              <div className="skill-icon">{item.icon}</div>
              <h3 className="skill-cat">{item.cat}</h3>
              <div className="skill-tags">
                {item.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}