import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Leaf, ShieldCheck, Truck, Users } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "About Home Ground Butchery | Chivhu, Zimbabwe",
  description: "Learn about Home Ground Butchery and Home Ground Investments, a Zimbabwean agricultural enterprise based in Chivhu.",
}

const values = [
  { icon: Leaf, title: "Grounded in agriculture", text: "Our work begins with sustainable livestock farming and commercial poultry production in Zimbabwe." },
  { icon: ShieldCheck, title: "Handled with care", text: "We maintain hygiene protocols at our Chivhu facilities so customers can buy with confidence." },
  { icon: Truck, title: "Built for supply", text: "We serve walk in customers as well as retailers, butcheries, supermarkets, and other commercial buyers." },
  { icon: Users, title: "Close to our customers", text: "Our team understands the needs of households and the food trade, from everyday cuts to larger orders." },
]

export default function AboutPage() {
  return <><Header /><main>
    <section className="bg-sand px-6 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[0.85fr_1.15fr]"><div><p className="eyebrow">Our home ground</p><h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] text-forest sm:text-6xl">A Zimbabwean food business rooted in Chivhu.</h1></div><p className="max-w-xl text-lg leading-8 text-forest/75">Home Ground Butchery trades under its parent company, Home Ground Investments. We connect sustainable farming, careful processing, and dependable distribution with the people who buy and serve Zimbabwean food.</p></div></section>
    <section className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]"><div className="relative min-h-[420px] overflow-hidden"><Image src="/images/homeground-butchery-shopfront-interior.jpg" alt="Inside Home Ground Butchery at Al Majid Mall in Chivhu" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /></div><div><p className="eyebrow">What we do</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-forest">From the farm to the food trade.</h2><div className="mt-6 flex flex-col gap-5 text-base leading-7 text-foreground/70"><p>Home Ground Investments is a premier Zimbabwean agricultural enterprise headquartered in Chivhu. Our focus is sustainable livestock farming, commercial poultry production, and the distribution of quality frozen and fresh products.</p><p>Home Ground Butchery welcomes walk in retail customers at Al Majid Mall on the A4, next to Chicken Inn. We also supply commercial buyers looking for chicken, turkeys, pork, and graded beef.</p><p>Our distribution network serves customers along the route from Masvingo to Harare, helping retailers and food businesses access consistent supply from a local agricultural partner.</p></div><Link href="/contact" className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90">Talk to our team <ArrowUpRight className="size-4" /></Link></div></div></section>
    <section className="bg-forest px-6 py-20 text-primary-foreground sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-7xl"><p className="eyebrow text-wheat">Our approach</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight">Good food starts with responsible work.</h2><div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{values.map(({ icon: Icon, title, text }) => <div key={title} className="border-t border-primary-foreground/20 pt-5"><Icon className="size-7 text-wheat" /><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-primary-foreground/70">{text}</p></div>)}</div></div></section>
  </main><Footer /><WhatsAppButton /></>
}
