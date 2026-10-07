import { useRef } from 'react'

export default function Envelope({ name, opening = false, as: Tag = 'div', enableTilt = true, ...props }) {
  const initial = (name || '?').trim().charAt(0).toUpperCase()
  const envRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!enableTilt || opening || !envRef.current) return
    const rect = envRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (y / rect.height) * -14
    const rotY = (x / rect.width) * 14
    envRef.current.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`
  }

  const handleMouseLeave = () => {
    if (!envRef.current || opening) return
    envRef.current.style.transform = ''
  }

  return (
    <Tag
      ref={envRef}
      className={`env ${opening ? 'is-opening' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="env-shadow" aria-hidden="true" />
      <span className="env-back" />
      <span className="env-letter">
        <span className="env-letter-stamp">🎁</span>
        <span>Happy birthday!</span>
      </span>
      <span className="env-front">
        <span className="env-ribbon" aria-hidden="true" />
        <span className="env-to">For {name}</span>
      </span>
      <span className="env-flap" />
      <span className="env-seal" aria-hidden="true">
        <span className="env-seal-inner">{initial}</span>
        <span className="env-seal-shine" />
      </span>
    </Tag>
  )
}
