'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  {
    title: 'Web Design & Development',
    description: 'High-performance, responsive systems with modern UI/UX architecture and scalable backend integration.',
    image: '/service-web-development-showcase.jpg',
    includes: ['Next.js architecture', 'Core Web Vitals optimization', 'Custom API integration'],
    slug: 'web-development'
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful digital experiences focusing on conversion-centered design and accessibility.',
    image: '/service-ui-design-showcase.jpg',
    includes: ['Design systems (Figma)', 'Interactive prototyping', 'Accessibility audits'],
    slug: 'ui-ux-design'
  },
  {
    title: 'Branding & Identity',
    description: 'Strategic visual systems that define and elevate your brand presence in the modern market.',
    image: '/service-branding-showcase.jpg',
    includes: ['Visual identity systems', 'Digital brand guidelines', 'Logo & typography'],
    slug: 'branding'
  },
  {
    title: 'Backend & API Development',
    description: 'Robust, secure, and highly-performant server-side solutions for complex data orchestration.',
    image: '/project-admin-system.jpg',
    includes: ['Database architecture', 'Microservices logic', 'Enterprise security'],
    slug: 'backend-api'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Scalable commerce experiences designed for maximum conversion and mobile-first efficiency.',
    image: '/case-study-ecommerce.jpg',
    includes: ['Checkout optimization', 'Inventory automation', 'Payment orchestration'],
    slug: 'ecommerce'
  },
  {
    title: 'SEO & Growth',
    description: 'Technical SEO and organic growth strategies that increase your sustainable market reach.',
    image: '/service-strategy.jpg',
    includes: ['Code-level optimization', 'Content architecture', 'Conversion audits'],
    slug: 'seo-growth'
  },
  {
    title: 'AI Integration & Automation',
    description: 'Harnessing the power of LLMs and custom agents to modernize your business workflows.',
    image: '/case-study-saas.jpg',
    includes: ['Custom LLM agents', 'Process automation scripts', 'Intelligent UX'],
    slug: 'ai-automation'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing technical stewardship for critical systems requiring high uptime and security.',
    image: '/service-web-dev.jpg',
    includes: ['24/7 technical monitoring', 'Security patching', 'Performance tuning'],
    slug: 'maintenance'
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
      { threshold: 0 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-32 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-4'
          }`}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-foreground" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                  What we do
                </span>
              </div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-4">
                Services we provide.
              </h2>
            </div>
            <Link 
              href="/services/impact" 
              className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity border-b-2 border-foreground pb-1 flex-shrink-0"
            >
              See impact & stats →
            </Link>
          </div>

          {/* Staggered Services List */}
          <div className="space-y-48 lg:space-y-64">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-32 items-center min-h-[500px] transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '1000ms' }}
              >
                {/* Text Content */}
                <div className={`order-2 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-40 block mb-6">
                        0{index + 1}. Capability
                      </span>
                      <h3 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight leading-none text-balance">
                        {service.title}
                      </h3>
                      <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal max-w-lg mb-8">
                        {service.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-border opacity-60 group">
                      <div className="space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-widest">Selected Specs</span>
                        <ul className="space-y-2 text-sm font-medium">
                          {service.includes.map(spec => (
                            <li key={spec} className="flex items-center gap-3">
                              <div className="w-1 h-1 bg-foreground rounded-full" />
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-end">
                        <Link 
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:gap-4 transition-all"
                        >
                          Learn more
                          <span className="text-xl">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative group mb-8 lg:mb-0`}>
                   <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Interactive Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                   
                   {/* Background Decorative Element */}
                   <div className={`absolute -inset-4 bg-muted/40 -z-10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 ${index % 2 === 1 ? 'right-auto -left-10' : 'left-auto -right-10'}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
