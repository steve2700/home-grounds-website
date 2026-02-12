"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Hammer, Beef, ArrowRight, Sprout, MessageCircle, Navigation } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">
          {/* Company Info - Wider Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative h-16 w-44 sm:h-20 sm:w-56 lg:h-24 lg:w-64 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src="/Home_Ground_Logo_Final-01-removebg-preview.png"
                  alt="Home Ground Investments"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>
            <div>
              <div className="text-xl font-black text-white mb-2 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                HOME GROUND INVESTMENTS
              </div>
              <p className="text-sm leading-relaxed mb-4 text-zinc-400">
                Building Better Homes. Feeding Better Lives. Zimbabwe's most trusted partner for quality renovations and premium farm-to-table meats from our Chivhu farms.
              </p>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-xs font-semibold text-amber-400">
                <Navigation className="h-3.5 w-3.5" />
                <span>Farm to Table Excellence</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <div className="text-sm font-bold text-white mb-3">Connect With Us</div>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=61587095136669"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-500 text-zinc-300 hover:text-white transition-all shadow-lg hover:shadow-blue-500/30 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 text-zinc-300 hover:text-white transition-all shadow-lg hover:shadow-pink-500/30 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-600 text-zinc-300 hover:text-white transition-all shadow-lg hover:shadow-blue-500/30 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-800 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-400 text-zinc-300 hover:text-white transition-all shadow-lg hover:shadow-sky-500/30 hover:scale-110"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Renovations Services */}
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-zinc-800">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Hammer className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="text-base font-black text-white">Renovations</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/renovations/residential" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Residential</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/commercial" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Commercial</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/kitchen-renovations" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Kitchen Renovations</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/bathroom-renovations" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Bathroom Renovations</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/sustainable-solutions" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Sustainable Solutions</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/renovations" className="inline-flex items-center gap-2 text-sm font-bold text-amber-500 hover:text-amber-400 transition-colors px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Meats & Livestock Products */}
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-zinc-800">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Beef className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-base font-black text-white">Premium Meats</h3>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/meats/beef" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Premium Beef</span>
                </Link>
              </li>
              <li>
                <Link href="/meats/pork" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Fresh Pork</span>
                </Link>
              </li>
              <li>
                <Link href="/meats/poultry" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Farm-Fresh Poultry</span>
                </Link>
              </li>
              <li>
                <Link href="/meats/butchery-services" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Butchery Services</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/meats" className="inline-flex items-center gap-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20">
                  Order Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>

            {/* Livestock Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-zinc-800">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Sprout className="h-5 w-5 text-green-500" />
                </div>
                <h3 className="text-base font-black text-white">Livestock</h3>
              </div>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/livestock" className="text-sm hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">Livestock Farming</span>
                  </Link>
                </li>
                <li>
                  <Link href="/livestock/feedlot-farming" className="text-sm hover:text-green-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span className="group-hover:translate-x-1 transition-transform">Feedlot Farming</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-black text-white mb-6 pb-3 border-b border-zinc-800">Get In Touch</h3>
            <ul className="space-y-5">
              <li>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Headquarters</div>
                <div className="flex items-start gap-3 text-sm group">
                  <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="h-4 w-4 text-amber-500" />
                  </div>
                  <div className="text-zinc-300">
                    <div className="font-semibold text-white mb-1">Stand 2688</div>
                    <div>Crowhill Views Borrowdale</div>
                    <div>Harare, Zimbabwe</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Farms</div>
                <div className="flex items-start gap-3 text-sm">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Sprout className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-zinc-300">
                    <div className="font-semibold text-white">Chivhu Farms</div>
                    <div className="text-xs text-zinc-400 mt-1">Own Abattoir & Cold Storage</div>
                  </div>
                </div>
              </li>

              <li>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Contact</div>
                <div className="space-y-3">
                  <a href="tel:+263780289132" className="flex items-center gap-3 text-sm hover:text-amber-400 transition-colors group">
                    <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                      <Phone className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Phone</div>
                      <div className="font-medium text-white">+263 78 028 9132</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/27614366718"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-sm hover:text-green-400 transition-colors group"
                  >
                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <MessageCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">WhatsApp</div>
                      <div className="font-medium text-white">+27 61 436 6718</div>
                    </div>
                  </a>
                </div>
              </li>

              <li>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-wide mb-2">Email</div>
                <div className="space-y-2">
                  <a href="mailto:info@homegroundinvestments.co.zw" className="flex items-start gap-3 text-sm hover:text-amber-400 transition-colors group">
                    <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors mt-0.5">
                      <Mail className="h-4 w-4 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">General Inquiries</div>
                      <div className="font-medium text-white break-all">info@homegroundinvestments.co.zw</div>
                    </div>
                  </a>
                  <a href="mailto:sales@homegroundinvestments.co.zw" className="flex items-start gap-3 text-sm hover:text-red-400 transition-colors group">
                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors mt-0.5">
                      <Mail className="h-4 w-4 text-red-500" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Sales</div>
                      <div className="font-medium text-white break-all">sales@homegroundinvestments.co.zw</div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Highlight Section */}
        <div className="border-t border-zinc-800 pt-10 pb-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="inline-flex p-3 bg-green-500/10 rounded-xl">
                <Sprout className="h-6 w-6 text-green-500" />
              </div>
              <div className="text-sm font-bold text-white">Farm-Raised</div>
              <div className="text-xs text-zinc-400">Quality livestock from our Chivhu farms</div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex p-3 bg-blue-500/10 rounded-xl">
                <Beef className="h-6 w-6 text-blue-500" />
              </div>
              <div className="text-sm font-bold text-white">Own Abattoir</div>
              <div className="text-xs text-zinc-400">Hygienic processing with quality control</div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex p-3 bg-purple-500/10 rounded-xl">
                <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white">Cold Storage</div>
              <div className="text-xs text-zinc-400">Deep freezers maintain freshness</div>
            </div>
            <div className="space-y-2">
              <div className="inline-flex p-3 bg-red-500/10 rounded-xl">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white">Refrigerated Delivery</div>
              <div className="text-xs text-zinc-400">Fresh delivery to your door</div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm">
            <Link href="/about" className="hover:text-amber-400 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/portfolio" className="hover:text-amber-400 transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/quote" className="hover:text-amber-400 transition-colors font-medium">
              Get Quote
            </Link>
            <Link href="/order" className="hover:text-red-400 transition-colors font-medium">
              Order Meats
            </Link>
            <span className="text-zinc-600">•</span>
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div className="text-center md:text-left">
              © {currentYear} <span className="font-bold text-zinc-400">Home Ground Investments</span>. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Proudly serving</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                <span className="text-amber-500 font-bold">🇿🇼</span>
                <span className="text-amber-400 font-bold">Zimbabwe</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
