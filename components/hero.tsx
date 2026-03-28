'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-36 sm:pt-40 lg:pt-48 pb-10 px-0 bg-background overflow-hidden flex flex-col justify-start">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        <div
          className={`relative w-full aspect-[3/2] sm:aspect-[16/10] lg:aspect-[16/9] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
            }`}
        >
          <div className="mx-3 sm:mx-6 lg:mx-8 h-full relative group">
            <img
              src="/hero-lumora-display.jpg"
              alt="Lumora Triad — Web design and engineering studio"
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl border border-border/50 shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.15)] transition-shadow duration-700"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div
          className={`relative z-20 px-5 lg:px-8 max-w-3xl w-full text-center flex flex-col items-center mt-8 sm:mt-12 lg:mt-16 pb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h1 className="text-xl sm:text-3xl lg:text-4xl text-foreground font-semibold leading-snug mb-3 sm:mb-4 max-w-2xl tracking-tight">
            A web & product studio for businesses that want to look credible and move fast.
          </h1>
          <p className="text-sm sm:text-lg text-muted-foreground font-normal leading-relaxed mb-8 sm:mb-12 max-w-xl">
            We handle design, engineering, and delivery — so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto items-center">
            <button className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl text-sm sm:text-lg flex items-center justify-center gap-2 group">
              Start a Project
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="w-full sm:w-auto px-8 sm:px-8 py-3 sm:py-5 text-foreground font-semibold hover:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-lg border border-border rounded-full sm:border-0 sm:rounded-none">
              See Our Work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
