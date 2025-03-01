"use client";

import '../styles/globals.css'
import { Open_Sans, Cormorant_Garamond } from 'next/font/google'
import dynamic from 'next/dynamic'
import ErrorBoundary from '../components/ErrorBoundary'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-open-sans'
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant'
})

// Dynamic imports without ssr option
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div>Loading Header...</div>,
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading Footer...</div>,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${cormorantGaramond.variable}`}>
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  )
} 