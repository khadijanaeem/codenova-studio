const openings = [
  { title: '[Placeholder Role Title]', type: '[Full-time / Contract]', location: '[Remote / Location]' },
  { title: '[Placeholder Role Title]', type: '[Full-time / Contract]', location: '[Remote / Location]' },
]

export default function Careers() {
  return (
    <>
      <section className="section page-hero">
        <div className="container">
          <p className="eyebrow">Career</p>
          <h1 className="page-title">Join the Team</h1>
          <p className="page-lead">
            [Placeholder — describe what it's like to work at Code Nova Studio
            and the kind of people you're looking to hire.]
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="detail-heading" style={{ marginBottom: 24 }}>Open Roles</h2>
          <div className="job-list">
            {openings.map((job, i) => (
              <div className="job-card" key={i}>
                <div>
                  <h3>{job.title}</h3>
                  <p className="job-meta">{job.type} · {job.location}</p>
                </div>
                <a href="mailto:careers@codenovastudio.com" className="btn btn-outline">Apply</a>
              </div>
            ))}
          </div>
          <p className="placeholder-note" style={{ marginTop: 20 }}>
            Placeholder listings — replace with your real open roles, or remove
            this section if you're not hiring right now.
          </p>
        </div>
      </section>
    </>
  )
}
