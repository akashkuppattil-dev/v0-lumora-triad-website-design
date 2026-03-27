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
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 max-w-4xl mx-auto">
            Let's build something that looks premium and performs at scale.
          </h2>

          <p className="text-xl text-background/80 font-light mb-12 max-w-2xl mx-auto">
            Start your project today and discover what's possible when design meets engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-background text-foreground font-medium hover:bg-muted hover:text-foreground transition-all duration-300">
              Start Project →
            </button>
            <button className="px-8 py-3 border-2 border-background text-background font-medium hover:bg-background/10 transition-all duration-300">
              View Work →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
