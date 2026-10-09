import { useEffect, useRef } from 'react'
import createGlobe from 'cobe'

interface GlobeProps {
  className?: string
  size?: number
}

export function Globe({ className = '', size = 1020 }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const pointerInteractionMovement = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let phi = 0
    const theta = 0.25
    let width = size

    const onResize = () => {
      if (canvasRef.current && canvasRef.current.offsetWidth > 0) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener('resize', onResize)
    onResize()

    if (!canvasRef.current) return

    // Cobe v2 requires manual requestAnimationFrame loop via globe.update()
    // - dark: 1 -> renders dotted continent points on dark sphere
    // - baseColor: [1, 1, 1] -> continent dots are bright white
    // - glowColor: [1, 1, 1] -> pure white rim glow matching Figma
    // - mapBrightness: 6 -> high contrast crisp dots
    // - markers: [] -> strictly empty (no dots or labels)
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0, 0, 0],
      glowColor: [1, 1, 1],
      markers: [],
    })

    let animationFrameId: number

    const animate = () => {
      if (!pointerInteracting.current) {
        phi += 0.003
      }
      const nextTheta = Math.max(
        -Math.PI / 2,
        Math.min(Math.PI / 2, theta + pointerInteractionMovement.current.y)
      )
      globe.update({
        phi: phi + pointerInteractionMovement.current.x,
        theta: nextTheta,
        width: width * 2,
        height: width * 2,
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    // Start rendering loop immediately so image texture is applied as soon as loaded
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', onResize)
      globe.destroy()
    }
  }, [size])

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{
        width: '100%',
        maxWidth: `${size}px`,
        aspectRatio: '1 / 1',
      }}
    >
      {/* Outer ambient glow behind the globe matching the Figma design */}
      <div
        className="absolute inset-4 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 113, 187, 0.3) 0%, rgba(0, 56, 93, 0.15) 50%, transparent 75%)',
          filter: 'blur(36px)',
        }}
      />

      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = {
            x: e.clientX - pointerInteractionMovement.current.x,
            y: e.clientY - pointerInteractionMovement.current.y,
          }
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grabbing'
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab'
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null
          if (canvasRef.current) {
            canvasRef.current.style.cursor = 'grab'
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            pointerInteractionMovement.current = {
              x: (e.clientX - pointerInteracting.current.x) * 0.005,
              y: (e.clientY - pointerInteracting.current.y) * 0.005,
            }
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            pointerInteractionMovement.current = {
              x: (e.touches[0].clientX - pointerInteracting.current.x) * 0.005,
              y: (e.touches[0].clientY - pointerInteracting.current.y) * 0.005,
            }
          }
        }}
        className="w-full h-full cursor-grab touch-none"
        style={{
          contain: 'layout paint size',
          maxWidth: '100%',
          aspectRatio: '1 / 1',
        }}
      />
    </div>
  )
}
