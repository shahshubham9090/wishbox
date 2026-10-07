import { useState } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../config'
import Envelope from '../Envelope.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'
import ThemeSwitcher from '../components/ThemeSwitcher.jsx'
import LiveStudioCustomizer from '../components/LiveStudioCustomizer.jsx'
import Testimonials from '../components/Testimonials.jsx'

const Heart = ({ className = '' }) => <span className={`heart ${className}`} aria-hidden="true">&#9829;</span>

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('night')
  const [currency, setCurrency] = useState('INR') // INR or USD

  const wa = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to order a birthday card.")}`

  return (
    <div className={`home love-home theme-${activeTheme}`}>
      <ParticleCanvas theme={activeTheme} density={35} />

      <header className="home-nav love-nav">
        <Link className="brand love-brand" to="/">
          <span className="brand-mark">W</span>
          <span>{SITE.name}</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#customizer">Studio</a>
          <a href="#how">How it works</a>
          <a href="#plans">Plans</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="nav-order" href={wa} target="_blank" rel="noreferrer">
          Order now <span aria-hidden="true">&#8594;</span>
        </a>
      </header>

      <main>
        <section className="love-hero">
          <div className="hero-copy love-copy">
            <p className="love-label">
              <span /> A keepsake made from your memories
            </p>
            <h1>
              Give them a birthday <em>they can feel.</em>
            </h1>
            <p className="hero-lede">
              A luxury digital love letter with your message, photos, voice note, and video—wrapped in an interactive 3D envelope surprise.
            </p>

            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              <ThemeSwitcher currentTheme={activeTheme} onChange={setActiveTheme} compact />
            </div>

            <div className="hero-cta love-cta">
              <Link className="btn btn-accent btn-big" to="/w/demo">
                Open live demo <span aria-hidden="true">&#8594;</span>
              </Link>
              <a className="btn btn-small" href="#customizer">
                Create custom card
              </a>
            </div>
            <div className="hero-promise">
              <span><Heart /> Made with personal love</span>
              <span><Heart /> Opens instantly on any phone</span>
              <span><Heart /> Zero apps required</span>
            </div>
          </div>

          <div className="gift-stage" aria-label="Preview of a Wishbox birthday card">
            <div className="stage-glow" aria-hidden="true" />
            <Heart className="heart-one" />
            <Heart className="heart-two" />
            <Heart className="heart-three" />
            <div className="love-note note-top">for their special day</div>
            <div className="love-note note-bottom">memories that stay forever</div>
            <div className="gift-orbit orbit-one" aria-hidden="true" />
            <div className="gift-orbit orbit-two" aria-hidden="true" />

            <Link to="/w/demo" className="hero-env love-envelope" aria-label="Open the sample birthday card">
              <Envelope name="Someone Special" />
            </Link>
            <p className="tap-note">
              <span className="tap-dot" /> tap envelope to try magic demo
            </p>
          </div>
        </section>

        <section className="love-proof" aria-label="What every Wishbox card includes">
          <div>
            <strong>01</strong>
            <span>Your Heartfelt Letter</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Polaroid Photos &amp; Video</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Your Voice Note</span>
          </div>
        </section>

        {/* Live Studio Interactive Customizer */}
        <LiveStudioCustomizer />

        <section id="how" className="love-section process-section">
          <div className="section-heading">
            <p className="love-label">
              <span /> the little journey
            </p>
            <h2>
              From your phone<br />to their <em>heart.</em>
            </h2>
          </div>
          <div className="process-grid">
            <article className="process-card">
              <span className="process-number">01</span>
              <div className="process-icon icon-spark" aria-hidden="true">✦</div>
              <h3>Send your memories</h3>
              <p>Share your message, photos, voice note, and video with us on WhatsApp.</p>
            </article>
            <article className="process-card process-card-featured">
              <span className="process-number">02</span>
              <div className="process-icon" aria-hidden="true">&#9829;</div>
              <h3>We make it magical</h3>
              <p>We handcraft your memories into an interactive luxury birthday experience.</p>
            </article>
            <article className="process-card">
              <span className="process-number">03</span>
              <div className="process-icon icon-gift" aria-hidden="true">&#10047;</div>
              <h3>They open the surprise</h3>
              <p>Send one private link—or schedule it to unlock at the exact birthday minute.</p>
            </article>
          </div>
        </section>

        {/* Customer Social Proof / Testimonials */}
        <Testimonials />

        <section id="plans" className="love-section plans-section">
          <div className="section-heading centered">
            <p className="love-label">
              <span /> pick your surprise duration
            </p>
            <h2>
              Made for every <em>kind</em> of celebration.
            </h2>
            <p>Choose how long their interactive birthday card stays open.</p>

            {/* Currency Switcher */}
            <div className="currency-switcher" style={{ display: 'inline-flex', gap: '0.4rem', marginTop: '1.2rem', padding: '0.3rem', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <button
                type="button"
                className={`admin-tab ${currency === 'INR' ? 'active' : ''}`}
                onClick={() => setCurrency('INR')}
              >
                ₹ INR
              </button>
              <button
                type="button"
                className={`admin-tab ${currency === 'USD' ? 'active' : ''}`}
                onClick={() => setCurrency('USD')}
              >
                $ USD
              </button>
            </div>
          </div>

          <ul className="love-plans">
            {SITE.plans.map((plan, index) => {
              const symbol = currency === 'USD' ? '$' : '₹'
              const price = currency === 'USD' ? Math.ceil(plan.price / 80) : plan.price

              return (
                <li className={`love-plan ${index === 1 ? 'plan-featured' : ''}`} key={plan.days}>
                  {index === 1 && <p className="plan-ribbon">Most Loved</p>}
                  <p className="plan-duration">{plan.label}</p>
                  <p className="plan-price">
                    <sup>{symbol}</sup>{price}
                  </p>
                  <p className="plan-copy">{plan.note || 'A beautiful birthday surprise.'}</p>
                  <a href={wa} target="_blank" rel="noreferrer" className="plan-action">
                    Choose this plan <span aria-hidden="true">&#8594;</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <section id="faq" className="love-section faq-section">
          <div className="faq-intro">
            <p className="love-label">
              <span /> thoughtful details
            </p>
            <h2>
              Everything you<br />need to know.
            </h2>
            <p>Have questions? Message us anytime—we are happy to help make your surprise perfect.</p>
            <a className="love-text-link" href={wa} target="_blank" rel="noreferrer">
              Ask on WhatsApp <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
          <div className="faq-list">
            <details open>
              <summary>What media should I send you?</summary>
              <p>Your birthday message, recipient name, up to 15 photos, a voice note, or a video clip. Send it all easily over WhatsApp!</p>
            </details>
            <details>
              <summary>Can it automatically unlock on their birthday?</summary>
              <p>Yes! We can set an exact unlock timestamp countdown so the envelope stays locked until their exact birthday moment.</p>
            </details>
            <details>
              <summary>Do they need to install any app?</summary>
              <p>Zero installation required. They simply tap your link in any phone browser (Safari, Chrome, WhatsApp browser) and enjoy!</p>
            </details>
          </div>
        </section>

        <section className="love-closing">
          <div className="closing-hearts" aria-hidden="true">
            <Heart /><Heart /><Heart />
          </div>
          <p className="love-label">
            <span /> one link, endless joy
          </p>
          <h2>
            Ready to make their<br /><em>day unforgettable?</em>
          </h2>
          <a className="love-button love-button-primary" href={wa} target="_blank" rel="noreferrer">
            Start your surprise on WhatsApp <span aria-hidden="true">&#8594;</span>
          </a>
        </section>
      </main>

      <footer className="love-footer">
        <Link className="brand love-brand" to="/">
          <span className="brand-mark">W</span>
          <span>{SITE.name}</span>
        </Link>
        <p>Handcrafted with love &amp; magic.</p>
        <Link to="/admin" style={{ opacity: 0.7, color: 'var(--blush)' }}>Admin Panel ↗</Link>
        <span>&copy; {new Date().getFullYear()} {SITE.name}</span>
      </footer>
    </div>
  )
}
