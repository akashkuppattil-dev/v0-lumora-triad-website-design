'use client'

import { useEffect, useRef, useState } from 'react'

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-12 lg:py-24 px-4 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
          }`}
        >
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-8 lg:mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Studio
            </span>
          </div>

          {/* Main Statement */}
          <div className="mb-8 lg:mb-20">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[0.9] max-w-4xl mb-8 lg:mb-16 text-balance tracking-tighter">
              A premium web & product studio. Small team, sharp execution.
            </h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                Lumora Triad is a focused web and design studio based in India, working with early-stage startups, growing brands, and local businesses that need a credible online presence built properly — not templated.
              </p>
              <div className="space-y-8">
                <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed max-w-lg">
                  We handle every layer — from UI design and frontend engineering to custom backends and API integrations. One team, end-to-end ownership, and real communication throughout.
                </p>
                <div className="pt-8 flex flex-wrap items-center gap-12 border-t border-border">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">Core Stack</span>
                    <span className="text-sm font-medium">React · Next.js · Django · Postgres</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">Based In</span>
                    <span className="text-sm font-medium">Kerala, India — Remote Worldwide</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
