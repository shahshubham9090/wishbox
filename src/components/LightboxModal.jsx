import { useEffect } from 'react'

export default function LightboxModal({ photos, index, onClose, onSelect }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onSelect((index + 1) % photos.length)
      if (e.key === 'ArrowLeft') onSelect((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index, photos.length, onClose, onSelect])

  if (index === null || index === undefined || !photos[index]) return null

  const photo = photos[index]

  return (
    <div className="lightbox-backdrop" onClick={onClose} aria-modal="true" role="dialog">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close photo">
          ✕
        </button>

        <div className="lightbox-stage">
          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={() => onSelect((index - 1 + photos.length) % photos.length)}
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          <figure className="lightbox-figure">
            <img src={photo.url} alt={`Memory ${index + 1}`} className="lightbox-img" />
            <figcaption className="lightbox-caption">
              <span>Memory {index + 1} of {photos.length}</span>
            </figcaption>
          </figure>

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={() => onSelect((index + 1) % photos.length)}
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
