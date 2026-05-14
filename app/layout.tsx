import React from "react"
import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema } from '@/components/schema/organization-schema'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://homegroundinvestments.co.zw'),
  
  title: {
    default: 'Home Ground Investments | Quality Renovations in Zimbabwe',
    template: '%s | Home Ground Investments'
  },
  
  description: "Zimbabwe's trusted provider of quality home renovations and commercial fit-outs. Serving Harare, Bulawayo, Masvingo, and Mutare. Growing value from the ground up.",
  
  keywords: [
    // Renovation keywords - Zimbabwe focused
    'home renovations zimbabwe',
    'commercial renovations harare',
    'kitchen remodeling zimbabwe',
    'bathroom renovation harare',
    'property maintenance zimbabwe',
    'residential renovations bulawayo',
    'office fit-outs harare',
    'commercial fit-outs zimbabwe',
    'home extensions harare',
    'property renovations masvingo',
    'house renovation mutare',
    'interior remodeling harare',
    'exterior home improvements zimbabwe',
    'sustainable solutions harare',
    'solar installation zimbabwe',
    'heritage property restoration bulawayo',

    // Location-specific
    'crowhill views',
    'borrowdale renovations',
    'harare renovations',
    'bulawayo renovations',
    'masvingo construction',
    'mutare renovations',

    // Brand
    'home ground investments',
    'home grounds zimbabwe',
    'growing value from the ground up',
  ],
  
  authors: [{ name: 'Home Ground Investments' }],
  creator: 'Home Ground Investments',
  publisher: 'Home Ground Investments',
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://homegroundinvestments.co.zw',
    title: 'Home Ground Investments | Quality Renovations in Zimbabwe',
    description: "Zimbabwe's trusted provider of quality home renovations and commercial fit-outs. Serving Harare, Bulawayo, Masvingo, and Mutare.",
    siteName: 'Home Ground Investments',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Home Ground Investments - Growing value from the ground up',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Home Ground Investments | Quality Renovations in Zimbabwe',
    description: "Zimbabwe's trusted provider of quality home renovations and commercial fit-outs.",
    images: ['/og-image.png'],
    creator: '@homegroundzw',
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
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon-512.png',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  alternates: {
    canonical: 'https://homegroundinvestments.co.zw',
  },
  
  verification: {
    // Add your verification codes when you set up Google Search Console
    // google: 'your-google-verification-code',
    // To get this: https://search.google.com/search-console
  },
  
  category: 'business',
  
  other: {
    'geo.region': 'ZW-HA',
    'geo.placename': 'Harare',
    'geo.position': '-17.8252;31.0335',
    'ICBM': '-17.8252, 31.0335',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme and mobile app configuration */}
        <meta name="theme-color" content="#F59E0B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Home Ground" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://homegroundinvestments.co.zw" />
        
        {/* Geographic meta tags for local SEO */}
        <meta name="geo.region" content="ZW-HA" />
        <meta name="geo.placename" content="Harare, Zimbabwe" />
        <meta name="geo.position" content="-17.8252;31.0335" />
        <meta name="ICBM" content="-17.8252, 31.0335" />
        
        {/* Business/Organization info */}
        <meta property="business:contact_data:street_address" content="Stand 2688 Crowhill Views Borrowdale" />
        <meta property="business:contact_data:locality" content="Harare" />
        <meta property="business:contact_data:region" content="Harare" />
        <meta property="business:contact_data:postal_code" content="" />
        <meta property="business:contact_data:country_name" content="Zimbabwe" />
        <meta property="business:contact_data:phone_number" content="+263 78 028 9132" />
        <meta property="business:contact_data:email" content="info@homegroundinvestments.co.zw" />
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
