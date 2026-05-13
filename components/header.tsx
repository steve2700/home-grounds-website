"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, Phone, X, ChevronDown, Hammer } from "lucide-react"
import { cn } from "@/lib/utils"

const renovationsLinks = [
  { title: "Residential", href: "/renovations/residential", description: "Kitchen, bathroom & full home renovations" },
  { title: "Kitchen Renovations", href: "/renovations/kitchen-renovations", description: "Expert kitchen remodeling" },
  { title: "Bathroom Renovations", href: "/renovations/bathroom-renovations", description: "Expert bathroom remodeling" },
  { title: "Commercial", href: "/renovations/commercial", description: "Office fit-outs & retail renovations" },
  { title: "Maintenance", href: "/renovations/maintenance", description: "Property maintenance & repairs" },
  { title: "Sustainable Solutions", href: "/renovations/sustainable-solutions", description: "Solar, energy & smart home systems" },
  { title: "Interior Remodeling", href: "/renovations/interior-remodeling", description: "Modern interior improvements" },
  { title: "Exterior Home Improvements", href: "/renovations/exterior-home-improvements", description: "Modern exterior improvements" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [renovationsOpen, setRenovationsOpen] = useState(false)

  return (
    <>
      <style jsx global>{`
     [data-radix-navigation-menu-viewport] {
    background: white !important;
    border: 1px solid #e4e4e7 !important;
    box-shadow: 0 10px 38px -10px rgba(0, 0, 0, 0.35),
      0 10px 20px -15px rgba(0, 0, 0, 0.2) !important;
    z-index: 9999 !important;
  }

  [data-radix-popper-content-wrapper] {
    z-index: 9999 !important;
  }

  [data-radix-navigation-menu-content] {
    background: white !important;
    z-index: 9999 !important;
  }
`}</style>

      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white backdrop-blur-md shadow-sm overflow-visible">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 overflow-visible">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-44 sm:h-20 sm:w-56 lg:h-24 lg:w-64 mb-4 transition-transform group-hover:scale-105">
              <Image
                src="/Home_Ground_Logo_Final-01.jpg"
                alt="Home Grounds Investments - Growing value from the ground up"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-2">
              {/* Renovations Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="h-11 bg-transparent text-zinc-900 hover:bg-amber-50 hover:text-amber-900 data-[state=open]:bg-amber-50 data-[state=open]:text-amber-900 font-semibold"
                >
                  <Hammer className="h-4 w-4 mr-2" />
                  Renovations
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className="!bg-white shadow-2xl border border-zinc-200"
                >
                  <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2 bg-white">
                    {renovationsLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50 focus:text-amber-900 border border-transparent hover:border-amber-200 bg-white"
                          >
                            <div className="text-sm font-bold leading-none text-zinc-900">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-zinc-600 mt-2">
                              {item.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    <li className="col-span-2 border-t border-zinc-200 pt-4 mt-2 bg-white">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/renovations"
                          className="flex items-center gap-2 text-sm font-bold text-amber-600 hover:text-amber-700 hover:gap-3 transition-all"
                        >
                          View All Renovation Services →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Regular Links */}
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none">
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-11 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus:bg-zinc-100 focus:text-zinc-900 focus:outline-none">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-900 font-bold shadow-md hover:shadow-lg transition-all">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:+263780289132"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-900 shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/27614366718"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:shadow-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-zinc-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 bg-white">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-4 border-b border-zinc-200">
                    <div className="flex items-center gap-2">
                      <div className="relative h-10 w-32">
                        <Image
                          src="/Home_Ground_Logo_Final-01.jpg"
                          alt="Home Grounds"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="hover:bg-zinc-100">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-4">
                      <Link
                        href="/"
                        className="block py-2 text-lg font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        Home
                      </Link>

                      {/* Renovations Accordion */}
                      <div>
                        <button
                          onClick={() => setRenovationsOpen(!renovationsOpen)}
                          className="flex w-full items-center justify-between py-2 text-lg font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Hammer className="h-5 w-5" />
                            Renovations
                          </span>
                          <ChevronDown className={cn("h-5 w-5 transition-transform", renovationsOpen && "rotate-180")} />
                        </button>
                        {renovationsOpen && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-amber-500 pl-4">
                            {renovationsLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-1.5 text-zinc-600 hover:text-amber-600 font-medium transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                            <Link
                              href="/renovations"
                              className="block py-1.5 font-bold text-amber-600 hover:text-amber-700 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              View All →
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link
                        href="/portfolio"
                        className="block py-2 text-lg font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        Portfolio
                      </Link>
                      <Link
                        href="/about"
                        className="block py-2 text-lg font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="block py-2 text-lg font-bold text-zinc-900 hover:text-amber-600 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>

                  {/* Mobile Footer CTA */}
                  <div className="p-4 border-t border-zinc-200 space-y-3 bg-zinc-50">
                    <Button asChild className="w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-900 font-bold shadow-md">
                      <Link href="/quote" onClick={() => setMobileOpen(false)}>Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
