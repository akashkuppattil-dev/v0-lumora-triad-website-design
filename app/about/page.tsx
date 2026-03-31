'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LucideQuote, LucideUsers2, LucideGlobe2, LucideHistory } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-28 lg:pt-48">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Editorial Title */}
        <section className="mb-10 lg:mb-32">
          <h1 className="text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-6 lg:mb-16 uppercase">
            The Studio.
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="space-y-6 lg:space-y-12">
              <h2 className="text-3xl lg:text-6xl font-bold leading-[0.95] tracking-tighter uppercase">
                We bridge the gap between complex engineering and premium design.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-normal max-w-xl italic">
                "In a landscape of generic templates, we offer technical precision and high-end aesthetics."
              </p>
            </div>
            <div className="flex items-end justify-end">
              <div className="max-w-md space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Lumora Triad was founded with a singular purpose: to provide startups and enterprise leaders with a direct, collaborative pathway to production-ready digital products. No bloated account layers, no hand-off friction.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-30">Our Stack</span>
                    <ul className="text-xs font-bold space-y-2 uppercase tracking-wide">
                      <li>Next.js / React</li>
                      <li>Django / Python</li>
                      <li>Cloud Infrastructure</li>
                      <li>Technical SEO</li>
                    </ul>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-30">Status</span>
                    <ul className="text-xs font-bold space-y-2 uppercase tracking-wide">
                      <li>Est. 2024</li>
                      <li>Global Remote</li>
                      <li>Boutique Scale</li>
                      <li>Q2 2026 Intake</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Circle - Team/Founder Story */}
        <section className="py-24 lg:py-48 border-t border-border">
          <div className="max-w-4xl mx-auto mb-24 lg:mb-32">
            <div className="flex items-center gap-3 mb-8 opacity-40">
              <LucideHistory size={16} />
              <span className="text-xs font-black uppercase tracking-[0.2em]">Origin Story</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase mb-12">The Circle of Creators.</h2>
            <div className="space-y-12 text-xl lg:text-2xl text-muted-foreground leading-relaxed font-normal">
              <p>
                What started as a small collaboration between three engineers and a designer in Kerala, India, has evolved into a specialized studio that serves clients from London to Dubai and New York.
              </p>
              <p className="text-foreground font-bold">
                Lumora Triad isn&apos;t just a company—it&apos;s a methodology. We believe that the best products are built when the person designing the experience understands the architecture beneath it.
              </p>
              <p>
                Our core team (The "Triad") focuses on three pillars: **Design Intelligence**, **Architectural Integrity**, and **Delivery Velocity**. We remain a small, boutique circle to ensure that every project we touch receives elite technical attention.
              </p>
            </div>
          </div>

          {/* Team Snapshot visual */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-border">
                  <Image src="/service-ui-design-showcase.jpg" alt="Design Lead" fill className="object-cover" />
               </div>
               <div className="pt-6">
                  <h4 className="text-lg font-bold uppercase tracking-tighter">Design Discipline</h4>
                  <p className="text-xs font-black uppercase tracking-widest opacity-40">High-End Narratives</p>
               </div>
            </div>
            <div className="relative group">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-border">
                  <Image src="/service-backend-v2.png" alt="Engineering Lead" fill className="object-cover" />
               </div>
               <div className="pt-6">
                  <h4 className="text-lg font-bold uppercase tracking-tighter">Engineering Lead</h4>
                  <p className="text-xs font-black uppercase tracking-widest opacity-40">Robust Architecture</p>
               </div>
            </div>
            <div className="relative group">
               <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-border">
                  <Image src="/service-strategy.jpg" alt="Product Lead" fill className="object-cover" />
               </div>
               <div className="pt-6">
                  <h4 className="text-lg font-bold uppercase tracking-tighter">Growth & Strategy</h4>
                  <p className="text-xs font-black uppercase tracking-widest opacity-40">Product Performance</p>
               </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 lg:py-48 border-t border-border">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
            <div>
              <div className="flex items-center gap-3 mb-8 opacity-40">
                <LucideUsers2 size={16} />
                <span className="text-[10px] uppercase tracking-widest font-black italic">Partnership</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">No Middlemen.</h3>
              <p className="text-muted-foreground leading-relaxed">
                You work directly with the creators. We've eliminated account management layers to ensure that your vision is translated into code without any technical erosion.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8 opacity-40">
                <LucideGlobe2 size={16} />
                <span className="text-[10px] uppercase tracking-widest font-black italic">Remote-First</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">India to the World.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operating out of Kerala, India, we bring a global perspective to local brands and a world-class technical standard to international enterprises.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8 opacity-40">
                <LucideQuote size={16} />
                <span className="text-[10px] uppercase tracking-widest font-black italic">Principles</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter">OLED Editorial.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our design aesthetic is grounded in the "OLED Editorial" philosophy—high contrast, deep blacks, and a focus on essential storytelling through high-end typography.
              </p>
            </div>
          </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 lg:py-48 border-t border-border bg-foreground text-background -mx-6 lg:-mx-8 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-8xl font-black leading-[0.85] tracking-[ -0.05em] uppercase mb-12">
              Let's join circles.
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
      </div>
    </main>
  )
}
