import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "UNFILTERED 2026 | Natural Wine Festival, Baltics",
  description: "The Baltics' Premier Natural Wine Festival. Raw wine, real food, zero fluff. Riga, 2026.",
  keywords: ["natural wine", "wine festival", "baltics", "riga", "unfiltered", "2026"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} font-sans antialiased`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
