import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import confetti from 'canvas-confetti'
import { db, isConfigured } from '../firebase'
import { DEMO_WISH } from '../demo'
import { audioUrl, videoUrl, toMillis, formatDate } from '../media'
import Envelope from '../Envelope.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'
import ReactionBar from '../components/ReactionBar.jsx'
import LightboxModal from '../components/LightboxModal.jsx'
import ThankYouModal from '../components/ThankYouModal.jsx'

const CONFETTI = {
  night: ['#F7D070', '#E76886', '#FFF8F1', '#D99A8B'],
  blush: ['#D82D6A', '#8B5CF6', '#FFFFFF', '#FFB7CE'],
  mint: ['#56E39F', '#F7D070', '#FFFFFF', '#208B5C'],
  sunset: ['#FF7E5F', '#FEB47B', '#F7D070', '#E76886'],
  celestial: ['#A78BFA', '#38BDF8', '#F472B6', '#FFFFFF'],
}

function formatLeft(ms) {
  const s = Math.max(0, Math.floor(ms / 1000))
  const d = Math.floor(s / 86400)
  const h = Math.floor((s % 86400) / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const pad = (n) => String(n).padStart(2, '0')
  return d > 0 ? `${d}d ${pad(h)}h ${pad(m)}m` : `${pad(h)}:${pad(m)}:${pad(sec)}`
}

export default function Wish() {
  const { id } = useParams()
  const [state, setState] = useState({ status: 'loading' })
  const [phase, setPhase] = useState('closed') // closed → opening → open
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    let cancelled = false
    async function load() {
      if (id === 'demo') return setState({ status: 'ready', wish: DEMO_WISH })
      if (!isConfigured) return setState({ status: 'missing' })
      try {
        const snap = await getDoc(doc(db, 'wishes', id))
        if (cancelled) return
        if (!snap.exists()) return setState({ status: 'missing' })
        const wish = snap.data()
        if (toMillis(wish.expiresAt) < Date.now()) return setState({ status: 'missing' })
        setState({ status: 'ready', wish })
      } catch {
        if (!cancelled) setState({ status: 'missing' })
      }
    }
    load()
    return () => { cancelled = true }
  }, [id])

  const wish = state.wish
  const unlockAt = wish ? toMillis(wish.unlockAt) : null
  const locked = Boolean(unlockAt && unlockAt > now)

  useEffect(() => {
    if (!locked) return
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [locked])

  useEffect(() => {
    if (wish) document.title = `A birthday surprise for ${wish.recipientName} 🎁`
  }, [wish])

  function triggerConfetti() {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.35 },
      colors: CONFETTI[wish?.theme] || CONFETTI.night,
      disableForReducedMotion: true,
    })
  }

  function open() {
    if (locked || phase !== 'closed') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setPhase('opening')
    setTimeout(() => {
      setPhase('open')
      window.scrollTo(0, 0)
      triggerConfetti()
    }, reduce ? 0 : 1300)
  }

  if (state.status === 'loading') {
    return (
      <div className="wish theme-night">
        <ParticleCanvas theme="night" density={25} />
        <main className="gate">
          <p className="gate-hint">Unwrapping your birthday magic…</p>
        </main>
      </div>
    )
  }

  if (state.status === 'missing') return <Ended />

  return (
    <div className={`wish theme-${wish.theme || 'night'}`}>
      <ParticleCanvas theme={wish.theme || 'night'} density={40} />

      {phase !== 'open' ? (
        <main className="gate">
          <Envelope
            as="button"
            type="button"
            name={wish.recipientName}
            opening={phase === 'opening'}
            onClick={open}
            disabled={locked}
            aria-label={locked ? 'This card is locked until the birthday' : `Open the card for ${wish.recipientName}`}
          />
          {locked ? (
            <div className="gate-lock">
              <p className="gate-count">{formatLeft(unlockAt - now)}</p>
              <p className="gate-hint">Opens on {formatDate(unlockAt)}</p>
            </div>
          ) : (
            <p className="gate-hint" style={{ visibility: phase === 'opening' ? 'hidden' : 'visible' }}>
              ✦ Tap the envelope seal to open ✦
            </p>
          )}
        </main>
      ) : (
        <>
          <Opened wish={wish} onReTrigger={triggerConfetti} />
          <ReactionBar />
        </>
      )}
    </div>
  )
}

