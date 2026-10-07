import { useState } from 'react'
import { SITE } from '../config'

export default function ThankYouModal({ recipientName, fromName, onClose }) {
  const [replyText, setReplyText] = useState(`Thank you so much ${fromName || 'for the surprise'}! I loved opening my birthday card so much! ❤️✨`)
  const [copied, setCopied] = useState(false)

  const waNumber = SITE.whatsappNumber || ''
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(replyText)}`

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(replyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy your thank you reply:', replyText)
    }
  }

  return (
    <div className="lightbox-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="panel" style={{ maxWidth: '28rem', width: '100%', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div style={{ textAlign: 'center' }}>
          <span className="badge badge-live">Send Thanks</span>
          <h2 style={{ margin: '0.8rem 0 0.4rem' }}>Reply to {fromName || 'Sender'}</h2>
          <p className="field-hint" style={{ marginBottom: '1.2rem' }}>
            Send a heartfelt reply back to {fromName || 'the person who made this for you'}!
          </p>

          <div className="field">
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              rows={4}
              style={{ minHeight: '6rem' }}
            />
          </div>

          <div className="wish-actions" style={{ justifyContent: 'center', marginTop: '1.2rem' }}>
            <a href={waUrl} target="_blank" rel="noreferrer" className="btn btn-accent">
              Send on WhatsApp 📲
            </a>
            <button type="button" className="btn" onClick={copyText}>
              {copied ? 'Copied ✓' : 'Copy Text'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
