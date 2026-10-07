import { useEffect, useRef } from 'react'

export default function ParticleCanvas({ theme = 'night', density = 35 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const colorsMap = {
      night: ['#EFB95B', '#E76886', '#FFF8F1', '#D99A8B', '#F3C8D1'],
      blush: ['#E8577F', '#C72A62', '#7A4FD6', '#FBE3EA', '#FFB7CE'],
      mint: ['#2E9E6C', '#1A7A50', '#E8A23B', '#FFFDF6', '#72D6A4'],
      sunset: ['#FF7E5F', '#FEB47B', '#F7D070', '#E76886', '#FFF8F1'],
      celestial: ['#A78BFA', '#818CF8', '#38BDF8', '#F472B6', '#F8FAFC'],
    }

    const palette = colorsMap[theme] || colorsMap.night

    class Particle {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.x = Math.random() * width
        this.y = initial ? Math.random() * height : height + 20
        this.size = Math.random() * 4 + 1.5
        this.speedY = (Math.random() * 0.6 + 0.2) * -1
        this.speedX = (Math.random() - 0.5) * 0.4
        this.color = palette[Math.floor(Math.random() * palette.length)]
        this.alpha = Math.random() * 0.7 + 0.15
        this.alphaSpeed = (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1)
        this.isHeart = Math.random() > 0.65
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
      }

      update() {
        this.y += this.speedY
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.3
        this.rotation += this.rotationSpeed
        this.alpha += this.alphaSpeed

        if (this.alpha > 0.85 || this.alpha < 0.1) {
          this.alphaSpeed *= -1
        }

        if (this.y < -30 || this.x < -30 || this.x > width + 30) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha))

        if (this.isHeart) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          const s = this.size * 1.8
          ctx.moveTo(0, s * 0.3)
          ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.2, 0, s)
          ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.3, 0, s * 0.3)
          ctx.fill()
        } else {
          ctx.fillStyle = this.color
          ctx.shadowBlur = 10
          ctx.shadowColor = this.color
          ctx.beginPath()
          ctx.arc(0, 0, this.size, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.restore()
      }
    }

    const particles = Array.from({ length: density }, () => new Particle())

    const render = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [theme, density])

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
