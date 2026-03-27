'use client'

import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'React, Next.js, and Django backends built for scale, performance, and maintainability.',
    image: '/service-web-dev.jpg'
  },
  {
    title: 'UI/UX Design',
    description: 'Digital products designed with precision, clarity, and a focus on user experience.',
    image: '/service-ui-design.jpg'
  },
  {
    title: 'Branding',
    description: 'Visual identity systems and brand strategies that resonate with modern audiences.',
    image: '/service-branding.jpg'
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning and research-driven approaches to digital transformation.',
    image: '/service-strategy.jpg'
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

          <h2 className="text-6xl lg:text-7xl font-bold mb-20 text-balance">
            Services we provide
          </h2>

          {/* Services Grid - Alternating Layout */}
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
              >
                {/* Content - alternates position on desktop */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-6">{service.title}</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <button className="group inline-flex items-center gap-3 text-foreground font-medium hover:translate-x-2 transition-transform duration-300">
                    Learn more
                    <span className="text-lg">→</span>
                  </button>
                </div>

                {/* Image - alternates position on desktop */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden border border-border group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
