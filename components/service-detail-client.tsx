'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'

interface ServiceProps {
  slug: string
  service: {
    title: string
    subtitle: string
    description: string
    image: string
    whyMatters: string
    price?: string
    timeline?: string
    benefits: Array<{ title: string; description: string }>
    caseStudies: Array<{ id: number; title: string; category: string; image: string }>
    process: Array<{ step: number; title: string; description: string }>
  }
  allServices: Record<string, { title: string; subtitle: string }>
}

export function ServiceDetailClient({ slug, service, allServices }: ServiceProps) {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-36 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
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
              {/* Pricing and Timeline Badges */}
              {(service.price || service.timeline) && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.price && (
                    <span className="text-xs px-3 py-1.5 border border-border rounded-full font-bold bg-secondary">
                      {service.price}
                    </span>
                  )}
                  {service.timeline && (
                    <span className="text-xs px-3 py-1.5 border border-border rounded-full font-semibold opacity-75">
                      {service.timeline}
                    </span>
                  )}
                </div>
              )}
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
                  alt={`${service.title} - Detailed design and engineering project overview at Lumora Triad`}
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
            {Object.entries(allServices)
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
