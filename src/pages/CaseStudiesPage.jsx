import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Proof of Work</p>
          <h1 className="page-title">Case Studies</h1>
          <p className="page-lead">
            Placeholder case studies — replace each one with a real client story,
            including the challenge, the solution you built, and the result.
          </p>
        </div>
      </section>

      {caseStudies.map((c, i) => (
        <section
          id={c.slug}
          key={c.slug}
          className={`section case-detail ${i % 2 === 1 ? 'case-detail-alt' : ''}`}
        >
          <div className="container">
            <span className="case-tag">{c.tag}</span>
            <h2 className="detail-heading">{c.name}</h2>

            <div className="case-detail-grid">
              <div>
                <h3 className="detail-subheading">The Challenge</h3>
                <p className="detail-copy">{c.challenge}</p>
              </div>
              <div>
                <h3 className="detail-subheading">Our Solution</h3>
                <ol className="step-list">
                  {c.steps.map((s) => (
                    <li key={s.title}>
                      <strong>{s.title}</strong>
                      <span>{s.desc}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="result-callout">{c.result}</p>
          </div>
        </section>
      ))}

      <section className="section case-cta-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="detail-heading">Want results like these?</h2>
          <p className="page-lead" style={{ margin: '12px auto 28px' }}>
            Placeholder CTA copy — invite visitors to reach out.
          </p>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>
      </section>
    </>
  )
}
