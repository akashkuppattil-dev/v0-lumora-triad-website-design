import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lumoratriad.in'),
  title: {
    default: 'Lumora Triad | Premium Web Development & Digital Solutions',
    template: '%s | Lumora Triad',
  },
  description: 'We build digital products that look credible and move fast. Web design, UI/UX, branding, and AI integrations for startups and growing brands in India.',
  icons: {
    icon: '/company-logo.png',
    apple: '/company-logo.png',
  },
  openGraph: {
    title: 'Lumora Triad | Premium Web & Product Studio',
    description: 'Design, engineering, and delivery under one roof. We work with startups and growing brands — end-to-end, no hand-offs, no excuses.',
    images: [
      {
        url: '/company-logo.png',
        width: 1200,
        height: 630,
        alt: 'Lumora Triad — Premium Web & Product Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Lumora Triad',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@LumoraTriad',
    creator: '@LumoraTriad',
    title: 'Lumora Triad | Premium Web & Product Studio',
    description: 'Design, engineering, and delivery under one roof. Startups and growing brands trust Lumora Triad for end-to-end digital products.',
    images: ['/company-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.lumoratriad.in',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lumora Triad',
  description: 'Premium web development, UI/UX design, branding, and digital solutions studio based in Kerala, India. Serving startups and growing brands globally.',
  url: 'https://www.lumoratriad.in',
  logo: 'https://www.lumoratriad.in/company-logo.png',
  image: 'https://www.lumoratriad.in/company-logo.png',
  email: 'lumoratriad@gmail.com',
  telephone: '+91-99478-78418',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  areaServed: ['IN', 'AE', 'GB', 'US'],
  sameAs: [
    'https://x.com/LumoraTriad',
    'https://www.linkedin.com/in/lumoratriad/',
    'https://www.instagram.com/lumo.ratraid/',
    'https://www.facebook.com/profile.php?id=61586286665509',
  ],
  priceRange: '₹₹',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding, SEO & Growth' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-commerce Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance & Support' } },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
