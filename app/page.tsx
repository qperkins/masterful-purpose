import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Story } from "@/components/story"
import { Speaking } from "@/components/speaking"
import { Resources } from "@/components/resources"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Speaking />
      <Resources />
      <Story />
      <CTA />
      <Footer />
    </main>
  )
}
