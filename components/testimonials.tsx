'use client'

import { useState, useEffect, useRef } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Lumora Triad transformed our entire digital presence. Their attention to detail and strategic thinking elevated our brand to new heights.',
    author: 'Sarah Chen',
    role: 'Founder, TechVenture',
    company: 'TechVenture'
  },
  {
    quote: 'Working with this team was like having product visionaries on staff. They understood our goals and delivered solutions that exceeded expectations.',
    author: 'Marcus Johnson',
    role: 'CEO, Innovation Labs',
    company: 'Innovation Labs'
  },
  {
    quote: 'The combination of beautiful design and solid engineering is rare. They delivered a platform that our users love and our business depends on.',
    author: 'Alex Rodriguez',
    role: 'Product Manager, Growth Inc',
    company: 'Growth Inc'
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
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

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="py-24 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Social Proof
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-20">
            Trusted by leading brands
          </h2>

          {/* Testimonial Display */}
          <div className="min-h-80">
            <div className="space-y-8">
              <blockquote className="text-3xl lg:text-4xl font-bold leading-tight">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              <div className="space-y-2">
                <p className="text-lg font-medium">{TESTIMONIALS[activeIndex].author}</p>
                <p className="text-muted-foreground font-light">
                  {TESTIMONIALS[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 pt-12 border-t border-border">
            <button
              onClick={handlePrev}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicators */}
            <div className="flex gap-2 flex-1">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-foreground' : 'w-2 bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
