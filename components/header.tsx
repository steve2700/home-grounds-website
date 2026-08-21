"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const links = [
  { label: "Home", href: "/" },
  { label: "Our products", href: "/#products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link href="/" className="relative block h-14 w-40"><Image src="/Home_Ground_Logo_Final-01.jpg" alt="Home Ground Butchery" fill sizes="160px" className="object-contain object-left" priority /></Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{links.map((link) => <Link key={link.href + link.label} href={link.href} className="text-sm font-semibold text-foreground/75 transition hover:text-primary">{link.label}</Link>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><Link href="tel:+263780289132" className="flex items-center gap-2 text-sm font-semibold text-foreground"><Phone className="size-4 text-primary" /> +263 78 028 9132</Link><Button asChild className="rounded-none bg-primary font-bold text-primary-foreground hover:bg-primary/90"><Link href="/contact">Wholesale enquiries <ArrowUpRight className="size-4" /></Link></Button></div>
        <div className="flex items-center gap-2 lg:hidden"><a href="tel:+263780289132" className="flex size-10 items-center justify-center bg-primary text-primary-foreground" aria-label="Call Home Ground Butchery"><Phone className="size-4" /></a><Sheet open={mobileOpen} onOpenChange={setMobileOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" aria-label="Open navigation"><Menu className="size-6" /></Button></SheetTrigger><SheetContent side="right" className="w-full max-w-sm bg-background p-0"><div className="flex h-full flex-col"><div className="flex items-center justify-between border-b border-border p-5"><Link href="/" onClick={() => setMobileOpen(false)} className="relative block h-12 w-36"><Image src="/Home_Ground_Logo_Final-01.jpg" alt="Home Ground Butchery" fill sizes="144px" className="object-contain object-left" /></Link><SheetClose asChild><Button variant="ghost" size="icon" aria-label="Close navigation"><X className="size-5" /></Button></SheetClose></div><nav className="flex flex-1 flex-col gap-2 p-6" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href + link.label} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-border py-4 font-display text-2xl font-semibold text-foreground">{link.label}</Link>)}</nav><div className="border-t border-border bg-sand p-6"><Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 bg-primary px-5 py-4 text-sm font-bold text-primary-foreground">Wholesale enquiries <ArrowUpRight className="size-4" /></Link></div></div></SheetContent></Sheet></div>
      </div>
    </header>
  )
}
