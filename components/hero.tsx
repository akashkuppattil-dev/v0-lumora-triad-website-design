'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-32 pb-24 px-0 bg-background overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full flex flex-col items-center">
        {/* Top Content: Extreme Bold Headline */}
        <div
          className={`relative z-20 px-6 lg:px-8 max-w-[1200px] text-center transition-all duration-1000 -mb-8 sm:-mb-24 lg:-mb-32 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-balance text-foreground mb-4">
            BUILD DIGITAL<br/>
            EXPERIENCES
          </h1>
          <span className="text-base sm:text-2xl font-light tracking-widest text-muted-foreground uppercase opacity-80">
            Scaling Ambitious Brands
          </span>
        </div>

        <div
          className={`relative w-full aspect-video lg:aspect-[21/9] transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}
        >
          <div className="mx-0 sm:mx-6 lg:mx-8 h-full relative group">
            <img 
              src="/hero-lumora-display.jpg" 
              alt="Lumora Triad premium digital experience" 
              className="w-full h-full object-cover rounded-none sm:rounded-3xl border border-border shadow-[0_32px_64px_rgba(0,0,0,0.2)] hover:shadow-[0_48px_80px_rgba(0,0,0,0.25)] transition-shadow duration-700"
            />
          </div>
        </div>

        {/* Bottom Content: Minimalist Subtext and CTA - Overlapping Bottom of Image */}
        <div
          className={`relative z-20 px-6 lg:px-8 max-w-2xl text-center flex flex-col items-center -mt-12 sm:-mt-32 lg:-mt-48 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-base sm:text-xl text-muted-foreground font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg">
            We architect systems that scale. From premium design to engineering excellence, we partner with brands to build the future of the web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center">
            <button className="w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-foreground text-background font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg min-w-[200px]">
              Start Project
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
