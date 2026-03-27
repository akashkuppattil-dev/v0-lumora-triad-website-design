'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  {
    title: 'Web Development',
    description: 'React, Next.js, and Django backends built for scale, performance, and maintainability.',
    image: '/service-web-dev.jpg',
    slug: 'web-development'
  },
  {
    title: 'UI/UX Design',
    description: 'Digital products designed with precision, clarity, and a focus on user experience.',
    image: '/service-ui-design.jpg',
    slug: 'ui-design'
  },
  {
    title: 'Branding',
    description: 'Visual identity systems and brand strategies that resonate with modern audiences.',
    image: '/service-branding.jpg',
    slug: 'branding'
  },
  {
    title: 'Digital Strategy',
    description: 'Strategic planning and research-driven approaches to digital transformation.',
    image: '/service-strategy.jpg',
    slug: 'digital-strategy'
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

          {/* Main Header Statement */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-semibold leading-tight tracking-tight text-balance max-w-4xl">
              Solutions crafted for your business scale.
            </h2>
            <Link 
              href="/services/impact"
              className="group inline-flex items-center gap-2 text-foreground font-medium hover:underline transition-all duration-300 whitespace-nowrap text-lg"
            >
              See impact & stats
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Services Grid - Structured like About page */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-32">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
              >
                {/* Visual */}
                <div className="relative aspect-[16/10] mb-8 rounded-2xl overflow-hidden border border-border group bg-muted">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-3xl lg:text-4xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-lg text-muted-foreground font-normal leading-relaxed mb-8 max-w-md">
                    {service.description}
                  </p>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="mt-auto group inline-flex items-center gap-2 text-foreground font-medium hover:underline transition-all duration-300"
                  >
                    Explore Service
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
