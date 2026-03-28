import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { FeaturedWork } from '@/components/featured-work'
import { Process } from '@/components/process'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Process />
      <CTASection />
    </main>
  )
}
