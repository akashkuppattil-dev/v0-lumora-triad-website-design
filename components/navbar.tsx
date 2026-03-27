'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm' 
        : 'bg-background/50 backdrop-blur-none border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Lumora<span className="font-light">.Triad</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12">
            <Link
              href="#work"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-muted-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:inline-block text-sm font-medium border border-foreground px-6 py-2 hover:bg-foreground hover:text-background transition-all duration-300">
            Start Project →
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in fade-in duration-200">
            <Link href="#work" className="block text-sm font-medium">
              Work
            </Link>
            <Link href="#services" className="block text-sm font-medium">
              Services
            </Link>
            <Link href="#about" className="block text-sm font-medium">
              About
            </Link>
            <Link href="#contact" className="block text-sm font-medium">
              Contact
            </Link>
            <button className="w-full text-sm font-medium border border-foreground px-6 py-2 mt-2 hover:bg-foreground hover:text-background transition-all">
              Start Project →
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
