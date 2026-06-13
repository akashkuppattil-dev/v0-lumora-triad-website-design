'use client'

import { useEffect, useRef, useState } from 'react'

export function About({ showBorder = true, className = '' }: { showBorder?: boolean; className?: string } = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className={`py-12 lg:py-16 px-4 lg:px-8 bg-transparent ${showBorder ? 'border-t border-white/10' : ''} ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-8 lg:mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Studio
            </span>
          </div>

          {/* Main Statement */}
          <div className="mb-8 lg:mb-20">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9] max-w-4xl mb-8 lg:mb-16 text-balance tracking-tighter">
              A premium web and product studio. Small team, sharp execution.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                Lumora Triad is a premium web and product design studio based in India. We partner with early-stage startups, growing brands, and established businesses to build credible, custom online experiences—never templated.
              </p>
              <div className="space-y-8">
                <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                  We manage every layer of the product lifecycle—from UI/UX design and frontend engineering to custom backends and API integrations. One cohesive team, end-to-end ownership, and transparent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
