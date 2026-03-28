'use client'

import Link from 'next/link'

const SERVICES_DETAILED = [
  {
    id: 'web-development',
    title: 'Web Design & Development',
    subtitle: 'High-performance, responsive systems',
    image: '/service-web-development-showcase.jpg',
    description: 'We build web applications with modern technologies that scale. From Next.js frontends to robust API architectures, we create systems designed for growth and reliability.',
    features: [
      'Next.js & React applications',
      'Performance optimization',
      'CMS architecture & integration',
      'Interactive design systems',
      'Custom web animations',
      'Deployment & Vercel orchestration'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'User-centered digital products',
    image: '/service-ui-design-showcase.jpg',
    description: 'Thoughtful design that drives engagement and conversion. We create intuitive interfaces that users love, backed by research and modern design principles.',
    features: [
      'User journey mapping',
      'High-fidelity prototyping',
      'Accessibility audits',
      'Visual design systems',
      'Interaction architecture',
      'Design handoff systems'
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    subtitle: 'Visual systems & brand strategy',
    image: '/service-branding-showcase.jpg',
    description: 'We create comprehensive brand identities that resonate with modern audiences. From logo design to brand guidelines, we establish clarity and consistency.',
    features: [
      'Brand strategy & positioning',
      'Logo & visual identity',
      'Typography & color systems',
      'Digital brand guidelines',
      'Marketing collateral design',
      'Brand consistency audits'
    ]
  },
  {
    id: 'backend-api',
    title: 'Backend & API Development',
    subtitle: 'Robust, secure server-side logic',
    image: '/service-backend-v2.png',
    description: 'We architect and build scalable server-side solutions and integrations. Focused on data integrity, security, and high-performance system communication.',
    features: [
      'Django & Python backends',
      'Node.js & Go solutions',
      'Database architecture',
      'REST & GraphQL API design',
      'Third-party integrations',
      'Cloud infrastructure management'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    subtitle: 'Scalable commerce experiences',
    image: '/case-study-ecommerce.jpg',
    description: 'Full-service digital commerce solutions built for growth. We help brands scale their online sales through custom storefronts and optimized checkout flows.',
    features: [
      'Custom store development',
      'Seamless checkout experiences',
      'Payment gateway orchestration',
      'Inventory & CRM integration',
      'Conversion rate optimization',
      'Global commerce strategy'
    ]
  },
  {
    id: 'seo-growth',
    title: 'SEO & Growth',
    subtitle: 'Organic visibility & performance',
    image: '/service-strategy.jpg',
    description: 'Technical SEO and digital marketing strategies to increase your business reach and conversion efficiency through performance-driven approaches.',
    features: [
      'Technical SEO & code audits',
      'Core Web Vitals optimization',
      'Analytical growth tracking',
      'Content strategy & execution',
      'Conversion funnel analysis',
      'Performance marketing strategy'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Integration & Automation',
    subtitle: 'Modernizing business workflows',
    image: '/case-study-saas.jpg',
    description: 'Leveraging modern AI and automation to reduce costs and improve business efficiency through custom agents and intelligent process design.',
    features: [
      'Custom LLM implementations',
      'Intelligent process automation',
      'AI-driven user experiences',
      'Workflow optimization scripts',
      'Data-driven AI consultation',
      'Automated reporting systems'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    subtitle: 'Ongoing technical partnership',
    image: '/service-web-dev.jpg',
    description: 'Reliable long-term support to ensure your digital systems remain stable, secure, and performant as your business continues to grow.',
    features: [
      '24/7 technical monitoring',
      'Proactive security updates',
      'Incremental system improvements',
      'Performance tuning & scaling',
      'Direct technical consultation',
      'Priority support access'
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-32 lg:pt-48 pb-24 px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <section className="mb-32">
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter mb-16 uppercase">
              Capabilities.
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-normal max-w-2xl leading-relaxed">
              We provide a balanced ecosystem of design and engineering services. Our solutions are built to scale, perform, and deliver long-term business value.
            </p>
          </section>

          {/* Services List - Clean & Professional */}
          <div className="space-y-64">
            {SERVICES_DETAILED.map((service, index) => {
              // Create a rhythmic alternating pattern (0, 1, 2)
              const pattern = index % 3;
              
              return (
                <section 
                  key={service.id} 
                  className="grid lg:grid-cols-3 gap-12 lg:gap-20 pt-24 border-t border-border group"
                >
                  {/* Info Column */}
                  <div className={`space-y-8 ${
                    pattern === 1 ? 'lg:order-2' : 
                    pattern === 2 ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <div className="flex items-center gap-4 opacity-40 text-background mix-blend-difference">
                      <span className="text-sm font-black italic">0{index + 1}</span>
                      <div className="w-8 h-px bg-foreground" />
                    </div>
                    <div>
                      <h2 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tighter uppercase">{service.title}</h2>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">{service.subtitle}</p>
                      <p className="text-base text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>
                    </div>
                    <Link 
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:gap-4 transition-all"
                    >
                      View detailed scope <span>→</span>
                    </Link>
                  </div>

                  {/* Image Column */}
                  <div className={`relative aspect-square lg:aspect-auto h-full min-h-[450px] rounded-3xl overflow-hidden border border-border bg-secondary group-hover:shadow-2xl transition-all duration-700 ${
                    pattern === 1 ? 'lg:order-1' :
                    pattern === 2 ? 'lg:order-3' : 'lg:order-2'
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Features Column */}
                  <div className={`${
                    pattern === 1 ? 'lg:order-3' :
                    pattern === 2 ? 'lg:order-1' : 'lg:order-3'
                  }`}>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-10 opacity-30">Scope of Work</h3>
                    <ul className="space-y-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-start gap-4 group/item">
                          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-1.5 group-hover/item:bg-foreground transition-colors" />
                          <span className="text-sm font-bold tracking-tight opacity-80 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>

      <section className="py-48 px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-8xl font-bold leading-tight mb-12 tracking-tighter">
            Let's build for the future of the web.
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-12 py-5 bg-background text-foreground font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group text-sm uppercase tracking-widest"
          >
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
