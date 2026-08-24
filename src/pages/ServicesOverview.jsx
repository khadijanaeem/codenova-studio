import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function ServicesOverview() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h1 className="page-title">Our Services</h1>
          <p className="page-lead">
            Four ways we help SMBs cut manual work, tighten up their CRM, and
            put AI to work where it actually moves the needle.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          id={s.slug}
          key={s.slug}
          className={`section service-overview-item ${i % 2 === 1 ? 'service-overview-alt' : ''}`}
        >
          <div className="container">
            <span className="service-num">{s.num}</span>
            <h2 className="detail-heading">{s.title}</h2>
            <p className="service-tagline">{s.tagline}</p>

            <div className="service-overview-grid">
              <div>
                <h3 className="detail-subheading">Overview</h3>
                <p className="detail-copy">{s.description}</p>
              </div>
              <div>
                <h3 className="detail-subheading">What's Included</h3>
                <ul className="check-list">
                  {s.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to={`/services/${s.slug}`} className="btn btn-outline">
              View Full Service Page →
            </Link>
          </div>
        </section>
      ))}

      <section className="section case-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="detail-heading">Not sure where to start?</h2>
          <p className="page-lead" style={{ margin: '12px auto 28px' }}>
            Tell us what's slowing you down and we'll point you to the right
            service — or build something that spans a few of them.
          </p>
          <Link to="/contact" className="btn btn-primary">Talk to the Team</Link>
        </div>
      </section>
    </>
  )
}
