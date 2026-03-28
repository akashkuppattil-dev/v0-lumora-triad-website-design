'use client'

import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-20 px-4 sm:px-6 lg:px-8 border-t border-background/20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-background/20">
          {/* Brand Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-100">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-background/20 shadow-sm bg-background/5">
                <Image 
                  src="/company-logo.png" 
                  alt="Lumora Triad" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-background mt-1">
                Lumora<span className="font-light text-background/60">.Triad</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-background/60 font-medium leading-relaxed mb-8">
              Designing and building modern web systems for growing businesses.
            </p>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-widest text-background/40 font-black">Studio</p>
              <p className="text-xs text-background/60 font-medium tracking-tight">Remote — India — Global</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/work" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Capabilities
            </h4>
            <ul className="grid grid-cols-1 gap-4">
              <li>
                <Link href="/services/web-development" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Web & Next.js
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Digital Design
                </Link>
              </li>
              <li>
                <Link href="/services/backend-api" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  Backend & API
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-sm font-semibold text-background/60 hover:text-background transition-all">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Start a project
            </h4>
            <div className="space-y-6">
              <a href="mailto:lumoratriad@gmail.com" className="text-lg font-bold text-background hover:text-background/80 transition-colors block">
                lumoratriad@gmail.com
              </a>
              <div className="space-y-2">
                <a href="tel:+919947878418" className="text-sm font-semibold text-background/60 hover:text-background transition-colors block italic">
                  +91 99478 78418 (Main)
                </a>
                <a href="tel:+919847439125" className="text-xs text-background/40 hover:text-background transition-colors block">
                  +91 98474 39125
                </a>
                <a href="tel:+971555973832" className="text-xs text-background/40 hover:text-background transition-colors block">
                  +971 55 597 3832 (UAE)
                </a>
                <a href="tel:+918891301669" className="text-xs text-background/40 hover:text-background transition-colors block">
                  +91 88913 01669
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-background/60 font-light">
            © {currentYear} Lumora Triad. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="https://x.com/LumoraTraid" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/lumoratriad/" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/lumo.ratraid/?hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61586286665509" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
