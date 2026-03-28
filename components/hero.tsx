'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-36 lg:pt-48 pb-16 px-0 bg-background overflow-hidden min-h-[70vh] flex flex-col justify-start">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <div
          className={`relative w-full aspect-video lg:aspect-[16/9] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
            }`}
        >
          <div className="mx-4 sm:mx-6 lg:mx-8 h-full relative group">
            <img
              src="/hero-lumora-display.jpg"
              alt="Lumora Triad premium digital experience"
              className="w-full h-full object-cover rounded-2xl sm:rounded-3xl border border-border/50 shadow-[0_16px_48px_rgba(0,0,0,0.15)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.2)] transition-shadow duration-700"
            />
          </div>
        </div>

        {/* Bottom Content: Minimalist Subtext and CTA */}
        <div
          className={`relative z-20 px-6 lg:px-8 max-w-3xl text-center flex flex-col items-center mt-12 lg:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-xl sm:text-2xl text-foreground font-medium leading-relaxed mb-10 sm:mb-12 max-w-2xl tracking-tight">
            We design and build modern web systems for growing businesses. Focused on clarity, credibility, and engineering excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center">
            <button className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg min-w-[200px] flex items-center justify-center gap-2 group">
              Start Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full sm:w-auto px-10 sm:px-8 py-4 sm:py-5 text-foreground font-semibold hover:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 group text-base sm:text-lg">
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
