'use client'

import { useEffect, useRef, useState } from 'react'

export function About() {
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
    <section id="about" className="py-24 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Studio
            </span>
          </div>

          {/* Main Statement */}
          <div className="mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-12">
              Built for brands that demand clarity, performance, and modern design.
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Lumora Triad is a digital studio of designers and developers who believe in the power of thoughtful design paired with solid engineering.
              </p>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                We craft digital experiences that don't just look beautiful—they perform at scale, drive measurable results, and establish lasting brand identity for forward-thinking companies.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 py-16 border-y border-border">
            {[
              { number: '20+', label: 'Projects Delivered' },
              { number: '10+', label: 'Brands Transformed' },
              { number: '100%', label: 'Focused Execution' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-sm text-muted-foreground font-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
