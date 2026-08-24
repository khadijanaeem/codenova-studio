const testimonials = [
  {
    quote: '[Placeholder testimonial — replace with a real client quote about the results you delivered.]',
    name: '[Client Name]',
    location: '[Location]',
  },
  {
    quote: '[Placeholder testimonial — highlight the specific problem you solved for this client.]',
    name: '[Client Name]',
    location: '[Location]',
  },
  {
    quote: '[Placeholder testimonial — mention responsiveness, communication, or expertise.]',
    name: '[Client Name]',
    location: '[Location]',
  },
  {
    quote: '[Placeholder testimonial — describe the long-term impact of the work.]',
    name: '[Client Name]',
    location: '[Location]',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Social Proof</p>
          <h2>What Our Customers Say</h2>
          <p>Placeholder testimonials — swap in real client quotes.</p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="avatar" aria-hidden="true">{t.name.charAt(1) || '?'}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
