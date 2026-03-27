import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { FeaturedWork } from '@/components/featured-work'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
