'use client'

import { useEffect, useState } from 'react'

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Floating Tags */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Django', 'UI/UX', 'Branding', 'SEO', 'AI'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-muted-foreground border border-border px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              We build digital systems that scale businesses.
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
              Web development, UI/UX design, branding, and scalable digital solutions for enterprises that demand clarity and modern design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-foreground text-background font-medium hover:bg-muted-foreground transition-colors duration-300">
                View Work →
              </button>
              <button className="px-8 py-3 border border-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300">
                Start Project →
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative h-96 lg:h-full min-h-[500px] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary rounded-lg overflow-hidden border border-border">
              {/* Background image */}
              <img 
                src="/hero-visual.jpg" 
                alt="Digital systems and design elements" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              
              {/* Animated floating elements */}
              <div className="absolute top-12 left-12 w-24 h-24 bg-foreground rounded-lg opacity-5 animate-float" />
              <div className="absolute bottom-16 right-12 w-32 h-32 bg-foreground rounded-lg opacity-5 animate-float animation-delay-2000" />
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-foreground rounded-lg opacity-5 animate-float animation-delay-4000" />
              
              {/* Subtle text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center backdrop-blur-sm bg-background/30 px-8 py-6 rounded">
                  <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-widest">Expertise in</div>
                  <div className="text-2xl font-bold text-foreground">Design Systems</div>
                  <div className="text-2xl font-bold text-foreground">Digital Scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
