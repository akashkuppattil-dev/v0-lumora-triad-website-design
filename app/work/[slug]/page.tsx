'use client'

import { useParams, notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { LucideArrowLeft, LucideCheckCircle2, LucideLayout, LucideZap, LucideShieldCheck } from 'lucide-react'

const PROJECTS = [
  {
    slug: 'hexamech',
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
    ],
    fullDetails: [
      'Engineered a high-performance catalog system using Next.js for rapid indexing.',
      'Implemented a custom search architecture for technical tool specifications.',
      'Designed a premium B2B inquiry system replacing traditional cart flows.',
      'Optimized asset delivery for high-resolution industrial photography.'
    ]
  },
  {
    slug: 'basic-trading',
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
    ],
    fullDetails: [
      'Global inventory synchronization across multi-region warehouses.',
      'Bulk ordering interface designed for professional event planners.',
      'Mobile-first architecture ensuring accessibility on the warehouse floor.',
      'High-contrast visual language reflecting industrial durability.'
    ]
  },
  {
    slug: 'ecommerce-luxury',
    title: 'E-commerce Platform',
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
    ],
    fullDetails: [
      'Conversion-optimized checkout flow with one-click payment integration.',
      'High-performance product filtering and instant search capabilities.',
      'Responsive design achieving 95+ Core Web Vitals across devices.',
      'Advanced analytics integration for deep customer behavior tracking.'
    ]
  },
  {
    slug: 'fintech-ecosystem',
    title: 'FinTech Ecosystem',
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
    ],
    fullDetails: [
      'Real-time data streaming architecture for live transaction updates.',
      'Bank-grade security implementations including AES-256 and MFA.',
      'Sophisticated data visualization dashboard for complex financial trends.',
      'Cloud-native deployment ensuring 99.99% system availability.'
    ]
  },
  {
    slug: 'saas-dashboard',
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
    ],
    fullDetails: [
      'Atomic design system development for enterprise-wide consistency.',
      'Advanced interaction patterns for high-density data management.',
      'Accessibility focus ensuring WCAG 2.1 Level AA compliance.',
      'Collaborative design-to-code handoff orchestration.'
    ]
  }
]

export default function ProjectPage() {
  const params = useParams()
  const project = PROJECTS.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-24 left-0 right-0 z-40 bg-background/80 backdrop-blur-md py-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link href="/work" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-60 transition-opacity">
            <LucideArrowLeft size={14} /> Back to Work
          </Link>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{project.category}</span>
             <span className="w-1 h-1 rounded-full bg-foreground/20" />
             <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{project.year}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-8 space-y-8">
              <h1 className="text-5xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter uppercase mb-6">
                {project.title}
              </h1>
              <p className="text-xl lg:text-3xl text-muted-foreground font-normal leading-tight max-w-3xl">
                {project.details}
              </p>
            </div>
            <div className="lg:col-span-4 lg:pt-4">
              <div className="grid grid-cols-1 gap-10">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="border-t border-border pt-6">
                    <div className="text-4xl lg:text-6xl font-black tracking-tighter text-foreground">{stat.value}</div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-border bg-secondary shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-32">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8 inline-flex items-center gap-2">
                <LucideLayout size={14} /> The Challenge
              </h3>
              <p className="text-xl font-medium leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8 inline-flex items-center gap-2">
                <LucideZap size={14} /> Our Solution
              </h3>
              <p className="text-xl font-medium leading-relaxed">{project.solution}</p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-8 inline-flex items-center gap-2">
                <LucideCheckCircle2 size={14} /> Key Deliverables
              </h3>
              <ul className="space-y-4">
                {project.fullDetails.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                    <span className="text-sm font-bold opacity-80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <LucideShieldCheck size={48} className="mx-auto mb-8 opacity-40" />
          <h2 className="text-4xl lg:text-7xl font-bold leading-tight mb-8 tracking-tighter">
            Ready to build your legacy?
          </h2>
          <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">
            We work with a limited number of clients per quarter to ensure premium delivery and absolute technical precision.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-background text-foreground font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group text-sm uppercase tracking-widest shadow-xl"
          >
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
