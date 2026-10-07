import { useState } from 'react'
import confetti from 'canvas-confetti'

const REACTIONS = [
  { emoji: '❤️', label: 'Send Love' },
  { emoji: '🎉', label: 'Party Confetti' },
  { emoji: '✨', label: 'Sparkles' },
  { emoji: '🥂', label: 'Cheers' },
  { emoji: '🎂', label: 'Cake Time' },
]

export default function ReactionBar() {
  const [floatingEmojis, setFloatingEmojis] = useState([])

  const triggerReaction = (emoji, e) => {
    // 1. Confetti burst for festive emojis
    if (emoji === '🎉' || emoji === '✨' || emoji === '🎂') {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#F7D070', '#E76886', '#7A4FD6', '#38BDF8', '#10B981'],
      })
    }

    // 2. Spawn floating rising emoji particles from click point
    const id = Date.now() + Math.random()
    const rect = e.currentTarget.getBoundingClientRect()
    const startX = rect.left + rect.width / 2

    const newItems = Array.from({ length: 6 }, (_, i) => ({
      id: `${id}-${i}`,
      emoji,
      x: startX + (Math.random() - 0.5) * 80,
      size: Math.random() * 1.5 + 1.2,
      duration: Math.random() * 1.2 + 1.8,
      delay: i * 0.08,
    }))

    setFloatingEmojis((prev) => [...prev, ...newItems])

    // Cleanup after animation completes
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((item) => !newItems.some((n) => n.id === item.id)))
    }, 3200)
  }

  return (
    <>
      {/* Floating Emoji Particles Layer */}
      <div className="floating-emoji-container" aria-hidden="true">
        {floatingEmojis.map((item) => (
          <span
            key={item.id}
            className="floating-emoji"
            style={{
              left: `${item.x}px`,
              fontSize: `${item.size}rem`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      {/* Floating Toolbar */}
      <div className="reaction-bar" aria-label="Send birthday reactions">
        <span className="reaction-prompt">Send love</span>
        <div className="reaction-buttons">
          {REACTIONS.map((r) => (
            <button
              key={r.emoji}
              type="button"
              className="reaction-btn"
              onClick={(e) => triggerReaction(r.emoji, e)}
              title={r.label}
              aria-label={r.label}
            >
              <span>{r.emoji}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
