import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about Home Ground Butchery products, the Chivhu location, retail visits, wholesale enquiries, and contact options.", alternates: { canonical: "https://homegroundinvestments.co.zw/faq" } }

const faqs = [
  ["Where is Home Ground Butchery located?", "You can find us at Al Majid Mall on the A4 in Chivhu, next to Chicken Inn."],
  ["What products do you supply?", "Our stated product range includes farm fresh frozen chicken, turkey, pork, and graded beef."],
  ["Can I visit as a retail customer?", "Yes. Home Ground Butchery welcomes walk in retail customers at the Chivhu butchery."],
  ["Do you work with commercial buyers?", "Yes. Retailers, butcheries, supermarkets, and other commercial buyers can contact us about supply requirements."],
  ["Where does your distribution network reach?", "Our distribution network delivers to customers from Masvingo to Harare. Contact the team to discuss your requirements."],
  ["How can I contact Home Ground Butchery?", "Call +263 78 028 9132 or email info@homegroundinvestments.co.zw. You can also use our contact page to send an enquiry."],
]

export default function FAQPage() { return <><Header /><main><section className="bg-sand px-6 py-16 sm:px-10 lg:px-16 lg:py-24"><div className="mx-auto max-w-4xl"><p className="eyebrow">Helpful information</p><h1 className="mt-5 font-display text-5xl font-semibold leading-[0.98] text-forest sm:text-6xl">Questions about buying from Home Ground.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-forest/75">Straight answers about our Chivhu butchery, product categories, retail visits, and commercial supply.</p></div></section><section className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto max-w-4xl divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-6"><summary className="cursor-pointer list-none pr-8 font-display text-2xl font-semibold text-foreground marker:content-none">{question}</summary><p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{answer}</p></details>)}</div><div className="mx-auto mt-12 max-w-4xl border border-border bg-sand p-6 sm:p-8"><h2 className="font-display text-2xl font-semibold text-forest">Still need help?</h2><p className="mt-3 text-muted-foreground">Contact the team about a retail visit or a wholesale requirement.</p><Link href="/contact" className="mt-6 inline-flex bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Contact Home Ground</Link></div></section></main><Footer /><WhatsAppButton /></> }
