'use client'

import { useEffect, useRef, useState } from 'react'

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-32 px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl mx-auto text-balance tracking-tighter">
            Have a project in mind? Let&apos;s talk.
          </h2>

          <p className="text-lg lg:text-xl text-background/70 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
            We work with a focused number of clients at a time — which means you get real attention, clear communication, and work that ships.
          </p>
          <p className="text-sm text-background/50 font-medium mb-14">
            Currently accepting new projects for Q2 2025.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:lumoratriad@gmail.com" className="px-10 py-4 bg-background text-foreground font-bold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 group inline-flex items-center gap-2 whitespace-nowrap text-base">
              Start Your Project
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a href="/work" className="px-10 py-4 text-background font-semibold hover:opacity-70 transition-all duration-300 group inline-flex items-center gap-2 whitespace-nowrap text-base">
              See Our Work
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
