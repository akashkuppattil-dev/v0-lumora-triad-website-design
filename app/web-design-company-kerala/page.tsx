import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Design Company in Kerala | UI/UX & Next.js Studio — Lumora Triad',
  description:
    'Lumora Triad is a premium web design & development studio based in Kerala, India. We build high-performance Next.js websites, UI/UX systems, and brand identities for startups and growing businesses in Kochi, Thrissur, Kozhikode & beyond.',
  openGraph: {
    title: 'Web Design Company in Kerala — Lumora Triad',
    description:
      'Kerala-based premium web design & development studio. Custom Next.js websites, UI/UX design, branding & SEO. Serving Kochi, Thrissur, Kozhikode & beyond.',
    images: [
      {
        url: '/company-logo.png',
        width: 1200,
        height: 630,
        alt: 'Lumora Triad — Web Design Company Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Company in Kerala — Lumora Triad',
    description:
      'Premium web design, UI/UX & branding studio based in Kerala. We build digital products that perform.',
  },
  alternates: {
    canonical: 'https://www.lumoratriad.in/web-design-company-kerala',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.lumoratriad.in/web-design-company-kerala',
      url: 'https://www.lumoratriad.in/web-design-company-kerala',
      name: 'Web Design Company in Kerala — Lumora Triad',
      description:
        'Lumora Triad is a premium web design & development studio based in Kerala, India, serving startups and brands across Kochi, Thrissur, Kozhikode, Calicut & globally.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': 'https://www.lumoratriad.in' },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.lumoratriad.in/#localbusiness',
      name: 'Lumora Triad',
      description:
        'Premium web design, UI/UX, branding & digital solutions studio. Based in Kerala, India.',
      url: 'https://www.lumoratriad.in',
      logo: 'https://www.lumoratriad.in/company-logo.png',
      email: 'lumoratriad@gmail.com',
      telephone: '+91-99478-78418',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'State', name: 'Kerala' },
        { '@type': 'City', name: 'Kochi' },
        { '@type': 'City', name: 'Thrissur' },
        { '@type': 'City', name: 'Kozhikode' },
        { '@type': 'Country', name: 'India' },
      ],
      priceRange: '₹₹',
      sameAs: [
        'https://x.com/LumoraTriad',
        'https://www.linkedin.com/in/lumoratriad/',
        'https://www.instagram.com/lumo.ratraid/',
      ],
    },
  ],
}

const SERVICES = [
  {
    icon: '⚡',
    title: 'Web Design & Development',
    description:
      'Fast, modern websites built on Next.js & React. Responsive by default, optimized for Core Web Vitals, and designed to convert.',
    href: '/services/web-development',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered interfaces crafted in Figma and delivered pixel-perfect. We obsess over interactions so your users stay longer.',
    href: '/services/ui-ux-design',
  },
  {
    icon: '🏷️',
    title: 'Branding, SEO & Growth',
    description:
      'Logo, visual identity, technical SEO, and content strategy — everything you need to rank in Kerala and beyond.',
    href: '/services/branding-seo-growth',
  },
  {
    icon: '🛍️',
    title: 'E-commerce Solutions',
    description:
      'Custom storefronts and Shopify setups built for conversion. We handle product pages, checkout flows, and integrations.',
    href: '/services/ecommerce',
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description:
      'Ongoing technical care — security patches, performance monitoring, content updates, and fast turnaround support.',
    href: '/services/maintenance',
  },
]

const CITIES = [
  'Kochi',
  'Thrissur',
  'Kozhikode',
  'Thiruvananthapuram',
  'Kannur',
  'Malappuram',
  'Palakkad',
  'Kollam',
  'Kottayam',
  'Alappuzha',
]

const FAQS = [
  {
    q: 'Where is Lumora Triad based?',
    a: 'We are a remote-first studio headquartered in Kerala, India. We serve clients in Kochi, Thrissur, Kozhikode, and all across Kerala — as well as nationally and internationally.',
  },
  {
    q: 'How much does a website cost in Kerala?',
    a: 'Our websites start from ₹25,000 for a custom web presence. E-commerce projects, SaaS products, and larger brand platforms are priced based on scope. We offer transparent, fixed-price packages with no hidden fees.',
  },
  {
    q: 'Can you help a Kerala-based startup with their entire digital presence?',
    a: 'Absolutely. We work end-to-end — from logo and branding to website design, development, SEO, and ongoing support. Many Kerala startups have launched their entire digital presence with us.',
  },
  {
    q: 'Do you work with clients outside Kerala?',
    a: 'Yes. While we are rooted in Kerala, we work with clients across India, the UAE, the UK, and North America. Our remote-first workflow means geography is never a constraint.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A standard business website takes 2–4 weeks. UI/UX-led projects typically take 3–6 weeks depending on complexity. We always agree on a timeline and stick to it.',
  },
  {
    q: 'Do you offer SEO services for Kerala businesses?',
    a: 'Yes. We offer technical SEO, local SEO (Google Business Profile optimization), and content strategy tailored for Kerala-based businesses looking to rank for regional and national keywords.',
  },
]

