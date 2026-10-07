export const THEMES = [
  { id: 'night', label: 'Midnight Velvet', color: '#4A071C', accent: '#EFB95B' },
  { id: 'blush', label: 'Blush Romance', color: '#FBE3EA', accent: '#E8577F' },
  { id: 'mint', label: 'Emerald Magic', color: '#0D382B', accent: '#2E9E6C' },
  { id: 'sunset', label: 'Sunset Glow', color: '#3A0E1C', accent: '#FF7E5F' },
  { id: 'celestial', label: 'Celestial Night', color: '#0F0F26', accent: '#A78BFA' },
]

export default function ThemeSwitcher({ currentTheme, onChange, compact = false }) {
  return (
    <div className={`theme-switcher-widget ${compact ? 'compact' : ''}`} aria-label="Theme selector">
      <span className="theme-switcher-label">Theme Preview:</span>
      <div className="theme-pills">
        {THEMES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`theme-pill ${currentTheme === t.id ? 'active' : ''}`}
            onClick={() => onChange(t.id)}
            title={t.label}
            aria-label={`Switch to ${t.label} theme`}
            style={{
              '--t-color': t.color,
              '--t-accent': t.accent,
            }}
          >
            <span className="theme-dot" />
            {!compact && <span className="theme-name">{t.label}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
