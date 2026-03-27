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
          <h2 className="text-6xl lg:text-8xl font-bold leading-tight mb-8 max-w-5xl mx-auto text-balance">
            Let&apos;s build something exceptional.
          </h2>

          <p className="text-lg lg:text-xl text-background/80 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let&apos;s discuss how we can build a product that scales.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-4 bg-background text-foreground font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 group inline-flex items-center gap-2 whitespace-nowrap">
              Start Your Project
              <span className="font-light group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
            <button className="px-10 py-4 border-2 border-background text-background font-medium rounded-lg hover:bg-background/10 transition-all duration-300 group inline-flex items-center gap-2 whitespace-nowrap">
              View Our Work
              <span className="font-light group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
