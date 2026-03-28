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
    <section id="about" className="py-24 px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-10'
          }`}
        >
          {/* Section Divider */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-px bg-foreground" />
            <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Our Studio
            </span>
          </div>

          {/* Main Statement */}
          <div className="mb-20">
            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.9] max-w-5xl mb-16 text-balance tracking-tighter">
              A digital studio at the intersection of design and engineering.
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-base sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-lg">
                Lumora Triad is a modern digital studio focused on building high-performance web systems. We partner with growing businesses to bridge the gap between complex engineering and premium design.
              </p>
              <div className="space-y-8">
                <p className="text-base sm:text-xl text-muted-foreground font-normal leading-relaxed max-w-lg">
                  Our approach is rooted in clarity and technical precision. We don't just build websites; we architect digital infrastructure that supports scale and long-term growth.
                </p>
                <div className="pt-8 flex items-center gap-12 border-t border-border">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">Core Stack</span>
                    <span className="text-sm font-medium">React / Next.js / Django</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">Location</span>
                    <span className="text-sm font-medium">Remote / India</span>
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
