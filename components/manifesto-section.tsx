"use client"

import { useEffect, useRef, useState } from "react"

export function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative px-6 py-32 md:px-12 lg:px-24 md:py-48 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <span
          className={`inline-block text-xs tracking-[0.4em] text-primary uppercase mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Ethos
        </span>

        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          THE UNFILTERED
          <br />
          <span className="text-primary">ETHOS</span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-24 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground/80">
              No additives. No pretension. No compromise. UNFILTERED is a celebration of wine made the way nature
              intended—alive, expressive, and unapologetically authentic.
            </p>
          </div>
          <div>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground/80">
              We bring together the Baltic region's most passionate winemakers, chefs, and enthusiasts for two days of
              discovery, connection, and pure, unfiltered joy.
            </p>
          </div>
        </div>

        <div
          className={`mt-24 flex flex-wrap gap-8 md:gap-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center">
            <span className="block text-5xl md:text-7xl font-bold text-primary">50+</span>
            <span className="text-sm tracking-wider uppercase text-muted-foreground">Winemakers</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl md:text-7xl font-bold text-primary">2</span>
            <span className="text-sm tracking-wider uppercase text-muted-foreground">Days</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl md:text-7xl font-bold text-primary">1</span>
            <span className="text-sm tracking-wider uppercase text-muted-foreground">Mission</span>
          </div>
        </div>
      </div>
    </section>
  )
}
