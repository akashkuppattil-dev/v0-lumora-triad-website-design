import type { Metadata } from 'next'
import Link from 'next/link'
import { About } from '@/components/about'

export const metadata: Metadata = {
  title: 'About Lumora Triad – Premium Web & UX Studio',
  description: 'Lumora Triad is a boutique digital studio delivering premium web design, UI/UX, and product engineering from Kerala, India.',
  openGraph: {
    title: 'About Lumora Triad – Premium Web & UX Studio',
    description: 'Boutique digital studio bridging design intelligence and technical precision.',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32">
      <About showBorder={false} className="pt-0 lg:pt-0" />
      {/* Global CTA – consistent with homepage */}
      <section className="py-24 lg:py-48 border-t border-border bg-foreground text-background -mx-6 lg:-mx-8 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-8xl font-black leading-[0.85] tracking-[-0.05em] uppercase mb-12">
            Join the Circle.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-background text-foreground font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group text-sm uppercase tracking-widest"
          >
            Start Your Inquiry
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
