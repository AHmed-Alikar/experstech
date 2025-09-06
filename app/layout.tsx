import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import BookingPortal from './components/BookingPortal'
import TawkChat from './components/TawkChat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ExpersTech - Innovation & Excellence',
  description: 'ExpersTech delivers modern web, mobile, and AI solutions to accelerate your business growth.',
  keywords: 'ExpersTech, web development, mobile apps, AI solutions, consulting',
  authors: [{ name: 'ExpersTech' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    siteName: 'ExpersTech',
    emails: ['xperstech@gmail.com'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Header backdrop to avoid white background behind the nav */}
        <div className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-[#0b0b0c] via-[#0b0b0c]/90 to-transparent z-40 pointer-events-none" />
        <Navigation />
        <div className="pt-16 md:pt-20">{children}</div>
        <Footer />
        <BookingPortal />
        <TawkChat />
      </body>
    </html>
  )
}
