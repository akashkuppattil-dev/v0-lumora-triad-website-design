'use client'

import { useEffect, useState, useRef } from 'react'
import { MessageCircle, X, Code, Layout, Blocks, MessageSquare } from 'lucide-react'

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Close menu if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const whatsappNumber = '919947878418'

  const inquiryOptions = [
    {
      id: 'web',
      icon: Code,
      title: 'Web Development',
      desc: 'Start a new web project',
      message: 'Hello Lumora Triad, I have a business idea and would like to launch a new web project.'
    },
    {
      id: 'software',
      icon: Blocks,
      title: 'Custom Software',
      desc: 'Backend & APIs',
      message: 'Hello Lumora Triad, I am inquiring about custom backend systems and API development.'
    },
    {
      id: 'design',
      icon: Layout,
      title: 'UI/UX Design',
      desc: 'Premium digital design',
      message: 'Hello Lumora Triad, I need help building a premium, user-focused digital experience.'
    },
    {
      id: 'consult',
      icon: MessageSquare,
      title: 'General Consultation',
      desc: 'Discuss a business idea',
      message: 'Hello Lumora Triad, I would like to schedule a consultation to discuss a future project.'
    }
  ]

  return (
    <div 
      ref={menuRef}
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {/* Pop-up Menu */}
      <div 
        className={`absolute bottom-full right-0 mb-4 w-[280px] bg-background border border-border rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-right ${
          isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 bg-foreground text-background">
          <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Start a Conversation</h4>
          <p className="text-xs opacity-70">How can we help your business today?</p>
        </div>
        
        <div className="flex flex-col p-2">
          {inquiryOptions.map((option) => (
            <a
              key={option.id}
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(option.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-4 p-3 rounded-2xl hover:bg-secondary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-secondary group-hover:bg-background border border-border flex items-center justify-center transition-colors">
                <option.icon className="w-4 h-4 text-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold leading-none mb-1">{option.title}</p>
                <p className="text-xs text-muted-foreground">{option.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Primary Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 relative h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_32px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Toggle WhatsApp Menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <MessageCircle className={`absolute w-full h-full transition-all duration-500 ${isExpanded ? 'scale-50 opacity-0 rotate-[-180deg]' : 'scale-100 opacity-100 rotate-0'}`} />
          <X className={`absolute w-full h-full transition-all duration-500 ${!isExpanded ? 'scale-50 opacity-0 rotate-180' : 'scale-100 opacity-100 rotate-0'}`} />
        </div>
      </button>
    </div>
  )
}
