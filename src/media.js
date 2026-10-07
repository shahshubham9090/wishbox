import { CLOUDINARY } from './config'

// Cloudinary's free plan limits video file size. Check the current limit in your account.
export const MAX_VIDEO_MB = 100

// Resize photos to max 1600px and convert to WebP (~150–300 KB each) before upload.
export async function compressImage(file, max = 1600, quality = 0.82) {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height))
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    const blob = await new Promise((res) => canvas.toBlob(res, 'image/webp', quality))
    return blob && blob.size < file.size ? blob : file
  } catch {
    return file // e.g. HEIC on some browsers: upload the original
  }
}

export function uploadToCloudinary(file, folder, onProgress) {
  return new Promise((resolve, reject) => {
    const fd = new FormData()
    fd.append('file', file)
    fd.append('upload_preset', CLOUDINARY.uploadPreset)
    fd.append('folder', folder)
    const xhr = new XMLHttpRequest()
    xhr.open('POST', `https://api.cloudinary.com/v1_1/${CLOUDINARY.cloudName}/auto/upload`)
    xhr.upload.onprogress = (e) => {
      if (onProgress && e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100))
    }
    xhr.onload = () => {
      let res = {}
      try { res = JSON.parse(xhr.responseText) } catch { /* ignore */ }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve({ url: res.secure_url, publicId: res.public_id, type: res.resource_type })
      } else {
        reject(new Error(res.error?.message || `Upload failed with status ${xhr.status}.`))
      }
    }
    xhr.onerror = () => reject(new Error('Upload failed. Check your internet connection and try again.'))
    xhr.send(fd)
  })
}

const isCloudinary = (url) => url.includes('res.cloudinary.com')
const swapExt = (url, ext) => url.replace(/\.[a-z0-9]+(\?.*)?$/i, `.${ext}`)

// Deliver video as compressed MP4 (plays on every phone, including iPhone .mov uploads).
export const videoUrl = (url) =>
  isCloudinary(url) ? swapExt(url.replace('/upload/', '/upload/q_auto/'), 'mp4') : url

// Deliver audio as MP3 (WhatsApp voice notes are .opus, which some iPhones can't play).
export const audioUrl = (url) => (isCloudinary(url) ? swapExt(url, 'mp3') : url)

// Short, readable link IDs (no 0/o, 1/l/i confusion).
export function shortId(len = 8) {
  const a = 'abcdefghjkmnpqrstuvwxyz23456789'
  const bytes = crypto.getRandomValues(new Uint8Array(len))
  return Array.from(bytes, (b) => a[b % a.length]).join('')
}

export const toMillis = (t) => {
  if (!t) return null
  if (typeof t === 'number') return t
  if (typeof t.toMillis === 'function') return t.toMillis()
  return new Date(t).getTime()
}

export const formatDate = (ms) =>
  new Date(ms).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
