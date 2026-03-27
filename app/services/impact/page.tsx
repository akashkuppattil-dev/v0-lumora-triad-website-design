'use client'

import Link from 'next/link'
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react'

const IMPACT_STATS = [
  { icon: 'users', value: '45+', label: 'Global Clients', description: 'Trusted by leading brands worldwide' },
  { icon: 'award', value: '120+', label: 'Projects Delivered', description: 'Spanning web, design, and strategy' },
  { icon: 'trending', value: '8 yrs', label: 'Industry Experience', description: 'Built expertise over time' },
  { icon: 'chart', value: '$50M+', label: 'Client Revenue Impact', description: 'Measurable business growth' }
]

const INDUSTRY_BREAKDOWN = [
  { name: 'SaaS & Tech', percentage: 35, count: 42 },
  { name: 'E-Commerce', percentage: 25, count: 30 },
  { name: 'Finance & FinTech', percentage: 20, count: 24 },
  { name: 'Healthcare', percentage: 12, count: 14 },
  { name: 'Enterprise', percentage: 8, count: 10 }
]

const SUCCESS_METRICS = [
  {
    category: 'Web Development',
    metrics: [
      { label: 'Average Performance Improvement', value: '60% faster' },
      { label: 'Avg. SEO Ranking Increase', value: '+42 positions' },
      { label: 'Uptime Reliability', value: '99.9%' },
      { label: 'Client Retention Rate', value: '92%' }
    ]
  },
  {
    category: 'UI/UX Design',
    metrics: [
      { label: 'Average Conversion Lift', value: '+145%' },
      { label: 'User Satisfaction Score', value: '4.8/5.0' },
      { label: 'Accessibility Compliance', value: 'WCAG AA' },
      { label: 'Design System Adoption', value: '96%' }
    ]
  },
  {
    category: 'Branding',
    metrics: [
      { label: 'Brand Recognition Increase', value: '+78%' },
      { label: 'Brand Consistency Score', value: '95%' },
      { label: 'Touchpoint Coverage', value: '50+' },
      { label: 'Team Alignment', value: '99%' }
    ]
  },
  {
    category: 'Digital Strategy',
    metrics: [
      { label: 'Strategy Implementation Success', value: '87%' },
      { label: 'Time-to-Market Improvement', value: '35% faster' },
      { label: 'Cost Optimization', value: '-28%' },
      { label: 'ROI Achievement', value: '340%' }
    ]
  }
]

export default function ImpactPage() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users size={32} className="text-foreground" />
      case 'award':
        return <Award size={32} className="text-foreground" />
      case 'trending':
        return <TrendingUp size={32} className="text-foreground" />
      case 'chart':
        return <BarChart3 size={32} className="text-foreground" />
      default:
        return null
    }
  }

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Real results, measurable impact
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground font-normal max-w-3xl mx-auto leading-relaxed">
              We don't just build beautiful products. We deliver measurable business outcomes that drive growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <div 
                key={index}
                className="p-8 border border-border rounded-xl hover:bg-secondary transition-colors duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIconComponent(stat.icon)}
                </div>
                <div className="text-4xl font-semibold mb-2">{stat.value}</div>
                <div className="text-sm font-semibold uppercase tracking-widest text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground font-normal">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16 text-balance">
            Industries served
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {INDUSTRY_BREAKDOWN.map((industry, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{industry.name}</span>
                    <span className="text-sm text-muted-foreground">{industry.count} projects</span>
                  </div>
                  <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-foreground rounded-full transition-all duration-500"
                      style={{ width: `${industry.percentage}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">{industry.percentage}%</span>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <div>
                <h3 className="text-3xl font-semibold mb-4">Diverse expertise</h3>
                <p className="text-muted-foreground font-normal leading-relaxed mb-6">
                  Our experience spans multiple industries, giving us unique insights into different market dynamics, user behaviors, and business models.
                </p>
                <p className="text-muted-foreground font-normal leading-relaxed">
                  This breadth of experience means we can bring best practices from one industry to solve problems in another, creating innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics by Category */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16 text-balance">
            Success metrics by service
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {SUCCESS_METRICS.map((section, index) => (
              <div key={index} className="border border-border rounded-xl p-8 hover:bg-secondary transition-colors duration-300">
                <h3 className="text-2xl font-semibold mb-8">{section.category}</h3>
                <div className="space-y-6">
                  {section.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="flex justify-between items-start">
                      <span className="text-muted-foreground font-normal text-sm">{metric.label}</span>
                      <span className="font-semibold text-lg text-foreground">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl sm:text-3xl font-semibold leading-relaxed mb-8">
            "Lumora Triad didn't just build us a website—they transformed how we operate. The platform they created has been fundamental to our 300% revenue growth over two years."
          </blockquote>
          <div>
            <p className="font-semibold mb-1">Sarah Chen</p>
            <p className="text-sm opacity-80">CEO, TechFlow Inc.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Let's create measurable impact for your business
          </h2>
          <p className="text-lg text-muted-foreground font-normal mb-8 leading-relaxed">
            Explore our services and see how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
            >
              Explore Services
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-foreground text-foreground font-medium rounded-full hover:bg-foreground hover:text-background transition-all duration-200"
            >
              Schedule a call
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
