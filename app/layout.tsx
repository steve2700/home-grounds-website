import React from "react"
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { OrganizationSchema } from '@/components/schema/organization-schema'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://homegrounds.co.zw'),
  title: {
    default: 'Home Grounds Investments | Renovations & Premium Meats Zimbabwe',
    template: '%s | Home Grounds Investments'
  },
  description: "Zimbabwe's trusted partner for quality home & commercial renovations, and farm-fresh premium meats. Serving Harare, Bulawayo, Masvingo.",
  keywords: [
    'zimbabwe renovations',
    'harare home improvement',
    'bulawayo construction',
    'zimbabwe butcher',
    'premium meats zimbabwe',
    'kitchen renovation harare',
    'commercial renovations zimbabwe',
    'farm fresh meat zimbabwe'
  ],
  authors: [{ name: 'Home Grounds Investments Company' }],
  creator: 'Home Grounds Investments',
  openGraph: {
    type: 'website',
    locale: 'en_ZW',
    url: 'https://homegrounds.co.zw',
    title: 'Home Grounds Investments | Renovations & Premium Meats Zimbabwe',
    description: 'Quality Renovations & Farm-Fresh Meats across Zimbabwe',
    siteName: 'Home Grounds Investments',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Home Grounds Investments Zimbabwe',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Grounds Investments Zimbabwe',
    description: 'Quality Renovations & Farm-Fresh Meats',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <OrganizationSchema />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
