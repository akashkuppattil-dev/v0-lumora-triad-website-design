'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const SERVICES_DETAILED = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Performance-driven digital products',
    description: 'We build web applications with modern technologies that scale. From Next.js frontends to Django backends, we create systems designed for growth and reliability.',
    features: [
      'Next.js & React applications',
      'Node.js & Django backends',
      'Database architecture & optimization',
      'API design & integration',
      'Performance optimization',
      'Deployment & DevOps'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'User-centered digital experiences',
    description: 'Thoughtful design that drives engagement and conversion. We create intuitive interfaces that users love, backed by research and best practices.',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design systems',
      'Interaction design',
      'Accessibility & testing',
      'Design to development handoff'
    ]
  },
  {
    id: 'branding',
    title: 'Branding',
    subtitle: 'Visual identity & brand strategy',
    description: 'We create comprehensive brand identities that resonate with your audience. From logo design to brand guidelines, we establish clarity and consistency.',
    features: [
      'Brand strategy & positioning',
      'Logo design & variations',
      'Color palettes & typography',
      'Brand guidelines',
      'Marketing collateral',
      'Brand application'
    ]
  },
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    subtitle: 'Growth-focused strategic planning',
    description: 'We help businesses define their digital roadmap. Through research and analysis, we identify opportunities and create actionable strategies.',
    features: [
      'Market & competitor analysis',
      'Digital roadmap planning',
      'Technology recommendations',
      'Growth strategies',
      'Digital transformation',
      'Implementation planning'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32">
        {/* Header Section */}
        <section className="pb-24 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Our services
            </h1>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl">
              Comprehensive digital solutions to help your business grow, scale, and succeed in an increasingly digital world.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {SERVICES_DETAILED.map((service) => (
                <div
                  key={service.id}
                  className="p-8 border border-border rounded-lg hover:border-foreground transition-colors duration-300 group"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">{service.subtitle}</p>
                  </div>

                  <p className="text-base text-muted-foreground font-normal leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider">What's included</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground font-normal flex items-start gap-3">
                          <span className="text-foreground font-semibold mt-0.5">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="group/btn inline-flex items-center gap-2 text-foreground font-medium text-sm hover:underline transition-all duration-200">
                    Learn more
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 lg:px-8 bg-secondary border-t border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-muted-foreground font-normal mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for your business and create a plan together.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200 group text-sm"
            >
              Schedule a consultation
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
