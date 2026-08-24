const regions = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🌍', name: 'And More' },
]

export default function Clients() {
  const track = [...regions, ...regions]
  return (
    <section className="section clients">
      <div className="container">
        <div className="section-head">
          <h2>Where Our Clients Are From</h2>
          <p>Placeholder region list — replace with your own client base.</p>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {track.map((r, i) => (
            <div className="marquee-item" key={`${r.name}-${i}`}>
              <span className="flag">{r.flag}</span>
              <span>{r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
