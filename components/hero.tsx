'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Visually hidden h1 for SEO/accessibility */}
      <h1 className="sr-only">Lumora Triad — Premium Web &amp; Product Studio</h1>

      {/* ── Headline overlapping the top of the image ── */}
      <div
        className={`relative z-10 pt-32 sm:pt-36 lg:pt-44 px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[0.92] tracking-tighter text-foreground max-w-4xl">
            We build digital
            <br className="hidden sm:block" />{' '}
            products that look
            <br className="hidden sm:block" />{' '}
            <span className="italic font-light">credible</span> and move fast.
          </h2>
        </div>
      </div>

      {/* ── Hero Image ── */}
      <div
        className={`relative w-full transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'
          }`}
      >
        <div className="mx-3 sm:mx-6 lg:mx-10">
          {/* Natural-size image — no fixed aspect ratio = no letterboxing */}
          <img
            src="/hero-lumora-display.jpg"
            alt="Lumora Triad — Web design and engineering studio"
            className="w-full h-auto rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border/40 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* ── Subtext + CTAs below image ── */}
      <div
        className={`relative z-10 px-4 sm:px-8 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-8 lg:gap-16">
          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed max-w-xl">
            Design, engineering, and delivery under one roof. We work with startups and growing brands —
            end-to-end, no hand-offs, no excuses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 sm:gap-4 flex-shrink-0 items-center">
            <Link
              href="/contact"
              aria-label="Start a Project with Lumora Triad"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-xl text-sm sm:text-base group whitespace-nowrap"
            >
              Start a Project
              <span aria-hidden="true" className="text-base group-hover:rotate-45 transition-transform duration-300">↗</span>
            </Link>
            <Link
              href="/work"
              aria-label="See Our Work"
              className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-4 text-foreground font-semibold border border-border rounded-full hover:bg-foreground hover:text-background transition-all duration-300 text-sm sm:text-base group whitespace-nowrap"
            >
              See our work
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
