"use client"

import { TicketButton } from "./ticket-button"
import Image from "next/image"

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

        <a
          href="mailto:glouglou@unfiltered.lv"
          className="mt-6 text-base md:text-lg tracking-wider text-foreground font-medium hover:text-[#DFFF00] transition-colors duration-300 underline underline-offset-4 decoration-[#DFFF00]"
        >
          glouglou@unfiltered.lv
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-full px-4">
          <a
            href="https://t.me/unfilteredfest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-[#DFFF00] transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            <span className="text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">@unfilteredfest</span>
          </a>

          <a
            href="https://instagram.com/unfilteredfest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-[#DFFF00] transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919-.058 1.265-.069 1.645-.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.948 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">@unfilteredfest</span>
          </a>

          <a
            href="https://tiktok.com/@lowine.shop.n.bar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-[#DFFF00] transition-colors duration-300 group"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
            <span className="text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">@lowine.shop.n.bar</span>
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
            Official glassware friend:
          </p>
          <a
            href="https://www.gabriel-glas.at/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-40 h-12 md:w-48 md:h-14 lg:w-56 lg:h-16 transition-opacity hover:opacity-70"
          >
            <Image
              src="/images/gabriel-20glass.png"
              alt="Gabriel-Glas"
              fill
              className="object-contain brightness-0 invert"
            />
          </a>
        </div>
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
