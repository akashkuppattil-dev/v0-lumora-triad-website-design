import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Work | Case Studies & Digital Product Showcases',
  description: 'Explore our track record of custom web design, engineering, and digital solutions. Real client problems solved with measurable outcomes.',
  openGraph: {
    title: 'Our Work — Lumora Triad',
    description: 'Bespoke design and frontend engineering projects. Read our technical case studies and metrics.',
  }
}

const PROJECTS = [
  {
    id: 1,
    title: 'Hexamech Linich Tools',
    category: 'Industrial Engineering',
    year: '2024',
    description: 'A modern industrial catalog and tools marketplace for precision engineering.',
    image: '/project-hexamech-v2.png',
    details: 'Developed a comprehensive industrial platform for Kerala\'s most trusted destination for professional tools. The system features a modern catalog, brand management, and a streamlined inquiry flow.',
    challenge: 'Need for a robust, technical catalog that handles hundreds of specialized industrial tools while presenting a premium brand image.',
    solution: 'Designed an editorial-style warehouse interface with deep categorization and a "Build Your Legacy" brand narrative that connects with professional craftsmen.',
    stats: [
      { label: 'Catalog Depth', value: '1000+' },
      { label: 'Inquiry Lift', value: '+40%' },
      { label: 'Load Speed', value: '0.8s' }
    ]
  },
  {
    id: 2,
    title: 'BASIC Trading Company',
    category: 'Wholesale & Supply',
    year: '2024',
    description: 'Wholesale event materials platform for high-volume supply chain management.',
    image: '/project-trading-v2.png',
    details: 'Architected a B2B supply platform for event coordinators and hospitality businesses. Focused on bulk ordering, inventory transparency, and multi-region contact accessibility.',
    challenge: 'Creating a digital experience that reflects the scale of a wholesale manufacturer while maintaining high-end aesthetics.',
    solution: 'A luxury-warehouse aesthetic combining high-impact photography with clear, functional categorization of massive inventories.',
    stats: [
      { label: 'B2B Leads', value: '+55%' },
      { label: 'Mobile Sales', value: '+75%' },
      { label: 'User Retention', value: '92%' }
    ]
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Digital Commerce',
    year: '2024',
    description: 'Scalable luxury storefront optimized for high conversion and mobile accessibility.',
    image: '/case-study-ecommerce.jpg',
    details: 'Full-stack redesign of an e-commerce platform for a luxury brand. Improved user experience at every touchpoint, resulting in remarkable growth in conversions and revenue.',
    challenge: 'High bounce rates, abandoned carts, and outdated mobile experience were costing the client millions in lost revenue.',
    solution: 'Comprehensive UX audit, mobile-first redesign, streamlined checkout process, and performance optimization.',
    stats: [
      { label: 'Conversion Lift', value: '+300%' },
      { label: 'Revenue Increase', value: '+250%' },
      { label: 'Mobile Traffic', value: '+180%' }
    ]
  },
  {
    id: 4,
    title: 'Fintech Ecosystem',
    category: 'Product Engineering',
    year: '2024',
    description: 'Enterprise-grade financial dashboard with real-time transaction processing.',
    image: '/service-backend-v2.png',
    details: 'Transformed a legacy banking platform into a modern, secure fintech solution. Implemented real-time transaction processing and an intuitive dashboard.',
    challenge: 'Outdated UX and performance bottlenecks were affecting critical financial operations.',
    solution: 'Rebuilt with a modern tech stack and high-performance real-time data streaming to ensure accuracy and speed.',
    stats: [
      { label: 'Active Users', value: '+45%' },
      { label: 'Security Score', value: '99%' },
      { label: 'Latency', value: '-80ms' }
    ]
  },
  {
    id: 5,
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    year: '2024',
    description: 'Advanced design system and interactive dashboard for enterprise B2B SaaS.',
    image: '/case-study-saas.jpg',
    details: 'Created a comprehensive design system and rebuilt the entire dashboard for a B2B SaaS company. Standardized components improved consistency.',
    challenge: 'Design fragmentation and navigation complexity leading to high churn rates.',
    solution: 'Universal design system implementation with a focus on information density and task efficiency.',
    stats: [
      { label: 'Dev Velocity', value: '+40%' },
      { label: 'Consistency', value: '100%' },
      { label: 'Training Time', value: '-60%' }
    ]
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-28 lg:pt-32">
        {/* Header Section */}
        <section className="pb-10 lg:pb-24 px-4 lg:px-8 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4 lg:mb-6 text-balance tracking-tighter">
              Our Latest Work
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-normal max-w-3xl leading-relaxed">
              Selected case studies showcasing our approach to solving complex problems through design, development, and strategy. Each project demonstrates our commitment to delivering measurable results.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10 lg:py-24 px-4 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-16 lg:space-y-64">
              {PROJECTS.map((project, index) => {
                const slug = project.id === 1 ? 'hexamech' 
                           : project.id === 2 ? 'basic-trading' 
                           : project.id === 3 ? 'ecommerce-luxury' 
                           : project.id === 4 ? 'fintech-ecosystem' 
                           : 'saas-dashboard';

                return (
                  <div key={project.id} className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center group">
                    {/* Content Section */}
                    <div className={`space-y-6 lg:space-y-10 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-6 opacity-40">
                        <span className="text-[10px] font-black uppercase tracking-widest">{project.year}</span>
                        <div className="w-12 h-px bg-foreground" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                      </div>
                      
                      <div>
                        <h2 className="text-4xl lg:text-6xl font-bold leading-[0.9] tracking-tighter uppercase mb-6 text-foreground">
                          {project.title}
                        </h2>
                        <p className="text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                          {project.details}
                        </p>
                      </div>

                      {/* Technical Breakdown */}
                      <div className="grid sm:grid-cols-2 gap-10 pt-10 border-t border-border/50">
                        <div>
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Challenge</h3>
                          <p className="text-sm font-medium leading-relaxed text-foreground/80">{project.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-4">Our Solution</h3>
                          <p className="text-sm font-medium leading-relaxed text-foreground/80">{project.solution}</p>
                        </div>
                      </div>

                      {/* Performance Metrics */}
                      <div className="flex flex-wrap gap-8 pt-6">
                        {project.stats.map((stat) => (
                          <div key={stat.label}>
                            <div className="text-3xl font-black tracking-tighter text-foreground">{stat.value}</div>
                            <p className="text-[9px] font-black uppercase tracking-widest opacity-40">{stat.label}</p>
                          </div>
                        ))}
                      </div>

                      <Link 
                        href={`/work/${slug}`}
                        aria-label={`Deep dive into ${project.title} case study`} 
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-foreground/20 pb-2 hover:border-foreground hover:gap-4 transition-all"
                      >
                        Deep Dive Into Case Study <span aria-hidden="true">→</span>
                      </Link>
                    </div>

                    {/* Immersive Image Display */}
                    <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[700px] w-full rounded-2xl lg:rounded-[2.5rem] overflow-hidden border border-border bg-secondary shadow-2xl transition-all duration-700 group-hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)]">
                        <Image
                          src={project.image}
                          alt={`${project.title} — ${project.category} case study by Lumora Triad`}
                          fill
                          priority={index === 0}
                          className="w-full h-full object-cover transition-all duration-1000"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        {/* Interactive Highlight */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                      {/* Background Aura */}
                      <div className="absolute -inset-10 bg-foreground/5 -z-10 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 px-4 lg:px-8 bg-foreground text-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tighter">
              Interested in Working Together?
            </h2>
            <p className="text-lg opacity-90 font-normal mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group text-sm uppercase tracking-widest shadow-md"
            >
              Start Your Project
              <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
