'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const PROJECTS = [
  {
    title: 'Hexamech Linich Tools',
    category: 'Industrial Engineering',
    outcome: 'A modern industrial catalog and tools marketplace for precision engineering.',
    image: '/project-hexamech-v2.png'
  },
  {
    title: 'BASIC Trading Company',
    category: 'Wholesale & Supply',
    outcome: 'Wholesale event materials platform for high-volume supply chain management.',
    image: '/project-trading-v2.png'
  },
  {
    title: 'E-commerce Platform',
    category: 'Digital Commerce',
    outcome: 'Scalable luxury storefront optimized for high conversion and mobile accessibility.',
    image: '/case-study-ecommerce.jpg'
  },
  {
    title: 'FinTech Ecosystem',
    category: 'Product Engineering',
    outcome: 'Enterprise-grade financial dashboard with real-time transaction processing.',
    image: '/case-study-fintech.jpg'
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    outcome: 'Advanced design system and interactive dashboard for enterprise B2B SaaS.',
    image: '/case-study-saas.jpg'
  }
]

export function FeaturedWork() {
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
    <section id="work" className="py-12 lg:py-24 px-4 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 lg:mb-24 gap-6 lg:gap-12">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-4 lg:mb-8">
                <div className="w-12 h-px bg-foreground" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Latest Showcase
                </span>
              </div>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
                Selected<br/>Work.
              </h2>
            </div>
            <div className="lg:mb-4">
              <Link href="/work" className="text-xs font-black uppercase tracking-widest border-b-2 border-foreground pb-2 hover:opacity-60 transition-all">
                View All Case Studies →
              </Link>
            </div>
          </div>

          {/* High-Impact Vertical Showcase (One Below Another) */}
          <div className="space-y-12 lg:space-y-48">
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className="group relative flex flex-col gap-12 transition-all duration-700"
              >
                {/* Immersive Full-Width Image Container */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl lg:rounded-[2.5rem] overflow-hidden border border-border bg-secondary shadow-lg group-hover:shadow-[0_40px_120px_-20px_rgba(0,0,0,0.25)] transition-all duration-1000">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} case study by Lumora Triad`}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    loading="lazy"
                  />
                  {/* Layered Content Overlay (Subtle) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-background/90 backdrop-blur-xl px-5 py-2.5 rounded-full border border-border shadow-2xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Minimalist Info Cluster - Positioned for Flow */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between px-1 gap-3 lg:gap-8">
                  <div className="max-w-xl">
                    <h3 className="text-2xl lg:text-6xl font-bold tracking-tighter mb-2 lg:mb-4 uppercase leading-none group-hover:tracking-normal transition-all duration-700">
                      {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                      {project.outcome}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <Link href="/work" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-foreground/10 pb-2 group-hover:border-foreground group-hover:gap-6 transition-all duration-700">
                      Explore Case Study <span>→</span>
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

