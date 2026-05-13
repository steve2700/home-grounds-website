"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Hammer, ArrowRight, Navigation } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-zinc-950 text-zinc-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
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
                Building Better Homes. Zimbabwe's most trusted partner for quality renovations and property improvements.
              </p>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 text-xs font-semibold text-amber-400">
                <Navigation className="h-3.5 w-3.5" />
                <span>Quality Renovations You Can Trust</span>
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
              <li>
                <Link href="/renovations/maintenance" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Maintenance</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/interior-remodeling" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Interior Remodeling</span>
                </Link>
              </li>
              <li>
                <Link href="/renovations/exterior-home-improvements" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Exterior Improvements</span>
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
                      <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
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
                  <a href="mailto:sales@homegroundinvestments.co.zw" className="flex items-start gap-3 text-sm hover:text-amber-400 transition-colors group">
                    <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors mt-0.5">
                      <Mail className="h-4 w-4 text-amber-500" />
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
