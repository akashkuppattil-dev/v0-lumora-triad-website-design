'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'web-development'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: 'web-development'
      })
      // No immediate timeout so the user can read the nice response
    } catch (error) {
      console.error('Submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <section className="mb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-6 text-balance">
              Let's work together.
            </h1>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl">
              Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone number / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your company"
                />
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">
                  What service are you interested in?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors appearance-none bg-background cursor-pointer text-sm font-medium"
                >
                  <option value="web-development">Web Design & Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="backend-api">Backend & API Development</option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="seo-growth">SEO & Growth</option>
                  <option value="ai-automation">AI Integration & Automation</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="general-inquiry">Just an inquiry</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-foreground transition-colors resize-none text-sm"
                  placeholder="Describe your project, goals, and timeline..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-8 bg-green-50/50 border border-green-200/50 rounded-2xl text-green-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white p-2 rounded-full mt-1">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.42-6.447a.247.247 0 0 0-.001-.001Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Thank you! Your message has been sent.</h3>
                      <p className="text-sm opacity-80 leading-relaxed max-w-lg">
                        We've received your inquiry and our team is already reviewing it. 
                        <strong> We will contact you via WhatsApp or a direct call within the next 24 hours </strong>
                        to discuss your project further.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-8 bg-red-50/50 border border-red-200/50 rounded-2xl text-red-900">
                  <p className="font-bold mb-1">Message Failed</p>
                  <p className="text-sm opacity-80">Something went wrong while sending your message. Please try again or email us directly.</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-foreground text-background font-bold rounded-full hover:shadow-md hover:opacity-90 disabled:opacity-50 transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <span>→</span>}
              </button>
            </form>

            {/* Additional Contact Info */}
            <div className="mt-16 pt-12 border-t border-border">
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">Direct Email</h3>
                  <a href="mailto:lumoratriad@gmail.com" className="text-xl font-bold hover:underline tracking-tight">
                    lumoratriad@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">Direct Lines</h3>
                  <div className="space-y-4">
                    <div>
                      <a href="tel:+919947878418" className="text-xl font-bold hover:underline tracking-tight block">
                        +91 99478 78418 <span className="text-xs font-normal opacity-50 ml-2">(Main)</span>
                      </a>
                    </div>
                    <div>
                      <a href="tel:+919847439125" className="text-sm font-semibold hover:underline block opacity-70">
                        +91 98474 39125
                      </a>
                    </div>
                    <div>
                      <a href="tel:+971555973832" className="text-sm font-semibold hover:underline block opacity-70">
                        +971 55 597 3832 <span className="text-[10px] uppercase ml-1 opacity-50">(UAE)</span>
                      </a>
                    </div>
                    <div>
                      <a href="tel:+918891301669" className="text-sm font-semibold hover:underline block opacity-70">
                        +91 88913 01669
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mb-4">Twitter</p>
                  <a href="https://x.com/LumoraTraid" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-60 transition-opacity uppercase tracking-widest">
                    Follow X →
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mb-4">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/lumoratriad/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-60 transition-opacity uppercase tracking-widest">
                    Connect →
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mb-4">Instagram</p>
                  <a href="https://www.instagram.com/lumo.ratraid/?hl=en" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-60 transition-opacity uppercase tracking-widest">
                    Stories →
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mb-4">Facebook</p>
                  <a href="https://www.facebook.com/profile.php?id=61586286665509" target="_blank" rel="noopener noreferrer" className="text-sm font-bold hover:opacity-60 transition-opacity uppercase tracking-widest">
                    Update →
                  </a>
                </div>
              </div>
              <div className="mt-12 space-y-1">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black">Studio</p>
                <p className="text-sm font-medium">Remote / India / UAE / Global</p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
