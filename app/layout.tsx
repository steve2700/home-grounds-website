import React from "react"
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema } from '@/components/schema/organization-schema'
import './globals.css'

// Using Outfit for a bold, modern look (matches your hero design)
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

// Inter as a clean secondary font
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://homegrounds.co.zw'),
  
  title: {
    default: 'Home Grounds Investments | Premium Renovations & Farm-Fresh Meats Zimbabwe',
    template: '%s | Home Grounds Investments'
  },
  
  description: "Zimbabwe's most trusted partner for quality home & commercial renovations, and farm-fresh premium meats. Serving Harare, Bulawayo, Masvingo, and Waterfalls with excellence since 2010.",
  
  keywords: [
    // Renovation keywords
    'zimbabwe renovations',
    'harare home improvement',
    'bulawayo construction',
    'masvingo renovations',
    'kitchen renovation harare',
    'bathroom renovation zimbabwe',
    'commercial renovations zimbabwe',
    'office fit-outs harare',
    'property maintenance zimbabwe',
    'home extensions zimbabwe',
    
    // Meat keywords
    'zimbabwe butcher',
    'premium meats zimbabwe',
    'farm fresh meat zimbabwe',
    'beef supplier harare',
    'pork zimbabwe',
    'poultry zimbabwe',
    'butchery services harare',
    'meat delivery zimbabwe',
    
    // Location keywords
    'harare renovations',
    'bulawayo meats',
    'masvingo construction',
    'waterfalls butchery',
  ],
  
  authors: [{ name: 'Home Grounds Investments Company' }],
  creator: 'Home Grounds Investments',
  publisher: 'Home Grounds Investments Company',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://homegrounds.co.zw',
    title: 'Home Grounds Investments | Premium Renovations & Farm-Fresh Meats Zimbabwe',
    description: 'Building Better Homes. Feeding Better Lives. Quality renovations and farm-to-table meats across Zimbabwe.',
    siteName: 'Home Grounds Investments',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Grounds Investments - Renovations & Premium Meats Zimbabwe',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Home Grounds Investments Zimbabwe',
    description: 'Building Better Homes. Feeding Better Lives.',
    images: ['/images/og-image.jpg'],
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
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/images/hg-logo-transparent.png',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  alternates: {
    canonical: 'https://homegrounds.co.zw',
  },
  
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  
  category: 'business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Home Grounds" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body 
        className={`${outfit.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
