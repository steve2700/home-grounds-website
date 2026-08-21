import type { Metadata, Viewport } from "next"
import { Inter, Outfit } from "next/font/google"
import { OrganizationSchema } from "@/components/schema/organization-schema"
import "./globals.css"

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://homegroundinvestments.co.zw"),
  title: { default: "Home Ground Butchery | Fresh Meat in Chivhu, Zimbabwe", template: "%s | Home Ground Butchery" },
  description: "Home Ground Butchery supplies farm fresh frozen chicken, turkey, pork and graded beef from Chivhu to households, retailers, butcheries and supermarkets across Zimbabwe.",
  keywords: ["Chivhu butchery", "Zimbabwe butchery", "fresh meat Chivhu", "graded beef Zimbabwe", "frozen chicken Zimbabwe", "pork supplier Zimbabwe", "wholesale meat Zimbabwe", "Home Ground Butchery", "Home Ground Investments"],
  authors: [{ name: "Home Ground Investments" }],
  creator: "Home Ground Investments",
  publisher: "Home Ground Investments",
  alternates: { canonical: "https://homegroundinvestments.co.zw" },
  openGraph: { type: "website", locale: "en_ZW", url: "https://homegroundinvestments.co.zw", siteName: "Home Ground Butchery", title: "Home Ground Butchery | Fresh Meat in Chivhu", description: "Farm fresh frozen chicken, turkey, pork and graded beef from Chivhu for homes and the food trade.", images: [{ url: "/images/homeground-butchery-shopfront-interior.jpg", width: 1200, height: 800, alt: "Fresh cuts at Home Ground Butchery" }] },
  twitter: { card: "summary_large_image", title: "Home Ground Butchery | Fresh Meat in Chivhu", description: "Farm fresh frozen chicken, turkey, pork and graded beef from Chivhu.", images: ["/images/homeground-butchery-shopfront-interior.jpg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  category: "food and agriculture",
}

export const viewport: Viewport = { themeColor: "#214765", width: "device-width", initialScale: 1, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className={`${outfit.variable} ${inter.variable} font-sans antialiased`}><OrganizationSchema />{children}</body></html>
}
