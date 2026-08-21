import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:px-16">
        <div><Link href="/" className="relative block h-16 w-48"><Image src="/Home_Ground_Logo_Final-01-removebg-preview.png" alt="Home Ground Investments" fill sizes="192px" className="object-contain object-left" /></Link><p className="mt-6 max-w-sm text-sm leading-6 text-primary-foreground/70">Home Ground Butchery, trading under Home Ground Investments, connects Zimbabwean agriculture with households and the food trade.</p></div>
        <div><h2 className="text-sm font-bold uppercase tracking-[0.2em] text-wheat">Explore</h2><nav className="mt-5 flex flex-col items-start gap-3 text-sm text-primary-foreground/75"><Link href="/" className="hover:text-wheat">Home</Link><Link href="/#products" className="hover:text-wheat">Our products</Link><Link href="/about" className="hover:text-wheat">Farming and company</Link><Link href="/contact" className="hover:text-wheat">Contact</Link></nav></div>
        <div><h2 className="text-sm font-bold uppercase tracking-[0.2em] text-wheat">Find us in Chivhu</h2><div className="mt-5 flex flex-col gap-4 text-sm text-primary-foreground/75"><p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-wheat" /> Al Majid Mall<br />A4, Chivhu<br />Next to Chicken Inn</p><a href="tel:+263780289132" className="flex items-center gap-3 hover:text-wheat"><Phone className="size-4 text-wheat" /> +263 78 028 9132</a><a href="mailto:info@homegroundinvestments.co.zw" className="flex items-center gap-3 hover:text-wheat"><Mail className="size-4 text-wheat" /> info@homegroundinvestments.co.zw</a></div></div>
      </div>
      <div className="border-t border-primary-foreground/15"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-primary-foreground/55 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16"><span>© {new Date().getFullYear()} Home Ground Investments</span><span>Home Ground Butchery · Chivhu, Zimbabwe</span></div></div>
    </footer>
  )
}
