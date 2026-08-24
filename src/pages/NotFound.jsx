import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-title">Page Not Found</h1>
        <p className="page-lead" style={{ margin: '12px auto 28px' }}>
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    </section>
  )
}
