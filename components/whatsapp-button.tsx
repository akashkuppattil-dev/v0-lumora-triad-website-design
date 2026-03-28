'use client'

import { useEffect, useState, useRef } from 'react'
import { MessageCircle, X } from 'lucide-react'

const WA_NUMBER = '919947878418'
const STUDIO_NAME = 'Lumora Triad'

const INQUIRY_OPTIONS = [
  {
    id: 'web',
    emoji: '🌐',
    title: 'Web Design & Development',
    message: `Hi ${STUDIO_NAME}! I'm interested in a web design and development project. Could we discuss the details?`,
  },
  {
    id: 'uiux',
    emoji: '🎨',
    title: 'UI/UX Design',
    message: `Hi ${STUDIO_NAME}! I need help with UI/UX design for my product. Can we set up a call?`,
  },
  {
    id: 'branding',
    emoji: '✨',
    title: 'Branding & Identity',
    message: `Hi ${STUDIO_NAME}! I'm looking for branding and visual identity work. I'd love to discuss my project.`,
  },
  {
    id: 'backend',
    emoji: '⚙️',
    title: 'Backend & API Development',
    message: `Hi ${STUDIO_NAME}! I need backend/API development services. Can we talk about my requirements?`,
  },
  {
    id: 'ecommerce',
    emoji: '🛒',
    title: 'E-commerce Solution',
    message: `Hi ${STUDIO_NAME}! I want to build an e-commerce store. Can you help me with this?`,
  },
  {
    id: 'seo',
    emoji: '📈',
    title: 'SEO & Growth',
    message: `Hi ${STUDIO_NAME}! I'm looking for SEO and growth strategy services. Let's discuss!`,
  },
  {
    id: 'ai',
    emoji: '🤖',
    title: 'AI Integration & Automation',
    message: `Hi ${STUDIO_NAME}! I need AI integration and automation for my business. Can we explore this?`,
  },
  {
    id: 'maintenance',
    emoji: '🛠️',
    title: 'Maintenance & Support',
    message: `Hi ${STUDIO_NAME}! I'm interested in ongoing maintenance and support for my website. What plans do you offer?`,
  },
  {
    id: 'consult',
    emoji: '💬',
    title: 'General Enquiry / Consultation',
    message: `Hi ${STUDIO_NAME}! I'd like to discuss a project idea with you. When are you available for a quick call?`,
  },
]

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={menuRef}
      className={`fixed bottom-6 right-4 sm:right-6 z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      {/* WhatsApp Chat Widget */}
      <div
        className={`absolute bottom-full right-0 mb-3 w-[300px] sm:w-[320px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 origin-bottom-right ${
          isExpanded ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.22)' }}
      >
        {/* WhatsApp Chat Header */}
        <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#075E54' }}>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
            🟢
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-none">{STUDIO_NAME}</p>
            <p className="text-white/70 text-xs mt-0.5">Typically replies within minutes</p>
          </div>
          <button
            onClick={() => setIsExpanded(false)}
            className="text-white/70 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Bubble */}
        <div style={{ background: '#ECE5DD' }} className="px-3 pt-3 pb-1">
          <div
            className="inline-block text-sm text-gray-800 px-4 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed shadow-sm"
            style={{ background: '#ffffff' }}
          >
            👋 Hi! What can we help you with today?
            <br />
            <span className="text-xs text-gray-400 mt-1 block">Select a service to enquire:</span>
          </div>
        </div>

        {/* Service Options — scrollable */}
        <div style={{ background: '#ECE5DD' }} className="px-3 pb-3 max-h-[260px] overflow-y-auto space-y-1.5 pt-1.5">
          {INQUIRY_OPTIONS.map((opt) => (
            <a
              key={opt.id}
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(opt.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsExpanded(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
              style={{ background: '#ffffff' }}
            >
              <span className="text-lg flex-shrink-0">{opt.emoji}</span>
              <span className="text-sm font-medium text-gray-800 leading-tight">{opt.title}</span>
              <span className="ml-auto text-gray-400 text-xs flex-shrink-0">→</span>
            </a>
          ))}
        </div>

        {/* WhatsApp Footer */}
        <div className="flex items-center justify-center gap-1.5 px-4 py-2" style={{ background: '#075E54' }}>
          <svg className="w-3 h-3 text-white/60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
          </svg>
          <span className="text-white/50 text-[10px]">Powered by WhatsApp</span>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 relative"
        style={{
          background: '#25D366',
          boxShadow: '0 6px 28px rgba(37,211,102,0.45)',
        }}
        aria-label="Open WhatsApp enquiry"
      >
        <div className="relative w-7 h-7 flex items-center justify-center">
          <MessageCircle
            className={`absolute w-full h-full text-white transition-all duration-400 ${
              isExpanded ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
          <X
            className={`absolute w-full h-full text-white transition-all duration-400 ${
              !isExpanded ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          />
        </div>
        {/* Pulse ring */}
        {!isExpanded && (
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: '#25D366', animationDuration: '2s' }}
          />
        )}
      </button>
    </div>
  )
}
