'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Brand } from './brand'

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
              <Brand className="text-background" />
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
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Navigation
            </h3>
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
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Capabilities
            </h3>
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
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-8 text-background/30">
              Start a project
            </h3>
            <div className="space-y-5">
              <p className="text-xs text-background/40 leading-relaxed max-w-[200px]">
                Tell us about your project. We respond within 24 hours.
              </p>
              <a href="mailto:lumoratriad@gmail.com" className="text-base font-bold text-background hover:text-background/80 transition-colors block">
                lumoratriad@gmail.com
              </a>
              <a href="tel:+919947878418" className="text-sm font-semibold text-background/60 hover:text-background transition-colors block">
                +91 99478 78418
              </a>
              <a
                href="mailto:lumoratriad@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-background border border-background/30 rounded-full px-5 py-2.5 hover:bg-background hover:text-foreground transition-all duration-300 group mt-2"
              >
                Send a message
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
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
            <a href="https://x.com/LumoraTriad" target="_blank" rel="noopener noreferrer" className="text-sm text-background/70 hover:text-background transition-colors">
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
