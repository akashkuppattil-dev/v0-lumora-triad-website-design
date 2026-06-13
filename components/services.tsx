'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SERVICES = [
  {
    title: 'Web Design & Development',
    description: 'Fast, responsive websites and web apps built with modern frontend frameworks. Designed to load quickly, look sharp, and convert.',
    image: '/service-web-development-showcase.png',
    includes: ['Next.js & React', 'Mobile-first design', 'CMS integration'],
    slug: 'web-development'
  },
  {
    title: 'UI/UX Design',
    description: 'Clean, intuitive interfaces designed to build trust and drive action. From wireframes to production-ready Figma files.',
    image: '/service-ui-design-showcase.png',
    includes: ['Figma design systems', 'User flow mapping', 'Responsive prototyping'],
    slug: 'ui-ux-design'
  },
  {
    title: 'Branding, SEO & Growth',
    description: 'Comprehensive brand identities and growth strategies designed to drive organic visibility, social media presence, and sustainable business growth.',
    image: '/service-branding-seo-growth.png',
    includes: ['Brand & Social Strategy', 'Technical SEO & Audits', 'Digital Marketing Campaigns'],
    slug: 'branding-seo-growth'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Conversion-focused online stores built for clarity and ease of purchase on any device.',
    image: '/service-ecommerce-showcase.png',
    includes: ['Product & checkout UX', 'Payment gateway setup', 'Inventory management'],
    slug: 'ecommerce'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing updates, bug fixes, and performance improvements so your site keeps running smoothly.',
    image: '/service-maintenance-support.jpg',
    includes: ['Monthly update plans', 'Bug fixes & patches', 'Performance checks'],
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
    <section id="services" className="py-12 lg:py-16 px-4 lg:px-8 bg-transparent border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-4'
            }`}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-24 gap-4 lg:gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4 lg:mb-8">
                <div className="w-12 h-px bg-foreground" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground opacity-60">
                  What We Do
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase mb-3">
                Services We Provide
              </h2>
            </div>
            <Link
              href="/services/impact"
              className="text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity border-b-2 border-foreground pb-1 flex-shrink-0"
            >
              See impact & stats →
            </Link>
          </div>

          {/* Services List */}
          <div className="divide-y divide-border lg:divide-y-0 lg:space-y-32">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '1000ms' }}
              >
                {/* ── DESKTOP: 2-column alternating grid ── */}
                <div className="hidden lg:grid lg:grid-cols-2 lg:gap-32 items-center min-h-[500px]">
                  {/* Text Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
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
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                    <div className="relative h-[600px] w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                      <Image
                        src={service.image}
                        alt={`${service.title} service by Lumora Triad`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className={`absolute -inset-4 bg-muted/40 -z-10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000 ${index % 2 === 1 ? 'right-auto -left-10' : 'left-auto -right-10'}`} />
                  </div>
                </div>

                {/* ── MOBILE: stacked — title/desc → image → specs ── */}
                <div className="lg:hidden py-8 space-y-6">
                  {/* 1. Number + Title + Description */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-40 block mb-4">
                      0{index + 1}. Capability
                    </span>
                    <h3 className="text-3xl font-bold mb-4 tracking-tight leading-tight text-balance">
                      {service.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* 2. Image */}
                  <div className="relative group">
                    <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-xl">
                      <Image
                        src={service.image}
                        alt={`${service.title} service by Lumora Triad`}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 1024px) calc(100vw - 32px), 0px"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* 3. Selected Specs + Link */}
                  <div className="pt-6 border-t border-border opacity-70">
                    <span className="text-[10px] font-black uppercase tracking-widest block mb-3">Selected Specs</span>
                    <ul className="space-y-2 text-sm font-medium mb-6">
                      {service.includes.map(spec => (
                        <li key={spec} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-foreground rounded-full flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest"
                    >
                      Learn more <span className="text-xl">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
