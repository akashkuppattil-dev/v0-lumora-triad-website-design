'use client'

import { useState, FormEvent } from 'react'
import { Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Web Design & Development',
  'UI/UX Design',
  'Branding, SEO & Growth',
  'E-commerce Solutions',
  'Maintenance & Support',
  'Other',
]

const SOCIAL_LINKS = [
  { label: 'Twitter', cta: 'Follow X →', href: 'https://twitter.com/lumoratriad' },
  { label: 'LinkedIn', cta: 'Connect →', href: 'https://linkedin.com/company/lumoratriad' },
  { label: 'Instagram', cta: 'Stories →', href: 'https://instagram.com/lumoratriad' },
  { label: 'Facebook', cta: 'Update →', href: 'https://facebook.com/lumoratriad' },
]

const PHONE_NUMBERS = [
  { number: '+91 99478 78418', tag: 'Main' },
  { number: '+91 98474 39125', tag: '' },
  { number: '+971 55 597 3832', tag: 'UAE' },
  { number: '+91 88913 01669', tag: '' },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactClient() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    } catch {
      setFormState('error')
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-32 lg:pt-44 pb-16 sm:pb-20">

        {/* ── Hero ── */}
        <div className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 leading-tight">
            Let&apos;s work together.
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        {/* ── Form ── */}
        {formState === 'success' ? (
          <div className="py-16 text-center">
            <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mx-auto mb-6 text-2xl">
              ✓
            </div>
            <h2 className="text-3xl font-bold mb-3 text-foreground">Message received.</h2>
            <p className="text-muted-foreground mb-8">
              Thanks for reaching out. We&apos;ll be in touch within 24 hours.
            </p>
            <button
              onClick={() => setFormState('idle')}
              className="text-xs font-bold uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

            {/* Row 1: First name + Last name */}
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              <div>
                <label htmlFor="contact-firstName" className="block text-sm font-medium text-foreground mb-2">
                  First name
                </label>
                <input
                  id="contact-firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-lastName" className="block text-sm font-medium text-foreground mb-2">
                  Last name
                </label>
                <input
                  id="contact-lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm"
                />
              </div>
            </div>

            {/* Row 2: Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone number / WhatsApp
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm"
                />
              </div>
            </div>

            {/* Row 3: Company */}
            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm"
              />
            </div>

            {/* Row 4: Service */}
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-foreground mb-2">
                What service are you interested in?
              </label>
              <div className="relative">
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service</option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 5: Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                Tell us about your project
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your project, goals, and timeline..."
                className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              id="contact-submit-btn"
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full mt-4 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-90 active:scale-[0.99] transition-all duration-200 text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                'Send Message →'
              )}
            </button>

            {formState === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please email us at{' '}
                <a href="mailto:lumoratriad@gmail.com" className="underline">lumoratriad@gmail.com</a>
              </p>
            )}
          </form>
        )}

        {/* ── Divider ── */}
        <div className="border-t border-border mt-20 mb-16" />

        {/* ── Direct Contact ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Direct Email
            </p>
            <a
              href="mailto:lumoratriad@gmail.com"
              className="text-lg font-bold text-foreground hover:opacity-70 transition-opacity"
            >
              lumoratriad@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Direct Lines
            </p>
            <div className="space-y-1.5">
              {PHONE_NUMBERS.map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <a
                    href={`tel:${p.number.replace(/\s/g, '')}`}
                    className={`font-bold text-foreground hover:opacity-70 transition-opacity ${i === 0 ? 'text-base' : 'text-sm opacity-60'}`}
                  >
                    {p.number}
                  </a>
                  {p.tag && (
                    <span className="text-xs text-muted-foreground">({p.tag})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Social Links ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {SOCIAL_LINKS.map((s) => (
            <div key={s.label}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {s.label}
              </p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-foreground uppercase tracking-widest hover:opacity-60 transition-opacity"
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>

        {/* ── Studio ── */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
            Studio
          </p>
          <p className="text-sm font-medium text-foreground">
            Remote / India / UAE / Global
          </p>
        </div>

      </div>
    </main>
  )
}
