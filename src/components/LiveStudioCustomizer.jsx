import { useState } from 'react'
import { SITE } from '../config'
import Envelope from '../Envelope.jsx'

export default function LiveStudioCustomizer() {
  const [recipient, setRecipient] = useState('Priya')
  const [sender, setSender] = useState('Rahul')
  const [theme, setTheme] = useState('night')
  const [message, setMessage] = useState('Happy birthday! Thank you for bringing so much laughter and love into my life. Here is to your best year yet!')

  const orderText = `Hi ${SITE.name}! I would like to order a custom birthday card:
• Recipient: ${recipient}
• Sender: ${sender}
• Theme: ${theme}
• Message: "${message}"`

  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(orderText)}`

  return (
    <section className="live-studio-container" id="customizer">
      <div className="section-heading centered">
        <p className="love-label">
          <span /> Live Interactive Studio
        </p>
        <h2>
          Build &amp; Preview Your <em>Birthday Surprise.</em>
        </h2>
        <p>Design your envelope in real-time below, then order with 1-click!</p>
      </div>

      <div className="live-studio-grid">
        {/* Controls Column */}
        <div className="panel studio-controls">
          <h3>1. Customize Details</h3>
          <div className="field">
            <label>Birthday Person's Name</label>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="e.g. Priya"
              maxLength={30}
            />
          </div>
          <div className="field">
            <label>Your Name (Sender)</label>
            <input
              type="text"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              placeholder="e.g. Rahul"
              maxLength={40}
            />
          </div>
          <div className="field">
            <label>Select Palette Theme</label>
            <div className="studio-theme-selector">
              {[
                { id: 'night', name: 'Velvet', color: '#4A071C', accent: '#EFB95B' },
                { id: 'blush', name: 'Blush', color: '#FBE3EA', accent: '#E8577F' },
                { id: 'mint', name: 'Emerald', color: '#09261C', accent: '#56E39F' },
                { id: 'sunset', name: 'Sunset', color: '#260813', accent: '#FF7E5F' },
                { id: 'celestial', name: 'Celestial', color: '#0B0D21', accent: '#A78BFA' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`studio-theme-btn ${theme === t.id ? 'active' : ''}`}
                  onClick={() => setTheme(t.id)}
                  style={{ '--t-bg': t.color, '--t-acc': t.accent }}
                >
                  <span className="dot" />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label>Message Preview</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              maxLength={250}
            />
          </div>

          <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-accent btn-big" style={{ width: '100%', marginTop: '0.5rem' }}>
            Order This Custom Card 🎁
          </a>
        </div>

        {/* Live Stage Column */}
        <div className={`studio-preview-stage theme-${theme}`}>
          <div className="studio-badge">Real-time Envelope Preview</div>
          <div className="studio-env-wrapper">
            <Envelope name={recipient || 'Someone Special'} enableTilt={false} />
          </div>
          <div className="studio-paper-preview">
            <p className="studio-letter-text">"{message}"</p>
            {sender && <p className="studio-letter-sign">— With love, {sender}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