export default function KeralaLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-background text-foreground">
        {/* ─── Hero ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-36 sm:pt-32 lg:pt-44 pb-24 px-4 sm:px-6 lg:px-8">
          {/* Gradient blobs */}
          <div
            aria-hidden
            className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, oklch(0.65 0.28 265), transparent 70%)' }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, oklch(0.72 0.22 160), transparent 70%)' }}
          />

          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-xs font-bold uppercase tracking-widest text-foreground/50 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Kerala &bull; India &bull; Global
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              Premium Web Design Company
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                in Kerala, India
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10">
              We build digital products that look credible and move fast — for Kerala startups,
              established brands, and ambitious businesses ready to grow online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest bg-foreground text-background hover:opacity-90 transition-all duration-300 group"
              >
                Start your project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all duration-300"
              >
                View our services
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Why Kerala Businesses Choose Us ──────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-4">
                  Why Lumora Triad?
                </p>
                <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6 text-foreground">
                  A Kerala-Based Studio That{' '}
                  <span className="italic font-light">Actually Ships</span>
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  Most web agencies in Kerala hand you a WordPress template and call it a day.
                  We&apos;re different. We build with Next.js, obsess over Lighthouse scores, and
                  treat every project like our own product launch.
                </p>
                <p className="text-foreground/60 leading-relaxed mb-8">
                  From a Kochi-based startup&apos;s first landing page to a Thrissur retailer&apos;s
                  full e-commerce system — we deliver end-to-end, no hand-offs, no excuses.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { stat: '15+', label: 'Projects Shipped' },
                    { stat: '100%', label: 'On-time Delivery' },
                    { stat: '24h', label: 'Response Time' },
                    { stat: '3+', label: 'Years of Excellence' },
                  ].map(({ stat, label }) => (
                    <div key={label} className="p-4 rounded-2xl border border-foreground/10 bg-foreground/3">
                      <p className="text-2xl font-black text-foreground mb-1">{stat}</p>
                      <p className="text-xs text-foreground/50 font-semibold uppercase tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: '🚀',
                    title: 'Modern Tech Stack',
                    desc: 'Next.js, React, TypeScript — not outdated WordPress themes. Your site will be fast, scalable, and maintainable.',
                  },
                  {
                    icon: '📍',
                    title: 'Kerala-Rooted, Globally Minded',
                    desc: 'We understand the Kerala market — from local consumer behavior to Malayalam SEO considerations — while delivering global-quality design.',
                  },
                  {
                    icon: '💬',
                    title: 'Direct Communication',
                    desc: 'No account managers or offshore middlemen. You speak directly with the designer and developer working on your project.',
                  },
                  {
                    icon: '📦',
                    title: 'Fixed Pricing, No Surprises',
                    desc: 'We agree on a price upfront. No surprise invoices, no "that\'s out of scope" excuses mid-project.',
                  },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-4 p-5 rounded-2xl border border-foreground/10 hover:border-foreground/20 bg-foreground/3 hover:bg-foreground/5 transition-all duration-300"
                  >
                    <span className="text-2xl flex-shrink-0">{icon}</span>
                    <div>
                      <h3 className="font-bold text-sm text-foreground mb-1">{title}</h3>
                      <p className="text-xs text-foreground/55 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services ─────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-4">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-foreground">
                Services for Kerala Businesses
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map(({ icon, title, description, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="group p-6 rounded-2xl border border-foreground/10 hover:border-foreground/25 bg-foreground/3 hover:bg-foreground/5 transition-all duration-300"
                >
                  <span className="text-3xl block mb-4">{icon}</span>
                  <h3 className="font-black text-base text-foreground mb-2 group-hover:text-violet-500 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed">{description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-foreground/40 group-hover:text-violet-500 group-hover:gap-2 transition-all">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Cities We Serve ──────────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-foreground/8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-3">
                Coverage
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground">
                Serving Major Cities Across Kerala
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="px-5 py-2.5 rounded-full border border-foreground/15 bg-foreground/5 text-sm font-semibold text-foreground/70"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-foreground/40 mt-6 font-medium">
              Remote-first — we work with clients from any city in Kerala and beyond.
            </p>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────────── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-foreground/8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-4">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight text-foreground">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map(({ q, a }) => (
                <details
                  key={q}
                  className="group border border-foreground/10 rounded-2xl overflow-hidden bg-foreground/3 hover:border-foreground/20 transition-colors"
                >
                  <summary className="flex justify-between items-center px-6 py-5 cursor-pointer list-none select-none">
                    <span className="font-bold text-sm pr-4 text-foreground">{q}</span>
                    <span className="flex-shrink-0 text-foreground/40 group-open:rotate-45 transition-transform duration-300 text-xl leading-none font-light">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-sm text-foreground/60 leading-relaxed">{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-foreground/8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-6">
              Ready to Start?
            </p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-6 text-foreground">
              Let&apos;s Build Your Brand
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                in Kerala
              </span>
            </h2>
            <p className="text-lg text-foreground/55 max-w-xl mx-auto mb-10 leading-relaxed">
              Tell us about your project. We&apos;ll respond within 24 hours with a clear plan and
              honest pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest bg-foreground text-background hover:opacity-90 transition-all duration-300 group"
              >
                Get a free quote
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <a
                href="mailto:lumoratriad@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-sm font-black uppercase tracking-widest border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all duration-300"
              >
                lumoratriad@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
