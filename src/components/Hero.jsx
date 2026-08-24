import { Link } from 'react-router-dom'

const stats = [
  { label: 'Revenue Generated', value: '$500K', suffix: '+', note: 'placeholder' },
  { label: 'Businesses Served', value: '50', suffix: '+', note: 'placeholder' },
  { label: 'Client Satisfaction', value: '98', suffix: '%', note: 'placeholder' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <p className="eyebrow">Strategic Partners, Not Just Service Providers</p>
        <h1>
          Reliable Automation, <span className="text-gradient">AI</span> &amp; CRM
          Solutions
        </h1>
        <p className="hero-sub">
          Helping SMBs streamline operations and scale efficiently — placeholder
          tagline, update with your own story here.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
          <Link to="/case-studies" className="btn btn-outline">Case Studies</Link>
        </div>

        <div className="hero-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-value">
                {s.value}
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
