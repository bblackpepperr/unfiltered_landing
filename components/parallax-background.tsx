"use client"

import { useEffect, useRef } from "react"

export function ParallaxBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Subtle continuous floating animation values
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005
      const children = container.children as HTMLCollectionOf<HTMLElement>

      // Continuous subtle floating movement
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        const speed = 0.3 + i * 0.15
        const offsetX = Math.sin(time * speed) * 20
        const offsetY = Math.cos(time * speed * 0.8) * 15
        const scale = 1 + Math.sin(time * speed * 0.5) * 0.05

        child.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large organic blob - top right */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />

      {/* Medium blob - bottom left */}
      <div className="absolute bottom-[20%] left-[-15%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      {/* Small accent blob - center */}
      <div className="absolute top-[50%] left-[40%] w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl" />

      {/* Extra subtle blob - top left */}
      <div className="absolute top-[-5%] left-[20%] w-[350px] h-[350px] bg-foreground/3 rounded-full blur-3xl" />
    </div>
  )
}
