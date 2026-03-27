'use client'

import { useEffect, useRef, useState } from 'react'

const PROCESS_STEPS = [
  { number: '01', title: 'Discover', description: 'We deeply understand your business, goals, and target audience.' },
  { number: '02', title: 'Design', description: 'Crafting intuitive, beautiful experiences that solve real problems.' },
  { number: '03', title: 'Develop', description: 'Building scalable, performant digital products with modern tech.' },
  { number: '04', title: 'Launch', description: 'Strategic release and optimization for maximum impact.' },
  { number: '05', title: 'Support', description: 'Ongoing optimization, maintenance, and growth partnerships.' }
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

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
              Methodology
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-20">
            Our process
          </h2>

          {/* Process Steps */}
          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-12 pb-12 border-b border-border last:border-b-0"
                style={{
                  animationDelay: isVisible ? `${index * 80}ms` : '0ms',
                  animation: isVisible ? 'slideIn 0.7s ease-out forwards' : 'none'
                }}
              >
                {/* Step Number */}
                <div className="flex-shrink-0 min-w-32">
                  <div className="text-6xl font-bold text-muted-foreground">{step.number}</div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}
