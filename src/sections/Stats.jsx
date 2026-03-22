import { Reveal }  from '../components/Reveal'
import { Counter } from '../components/Counter'
import { STATS }   from '../utils/constants'

export function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: '80px 60px',
        background: 'linear-gradient(135deg, rgba(108,99,255,0.06), rgba(139,92,246,0.03))',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal><div className="section-label">By the numbers</div></Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title" style={{ marginBottom: 56 }}>
            What I've <span className="gradient-text">Achieved</span>
          </h2>
        </Reveal>

        {/*
          On desktop: repeat(5, 1fr) — all 5 cards share the full width equally,
          perfectly centred with no orphan gap.
          CSS class overrides handle tablet (3-col) and mobile (2-col / 1-col).
        */}
        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 20,
          }}
        >
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div
                className="glass"
                style={{ padding: 'clamp(18px,3vw,28px) 16px', textAlign: 'center' }}
              >
                <div style={{ fontSize: 'clamp(22px,3vw,28px)', marginBottom: 8 }}>{stat.icon}</div>
                <div
                  style={{
                    fontSize: 'clamp(32px,5vw,44px)',
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--accent), var(--cyan))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: 'clamp(12px,1.5vw,14px)', color: 'var(--muted)', marginTop: 8, fontWeight: 500 }}>
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}