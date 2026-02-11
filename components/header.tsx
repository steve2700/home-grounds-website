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
import { Menu, Phone, MessageCircle, X, ChevronDown, Hammer, Beef, Sprout } from "lucide-react"
import { cn } from "@/lib/utils"

const renovationsLinks = [
  { title: "Residential", href: "/renovations/residential", description: "Kitchen, bathroom & full home renovations" },
  { title: "Kitchen Renovations", href: "/renovations/kitchen-renovations", description: "Expert kitchen remodeling" },
  { title: "Bathroom Renovations", href: "/renovations/bathroom-renovations", description: "Expert bathroom remodeling" },
  { title: "Commercial", href: "/renovations/commercial", description: "Office fit-outs & retail renovations" },
  { title: "Maintenance", href: "/renovations/maintenance", description: "Property maintenance & repairs" },
  { title: "Sustainable Solutions", href: "/renovations/sustainable-solutions", description: "Solar, energy & smart home systems" },
  { title: "Interior Remodeling", href: "/renovations/interior-remodeling", description: "Modern interior improvements" },
  { title: "Exterior Home Improvements", href: "/renovations/exterior-home-improvements", description: "Modern interior improvements" },  
]

const meatsLinks = [
  { title: "Beef", href: "/meats/beef", description: "Premium grass-fed & grain-fed cuts" },
  { title: "Pork", href: "/meats/pork", description: "Fresh pork cuts & sausages" },
  { title: "Poultry", href: "/meats/poultry", description: "Farm-fresh chickens & portions" },
  { title: "Butchery Services", href: "/meats/butchery", description: "Custom cutting & party packs" },
]

const livestockLinks = [
  { title: "Cattle Farming", href: "/livestock/cattle", description: "Beef and dairy cattle operations" },
  { title: "Goat Farming", href: "/livestock/goats", description: "Boer, dairy & indigenous goats" },
  { title: "Sheep Farming", href: "/livestock/sheep", description: "Wool & meat sheep production" },
  { title: "Poultry Farming", href: "/livestock/poultry", description: "Commercial chicken farming" },
  { title: "Pig Farming", href: "/livestock/pigs", description: "Quality pork production" },
  { title: "Farm Management", href: "/livestock/management", description: "Modern farming solutions" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [renovationsOpen, setRenovationsOpen] = useState(false)
  const [meatsOpen, setMeatsOpen] = useState(false)
  const [livestockOpen, setLivestockOpen] = useState(false)

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

          {/* Updated Logo */}
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

              {/* Meats Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="h-11 bg-transparent text-zinc-900 hover:bg-red-50 hover:text-red-900 data-[state=open]:bg-red-50 data-[state=open]:text-red-900 font-semibold"
                >
                  <Beef className="h-4 w-4 mr-2" />
                  Meats
                </NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="!bg-white shadow-2xl border border-zinc-200"
                >
                  <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2 bg-white">
                    {meatsLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-900 focus:bg-red-50 focus:text-red-900 border border-transparent hover:border-red-200 bg-white"
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
                          href="/meats"
                          className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 hover:gap-3 transition-all"
                        >
                          Order Premium Meats Now →
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Livestock Farming Dropdown - UPDATED */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="h-11 bg-transparent text-zinc-900 hover:bg-green-50 hover:text-green-900 data-[state=open]:bg-green-50 data-[state=open]:text-green-900 font-semibold"
                >
                  <Sprout className="h-4 w-4 mr-2" />
                  Livestock
                </NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="!bg-white shadow-2xl border border-zinc-200"
                >
                  <ul className="grid w-[450px] gap-3 p-6 md:w-[600px] md:grid-cols-2 bg-white">
                    {livestockLinks.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-900 focus:bg-green-50 focus:text-green-900 border border-transparent hover:border-green-200 bg-white"
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
                          href="/livestock"
                          className="flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 hover:gap-3 transition-all"
                        >
                          Explore All Livestock Farming →
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

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-900 font-bold shadow-md hover:shadow-lg transition-all">
              <Link href="/quote">Get Quote</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md hover:shadow-lg transition-all">
              <Link href="/order">Order Meats</Link>
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
              href="https://wa.me/263780289132"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="h-5 w-5" />
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

                      {/* Meats Accordion */}
                      <div>
                        <button
                          onClick={() => setMeatsOpen(!meatsOpen)}
                          className="flex w-full items-center justify-between py-2 text-lg font-bold text-zinc-900 hover:text-red-600 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Beef className="h-5 w-5" />
                            Meats
                          </span>
                          <ChevronDown className={cn("h-5 w-5 transition-transform", meatsOpen && "rotate-180")} />
                        </button>
                        {meatsOpen && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-red-600 pl-4">
                            {meatsLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-1.5 text-zinc-600 hover:text-red-600 font-medium transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                            <Link
                              href="/meats"
                              className="block py-1.5 font-bold text-red-600 hover:text-red-700 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              Order Now →
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Livestock Accordion - UPDATED */}
                      <div>
                        <button
                          onClick={() => setLivestockOpen(!livestockOpen)}
                          className="flex w-full items-center justify-between py-2 text-lg font-bold text-zinc-900 hover:text-green-600 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <Sprout className="h-5 w-5" />
                            Livestock
                          </span>
                          <ChevronDown className={cn("h-5 w-5 transition-transform", livestockOpen && "rotate-180")} />
                        </button>
                        {livestockOpen && (
                          <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-600 pl-4">
                            {livestockLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="block py-1.5 text-zinc-600 hover:text-green-600 font-medium transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {item.title}
                              </Link>
                            ))}
                            <Link
                              href="/livestock"
                              className="block py-1.5 font-bold text-green-600 hover:text-green-700 transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              Learn More →
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

                  {/* Mobile Footer CTAs */}
                  <div className="p-4 border-t border-zinc-200 space-y-3 bg-zinc-50">
                    <Button asChild className="w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-zinc-900 font-bold shadow-md">
                      <Link href="/quote" onClick={() => setMobileOpen(false)}>Get Quote</Link>
                    </Button>
                    <Button asChild className="w-full h-12 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-md">
                      <Link href="/order" onClick={() => setMobileOpen(false)}>Order Meats</Link>
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
