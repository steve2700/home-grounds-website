import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const renovationsLinks = [
  { title: "Residential", href: "/renovations/residential" },
  { title: "Commercial", href: "/renovations/commercial" },
  { title: "Maintenance", href: "/renovations/maintenance" },
  { title: "Sustainable Solutions", href: "/renovations/sustainable" },
]

const meatsLinks = [
  { title: "Beef", href: "/meats/beef" },
  { title: "Pork", href: "/meats/pork" },
  { title: "Poultry", href: "/meats/poultry" },
  { title: "Butchery Services", href: "/meats/butchery" },
]

const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Careers", href: "/careers" },
  { title: "FAQ", href: "/faq" },
]

const locations = ["Harare", "Bulawayo", "Masvingo", "Waterfalls"]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Home Grounds Investments"
              width={200}
              height={66}
              className="h-14 w-auto brightness-0 invert mb-6"
            />
            <p className="text-background/80 mb-6 max-w-sm leading-relaxed">
              Zimbabwe's trusted partner for quality home & commercial renovations, and farm-fresh premium meats. Building better homes. Feeding better lives.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Renovations */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Renovations</h3>
            <ul className="space-y-3">
              {renovationsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Meats */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Meats</h3>
            <ul className="space-y-3">
              {meatsLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-secondary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="text-background/70 text-sm">
                  <p className="font-medium text-background">Head Office</p>
                  <p>14A, 6th Avenue Parktown</p>
                  <p>Waterfalls, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+263780289132" className="text-background/70 hover:text-background transition-colors">
                  +263 78 028 9132
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@homegrounds.co.zw" className="text-background/70 hover:text-background transition-colors">
                  info@homegrounds.co.zw
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-wrap items-center gap-2 text-sm text-background/60">
            <span className="font-medium text-background">Locations:</span>
            {locations.map((location, index) => (
              <span key={location}>
                <Link href={`/locations/${location.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {location}
                </Link>
                {index < locations.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-1">Stay Updated</h3>
              <p className="text-background/70 text-sm">Get renovation tips and special offers delivered to your inbox.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 w-full md:w-64"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>2026 Home Grounds Investments. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-background transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/sitemap.xml" className="hover:text-background transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
