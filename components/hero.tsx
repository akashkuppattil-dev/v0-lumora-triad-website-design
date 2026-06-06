'use client'

import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden pt-32 sm:pt-36 lg:pt-44 pb-24 px-4 sm:px-8 lg:px-12">
      {/* Technical Grid Overlay (UI/UX architectural layout) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Visually hidden h1 for SEO/accessibility */}
      <h1 className="sr-only">Lumora Triad — Premium Web &amp; Product Studio</h1>

      {/* Floating 3D Ambient Orbs (Pinterest-inspired light refractions) */}
      <div className="absolute right-[-10%] top-[-5%] w-[500px] h-[500px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[-10%] w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Glossy 3D Glassmorphic Objects */}
      <div className="absolute right-[8%] bottom-[25%] w-36 h-36 rounded-3xl border border-white/35 bg-gradient-to-tr from-white/20 to-white/5 backdrop-blur-md shadow-2xl rotate-12 hover:rotate-45 transition-transform duration-[1500ms] pointer-events-none hidden lg:block" />
      <div className="absolute right-[22%] top-[20%] w-20 h-20 rounded-full border border-white/45 bg-gradient-to-tr from-white/30 to-white/10 backdrop-blur-xl shadow-xl -rotate-12 hover:rotate-12 transition-transform duration-[1500ms] pointer-events-none hidden lg:block" />
      <div className="absolute left-[8%] top-[35%] w-16 h-16 rounded-xl border border-white/25 bg-gradient-to-tr from-white/25 to-white/5 backdrop-blur-sm shadow-md rotate-45 pointer-events-none hidden lg:block" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
        {/* Headline */}
        <div className="flex-1 opacity-100 translate-y-0 scale-100">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-[-0.04em] text-foreground">
            We build digital
            <br className="hidden sm:block" />{' '}
            products that look
            <br className="hidden sm:block" />{' '}
            <span className="font-serif italic font-light text-foreground/60 lowercase">credible</span> and move fast.
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex-shrink-0 opacity-100 translate-y-0">
          <div className="flex flex-col gap-3 sm:gap-4 items-stretch lg:items-end">
            <Link
              href="/contact"
              aria-label="Start a Project with Lumora Triad"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base group whitespace-nowrap"
            >
              Start a Project
              <span aria-hidden="true" className="text-base group-hover:rotate-45 transition-transform duration-300">↗</span>
            </Link>
            <Link
              href="/services"
              aria-label="Explore Services"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3 sm:py-4 text-foreground font-semibold border border-foreground/20 rounded-full hover:bg-foreground/5 transition-all duration-300 text-sm sm:text-base group whitespace-nowrap"
            >
              Explore services
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
