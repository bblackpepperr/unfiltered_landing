"use client"

import { TicketButton } from "./ticket-button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-between px-6 py-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-center">
        <span className="text-xs md:text-sm tracking-[0.3em] text-muted-foreground uppercase">
          Hanzas Perons, Riga, Latvia
        </span>
      </nav>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-[clamp(3.5rem,15vw,14rem)] font-bold leading-[0.85] tracking-tighter uppercase text-foreground mb-6">
          UNFILTERED
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-foreground/80 mb-8 max-w-2xl text-balance">
          {"The Baltics' Natural Wine Festival"}
        </p>
        <TicketButton size="lg" />
      </div>

      {/* Bottom info */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm tracking-wider text-muted-foreground uppercase">
        <span>Raw Wine</span>
        <span>Real Food</span>
        <span>Zero Fluff</span>
      </div>
    </section>
  )
}
