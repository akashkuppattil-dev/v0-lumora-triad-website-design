import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FAQSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Web Design, UI/UX, Backend & AI Services',
  description: 'Explore the creative and engineering capabilities of Lumora Triad. From high-performance Next.js systems to AI workflows and API development.',
  openGraph: {
    title: 'Web Design, UI/UX, Backend & AI Services — Lumora Triad',
    description: 'Bespoke Next.js apps, Backend engineering, AI Integration, and technical search optimization. Tailored solutions for startups & brands.',
  }
}

const SERVICES_DETAILED = [
  {
    id: 'web-development',
    title: 'Web Design & Development',
    subtitle: 'High-performance, responsive systems',
    image: '/service-web-development-showcase.png',
    alt: 'Desktop screen displaying a custom dashboard built with Next.js and Tailwind CSS featuring dynamic charts and smooth visual grids',
    price: 'Starting from ₹25,000',
    timeline: '2–4 weeks',
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
    image: '/service-ui-design-showcase.png',
    alt: 'UI design team wireframes mapping out complex multi-step user checkout journeys on high fidelity mobile prototype screens',
    price: 'Starting from ₹18,000',
    timeline: '1–3 weeks',
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
    id: 'branding-seo-growth',
    title: 'Branding, SEO & Growth',
    subtitle: 'Brand strategy, organic search & digital marketing',
    image: '/service-branding-seo-growth.png',
    alt: 'Harmonious brand style guide showcasing a clean logo mark with selected oklch color palettes and elegant corporate typography',
    price: 'Starting from ₹15,000',
    timeline: '2–3 weeks',
    description: 'We build comprehensive brand identities and technical growth strategies designed to establish authority, drive organic visibility, and scale your audience through targeted social media and digital marketing.',
    features: [
      'Brand strategy & positioning',
      'Logo & visual identity',
      'Social media strategy & assets',
      'Digital marketing campaigns',
      'Technical SEO & indexing',
      'Analytical growth tracking'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    subtitle: 'Scalable commerce experiences',
    image: '/service-ecommerce-showcase.png',
    alt: 'Modern e-commerce product detail page exhibiting optimized checkouts, structured product grids, and instant cart updates on mobile screen',
    price: 'Starting from ₹30,000',
    timeline: '3–5 weeks',
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
    id: 'maintenance',
    title: 'Maintenance & Support',
    subtitle: 'Ongoing technical partnership',
    image: '/service-maintenance-support.jpg',
    alt: 'Code editor screen outlining robust system health checks, security patches, and incremental page speed optimizations',
    price: 'Starting from ₹8,000 / month',
    timeline: 'Continuous SLA',
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

const FAQ_ITEMS = [
  {
    question: 'How long does a typical web design and development project take?',
    answer: 'Standard marketing sites and landing pages take 2 to 4 weeks from discovery to deployment. Complex custom web applications, e-commerce storefronts, and full-scale backend integrations can take 4 to 8 weeks depending on specifications.'
  },
  {
    question: 'Do you work with international clients outside of India?',
    answer: 'Yes. Lumora Triad operates as a remote-first studio. We partner with startups, companies, and growing brands across Dubai, the UAE, London, New York, and globally. We coordinate meetings across various time zones seamlessly.'
  },
  {
    question: 'What is your typical project revision policy?',
    answer: 'We provide 3 rounds of complete revisions during the design and prototype phase. This ensures that the user interface, typography, layout, and user flows align with your requirements before we write production-ready code.'
  },
  {
    question: 'What technology stack do you use for web development?',
    answer: 'Our preferred stack is Next.js, React, and Tailwind CSS for custom frontend experiences, and Node.js or Django for API backends. We also support Headless CMS configurations (like Sanity or Strapi) and deploy on Vercel or AWS for high scalability.'
  },
  {
    question: 'Do you provide maintenance and ongoing technical support?',
    answer: 'Yes. We offer monthly maintenance packages covering technical health diagnostics, security patching, hosting monitoring, minor layout tweaks, and performance optimization to ensure your site remains reliable.'
  },
  {
    question: 'Is SEO optimization included with your web builds?',
    answer: 'Every website we build is optimized for search engines out-of-the-box. This includes fast page loading speeds, semantic HTML layout tags, unique meta titles/descriptions, dynamic sitemaps, and robots configuration. We also offer advanced, structured SEO campaigns.'
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-40 sm:pt-28 lg:pt-48 pb-12 lg:pb-24 px-4 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header Section */}
          <section className="mb-10 lg:mb-32">
            <h1 className="text-4xl sm:text-7xl lg:text-[7.5rem] font-black leading-[0.85] tracking-tighter mb-6 lg:mb-16 uppercase">
              What We Do,<br className="hidden sm:block" />{' '}And How We Do It.
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground font-normal max-w-2xl leading-relaxed">
              We provide a balanced ecosystem of design and engineering services. Our solutions are built to scale, perform, and deliver long-term business value.
            </p>
          </section>

          {/* Services List */}
          <div className="space-y-0">
            {SERVICES_DETAILED.map((service, index) => {
              const pattern = index % 3;

              return (
                <section
                  key={service.id}
                  className="pt-8 lg:pt-24 pb-8 lg:pb-0 border-t border-border group"
                >
                  {/* ── DESKTOP: 3-column grid ── */}
                  <div className="hidden lg:grid lg:grid-cols-3 lg:gap-20 items-start">
                    <div className={`space-y-8 ${pattern === 1 ? 'lg:order-2' :
                        pattern === 2 ? 'lg:order-2' : 'lg:order-1'
                      }`}>
                      <div className="flex items-center gap-4 opacity-40">
                        <span className="text-sm font-black italic">0{index + 1}</span>
                        <div className="w-8 h-px bg-foreground" />
                      </div>
                      <div>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-4 tracking-tighter uppercase">{service.title}</h2>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-6">{service.subtitle}</p>
                        
                        <p className="text-base text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                      </div>
                      <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:gap-4 transition-all">
                        View detailed scope <span>→</span>
                      </Link>
                    </div>
                    <div className={`relative aspect-square lg:aspect-auto lg:h-[420px] rounded-3xl overflow-hidden border border-border bg-secondary group-hover:shadow-2xl transition-all duration-700 ${pattern === 1 ? 'lg:order-1' :
                        pattern === 2 ? 'lg:order-3' : 'lg:order-2'
                      }`}>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        sizes="(max-width: 1024px) 0px, 33vw"
                        priority={index === 0}
                      />
                    </div>
                    <div className={`${pattern === 1 ? 'lg:order-3' :
                        pattern === 2 ? 'lg:order-1' : 'lg:order-3'
                      }`}>
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-8 opacity-30">Scope of Work</h3>
                      <ul className="space-y-5">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-start gap-4 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-1.5 group-hover/item:bg-foreground transition-colors flex-shrink-0" />
                            <span className="text-sm font-bold tracking-tight opacity-80 group-hover/item:opacity-100 transition-opacity">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* ── MOBILE: stacked layout ── */}
                  <div className="lg:hidden space-y-5">
                    <div className="flex items-center gap-3 opacity-40">
                      <span className="text-xs font-black italic">0{index + 1}</span>
                      <div className="w-6 h-px bg-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight uppercase">{service.title}</h2>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">{service.subtitle}</p>

                    {/* Image */}
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-border bg-secondary">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) calc(100vw - 32px), 0px"
                        priority={index === 0}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                    {/* Pricing and timeline hidden on list view */}
                    <div className="pt-4 border-t border-border/60">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 block mb-3">Scope of Work</span>
                      <ul className="space-y-2">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="w-1 h-1 rounded-full bg-foreground/30 mt-1.5 flex-shrink-0" />
                            <span className="text-sm font-medium opacity-80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest">
                      View detailed scope <span>→</span>
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Dynamic FAQ Accordion section */}
          <FAQSection items={FAQ_ITEMS} />
        </div>
      </div>

      <section className="py-16 lg:py-48 px-6 lg:px-8 bg-foreground text-background mt-10 lg:mt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-8xl font-bold leading-tight mb-8 lg:mb-12 tracking-tighter">
            Let's build for the future of the web.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 lg:px-12 py-4 lg:py-5 bg-background text-foreground font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 group text-sm uppercase tracking-widest"
          >
            Start Your Journey
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

    </main>
  )
}
