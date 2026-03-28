'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const SOCIAL_LINKS = [
  {
    name: 'X',
    handle: '@LumoraTraid',
    href: 'https://x.com/LumoraTraid',
    bg: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.908l4.243 5.613 5.843-5.613zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@lumo.ratraid',
    href: 'https://www.instagram.com/lumo.ratraid/?hl=en',
    bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Lumora Triad',
    href: 'https://www.linkedin.com/in/lumoratriad/',
    bg: '#0A66C2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'Lumora Triad',
    href: 'https://www.facebook.com/profile.php?id=61586286665509',
    bg: '#1877F2',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)

      if (scrollTimeout) clearTimeout(scrollTimeout)
      const timeout = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      setScrollTimeout(timeout)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [lastScrollY, scrollTimeout])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'translate-y-0' : '-translate-y-full opacity-0'
      } ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-2xl border-b border-border shadow-sm py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Brand Logo */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 hover:opacity-70 transition-opacity flex-shrink-0 z-[110] relative">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-border shadow-sm">
                <Image src="/company-logo.png" alt="Lumora Triad" fill className="object-cover rounded-full" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight hidden sm:block mt-1">
                Lumora<span className="font-light">.Triad</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {['Work', 'Services', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all duration-300 relative group overflow-hidden"
                >
                  <span>{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-px bg-foreground -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link href="/contact" className="hidden md:inline-flex text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full bg-foreground text-background hover:opacity-80 transition-all duration-500 group items-center gap-3">
              Start Project
              <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
            </Link>

            {/* Mobile — CTA + Hamburger */}
            <div className="md:hidden flex items-center gap-3 z-[110] relative">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-foreground text-background whitespace-nowrap">
                Start Project
              </Link>
              <button
                className="p-2 text-foreground"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5 w-6">
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : 'w-6'}`} />
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 w-0' : 'w-4'}`} />
                  <span className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : 'w-6'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[99] md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/98 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col pt-28 pb-10 px-6 overflow-y-auto transition-all duration-500 ${
          isOpen ? 'translate-y-0' : 'translate-y-8'
        }`}>

          {/* Nav Links */}
          <div className="flex flex-col gap-2 mb-10">
            {[
              { label: 'Work', href: '/work' },
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-4 border-b border-border group transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="text-3xl font-black uppercase tracking-tighter text-foreground group-hover:opacity-50 transition-opacity">
                  {item.label}
                </span>
                <span className="text-muted-foreground group-hover:translate-x-1 transition-transform text-xl">→</span>
              </Link>
            ))}
          </div>

          {/* Follow Us — Social Media */}
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Follow Us</p>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl border border-border hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: social.bg }}
                  >
                    {social.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-foreground leading-none">{social.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Block */}
          <div className="mt-auto pt-6 border-t border-border">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-3">Get in Touch</p>
            <a href="mailto:lumoratriad@gmail.com" className="block text-base font-bold text-foreground hover:opacity-60 transition-opacity mb-1">
              lumoratriad@gmail.com
            </a>
            <a href="tel:+919947878418" className="block text-sm text-muted-foreground hover:opacity-60 transition-opacity">
              +91 99478 78418
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
