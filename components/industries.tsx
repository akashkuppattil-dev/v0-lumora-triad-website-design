'use client'

import { useState, useEffect } from 'react'

const INDUSTRIES = [
  { name: 'SaaS & Software', description: 'B2B platforms, dashboards, and developer tools' },
  { name: 'E-Commerce', description: 'High-converting storefronts and product experiences' },
  { name: 'Fintech', description: 'Secure financial applications and compliance-focused UX' },
  { name: 'Healthcare', description: 'Patient-centric platforms and data management' },
  { name: 'Startups', description: 'MVP to scale-ready digital products' },
  { name: 'Enterprise', description: 'Complex systems and digital transformation' }
]

export function Industries() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`mb-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
            Expertise Across
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            From startups to enterprises, we&apos;ve built digital products that drive growth across diverse sectors.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry, index) => (
            <div
              key={industry.name}
              className={`group px-8 py-10 border border-border rounded-lg hover:border-foreground hover:bg-secondary transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:translate-x-1 transition-transform">
                  {industry.name}
                </h3>
                <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                  →
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
