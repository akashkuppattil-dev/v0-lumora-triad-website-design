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

          <h2 className="text-6xl lg:text-7xl font-bold mb-24 text-balance">
            How we work
          </h2>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`group p-8 rounded-lg border border-border hover:border-foreground hover:bg-secondary transition-all duration-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {/* Step Number */}
                <div className="text-5xl lg:text-6xl font-bold text-muted-foreground group-hover:text-foreground transition-colors mb-6">
                  {step.number}
                </div>

                {/* Step Content */}
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-foreground transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm lg:text-base text-muted-foreground font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow indicator */}
                <div className="mt-6 text-lg font-light text-muted-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {index < PROCESS_STEPS.length - 1 && '↓'}
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
