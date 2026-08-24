import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

const companyLinks = [
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About Us', to: '/about' },
  { label: 'Career', to: '/careers' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-mark">CN</span>
            <span className="logo-text">Code Nova Studio</span>
          </Link>
          <p className="placeholder-note">
            [Placeholder address — add your business address here]
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            {companyLinks.map((l) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* <div className="footer-col footer-newsletter">
          <h4>Sign up for our newsletter</h4>
          <p>Stay updated with our latest news and updates</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" required />
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="social-row" aria-label="Social links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="YouTube">yt</a>
          </div>
        </div> */}
      </div>

      <div className="container footer-bottom">
        <p>Copyright © Code Nova Studio, {new Date().getFullYear()}. All rights reserved.</p>
        <Link to="/">Privacy Policy</Link>
      </div>
    </footer>
  )
}
