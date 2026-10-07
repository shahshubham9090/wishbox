import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {
  collection, deleteDoc, doc, getDocs, limit, orderBy, query,
  serverTimestamp, setDoc, Timestamp, updateDoc,
} from 'firebase/firestore'
import { app, db, isConfigured } from '../firebase'
import { compressImage, uploadToCloudinary, shortId, toMillis, formatDate, MAX_VIDEO_MB } from '../media'
import { SITE } from '../config'
import Envelope from '../Envelope.jsx'
import QRCodeModal from '../components/QRCodeModal.jsx'
import ParticleCanvas from '../components/ParticleCanvas.jsx'

const auth = app ? getAuth(app) : null
const DAY = 86400000
const linkFor = (id) => `${window.location.origin}${window.location.pathname}#/w/${id}`
const shareText = (name, id) => `ðŸŽ A birthday surprise for ${name}! Open it here: ${linkFor(id)}`

export default function Admin() {
  const [user, setUser] = useState(undefined)
  const [demoMode, setDemoMode] = useState(false)
  useEffect(() => (isConfigured ? onAuthStateChanged(auth, setUser) : undefined), [])

  let body
  if (!isConfigured && !demoMode) body = <SetupNotice onBypass={() => setDemoMode(true)} />
  else if (user === undefined && isConfigured) body = <div className="notice"><p>Checking admin login statusâ€¦</p></div>
  else if (!user && isConfigured && !demoMode) body = <Login />
  else body = <Dashboard user={user} isDemo={demoMode} />

  return (
    <div className="admin love-home theme-night">
      <ParticleCanvas theme="night" density={25} />
      <header className="admin-bar">
        <Link to="/" className="brand love-brand">
          <span className="brand-mark">W</span>
          <span>{SITE.name} Admin</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {demoMode && <span className="badge badge-scheduled">Demo Preview Mode</span>}
          {user && <span style={{ fontSize: '0.82rem', color: 'var(--blush)' }}>{user.email}</span>}
          {(user || demoMode) && <button className="btn btn-small" onClick={() => { signOut(auth); setDemoMode(false); }}>{demoMode ? 'Exit Demo' : 'Log out'}</button>}
        </div>
      </header>
      <main className="admin-main">{body}</main>
    </div>
  )
}

function SetupNotice({ onBypass }) {
  return (
    <div className="panel" style={{ textAlign: 'center', padding: '3rem 1.5rem', maxWidth: '34rem', margin: '2rem auto' }}>
      <span className="badge badge-scheduled" style={{ marginBottom: '1rem' }}>Setup Instructions</span>
      <h2 style={{ margin: '0.8rem 0 0.5rem' }}>Connect Firebase &amp; Cloudinary First</h2>
      <p style={{ margin: '0 auto 1.8rem', color: 'var(--blush)', fontSize: '0.95rem' }}>
        To save live cards and upload audio/video, fill in your credentials in <code>src/config.js</code>. In the meantime, you can explore the Admin Dashboard in Demo Mode!
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <button type="button" className="btn btn-accent" onClick={onBypass}>
          Explore Admin Dashboard (Demo Mode) ðŸš€
        </button>
        <Link className="btn" to="/w/demo">
          Open Sample Card ðŸŽ
        </Link>
      </div>
    </div>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e) {
    e.preventDefault()
    setBusy(true); setError('')
    try { await signInWithEmailAndPassword(auth, email, password) }
    catch { setError('Email or password incorrect. Please verify your Firebase Auth credentials.') }
    finally { setBusy(false) }
  }

  return (
    <form onSubmit={submit} className="panel" style={{ maxWidth: '28rem', margin: '3rem auto 0' }}>
      <h2 style={{ margin: '0 0 1.2rem', textAlign: 'center' }}>Admin Login</h2>
      <div className="field">
        <label htmlFor="em">Email</label>
        <input id="em" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@example.com" />
      </div>
      <div className="field">
        <label htmlFor="pw">Password</label>
        <input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error && <p className="notice notice-err">{error}</p>}
      <button className="btn btn-accent btn-big" style={{ width: '100%', marginTop: '0.5rem' }} disabled={busy}>
        {busy ? 'Logging inâ€¦' : 'Access Admin Dashboard'}
      </button>
    </form>
  )
}

