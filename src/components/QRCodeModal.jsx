export default function QRCodeModal({ id, name, onClose }) {
  const url = `${window.location.origin}/w/${id}`
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(url)}&color=4a071c&bgcolor=fffdf9`

  return (
    <div className="lightbox-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="panel qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="qr-modal-body">
          <span className="badge badge-live">QR Code Ready</span>
          <h2>Birthday Card for {name}</h2>
          <p className="field-hint" style={{ marginBottom: '1.2rem' }}>
            Scan to open birthday surprise card directly on phone
          </p>

          <div className="qr-image-wrapper">
            <img src={qrUrl} alt={`QR Code for ${name}'s birthday card`} className="qr-img" />
          </div>

          <p className="link-line" style={{ marginTop: '1.2rem', textAlign: 'center' }}>
            {url}
          </p>

          <div className="wish-actions" style={{ justifyContent: 'center', marginTop: '1.2rem' }}>
            <a href={qrUrl} download={`qr-wish-${id}.png`} target="_blank" rel="noreferrer" className="btn btn-accent">
              Download QR Code 📥
            </a>
            <button type="button" className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
