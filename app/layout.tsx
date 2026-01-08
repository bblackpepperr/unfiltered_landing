import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
  generator: "v0.app",
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
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f1ef5b0c-c5f2-4575-81cf-a0ad5080ca7c"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-YQ6K4KDN7G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YQ6K4KDN7G');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uy7jcptp59");
          `}
        </Script>
      </head>
      <body className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} font-sans antialiased`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
