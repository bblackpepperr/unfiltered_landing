"use client"

import { useEffect, useRef, useState } from "react"
import { TicketButton } from "./ticket-button"

export function TicketsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="tickets"
      className="relative px-6 py-32 md:px-12 lg:px-24 md:py-48 bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span
            className={`inline-block text-xs tracking-[0.4em] text-primary uppercase mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Hanzas Perons, Riga, Latvia
          </span>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            SECURE YOUR
            <br />
            <span className="text-primary">PLACE</span>
          </h2>
          <p
            className={`text-lg md:text-xl font-serif text-foreground/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Join us for an unforgettable celebration of natural wine, real food, and authentic connections.
          </p>
        </div>

        <div
          className={`relative bg-background border border-border p-10 md:p-16 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Festival Pass</h3>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Full access to UNFILTERED 2026 — all winemakers, all chefs, all experiences.
          </p>

          <div className="flex items-baseline justify-center gap-2 mb-10">
            <span className="text-6xl md:text-8xl font-bold text-primary">€55</span>
          </div>

          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12 text-sm text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Full day access
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              All winemakers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Chef collaborations
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary">✓</span>
              Tasting glass included
            </li>
          </ul>

          <TicketButton className="text-lg px-12 py-6" />
        </div>
      </div>
    </section>
  )
}
