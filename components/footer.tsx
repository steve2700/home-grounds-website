"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Hammer, Beef, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative h-16 w-32 mb-4 transition-transform group-hover:scale-105">
                <Image
                  src="/hg-logo-transparent.png"
                  alt="Home Grounds Investments"
                />
              </div>
            </Link>
            <div>
              <div className="text-lg font-bold text-white mb-1">HOME GROUNDS</div>
              <div className="text-sm text-zinc-400 mb-4">Investments Company</div>
              <p className="text-sm leading-relaxed">
                Building Better Homes. Feeding Better Lives. Zimbabwe's trusted partner for quality renovations and premium meats.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-white transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-red-500 text-zinc-300 hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-blue-500 text-zinc-300 hover:text-white transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 hover:bg-sky-500 text-zinc-300 hover:text-white transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Renovations Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Hammer className="h-5 w-5 text-amber-500" />
              <h3 className="text-lg font-bold text-white">Renovations</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/renovations/residential" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Residential Renovations
                </Link>
              </li>
              <li>
                <Link href="/renovations/commercial" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Commercial Fit-Outs
                </Link>
              </li>
              <li>
                <Link href="/renovations/maintenance" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Property Maintenance
                </Link>
              </li>
              <li>
                <Link href="/renovations/sustainable-solutions" className="text-sm hover:text-amber-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Sustainable Solutions
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/renovations" className="text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-2">
                  View All Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Meats Products */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Beef className="h-5 w-5 text-red-500" />
              <h3 className="text-lg font-bold text-white">Premium Meats</h3>
            </div>
            <ul className="space-y-3">
              <li>
                <Link href="/meats/beef" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Premium Beef
                </Link>
              </li>
              <li>
                <Link href="/meats/pork" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Fresh Pork
                </Link>
              </li>
              <li>
                <Link href="/meats/poultry" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Farm-Fresh Poultry
                </Link>
              </li>
              <li>
                <Link href="/meats/butchery" className="text-sm hover:text-red-400 transition-colors flex items-center gap-2 group">
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Butchery Services
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/meats" className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors flex items-center gap-2">
                  Order Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+263780289132" className="flex items-start gap-3 text-sm hover:text-amber-400 transition-colors group">
                  <Phone className="h-5 w-5 mt-0.5 text-amber-500 group-hover:text-amber-400" />
                  <div>
                    <div className="font-medium text-white">Call Us</div>
                    <div>+263 78 028 9132</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@homegrounds.co.zw" className="flex items-start gap-3 text-sm hover:text-amber-400 transition-colors group">
                  <Mail className="h-5 w-5 mt-0.5 text-amber-500 group-hover:text-amber-400" />
                  <div>
                    <div className="font-medium text-white">Email Us</div>
                    <div>info@homegrounds.co.zw</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-5 w-5 mt-0.5 text-amber-500" />
                  <div>
                    <div className="font-medium text-white mb-1">Our Locations</div>
                    <div className="space-y-1">
                      <div>Harare</div>
                      <div>Bulawayo</div>
                      <div>Masvingo</div>
                      <div>Waterfalls (HQ)</div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-t border-zinc-800 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm">
            <Link href="/about" className="hover:text-amber-400 transition-colors">
              About Us
            </Link>
            <Link href="/portfolio" className="hover:text-amber-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact
            </Link>
            <Link href="/quote" className="hover:text-amber-400 transition-colors">
              Get Quote
            </Link>
            <Link href="/order" className="hover:text-red-400 transition-colors">
              Order Meats
            </Link>
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
      <div className="border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div>
              © {currentYear} Home Grounds Investments Company. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
              <span>Proudly serving</span>
              <span className="text-amber-500 font-semibold">Zimbabwe</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
