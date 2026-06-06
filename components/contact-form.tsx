'use client'

import { useState, FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Web Design & Development',
  'UI/UX Design',
  'Branding, SEO & Growth',
  'E-commerce Solutions',
  'Maintenance & Support',
  'Other',
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
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

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setFormState('success')
      setFormData({ name: '', email: '', service: '', budget: '', message: '' })
    } catch {
      setFormState('error')
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
      {/* ── Contact Form ── */}
      <div className="lg:col-span-3">
        {formState === 'success' ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Message sent!</h2>
            <p className="text-muted-foreground mb-8 max-w-sm">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setFormState('idle')}
              className="text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Send another message →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm"
                />
              </div>
            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60"
                >
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-budget"
                  className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60"
                >
                  Budget Range
                </label>
                <select
                  id="contact-budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  <option value="under-15k">Under ₹15,000</option>
                  <option value="15k-30k">₹15,000 – ₹30,000</option>
                  <option value="30k-60k">₹30,000 – ₹60,000</option>
                  <option value="60k-1l">₹60,000 – ₹1,00,000</option>
                  <option value="above-1l">Above ₹1,00,000</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60"
              >
                Project Details
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project, goals, and timeline…"
                className="w-full px-4 py-3 rounded-xl border border-border bg-secondary text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all text-sm resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background font-bold rounded-full hover:opacity-90 active:scale-[0.98] transition-all duration-200 text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>

            {formState === 'error' && (
              <p className="text-red-500 text-sm mt-2">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        )}
      </div>

      {/* ── Contact Info Sidebar ── */}
      <aside className="lg:col-span-2 space-y-8">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-6">
            Get in Touch
          </h2>
          <div className="space-y-5">
            <a
              href="mailto:hello@lumoratriad.in"
              className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Email Us</p>
                <p className="text-sm text-muted-foreground">hello@lumoratriad.in</p>
              </div>
            </a>

            <a
              href="tel:+919876543210"
              className="flex items-start gap-4 group hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Call Us</p>
                <p className="text-sm text-muted-foreground">+91 98765 43210</p>
              </div>
            </a>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-bold">Location</p>
                <p className="text-sm text-muted-foreground">Kerala, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Response time card */}
        <div className="p-6 rounded-2xl border border-border bg-secondary">
          <p className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-3">
            Response Time
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We typically respond within <span className="font-bold text-foreground">24 hours</span>{' '}
            on business days. For urgent inquiries, reach out via WhatsApp for a faster reply.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Lumora%20Triad,%20I%27d%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors group"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-[#25D366] flex-shrink-0"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <div>
            <p className="text-sm font-bold text-[#25D366]">Chat on WhatsApp</p>
            <p className="text-xs text-muted-foreground">Fastest way to reach us</p>
          </div>
        </a>
      </aside>
    </div>
  )
}