function Opened({ wish, onReTrigger }) {
  const from = wish.fromName?.trim()
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null)
  const [showThankYou, setShowThankYou] = useState(false)

  return (
    <main className="card">
      <header>
        <p className="card-pre">Happy birthday,</p>
        <h1 className="card-name">{wish.recipientName}</h1>
        {from && <p className="card-from">With love from {from}</p>}
      </header>

      {wish.message && (
        <section className="letter" aria-label="Message">
          <p>{wish.message}</p>
          {from && <p className="letter-sign">With love, {from}</p>}
        </section>
      )}

      {wish.voice && <VoiceNote src={audioUrl(wish.voice.url)} from={from} />}

      {wish.photos?.length > 0 && (
        <section className="photos" aria-label="Photos">
          {wish.photos.map((p, i) => (
            <figure
              className="polaroid"
              key={p.url || i}
              onClick={() => setSelectedPhotoIndex(i)}
              title="Click to expand"
            >
              <img src={p.url} alt={`Memory ${i + 1}`} loading={i > 1 ? 'lazy' : 'eager'} />
            </figure>
          ))}
        </section>
      )}

      {wish.video && (
        <section className="video" aria-label="Video">
          <video src={videoUrl(wish.video.url)} controls playsInline preload="metadata" />
        </section>
      )}

      {selectedPhotoIndex !== null && (
        <LightboxModal
          photos={wish.photos}
          index={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onSelect={(i) => setSelectedPhotoIndex(i)}
        />
      )}

      {showThankYou && (
        <ThankYouModal
          recipientName={wish.recipientName}
          fromName={from}
          onClose={() => setShowThankYou(false)}
        />
      )}

      <footer className="card-foot">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <button
            type="button"
            className="btn btn-small btn-accent"
            onClick={() => setShowThankYou(true)}
          >
            💌 Send Thank You Reply
          </button>
          <button
            type="button"
            className="btn btn-small"
            onClick={onReTrigger}
          >
            ✨ Re-trigger Confetti 🎉
          </button>
        </div>
        <div>
          <Link to="/">Create a magical birthday card for someone</Link>
        </div>
      </footer>
    </main>
  )
}

function VoiceNote({ src, from }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const bars = useMemo(
    () => Array.from({ length: 36 }, (_, i) => 0.25 + 0.75 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6))),
    []
  )

  function toggle() {
    const a = ref.current
    if (!a) return
    if (a.paused) a.play()
    else a.pause()
  }

  return (
    <section className="voice" aria-label="Voice note">
      <button className="voice-btn" type="button" onClick={toggle} aria-label={playing ? 'Pause voice note' : 'Play voice note'}>
        {playing ? (
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" /><rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor" /></svg>
        )}
      </button>
      <div className="voice-body">
        <p className="voice-label">{from ? `A voice note from ${from}` : 'A voice note for you'}</p>
        <div className="voice-wave" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h * 100}%` }} className={i / bars.length < progress ? 'on' : ''} />
          ))}
        </div>
      </div>
      <audio
        ref={ref}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => { setPlaying(false); setProgress(0) }}
        onTimeUpdate={(e) => {
          const a = e.currentTarget
          setProgress(a.duration ? a.currentTime / a.duration : 0)
        }}
      />
    </section>
  )
}

function Ended() {
  return (
    <div className="wish theme-night">
      <ParticleCanvas theme="night" density={20} />
      <main className="gate ended">
        <p className="ended-emoji" aria-hidden="true">🎈</p>
        <h1>This birthday card has ended</h1>
        <p>Wishbox cards remain active for the timeframe selected when created.</p>
        <Link className="btn btn-accent" to="/">Make your own birthday card</Link>
      </main>
    </div>
  )
}
