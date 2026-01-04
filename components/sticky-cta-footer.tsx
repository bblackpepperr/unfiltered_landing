"use client"

import { useState, useEffect } from "react"

export function StickyCTAFooter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsVisible(scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Glassmorphism container */}
      <div className="backdrop-blur-lg bg-background/70 border-t border-foreground/10 saturate-150">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
          <div className="flex items-center gap-3 text-foreground">
            <span className="text-sm uppercase tracking-[0.2em] font-sans font-medium">Tickets</span>
            <span className="text-accent font-sans font-bold text-lg">55 EUR</span>
            <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground ml-2">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  )
}
