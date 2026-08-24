import { Link } from 'react-router-dom'

const values = [
  { title: '[Placeholder value 1]', desc: '[Describe a principle that guides how you work.]' },
  { title: '[Placeholder value 2]', desc: '[Describe another principle or value.]' },
  { title: '[Placeholder value 3]', desc: '[Describe a third principle or value.]' },
]

export default function About() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1 className="page-title">Strategic Partners, Not Just Service Providers</h1>
          <p className="page-lead">
            [Placeholder — introduce your company: who you are, when you started,
            and who you help. This is your founding story, in your own words.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2 className="detail-heading">Our Story</h2>
            <p className="detail-copy">
              [Placeholder — expand on your background: what led you to start
              Code Nova Studio, and what problem you set out to solve for clients.]
            </p>
          </div>
          <div>
            <h2 className="detail-heading">Our Approach</h2>
            <p className="detail-copy">
              [Placeholder — describe how you work with clients: discovery,
              build, support. What makes your process different?]
            </p>
          </div>
        </div>
      </section>

      <section className="section industries">
        <div className="container">
          <div className="section-head">
            <h2>What We Value</h2>
          </div>
          <div className="services-grid">
            {values.map((v) => (
              <div className="service-card" key={v.title} style={{ pointerEvents: 'none' }}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section case-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="detail-heading">Let's work together</h2>
          <p className="page-lead" style={{ margin: '12px auto 28px' }}>
            [Placeholder CTA copy]
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
