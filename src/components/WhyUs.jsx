import { Link } from 'react-router-dom'

export default function WhyUs() {
  return (
    <section className="section why-us">
      <div className="container why-inner">
        <div className="why-copy">
          <p className="eyebrow">Why Us</p>
          <h2>We've Seen What Breaks at Scale, and How to Fix It</h2>
          <p>
            Placeholder copy — describe your team's experience, the number of
            companies you've worked with, and how your systems prevent the
            bottlenecks that cost businesses time and revenue.
          </p>
          <Link to="/contact" className="btn btn-primary">Talk to the Team</Link>
        </div>
        <div className="why-video">
          <div className="video-placeholder">
            <span className="play-icon">▶</span>
            <p>Add your intro video here</p>
          </div>
        </div>
      </div>
    </section>
  )
}
