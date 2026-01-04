"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function FounderSection() {
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
      id="founder"
      className="relative px-6 py-32 md:px-12 lg:px-24 md:py-48 bg-card border-t border-border"
    >
      <div className="max-w-6xl mx-auto">
        <span
          className={`inline-block text-xs tracking-[0.4em] text-primary uppercase mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Visionary
        </span>

        <h2
          className={`text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          THE <span className="text-primary">CRAFT</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div
            className={`relative aspect-[3/4] bg-muted overflow-hidden transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Image
              src="/portrait-of-man-in-vineyard--natural-wine-maker--e.jpg"
              alt="Anton Zhilin, Founder of UNFILTERED"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-2">Anton Zhilin</h3>
            <p className="text-sm tracking-[0.2em] text-primary uppercase mb-8">Founder & Curator</p>
            <p className="text-lg md:text-xl font-serif leading-relaxed text-foreground/80 mb-6">
              {
                "\"Natural wine isn't just a category—it's a philosophy. It's about respecting the land, the grape, and the process. UNFILTERED was born from a simple belief: the best wine tells a story.\""
              }
            </p>
            <p className="text-base font-serif leading-relaxed text-foreground/60">
              With over a decade immersed in the natural wine movement across Europe, Anton brings an unparalleled
              network of winemakers and a deep commitment to authenticity. His vision: to make Riga the epicenter of
              natural wine culture in the Baltics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
