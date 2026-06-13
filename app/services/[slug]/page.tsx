import type { Metadata } from 'next'
import Link from 'next/link'
import { ServiceDetailClient } from '@/components/service-detail-client'

const SERVICE_DATA = {
  'web-development': {
    price: 'Starting from ₹25,000',
    timeline: '2–4 weeks',
    title: 'Web Design & Development',
    subtitle: 'High-performance, responsive systems optimized for digital scale',
    description: 'We build custom web applications engineered to scale. By combining modern frontends like Next.js with robust, secure backend architectures, we deliver high-performance digital systems that adapt as your business grows.',
    image: '/service-web-development-showcase.png',
    whyMatters: 'In today\'s digital-first economy, a robust web presence is a critical business asset. Slow load times, poor usability, and an outdated technology stack directly impact customer retention and revenue. We build with scalability and performance in mind from day one.',
    benefits: [
      { title: 'High Performance', description: 'Lightning-fast load times and optimized performance metrics' },
      { title: 'Scalability', description: 'Built to grow with your business without architectural limitations' },
      { title: 'Modern Stack', description: 'Latest technologies ensuring long-term maintainability' },
      { title: 'SEO Optimized', description: 'Structured for search engine visibility and organic growth' },
      { title: 'Security First', description: 'Enterprise-grade security practices embedded throughout' },
      { title: 'Analytics Ready', description: 'Built-in measurement and tracking capabilities' }
    ],
    caseStudies: [
      { id: 1, title: 'FinTech Platform Redesign', category: 'Web Development', image: '/case-study-fintech.jpg' },
      { id: 2, title: 'E-Commerce Scale-up', category: 'Web Development', image: '/case-study-ecommerce.jpg' }
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand your business, users, and technical requirements' },
      { step: 2, title: 'Architecture', description: 'Design scalable systems and technology foundations' },
      { step: 3, title: 'Development', description: 'Build with modern practices and clean code principles' },
      { step: 4, title: 'Deployment', description: 'Launch with monitoring, backups, and optimization' }
    ]
  },
  'ui-ux-design': {
    price: 'Starting from ₹18,000',
    timeline: '1–3 weeks',
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive, beautiful digital experiences',
    description: 'Our design process combines user research, wireframing, and custom design systems to create intuitive interfaces that engage users and increase conversion rates. We design for clarity, usability, and visual elegance.',
    image: '/service-ui-design-showcase.png',
    whyMatters: 'Users form impressions about your product in milliseconds. Exceptional UI/UX design is a core business driver—it reduces user friction, increases engagement, and builds brand loyalty. Outdated interface design directly costs you customers and revenue.',
    benefits: [
      { title: 'User-Centered Design', description: 'Every decision backed by research and user testing' },
      { title: 'Accessibility First', description: 'WCAG compliant designs that work for everyone' },
      { title: 'Design Systems', description: 'Consistent, scalable component libraries' },
      { title: 'Mobile Optimized', description: 'Seamless experience across all devices' },
      { title: 'Conversion Focused', description: 'Design strategies that drive measurable results' },
      { title: 'Brand Aligned', description: 'Design that reinforces your brand identity' }
    ],
    caseStudies: [
      { id: 1, title: 'Design System Overhaul', category: 'UI/UX Design', image: '/case-study-saas.jpg' },
      { id: 2, title: 'Mobile App Redesign', category: 'UI/UX Design', image: '/case-study-ecommerce.jpg' }
    ],
    process: [
      { step: 1, title: 'Research', description: 'User interviews, competitive analysis, and market research' },
      { step: 2, title: 'Wireframing', description: 'Information architecture and user flow mapping' },
      { step: 3, title: 'Design', description: 'High-fidelity mockups and interactive prototypes' },
      { step: 4, title: 'Handoff', description: 'Developer-ready specs and design system documentation' }
    ]
  },
  'branding-seo-growth': {
    price: 'Starting from ₹15,000',
    timeline: '2–3 weeks',
    title: 'Branding, SEO & Growth',
    subtitle: 'Brand strategy, organic search & digital marketing',
    description: 'We craft cohesive brand identities and technical growth strategies designed to establish authority, drive organic visibility, and expand your audience through targeted social media and digital marketing campaigns.',
    image: '/service-branding-seo-growth.png',
    whyMatters: 'A cohesive brand identity coupled with high search visibility and targeted digital campaigns ensures your business stands out, builds immediate credibility, and scales sustainably across all touchpoints.',
    benefits: [
      { title: 'Brand Strategy', description: 'Clear positioning and messaging framework' },
      { title: 'Visual Identity', description: 'Logo, color palette, and typography system' },
      { title: 'Social & Digital Strategy', description: 'Cohesive branding across social media channels and digital platforms' },
      { title: 'Technical SEO', description: 'Optimizing code and site structure for search engines' },
      { title: 'Organic Content', description: 'Building authority through strategic, valuable content' },
      { title: 'Marketing Campaigns', description: 'Data-driven campaigns to drive traffic and conversion' }
    ],
    caseStudies: [
      { id: 1, title: 'Tech Startup Rebrand', category: 'Branding', image: '/case-study-fintech.jpg' },
      { id: 2, title: 'Organic Reach Campaign', category: 'Growth', image: '/project-landing-page.jpg' }
    ],
    process: [
      { step: 1, title: 'Discovery & Audit', description: 'Understand your vision, values, target audience, social presence, and current SEO standing' },
      { step: 2, title: 'Strategy & Identity', description: 'Develop brand positioning, social media strategy, visual identity, and organic growth roadmap' },
      { step: 3, title: 'Implementation', description: 'Roll out guidelines, design social media assets, and apply technical SEO optimization' },
      { step: 4, title: 'Campaigns & Growth', description: 'Launch digital marketing campaigns, monitor performance, and continuously optimize authority' }
    ]
  },
  'ecommerce': {
    price: 'Starting from ₹30,000',
    timeline: '3–5 weeks',
    title: 'E-commerce Solutions',
    subtitle: 'Scalable commerce experiences built for growth',
    description: 'We design and develop high-converting e-commerce experiences. From custom storefronts to frictionless checkout flows, we help brands scale their online sales and increase average order values.',
    image: '/service-ecommerce-showcase.png',
    whyMatters: 'Modern e-commerce is defined by the customer experience. Frictionless checkouts, responsive mobile optimization, and clear product presentation make the difference between a bounced visitor and a completed purchase.',
    benefits: [
      { title: 'Conversion Focus', description: 'Driven by research-backed checkout optimizations' },
      { title: 'Mobile First', description: 'Seamless shopping experiences on any device' },
      { title: 'Payment Integration', description: 'Global, secure, and diverse payment options' },
      { title: 'Inventory Control', description: 'Real-time syncing and management capabilities' },
      { title: 'Global Reach', description: 'Multi-currency and multi-region readiness' },
      { title: 'Analytics', description: 'Deep insight into customer behavior and sales data' }
    ],
    caseStudies: [
      { id: 1, title: 'Luxury Retail Experience', category: 'E-commerce', image: '/case-study-ecommerce.jpg' },
      { id: 2, title: 'B2B Wholesale Platform', category: 'E-commerce', image: '/project-trading.jpg' }
    ],
    process: [
      { step: 1, title: 'Strategy', description: 'Define market approach and commerce goals' },
      { step: 2, title: 'Design', description: 'Create high-conversion user interfaces' },
      { step: 3, title: 'Implementation', description: 'Build and integrate the commerce engine' },
      { step: 4, title: 'Launch', description: 'Deployment, testing, and growth monitoring' }
    ]
  },
  'maintenance': {
    price: 'Starting from ₹8,000 / month',
    timeline: 'Continuous SLA',
    title: 'Maintenance & Support',
    subtitle: 'Ongoing technical partnership for long-term stability',
    description: 'We provide ongoing technical partnerships to ensure your digital systems remain stable, secure, and highly performant. Our services include proactive monitoring, routine security updates, and incremental improvements as your business scales.',
    image: '/service-maintenance-support.jpg',
    whyMatters: 'Software and digital products are living systems. Without regular maintenance, security monitoring, and performance tuning, digital infrastructure degrades. We act as your dedicated technical partner to protect and enhance your investment.',
    benefits: [
      { title: 'Proactive Monitoring', description: 'Detect and resolve issues before they affect users' },
      { title: 'Security Updates', description: 'Ongoing protection against new vulnerabilities' },
      { title: 'Performance Tuning', description: 'Keeping your system fast and responsive continuously' },
      { title: 'Uptime Guarantee', description: 'Ensuring your digital presence is always available' },
      { title: 'Technical Support', description: 'Direct access to expert developers for questions' },
      { title: 'Incremental Growth', description: 'Continuous small feature additions and improvements' }
    ],
    caseStudies: [
      { id: 1, title: 'Global Platform Maintenance', category: 'Support', image: '/project-business-platform.jpg' },
      { id: 2, title: 'System Security Hardening', category: 'Security', image: '/project-3.jpg' }
    ],
    process: [
      { step: 1, title: 'Onboarding', description: 'Audit current systems and establish protocol' },
      { step: 2, title: 'Setup', description: 'Configure monitoring and reporting tools' },
      { step: 3, title: 'Execution', description: 'Ongoing updates, fixes, and optimizations' },
      { step: 4, title: 'Review', description: 'Regular reports on health and performance' }
    ]
  },
  'digital-strategy': {
    price: 'Starting from ₹20,000',
    timeline: '2–4 weeks',
    title: 'Digital Strategy',
    subtitle: 'Strategic roadmaps for digital transformation',
    description: 'Digital transformation requires more than technology—it needs a clear strategy aligned with your business goals. We help organizations plan, prioritize, and execute digital initiatives that create competitive advantage.',
    image: '/service-strategy.jpg',
    whyMatters: 'Many organizations invest in digital initiatives without clear strategy, resulting in wasted resources and missed opportunities. The right strategy ensures every decision drives measurable business value and competitive advantage.',
    benefits: [
      { title: 'Market Analysis', description: 'Competitive landscape and opportunity identification' },
      { title: 'Technology Assessment', description: 'Current state analysis and gap identification' },
      { title: 'Roadmap Planning', description: 'Phased implementation strategy and timeline' },
      { title: 'Risk Management', description: 'Identified risks and mitigation strategies' },
      { title: 'Success Metrics', description: 'KPIs and measurement frameworks' },
      { title: 'Change Management', description: 'Organizational readiness and adoption strategy' }
    ],
    caseStudies: [
      { id: 1, title: 'Enterprise Transformation Program', category: 'Strategy', image: '/case-study-saas.jpg' },
      { id: 2, title: 'Digital Roadmap Development', category: 'Strategy', image: '/case-study-fintech.jpg' }
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Analyze current state, goals, and challenges' },
      { step: 2, title: 'Strategy', description: 'Develop comprehensive digital strategy' },
      { step: 3, title: 'Planning', description: 'Create detailed roadmap and resource plan' },
      { step: 4, title: 'Execution Support', description: 'Ongoing guidance through implementation' }
    ]
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICE_DATA[slug as keyof typeof SERVICE_DATA]
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  const cleanTitle = `${service.title} Services`
  const cleanDesc = `${service.subtitle}. Built precise and optimized for maximum speed and SEO by Lumora Triad.`

  return {
    title: cleanTitle,
    description: cleanDesc,
    openGraph: {
      title: `${cleanTitle} — Lumora Triad`,
      description: cleanDesc,
    }
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = SERVICE_DATA[slug as keyof typeof SERVICE_DATA]

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Service not found</h1>
        <Link href="/services" className="text-foreground hover:underline">
          Back to Services
        </Link>
      </div>
    )
  }

  const allServicesSimple = Object.entries(SERVICE_DATA).reduce((acc, [key, value]) => {
    acc[key] = { title: value.title, subtitle: value.subtitle }
    return acc
  }, {} as Record<string, { title: string; subtitle: string }>)

  return (
    <ServiceDetailClient 
      slug={slug} 
      service={service} 
      allServices={allServicesSimple} 
    />
  )
}
