import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://lumoratriad.com'),
  title: 'Lumora Triad | Premium Web Development & Digital Solutions',
  description: 'We build digital systems that scale businesses. Web development, UI/UX design, branding, and AI integrations for modern enterprises.',
  icons: {
    icon: '/company-logo.png',
    apple: '/company-logo.png',
  },
  openGraph: {
    title: 'Lumora Triad Digital Agency',
    description: 'Engineering the premium web. We build digital systems that scale.',
    images: ['/company-logo.png'],
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
