const REVIEWS = [
  {
    name: 'Ananya & Rohan',
    role: 'Long distance surprise',
    stars: 5,
    text: 'My boyfriend was tears when he opened his Wishbox! Having my voice note play right when the envelope opened made him feel like I was right there with him.',
    location: 'Mumbai',
  },
  {
    name: 'Kavya S.',
    role: 'Best Friend Birthday',
    stars: 5,
    text: 'So much better than standard greeting cards or plain text messages. The polaroid photo gallery and confetti explosion were absolutely stunning!',
    location: 'Bengaluru',
  },
  {
    name: 'Dev & Family',
    role: 'Mom’s 50th Birthday',
    stars: 5,
    text: 'We set the countdown unlock timer for midnight on Mom’s birthday. It unlocked at 12:00 AM sharp with all our family photos. 10/10 experience!',
    location: 'Delhi',
  },
]

export default function Testimonials() {
  return (
    <section className="love-section testimonials-section">
      <div className="section-heading centered">
        <p className="love-label">
          <span /> Loved by 12,500+ celebrations
        </p>
        <h2>
          Memories that made them <em>smile &amp; cry.</em>
        </h2>
        <p>Here is what people say after opening their Wishbox birthday surprise.</p>
      </div>

      <div className="testimonials-grid">
        {REVIEWS.map((r, i) => (
          <article className="testimonial-card" key={i}>
            <div className="testimonial-stars" aria-label={`${r.stars} out of 5 stars`}>
              {'★'.repeat(r.stars)}
            </div>
            <p className="testimonial-text">"{r.text}"</p>
            <div className="testimonial-author">
              <strong>{r.name}</strong>
              <span>{r.role} • {r.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
