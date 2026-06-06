'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'

const SERVICE_DATA = {
  'web-development': {
    title: 'Web Design & Development',
    subtitle: 'High-performance, responsive systems optimized for digital scale',
    description: 'We build web applications with modern technologies that scale. From Next.js frontends to robust API architectures, we create systems designed for growth and reliability. Our focus is on creating systems that scale, perform, and adapt to your growing business needs.',
    image: '/service-web-development-showcase.jpg',
    whyMatters: 'In today\'s digital-first world, a robust web presence isn\'t just nice to have—it\'s essential. Poor performance, slow load times, and outdated technology stack can directly impact your bottom line. We build with scalability and performance in mind from day one.',
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
    title: 'UI/UX Design',
    subtitle: 'Creating intuitive, beautiful digital experiences',
    description: 'Our design process combines user research, wireframing, and high-fidelity design systems to create interfaces that delight users and drive conversions. We design for clarity, usability, and beauty.',
    image: '/service-ui-design-showcase.jpg',
    whyMatters: 'Users form opinions about your product in milliseconds. Great design isn\'t just aesthetics—it\'s about creating intuitive experiences that reduce friction, increase engagement, and build brand loyalty. Poor UX directly costs you users and revenue.',
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
    title: 'Branding, SEO & Growth',
    subtitle: 'Brand strategy, organic search & digital marketing',
    description: 'We build comprehensive brand identities and technical growth strategies designed to establish authority, drive organic visibility, and scale your audience through targeted social media and digital marketing.',
    image: '/service-branding-showcase.jpg',
    whyMatters: 'A strong brand combined with search visibility and structured digital campaigns ensures your business stands out, builds credibility immediately, and scales sustainably across all user touchpoints.',
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
    title: 'E-commerce Solutions',
    subtitle: 'Scalable commerce experiences built for growth',
    description: 'Full-service digital commerce solutions built for growth. We help brands scale their online sales through custom storefronts, optimized checkout flows, and seamless platform integrations.',
    image: '/case-study-ecommerce.jpg',
    whyMatters: 'E-commerce isn\'t just about selling; it\'s about the experience. Frictionless checkout, mobile optimization, and clear product presentation are the difference between a bounce and a buy in the modern retail landscape.',
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
    title: 'Maintenance & Support',
    subtitle: 'Ongoing technical partnership for long-term stability',
    description: 'Reliable long-term support to ensure your digital systems remain stable, secure, and performant. We provide proactive monitoring, security updates, and incremental improvements as your business continues to grow.',
    image: '/service-web-dev.jpg',
    whyMatters: 'Digital products are living systems. Without regular updates, security monitoring, and performance tuning, systems degrade over time. We act as your technical partner to protect and enhance your investment.',
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

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
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

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground font-normal mb-8 leading-relaxed">
                {service.subtitle}
              </p>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed max-w-2xl mb-10">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border">
                <Image
                  src={service.image}
                  alt={`${service.title} — ${service.subtitle} by Lumora Triad`}
                  fill
                  priority
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-8 text-balance">
            Why it matters
          </h2>
          <p className="text-lg text-muted-foreground font-normal leading-relaxed">
            {service.whyMatters}
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16 text-balance">
            What you get
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="p-8 border border-border rounded-xl hover:bg-secondary transition-colors duration-300 group">
                <div className="flex items-start gap-4 mb-4">
                  <CheckCircle size={24} className="text-foreground flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground font-normal leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16 text-balance">
            Our approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, index) => (
              <div key={index} className="p-8 border border-border rounded-xl bg-background hover:border-foreground transition-colors duration-300">
                <div className="text-5xl font-bold text-muted-foreground mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-normal leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground text-background rounded-2xl mx-4 sm:mx-6 lg:mx-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-6">
            Ready to transform your {service.title.toLowerCase()}?
          </h2>
          <p className="text-lg font-normal opacity-90 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-background text-foreground font-medium rounded-full hover:shadow-md hover:opacity-90 transition-all duration-200"
          >
            Start a conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-16 text-balance">
            Other services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_DATA)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, svc]) => (
                <Link
                  key={key}
                  href={`/services/${key}`}
                  className="group p-8 border border-border rounded-xl hover:bg-secondary transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-muted-foreground transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground font-normal mb-6 line-clamp-2">
                    {svc.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-foreground font-medium group-hover:translate-x-2 transition-transform">
                    Learn more
                    <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
