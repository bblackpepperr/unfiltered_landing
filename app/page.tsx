import { HeroSection } from "@/components/hero-section"
import { ParallaxBackground } from "@/components/parallax-background"

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-background relative">
      <ParallaxBackground />
      <HeroSection />
    </main>
  )
}
