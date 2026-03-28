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
          <h2 className="text-6xl lg:text-8xl font-bold leading-tight mb-8 max-w-5xl mx-auto text-balance tracking-tighter">
            Let&apos;s build something that looks premium and performs at scale.
          </h2>

          <p className="text-lg lg:text-xl text-background/80 font-light mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to evolve your digital presence? We bridge the gap between design and high-performance engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-background text-foreground font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200 group inline-flex items-center gap-2 whitespace-nowrap text-sm">
              Start Your Project
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <button className="px-8 py-3 text-background font-medium hover:underline transition-all duration-200 group inline-flex items-center gap-2 whitespace-nowrap text-sm">
              View Our Work
              <span className="text-base group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
