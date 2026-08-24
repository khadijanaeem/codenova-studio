import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What We Do</p>
          <h2>Our Services</h2>
          <p>End-to-end automation, CRM, and AI systems built around how you actually work.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <Link to={`/services/${s.slug}`} key={s.slug} className="service-card">
              <span className="service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <span className="service-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
