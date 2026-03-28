'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

      // Show on scroll up, hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)

      // Show when user stops scrolling
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
      isVisible ? 'translate-y-0' : '-translate-y-full opacity-0'
    } ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-2xl border-b border-border shadow-sm py-4' 
        : 'bg-transparent border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Logo - Updated to use provided image */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity flex-shrink-0">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-border shadow-sm">
              <Image 
                src="/company-logo.png" 
                alt="Lumora Triad" 
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight hidden sm:block mt-1">
              Lumora<span className="font-light">.Triad</span>
            </span>
          </Link>

          {/* Desktop Navigation - Apple-Style Heirarchy */}
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

          {/* CTA Button */}
          <Link href="/contact" className="hidden md:inline-flex text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full bg-foreground text-background hover:bg-muted transition-all duration-500 group items-center gap-3">
            Start Project
            <span className="group-hover:translate-x-1 transition-transform duration-500">→</span>
          </Link>

          {/* Mobile Right Section: CTA + Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/contact" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-foreground text-background">
              Start Project
            </Link>
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="space-y-1.5">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-700 ${isOpen ? 'max-h-screen opacity-100 pt-12 pb-24' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-8">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                onClick={() => setIsOpen(false)} 
                href={`/${item.toLowerCase()}`} 
                className="text-4xl font-black uppercase tracking-tighter hover:opacity-100 opacity-40 transition-opacity"
              >
                {item}
              </Link>
            ))}
            <div className="pt-8 border-t border-border mt-auto">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-black mb-4">Get in Touch</p>
              <a href="mailto:lumoratriad@gmail.com" className="block text-lg font-bold mb-2">lumoratriad@gmail.com</a>
              <div className="flex gap-4 mt-6">
                <a href="https://x.com/LumoraTraid" className="text-xs font-bold uppercase tracking-widest hover:opacity-60">X (Twitter)</a>
                <a href="https://www.linkedin.com/in/lumoratriad/" className="text-xs font-bold uppercase tracking-widest hover:opacity-60">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
