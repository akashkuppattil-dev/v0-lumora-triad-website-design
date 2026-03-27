'use client'

import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'React, Next.js, and Django backends built for scale, performance, and maintainability.',
    icon: '→'
  },
  {
    title: 'UI/UX Design',
    description: 'Digital products designed with precision, clarity, and a focus on user experience.',
    icon: '→'
  },
  {
    title: 'Branding',
    description: 'Visual identity systems and brand strategies that resonate with modern audiences.',
    icon: '→'
  },
  {
    title: 'SEO & Growth',
    description: 'Technical SEO optimization and growth strategies for sustainable business expansion.',
    icon: '→'
  },
  {
    title: 'AI Integrations',
    description: 'Custom AI solutions and integrations that enhance product capabilities and user engagement.',
    icon: '→'
  }
]

export function Services() {
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
    <section id="services" className="py-24 px-6 lg:px-8 bg-background border-t border-border">
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
              What We Do
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-20">
            Core services
          </h2>

          {/* Services Grid */}
          <div className="space-y-px">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="group py-8 px-8 border border-border hover:bg-secondary transition-colors duration-300 cursor-pointer"
                style={{
                  animationDelay: isVisible ? `${index * 50}ms` : '0ms',
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-xl font-light text-muted-foreground group-hover:text-foreground transition-colors pt-1">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
