import { useParams, Link, Navigate } from 'react-router-dom'
import { getServiceBySlug, services } from '../data/services.js'
import Contact from '../components/Contact.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/" replace />

  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Service {service.num}</p>
          <h1 className="page-title">{service.title}</h1>
          <p className="page-lead">{service.tagline}</p>
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail-grid">
          <div>
            <h2 className="detail-heading">Overview</h2>
            <p className="detail-copy">{service.description}</p>
          </div>
          <div>
            <h2 className="detail-heading">What's Included</h2>
            <ul className="check-list">
              {service.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section other-services">
        <div className="container">
          <h2 className="detail-heading" style={{ textAlign: 'center', marginBottom: 24 }}>
            Other Services
          </h2>
          <div className="services-grid">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
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

      <Contact />
    </>
  )
}
