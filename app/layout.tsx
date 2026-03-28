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
  title: 'Lumora Triad | Premium Web Development & Digital Solutions',
  description: 'We build digital products that look credible and move fast. Web design, UI/UX, branding, and AI integrations for startups and growing brands in India.',
  icons: {
    icon: '/company-logo.png',
    apple: '/company-logo.png',
  },
  openGraph: {
    title: 'Lumora Triad | Premium Web & Product Studio',
    description: 'Design, engineering, and delivery under one roof. We work with startups and growing brands — end-to-end, no hand-offs, no excuses.',
    images: ['/company-logo.png'],
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.lumoratriad.in',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
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
