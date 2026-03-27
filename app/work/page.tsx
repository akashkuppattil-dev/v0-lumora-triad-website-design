'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const PROJECTS = [
  {
    id: 1,
    title: 'FinTech Platform Redesign',
    category: 'Web Development',
    year: '2024',
    description: 'Enterprise-grade financial platform with real-time analytics',
    image: '/case-study-fintech.jpg',
    details: 'Transformed a legacy banking platform into a modern, secure fintech solution. Implemented real-time transaction processing and an intuitive dashboard that reduced user support tickets by 70%.',
    challenge: 'The legacy system was slow, confusing, and losing users to competitors. Security concerns and outdated UX were critical issues.',
    solution: 'We rebuilt the entire platform with modern tech stack, redesigned the UI/UX, and implemented bank-grade security. Result was a 45% increase in daily active users.',
    stats: [
      { label: 'Active Users', value: '+45%' },
      { label: 'Support Tickets', value: '-70%' },
      { label: 'Transaction Speed', value: '3x faster' }
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Platform Scale-up',
    category: 'Web Development + UI/UX',
    year: '2024',
    description: 'Complete redesign driving 300% conversion increase',
    image: '/case-study-ecommerce.jpg',
    details: 'Full-stack redesign of an e-commerce platform for a luxury brand. Improved user experience at every touchpoint, resulting in remarkable growth in conversions and revenue.',
    challenge: 'High bounce rates, abandoned carts, and outdated mobile experience were costing the client millions in lost revenue.',
    solution: 'Comprehensive UX audit, mobile-first redesign, streamlined checkout process, and performance optimization. Every page was rebuilt with conversion in mind.',
    stats: [
      { label: 'Conversion Lift', value: '+300%' },
      { label: 'Revenue Increase', value: '+250%' },
      { label: 'Mobile Traffic', value: '+180%' }
    ]
  },
  {
    id: 3,
    title: 'SaaS Dashboard Redesign',
    category: 'UI/UX Design + Web Development',
    year: '2024',
    description: 'Design system overhaul for enterprise SaaS platform',
    image: '/case-study-saas.jpg',
    details: 'Created a comprehensive design system and rebuilt the entire dashboard for a B2B SaaS company. Standardized components improved consistency and reduced development time by 40%.',
    challenge: 'Inconsistent design across the product, no design system, and frustrated users struggling with navigation and feature discovery.',
    solution: 'Built complete design system with 120+ components, redesigned information architecture, and implemented new navigation. Team adoption reached 98% within first month.',
    stats: [
      { label: 'Components', value: '120+' },
      { label: 'Dev Time', value: '-40%' },
      { label: 'Team Adoption', value: '98%' }
    ]
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Our latest work
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-normal max-w-3xl leading-relaxed">
              Selected case studies showcasing our approach to solving complex problems through design, development, and strategy. Each project demonstrates our commitment to delivering measurable results.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-32">
              {PROJECTS.map((project, index) => (
                <div key={project.id} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="mb-6">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
                      {project.title}
                    </h2>
                    
                    <p className="text-sm text-muted-foreground font-normal mb-6 uppercase tracking-wide">
                      {project.category}
                    </p>

                    <p className="text-base lg:text-lg text-muted-foreground font-normal leading-relaxed mb-8">
                      {project.details}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-6 mb-8 p-6 bg-secondary rounded-lg border border-border">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground font-normal leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground font-normal leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="p-4 border border-border rounded-lg">
                          <div className="text-xl sm:text-2xl font-semibold mb-1">{stat.value}</div>
                          <p className="text-xs text-muted-foreground font-normal">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <button className="group inline-flex items-center gap-2 text-foreground font-medium text-sm hover:underline transition-all duration-200">
                      View case study
                      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </button>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden border border-border group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg opacity-90 font-normal mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200 group text-sm"
            >
              Start your project
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
