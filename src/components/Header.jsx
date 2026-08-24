import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { services } from '../data/services.js'
import logoImg from '../assets/codenovalogo2.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  function openDropdown() {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }

  function scheduleClose() {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        
        <Link to="/" className="logo">
          <img src={logoImg} alt="Code Nova Studio Logo" className="logo-img" />
          {/* <span className="logo-mark">CN</span> */}
          <span className="logo-text">Code Nova Studio</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {!isHome && (
            <Link to="/" className="nav-link">Home</Link>
          )}
          <div
            className="nav-item has-dropdown"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <Link to="/services" className="nav-link">
              Services <span className="chevron">▾</span>
            </Link>
            {servicesOpen && (
              <div className="dropdown" onMouseEnter={openDropdown} onMouseLeave={scheduleClose}>
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="dropdown-item">
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/case-studies" className="nav-link">Case Studies</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          {/* <Link to="/careers" className="nav-link">Career</Link> */}
        </nav>

        <Link to="/contact" className="btn btn-primary header-cta">Contact us</Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {menuOpen && (
          <div className="mobile-nav">
            {!isHome && (
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            )}
            <div className="mobile-nav-group">
              <Link to="/services" className="mobile-nav-label" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link to="/case-studies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
            {/* <Link to="/careers" onClick={() => setMenuOpen(false)}>Career</Link> */}
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
          </div>
        )}
      </div>
    </header>
  )
}
