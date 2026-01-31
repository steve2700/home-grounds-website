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
import { Menu, Phone, MessageCircle, X, ChevronDown, Hammer, Beef } from "lucide-react"
import { cn } from "@/lib/utils"

const renovationsLinks = [
  { title: "Residential", href: "/renovations/residential", description: "Kitchen, bathroom & full home renovations" },
  { title: "Commercial", href: "/renovations/commercial", description: "Office fit-outs & retail renovations" },
  { title: "Maintenance", href: "/renovations/maintenance", description: "Property maintenance & repairs" },
  { title: "Sustainable Solutions", href: "/renovations/sustainable", description: "Solar, energy & smart home systems" },
]

const meatsLinks = [
  { title: "Beef", href: "/meats/beef", description: "Premium grass-fed & grain-fed cuts" },
  { title: "Pork", href: "/meats/pork", description: "Fresh pork cuts & sausages" },
  { title: "Poultry", href: "/meats/poultry", description: "Farm-fresh chickens & portions" },
  { title: "Butchery Services", href: "/meats/butchery", description: "Custom cutting & party packs" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [renovationsOpen, setRenovationsOpen] = useState(false)
  const [meatsOpen, setMeatsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo - FIXED PATH */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-28 transition-transform group-hover:scale-105">
            <Image
              src="/hg-logo-transparent.png"
              alt="Home Grounds Investments"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden xl:block">
            <div className="text-sm font-black text-zinc-900 leading-tight">HOME GROUNDS</div>
            <div className="text-xs text-zinc-600 font-medium">Investments</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-2">
            {/* Renovations Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-11 bg-transparent text-zinc-900 hover:bg-amber-50 hover:text-amber-900 data-[state=open]:bg-amber-50 data-[state=open]:text-amber-900 font-semibold">
                <Hammer className="h-4 w-4 mr-2" />
                Renovations
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!bg-white !shadow-xl !border !border-zinc-200">
                <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2">
                  {renovationsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-amber-50 hover:text-amber-900 focus:bg-amber-50 focus:text-amber-900 border border-transparent hover:border-amber-200"
                        >
                          <div className="text-sm font-bold leading-none text-zinc-900">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-zinc-600 mt-2">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2 border-t border-zinc-200 pt-4 mt-2">
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
              <NavigationMenuTrigger className="h-11 bg-transparent text-zinc-900 hover:bg-red-50 hover:text-red-900 data-[state=open]:bg-red-50 data-[state=open]:text-red-900 font-semibold">
                <Beef className="h-4 w-4 mr-2" />
                Meats
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!bg-white !shadow-xl !border !border-zinc-200">
                <ul className="grid w-[450px] gap-3 p-6 md:w-[550px] md:grid-cols-2">
                  {meatsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-900 focus:bg-red-50 focus:text-red-900 border border-transparent hover:border-red-200"
                        >
                          <div className="text-sm font-bold leading-none text-zinc-900">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-zinc-600 mt-2">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2 border-t border-zinc-200 pt-4 mt-2">
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
                {/* Mobile Header - FIXED PATH */}
                <div className="flex items-center justify-between p-4 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-24">
                      <Image
                        src="/hg-logo-transparent.png"
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
  )
}