function Dashboard({ isDemo }) {
  const [wishes, setWishes] = useState(null)
  const [loadError, setLoadError] = useState('')
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const refresh = useCallback(async () => {
    if (isDemo) {
      setWishes([
        {
          id: 'demo',
          recipientName: 'Priya',
          fromName: 'Rahul',
          theme: 'night',
          photos: [{ url: 'demo' }, { url: 'demo2' }],
          voice: { url: 'demo' },
          expiresAt: Date.now() + 30 * 86400000,
          createdAt: Date.now(),
        },
        {
          id: 'sample-2',
          recipientName: 'Aarav',
          fromName: 'Riya & Friends',
          theme: 'blush',
          photos: [{ url: 'demo' }],
          unlockAt: Date.now() + 2 * 86400000,
          expiresAt: Date.now() + 10 * 86400000,
          createdAt: Date.now() - 86400000,
        },
        {
          id: 'sample-3',
          recipientName: 'Ananya',
          fromName: 'Vikram',
          theme: 'sunset',
          photos: [{ url: 'demo' }],
          expiresAt: Date.now() - 86400000,
          createdAt: Date.now() - 5 * 86400000,
        },
      ])
      return
    }

    try {
      const snap = await getDocs(query(collection(db, 'wishes'), orderBy('createdAt', 'desc'), limit(100)))
      setWishes(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
      setLoadError('')
    } catch (e) {
      setLoadError(`Couldn't load cards: ${e.message}. Verify Firestore security rules.`)
    }
  }, [isDemo])

  useEffect(() => { refresh() }, [refresh])

  // Stats calculation
  const now = Date.now()
  const stats = wishes ? {
    total: wishes.length,
    live: wishes.filter((w) => {
      const exp = toMillis(w.expiresAt)
      const unl = toMillis(w.unlockAt)
      return exp >= now && (!unl || unl <= now)
    }).length,
    scheduled: wishes.filter((w) => {
      const unl = toMillis(w.unlockAt)
      const exp = toMillis(w.expiresAt)
      return unl && unl > now && exp >= now
    }).length,
    expired: wishes.filter((w) => toMillis(w.expiresAt) < now).length,
  } : { total: 0, live: 0, scheduled: 0, expired: 0 }

  const filteredWishes = wishes ? wishes.filter((w) => {
    const exp = toMillis(w.expiresAt)
    const unl = toMillis(w.unlockAt)
    const st = exp < now ? 'expired' : unl && unl > now ? 'scheduled' : 'live'
    if (filterStatus !== 'all' && st !== filterStatus) return false

    if (search.trim()) {
      const q = search.toLowerCase().trim()
      const recipient = (w.recipientName || '').toLowerCase()
      const from = (w.fromName || '').toLowerCase()
      return recipient.includes(q) || from.includes(q)
    }
    return true
  }) : []

  return (
    <>
      {/* Overview Stats Strip */}
      <section className="admin-stats-grid">
        <div className="stat-card">
          <span className="stat-value">{stats.total}</span>
          <span className="stat-label">Total Cards</span>
        </div>
        <div className="stat-card stat-card-live">
          <span className="stat-value">{stats.live}</span>
          <span className="stat-label">Live Active</span>
        </div>
        <div className="stat-card stat-card-sched">
          <span className="stat-value">{stats.scheduled}</span>
          <span className="stat-label">Scheduled</span>
        </div>
        <div className="stat-card stat-card-exp">
          <span className="stat-value">{stats.expired}</span>
          <span className="stat-label">Expired</span>
        </div>
      </section>

      {/* Main Creation & Live Preview Section */}
      <CreateForm onCreated={refresh} />

      {/* Existing Cards Section */}
      <section style={{ marginTop: '2rem' }}>
        <div className="admin-section-header">
          <h2>Your Birthday Cards</h2>
          <div className="admin-filter-bar">
            <input
              type="search"
              placeholder="Search by nameâ€¦"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-search-input"
            />
            <div className="admin-tabs">
              <button
                type="button"
                className={`admin-tab ${filterStatus === 'all' ? 'active' : ''}`}
                onClick={() => setFilterStatus('all')}
              >
                All ({stats.total})
              </button>
              <button
                type="button"
                className={`admin-tab ${filterStatus === 'live' ? 'active' : ''}`}
                onClick={() => setFilterStatus('live')}
              >
                Live ({stats.live})
              </button>
              <button
                type="button"
                className={`admin-tab ${filterStatus === 'scheduled' ? 'active' : ''}`}
                onClick={() => setFilterStatus('scheduled')}
              >
                Scheduled ({stats.scheduled})
              </button>
              <button
                type="button"
                className={`admin-tab ${filterStatus === 'expired' ? 'active' : ''}`}
                onClick={() => setFilterStatus('expired')}
              >
                Expired ({stats.expired})
              </button>
            </div>
          </div>
        </div>

        {loadError && <p className="notice notice-err">{loadError}</p>}
        {wishes === null && !loadError && <p>Loading cards listâ€¦</p>}
        {wishes && filteredWishes.length === 0 && (
          <div className="panel" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
            <p style={{ margin: 0, color: 'var(--blush)' }}>
              {search || filterStatus !== 'all' ? 'No cards match your filter criteria.' : 'No cards created yet. Create your first card above!'}
            </p>
          </div>
        )}

        {filteredWishes.length > 0 && (
          <ul className="wish-list">
            {filteredWishes.map((w) => <WishRow key={w.id} w={w} onChange={refresh} />)}
          </ul>
        )}
      </section>
    </>
  )
}

const EMPTY = { recipientName: '', fromName: '', message: '', theme: 'night', days: String(SITE.plans[0].days), unlockAt: '' }

function messageIdea(recipient, from, kind) {
  const name = recipient.trim() || 'you'
  const sign = from.trim() ? `\n\nWith love,\n${from.trim()}` : ''
  const ideas = {
    warm: `Happy birthday, ${name}!\n\nI hope this year brings you gentle mornings, big laughs, and every little thing that makes you feel loved. Iâ€™m so grateful to have you in my life.${sign}`,
    fun: `Happy birthday, ${name}!\n\nYou make every room brighter, every plan more fun, and every memory better. Hereâ€™s to another year of stories weâ€™ll never stop laughing about!${sign}`,
    short: `Happy birthday, ${name}!\n\nWishing you a beautiful year full of love, joy, and everything you deserve.${sign}`,
  }
  return ideas[kind]
}

function CreateForm({ onCreated }) {
  const [f, setF] = useState(EMPTY)
  const [photos, setPhotos] = useState([])
  const [photoPreviews, setPhotoPreviews] = useState([])
  const [voice, setVoice] = useState(null)
  const [video, setVideo] = useState(null)
  const [formKey, setFormKey] = useState(0)
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [created, setCreated] = useState(null)

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const useIdea = (kind) => setF((current) => ({ ...current, message: messageIdea(current.recipientName, current.fromName, kind) }))

  const handlePhotoSelect = (e) => {
    const selected = [...e.target.files].slice(0, 15)
    setPhotos(selected)
    const previews = selected.map((file) => URL.createObjectURL(file))
    setPhotoPreviews(previews)
  }

  const removePhoto = (index) => {
    const newPhotos = photos.filter((_, i) => i !== index)
    const newPreviews = photoPreviews.filter((_, i) => i !== index)
    setPhotos(newPhotos)
    setPhotoPreviews(newPreviews)
  }

  async function submit(e) {
    e.preventDefault()
    setError(''); setCreated(null)
    if (video && video.size > MAX_VIDEO_MB * 1024 * 1024) {
      return setError(`This video is ${(video.size / 1048576).toFixed(0)} MB. The limit is ${MAX_VIDEO_MB} MB, so trim or compress it first.`)
    }
    setBusy(true)
    try {
      const id = shortId()
      const folder = `wishes/${id}`
      const total = photos.length + (voice ? 1 : 0) + (video ? 1 : 0)
      let done = 0
      const step = (label) => setStatus(`Uploading ${label} (${done + 1} of ${total})`)

      const up = []
      for (const p of photos) {
        step('photo')
        up.push(await uploadToCloudinary(await compressImage(p), folder))
        done++
      }
      let v = null
      if (voice) { step('voice note'); v = await uploadToCloudinary(voice, folder); done++ }
      let vid = null
      if (video) {
        step('video')
        vid = await uploadToCloudinary(video, folder, (pct) => setStatus(`Uploading video, ${pct}% (${done + 1} of ${total})`))
        done++
      }

      setStatus('Saving card')
      const unlockMs = f.unlockAt ? new Date(f.unlockAt).getTime() : null
      const start = Math.max(Date.now(), unlockMs || 0)
      await setDoc(doc(db, 'wishes', id), {
        recipientName: f.recipientName.trim(),
        fromName: f.fromName.trim(),
        message: f.message.trim(),
        theme: f.theme,
        photos: up,
        voice: v,
        video: vid,
        unlockAt: unlockMs ? Timestamp.fromMillis(unlockMs) : null,
        expiresAt: Timestamp.fromMillis(start + Number(f.days) * DAY),
        createdAt: serverTimestamp(),
      })

      setCreated({ id, name: f.recipientName.trim() })
      setF(EMPTY); setPhotos([]); setPhotoPreviews([]); setVoice(null); setVideo(null); setFormKey((k) => k + 1)
      onCreated()
    } catch (err) {
      setError(err.message || 'Something failed. Check connection and try again.')
    } finally {
      setBusy(false); setStatus('')
    }
  }

  return (
    <div className="admin-create-wrapper">
      <form onSubmit={submit} className="panel admin-form" key={formKey}>
        <h2>Create a Birthday Card</h2>
        <div className="row">
          <div className="field">
            <label htmlFor="rn">Birthday Person's Name</label>
            <input id="rn" value={f.recipientName} onChange={set('recipientName')} required maxLength={40} placeholder="e.g. Priya" />
          </div>
          <div className="field">
            <label htmlFor="fn">From (Sender)</label>
            <input id="fn" value={f.fromName} onChange={set('fromName')} maxLength={60} placeholder="e.g. Rahul, or Mummy &amp; Papa" />
          </div>
        </div>

        <div className="field">
          <label htmlFor="msg">Heartfelt Message</label>
          <div className="message-ideas" aria-label="Message ideas">
            <span>Quick Ideas:</span>
            <button type="button" onClick={() => useIdea('warm')}>Warm</button>
            <button type="button" onClick={() => useIdea('fun')}>Fun</button>
            <button type="button" onClick={() => useIdea('short')}>Short</button>
          </div>
          <textarea id="msg" value={f.message} onChange={set('message')} required maxLength={3000} placeholder="Write your birthday wishes here..." />
          <p className="field-hint">Personalize the message to make it memorable.</p>
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="th">Visual Theme</label>
            <select id="th" value={f.theme} onChange={set('theme')}>
              <option value="night">Night Velvet (burgundy &amp; gold)</option>
              <option value="blush">Blush Romance (rosy pink &amp; violet)</option>
              <option value="mint">Emerald Magic (deep green &amp; gold)</option>
              <option value="sunset">Sunset Glow (warm coral &amp; amber)</option>
              <option value="celestial">Celestial Night (starry indigo &amp; cyan)</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="pl">Active Duration Plan</label>
            <select id="pl" value={f.days} onChange={set('days')}>
              {SITE.plans.map((p) => <option key={p.days} value={p.days}>{p.label} (â‚¹{p.price})</option>)}
            </select>
          </div>
        </div>

        <div className="field">
          <label htmlFor="ul">Unlock At Timestamp (Optional)</label>
          <input id="ul" type="datetime-local" value={f.unlockAt} onChange={set('unlockAt')} />
          <p className="field-hint">Leave empty to unlock right away. Scheduled days count from unlock time.</p>
        </div>

        <div className="field">
          <label htmlFor="ph">Memory Photos (Up to 15)</label>
          <input id="ph" type="file" accept="image/*" multiple onChange={handlePhotoSelect} />
          {photoPreviews.length > 0 && (
            <div className="photo-preview-grid">
              {photoPreviews.map((src, idx) => (
                <div key={idx} className="photo-preview-item">
                  <img src={src} alt={`Upload ${idx + 1}`} />
                  <button type="button" onClick={() => removePhoto(idx)} title="Remove image">âœ•</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="vn">Voice Note (Audio)</label>
            <input id="vn" type="file" accept="audio/*,.opus,.ogg,.m4a" onChange={(e) => setVoice(e.target.files[0] || null)} />
          </div>
          <div className="field">
            <label htmlFor="vd">Video Clip (Optional)</label>
            <input id="vd" type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0] || null)} />
          </div>
        </div>

        {error && <p className="notice notice-err">{error}</p>}
        {created && (
          <div className="notice notice-ok">
            <p><strong>âœ¨ Birthday Card for {created.name} is Ready!</strong></p>
            <p className="link-line">{linkFor(created.id)}</p>
            <CopyButtons id={created.id} name={created.name} />
          </div>
        )}

        <button className="btn btn-accent btn-big" style={{ width: '100%' }} disabled={busy}>
          {busy ? status || 'Processing Cardâ€¦' : 'ðŸŽ Create Birthday Surprise Card'}
        </button>
      </form>

      {/* Real-time Interactive Live Envelope Preview Pane */}
      <aside className={`admin-preview-pane theme-${f.theme}`}>
        <span className="admin-preview-badge">Live Real-time Preview</span>
        <div className="admin-preview-stage">
          <Envelope name={f.recipientName.trim() || 'Someone Special'} enableTilt={false} />
        </div>
        <p className="field-hint" style={{ textAlign: 'center', marginTop: '0.8rem' }}>
          Real-time preview of the envelope seal for {f.recipientName.trim() || 'recipient'}
        </p>
      </aside>
    </div>
  )
}

function CopyButtons({ id, name }) {
  const [copied, setCopied] = useState('')
  const [showQR, setShowQR] = useState(false)

  const copy = async (text, which) => {
    try { await navigator.clipboard.writeText(text); setCopied(which); setTimeout(() => setCopied(''), 1500) }
    catch { window.prompt('Copy this:', text) }
  }

  return (
    <>
      <div className="wish-actions">
        <button type="button" className="btn btn-small" onClick={() => copy(linkFor(id), 'link')}>
          {copied === 'link' ? 'Copied âœ“' : 'Copy Link'}
        </button>
        <button type="button" className="btn btn-small" onClick={() => copy(shareText(name, id), 'msg')}>
          {copied === 'msg' ? 'Copied âœ“' : 'Copy WhatsApp Text'}
        </button>
        <button type="button" className="btn btn-small" onClick={() => setShowQR(true)}>
          Show QR Code ðŸ“±
        </button>
        <a className="btn btn-small btn-accent" href={linkFor(id)} target="_blank" rel="noreferrer">
          Open Card â†—
        </a>
      </div>

      {showQR && <QRCodeModal id={id} name={name} onClose={() => setShowQR(false)} />}
    </>
  )
}

function WishRow({ w, onChange }) {
  const exp = toMillis(w.expiresAt)
  const unl = toMillis(w.unlockAt)
  const t = Date.now()
  const status = exp < t ? 'expired' : unl && unl > t ? 'scheduled' : 'live'
  const label = { expired: 'Expired', scheduled: 'Scheduled', live: 'Live' }[status]

  async function extend(days) {
    await updateDoc(doc(db, 'wishes', w.id), { expiresAt: Timestamp.fromMillis(Math.max(exp, t) + days * DAY) })
    onChange()
  }

  async function remove() {
    if (!window.confirm(`Delete the card for ${w.recipientName}? The link stops working immediately.`)) return
    await deleteDoc(doc(db, 'wishes', w.id))
    onChange()
  }

  return (
    <li className="wish-row">
      <div className="wish-row-top">
        <h3>
          {w.recipientName}{w.fromName ? ` from ${w.fromName}` : ''}
        </h3>
        <span className={`badge badge-${status}`}>{label}</span>
      </div>
      <p className="wish-meta">
        {unl ? `Unlocks ${formatDate(unl)}. ` : ''}{status === 'expired' ? 'Ended' : 'Ends'} {formatDate(exp)}.
        {' '}{w.photos?.length || 0} photos{w.voice ? ', voice note' : ''}{w.video ? ', video' : ''}.
        {' '}Folder: <code>wishes/{w.id}</code>
      </p>
      <CopyButtons id={w.id} name={w.recipientName} />
      <div className="wish-actions wish-actions-2" style={{ marginTop: '0.8rem' }}>
        {SITE.plans.map((p) => (
          <button key={p.days} type="button" className="btn btn-small" onClick={() => extend(p.days)}>
            Extend +{p.label}
          </button>
        ))}
        <button type="button" className="btn btn-small btn-danger" onClick={remove} style={{ marginLeft: 'auto' }}>
          Delete Card ðŸ—‘ï¸
        </button>
      </div>
    </li>
  )
}
