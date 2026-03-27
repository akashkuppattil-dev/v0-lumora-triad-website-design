import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { FeaturedWork } from '@/components/featured-work'
import { SocialProof } from '@/components/social-proof'
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
      <Industries />
      <FeaturedWork />
      <SocialProof />
      <Process />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
