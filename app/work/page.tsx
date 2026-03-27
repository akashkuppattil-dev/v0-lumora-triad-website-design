'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const PROJECTS = [
  {
    id: 1,
    title: 'Design System Platform',
    category: 'Web Development + UI/UX',
    year: '2024',
    description: 'Comprehensive design system for enterprise teams',
    image: '/project-1.jpg',
    details: 'Built a scalable design system and component library for a Fortune 500 company. Increased design consistency by 85% and reduced development time by 40%.',
    stats: [
      { label: 'Users', value: '2000+' },
      { label: 'Components', value: '150+' },
      { label: 'Time saved', value: '40%' }
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Transformation',
    category: 'Full-Stack Development',
    year: '2024',
    description: '300% increase in conversion rate through UX optimization',
    image: '/project-2.jpg',
    details: 'Complete redesign and rebuild of an e-commerce platform resulting in significant improvements in user engagement and conversion rates.',
    stats: [
      { label: 'Conversion lift', value: '+300%' },
      { label: 'Revenue increase', value: '+250%' },
      { label: 'Load time', value: '60% faster' }
    ]
  },
  {
    id: 3,
    title: 'Brand Identity Suite',
    category: 'Branding + Design',
    year: '2023',
    description: 'Complete visual identity system and brand guidelines',
    image: '/project-3.jpg',
    details: 'Developed comprehensive brand identity including logo, color system, typography, and brand guidelines for a growing tech startup.',
    stats: [
      { label: 'Brand touchpoints', value: '50+' },
      { label: 'Guidelines pages', value: '100+' },
      { label: 'Team adoption', value: '98%' }
    ]
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="pb-24 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Featured work
            </h1>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl">
              A selection of our recent projects that showcase our approach to design, development, and strategy.
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

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-secondary rounded-lg">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl sm:text-3xl font-semibold mb-1">{stat.value}</div>
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
