'use client'

import { useState, useEffect } from 'react'

const STATS = [
  { number: '120+', label: 'Projects Delivered', description: 'Across web, mobile, and digital solutions' },
  { number: '45+', label: 'Global Clients', description: 'From startups to Fortune 500 companies' },
  { number: '8 yrs', label: 'Industry Experience', description: 'Proven expertise since 2016' },
  { number: '99.8%', label: 'Client Satisfaction', description: 'Trusted by industry leaders' }
]

const LOGOS = [
  'TechCorp', 'FinanceHub', 'E-Shop Pro', 'CloudSync', 'DataViz', 'StartupX',
  'EnterpriseCo', 'DesignStudio', 'BuildKit', 'ScaleUp'
]

export function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-32 bg-foreground text-background border-t border-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-background mb-2">
                {stat.number}
              </h3>
              <p className="text-sm font-medium text-background/80 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-background/60">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-background/20 mb-24" />

        {/* Clients Section */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-background/70 mb-8">
            Trusted By
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {LOGOS.map((logo, index) => (
              <div
                key={logo}
                className={`flex items-center justify-center h-20 border border-background/20 rounded-lg hover:border-background/40 transition-all duration-300 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: isVisible ? `${index * 50}ms` : '0ms' }}
              >
                <span className="text-sm font-medium text-background/70">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
