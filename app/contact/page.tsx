import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Contact Lumora Triad – Start Your Project',
  description: 'Get in touch with Lumora Triad. Tell us about your project and we will get back to you within 24 hours.',
  openGraph: {
    title: 'Contact Lumora Triad – Start Your Project',
    description: 'Reach out for premium web design, UI/UX, and product engineering services.',
    images: [{ url: '/og/contact.png', width: 1200, height: 630, alt: 'Contact Lumora Triad' }],
    type: 'website',
  },
  alternates: { canonical: 'https://www.lumoratriad.in/contact' },
}

export default function ContactPage() {
  return <ContactClient />
}
