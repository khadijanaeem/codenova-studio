const industries = [
  'Real Estate',
  'E-commerce',
  'Marketing Agencies',
  'Coaching & Consulting',
  'Tech & SaaS',
  'Roofing & Solar',
  'Healthcare & Wellness',
  'Media & Creators',
  'More',
]

export default function Industries() {
  return (
    <section className="section industries">
      <div className="container">
        <div className="section-head">
          <h2>Supporting Success Across All Industries</h2>
          <p>Placeholder count — update once you have real client numbers.</p>
        </div>
        <div className="industry-pills">
          {industries.map((i) => (
            <span className="pill" key={i}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
