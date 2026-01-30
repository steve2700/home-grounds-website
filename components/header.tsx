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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, MessageCircle, X, ChevronDown } from "lucide-react"
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
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Home Grounds Investments"
            width={180}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted">
                Renovations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {renovationsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2 border-t pt-3 mt-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/renovations"
                        className="flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        View All Services →
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-foreground hover:bg-muted">
                Meats
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {meatsLinks.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2 border-t pt-3 mt-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/meats"
                        className="flex items-center text-sm font-medium text-secondary hover:underline"
                      >
                        Order Now →
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/quote">Get Quote</Link>
          </Button>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/order">Order Meats</Link>
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+263780289132"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Phone className="h-5 w-5" />
          </a>
          <a
            href="https://wa.me/263780289132"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Image
                    src="/logo.png"
                    alt="Home Grounds Investments"
                    width={140}
                    height={46}
                    className="h-10 w-auto"
                  />
                  <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-4">
                    <Link
                      href="/"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      Home
                    </Link>

                    {/* Renovations Accordion */}
                    <div>
                      <button
                        onClick={() => setRenovationsOpen(!renovationsOpen)}
                        className="flex w-full items-center justify-between py-2 text-lg font-medium"
                      >
                        Renovations
                        <ChevronDown className={cn("h-5 w-5 transition-transform", renovationsOpen && "rotate-180")} />
                      </button>
                      {renovationsOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-primary pl-4">
                          {renovationsLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-1 text-muted-foreground hover:text-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                          <Link
                            href="/renovations"
                            className="block py-1 font-medium text-primary"
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
                        className="flex w-full items-center justify-between py-2 text-lg font-medium"
                      >
                        Meats
                        <ChevronDown className={cn("h-5 w-5 transition-transform", meatsOpen && "rotate-180")} />
                      </button>
                      {meatsOpen && (
                        <div className="ml-4 mt-2 space-y-2 border-l-2 border-secondary pl-4">
                          {meatsLinks.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-1 text-muted-foreground hover:text-foreground"
                              onClick={() => setMobileOpen(false)}
                            >
                              {item.title}
                            </Link>
                          ))}
                          <Link
                            href="/meats"
                            className="block py-1 font-medium text-secondary"
                            onClick={() => setMobileOpen(false)}
                          >
                            Order Now →
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      href="/portfolio"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/about"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="block py-2 text-lg font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>
                <div className="p-4 border-t space-y-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/quote" onClick={() => setMobileOpen(false)}>Get Quote</Link>
                  </Button>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
