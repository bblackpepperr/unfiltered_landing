"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const exhibitors = [
  { name: "Domaine Levet", type: "Winemaker", region: "Côte-Rôtie, France" },
  { name: "Gut Oggau", type: "Winemaker", region: "Burgenland, Austria" },
  { name: "Foradori", type: "Winemaker", region: "Trentino, Italy" },
  { name: "Matassa", type: "Winemaker", region: "Roussillon, France" },
  { name: "Jaanihanso", type: "Cider Maker", region: "Estonia" },
  { name: "MANNA", type: "Chef", region: "Riga, Latvia" },
  { name: "Streekproducten", type: "Winemaker", region: "Netherlands" },
  { name: "Momento Mori", type: "Winemaker", region: "Victoria, Australia" },
]

export function ExhibitorsSection() {
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
      id="exhibitors"
      className="relative px-6 py-32 md:px-12 lg:px-24 md:py-48 border-t border-border"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span
              className={`inline-block text-xs tracking-[0.4em] text-primary uppercase mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The Talent
            </span>
            <h2
              className={`text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              THE MAKERS
              <br />
              <span className="text-primary">2026</span>
            </h2>
          </div>
          <p
            className={`text-lg font-serif text-foreground/60 max-w-md transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            A curated selection of the world's most exciting natural winemakers and culinary artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {exhibitors.map((exhibitor, index) => (
            <div
              key={exhibitor.name}
              className={`group bg-background p-6 md:p-8 transition-all duration-700 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
            >
              <div className="relative aspect-square mb-6 bg-muted overflow-hidden">
                <Image
                  src={`/.jpg?height=400&width=400&query=${exhibitor.type === "Chef" ? "chef portrait, professional kitchen, moody" : "wine bottles in cellar, natural wine, moody photography"}`}
                  alt={exhibitor.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1 group-hover:text-primary transition-colors">
                {exhibitor.name}
              </h3>
              <p className="text-xs tracking-[0.2em] text-primary uppercase mb-2">{exhibitor.type}</p>
              <p className="text-sm text-muted-foreground">{exhibitor.region}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
