'use client'

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16 px-6 lg:px-8 border-t border-background/20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-background/20">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-4">
              Lumora<span className="font-light">.Triad</span>
            </h3>
            <p className="text-sm text-background/60 font-light">
              Premium digital solutions for brands that demand clarity and performance.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-background/70">
              Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#work" className="text-sm text-background/60 hover:text-background transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-background/70">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
                  SEO & Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-background/70">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@lumoratriad.com" className="text-sm text-background/70 hover:text-background transition-colors">
                  hello@lumoratriad.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-sm text-background/70 hover:text-background transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <p className="text-sm text-background/70">
                  San Francisco, CA
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-background/60 font-light">
            © {currentYear} Lumora Triad. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Twitter
            </a>
            <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
