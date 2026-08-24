import { Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudies() {
  return (
    <section className="section case-studies">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Proof of Work</p>
          <h2>Case Studies</h2>
          <p>Placeholder case studies — swap in your own client results.</p>
        </div>

        <div className="case-grid">
          {caseStudies.map((c) => (
            <Link to={`/case-studies#${c.slug}`} className="case-card" key={c.slug}>
              <div className="case-chart" aria-hidden="true">
                {c.bars.map((h, i) => (
                  <span key={i} className="case-bar" style={{ height: `${h}%` }} />
                ))}
              </div>
              <div className="case-body">
                <span className="case-tag">{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.result}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="case-cta">
          <Link to="/case-studies" className="btn btn-outline" style={{ marginRight: 12 }}>
            View All Case Studies
          </Link>
          <Link to="/contact" className="btn btn-primary">Book a Call</Link>
        </div>
      </div>
    </section>
  )
}
