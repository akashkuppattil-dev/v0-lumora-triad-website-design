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
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight max-w-5xl mb-16 text-balance">
              Design and engineering for ambitious brands.
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
                Lumora Triad is a digital studio of designers, developers, and strategists who believe in the power of thoughtful design paired with robust engineering.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed">
                We build digital systems that scale. From web development and UI/UX design to branding and AI integrations, we create experiences that perform, inspire, and drive measurable business growth.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border">
            {[
              { number: '120+', label: 'Projects' },
              { number: '45+', label: 'Global Clients' },
              { number: '8 yrs', label: 'Industry Exp' },
              { number: '99.8%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className={`text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-xs lg:text-sm text-muted-foreground font-light uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
