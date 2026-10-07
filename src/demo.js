const photo = (a, b, label) =>
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/><text x="400" y="315" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#fff" opacity=".85">${label}</text></svg>`
  )

// A short synthesized tune so the sample card shows the voice note player.
function demoTune() {
  if (typeof window === 'undefined') return null
  const rate = 22050
  const notes = [[392, .3], [392, .15], [440, .45], [392, .45], [523, .45], [494, .8]]
  const total = notes.reduce((t, [, d]) => t + d, 0)
  const n = Math.floor(rate * total)
  const buf = new ArrayBuffer(44 + n * 2)
  const v = new DataView(buf)
  const str = (o, s) => [...s].forEach((c, i) => v.setUint8(o + i, c.charCodeAt(0)))
  str(0, 'RIFF'); v.setUint32(4, 36 + n * 2, true); str(8, 'WAVEfmt ')
  v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true)
  v.setUint32(24, rate, true); v.setUint32(28, rate * 2, true); v.setUint16(32, 2, true); v.setUint16(34, 16, true)
  str(36, 'data'); v.setUint32(40, n * 2, true)
  let i = 0
  for (const [f, d] of notes) {
    const len = Math.floor(rate * d)
    for (let k = 0; k < len && i < n; k++, i++) {
      const env = Math.min(1, k / 300) * Math.exp(-3 * k / len)
      v.setInt16(44 + i * 2, Math.sin(2 * Math.PI * f * k / rate) * env * 9000, true)
    }
  }
  return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }))
}

export const DEMO_WISH = {
  recipientName: 'Priya',
  fromName: 'Rahul',
  theme: 'night',
  message:
    'Another year of you being the loudest laugh in every room. Thank you for the late-night chai, the terrible jokes, and for always picking up when I call.\n\nHave the best year yet. I am so proud of you.',
  photos: [
    { url: photo('#EF7A98', '#F5B335', 'Your photo here') },
    { url: photo('#46306F', '#EF7A98', 'Another memory') },
  ],
  voice: { url: demoTune() },
  video: null,
  unlockAt: null,
  expiresAt: Date.now() + 365 * 86400000,
}
