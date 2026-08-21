"use client"

import { useState } from "react"
import type { FormEvent } from "react"
import Image from "next/image"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hello Home Ground Butchery. My name is ${data.get("name")}. I am interested in ${data.get("interest")}. ${data.get("message")}`
    window.open(`https://wa.me/263780289132?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setSent(true)
    event.currentTarget.reset()
  }
  return <><Header /><main>
    <section className="bg-sand px-6 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.8fr]"><div><p className="eyebrow">Come by or get in touch</p><h1 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-[0.98] text-forest sm:text-6xl">Let us help with your next order.</h1></div><p className="max-w-xl text-lg leading-8 text-forest/75">Visit Home Ground Butchery at Al Majid Mall on the A4 in Chivhu, or contact us about retail and wholesale supply.</p></div></section>
    <section className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div className="flex flex-col gap-8"><div><p className="eyebrow">Find Home Ground</p><h2 className="mt-4 font-display text-4xl font-semibold text-forest">Chivhu is our home base.</h2></div><div className="flex flex-col gap-6 text-foreground/75"><div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary" /><p>Al Majid Mall<br />A4, Chivhu<br />Next to Chicken Inn</p></div><a href="tel:+263780289132" className="flex items-center gap-4 transition hover:text-primary"><Phone className="size-5 text-primary" />+263 78 028 9132</a><a href="mailto:info@homegroundinvestments.co.zw" className="flex items-center gap-4 transition hover:text-primary"><Mail className="size-5 text-primary" />info@homegroundinvestments.co.zw</a></div><div className="relative min-h-64 overflow-hidden"><Image src="/images/homeground-butchery-al-majid-mall-storefront.jpg" alt="Home Ground Butchery storefront at Al Majid Mall" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover" /></div></div><div className="bg-muted/60 p-6 sm:p-10"><p className="eyebrow">Retail or wholesale</p><h2 className="mt-4 font-display text-3xl font-semibold text-forest">Send an enquiry</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Tell us what you need and we will open WhatsApp with your message ready to send.</p><form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5"><div className="grid gap-5 sm:grid-cols-2"><div className="flex flex-col gap-2"><Label htmlFor="name">Your name</Label><Input id="name" name="name" required /></div><div className="flex flex-col gap-2"><Label htmlFor="phone">Phone number</Label><Input id="phone" name="phone" type="tel" required /></div></div><div className="flex flex-col gap-2"><Label htmlFor="interest">I am enquiring about</Label><Input id="interest" name="interest" placeholder="Retail order, wholesale supply, chicken, beef, pork..." required /></div><div className="flex flex-col gap-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={5} required /></div><Button type="submit" className="w-full bg-primary py-6 font-bold text-primary-foreground hover:bg-primary/90"><Send data-icon="inline-start" />Send via WhatsApp</Button>{sent && <p role="status" className="text-center text-sm font-semibold text-secondary-foreground">Your WhatsApp message is ready to send.</p>}</form></div></div></section>
  </main><Footer /><WhatsAppButton /></>
}
