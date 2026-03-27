'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Floating Tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Django', 'UI/UX', 'Branding', 'SEO', 'AI'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-muted-foreground border border-border px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold leading-tight tracking-tight text-balance text-foreground">
              Build digital experiences that scale.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-xl">
              We craft premium digital products for ambitious brands. From web development and design to AI integration, we build systems that perform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="px-6 py-3 bg-foreground text-background font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200 group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                Start Your Project
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
              <button className="px-6 py-3 text-foreground font-medium hover:underline transition-all duration-200 group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm">
                View Our Work
                <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 lg:h-full min-h-[500px] transition-all duration-1000 delay-300 flex items-center justify-center ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <img 
              src="/hero-mockup.jpg" 
              alt="Premium web design mockup on laptop" 
              className="w-full h-full object-cover rounded-lg border border-border shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
