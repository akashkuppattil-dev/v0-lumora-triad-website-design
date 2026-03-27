'use client'

import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    title: 'Design System Platform',
    category: 'Web Development + UI/UX',
    year: '2024',
    description: 'Comprehensive design system for enterprise teams',
    image: '/project-1.jpg'
  },
  {
    title: 'E-Commerce Transformation',
    category: 'Full-Stack Development',
    year: '2024',
    description: '300% increase in conversion rate through UX optimization',
    image: '/project-2.jpg'
  },
  {
    title: 'Brand Identity Suite',
    category: 'Branding + Design',
    year: '2023',
    description: 'Complete visual identity system and brand guidelines',
    image: '/project-3.jpg'
  }
]

export function FeaturedWork() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Portfolio
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-20">
            Featured work
          </h2>

          {/* Projects Grid */}
          <div className="space-y-8">
            {PROJECTS.map((project, index) => (
              <div
                key={project.title}
                className="group cursor-pointer"
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                }}
              >
                {/* Project Image */}
                <div className="relative h-96 mb-6 rounded-lg overflow-hidden group-hover:shadow-lg transition-all duration-500 border border-border">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="grid lg:grid-cols-4 gap-4 items-start">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-muted-foreground transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-sm text-muted-foreground font-light">
                    <div className="font-medium text-foreground mb-1">{project.year}</div>
                    <div>{project.category}</div>
                  </div>
                  <div className="text-sm text-muted-foreground font-light col-span-2">
                    {project.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-20 text-center">
            <button className="text-lg font-medium border-b-2 border-foreground pb-2 hover:text-muted-foreground transition-colors">
              View all projects →
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
