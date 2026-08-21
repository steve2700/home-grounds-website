import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Truck, Wheat, PackageCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

const products = [
  { name: "Beef", note: "Graded cuts for the family table and trade", image: "/images/homeground-butchery-meat-selection-counter.jpg" },
  { name: "Poultry", note: "Frozen chicken and turkey for reliable supply", image: "/images/poultry.jpg" },
  { name: "Pork", note: "Farm raised pork and familiar favourites", image: "/images/pork.jpg" },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-forest text-primary-foreground">
          <div className="mx-auto grid max-w-7xl lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-wheat">
                <span className="h-px w-10 bg-wheat" /> Home Ground Butchery
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                From Zimbabwean ground to your table.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
                Farm fresh frozen chicken, turkey, pork and graded beef from our Chivhu operation, supplied to households, retailers, butcheries and supermarkets.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-wheat px-6 py-3.5 text-sm font-bold text-forest transition hover:bg-primary-foreground">
                  Visit the butchery <ArrowUpRight className="size-4" />
                </Link>
                <Link href="mailto:sales@homegroundinvestments.co.zw" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:border-wheat hover:text-wheat">
                  Wholesale enquiries
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2"><MapPin className="size-4 text-wheat" /> Al Majid Mall, A4, Chivhu</span>
                <span className="flex items-center gap-2"><Truck className="size-4 text-wheat" /> Masvingo to Harare</span>
              </div>
            </div>
            <div className="relative min-h-[430px] lg:min-h-full">
              <Image src="/images/homeground-butchery-shopfront-interior.jpg" alt="Home Ground Butchery shop interior at Al Majid Mall in Chivhu" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              <div className="absolute bottom-6 left-6 border border-primary-foreground/40 bg-forest/80 px-4 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm">Chivhu, Zimbabwe</div>
            </div>
          </div>
        </section>

        <section id="products" className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">What we supply</p><h2 className="section-title mt-3 max-w-2xl">Good food starts with a dependable source.</h2></div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">A practical range of everyday proteins, prepared for the home kitchen and the buying needs of Zimbabwean trade.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {products.map((product) => <article key={product.name} className="group overflow-hidden border border-border bg-card"><div className="relative aspect-[4/3]"><Image src={product.image} alt={`${product.name} supply from Home Ground Butchery`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="flex items-start justify-between gap-4 p-5"><div><h3 className="font-display text-2xl font-semibold text-foreground">{product.name}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{product.note}</p></div><ArrowUpRight className="mt-1 size-5 text-primary" /></div></article>)}
            </div>
          </div>
        </section>

        <section className="bg-sand px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/livestock-management.jpg" alt="Livestock management connected to Home Ground Investments in Zimbabwe" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /><div className="absolute bottom-5 right-5 bg-wheat px-4 py-3 text-xs font-bold uppercase tracking-widest text-forest">Home Ground Investments</div></div>
            <div><p className="eyebrow">The home ground</p><h2 className="section-title mt-3">Raised with care. Handled with discipline. Served with purpose.</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">Home Ground Butchery trades under Home Ground Investments, a Zimbabwean agricultural enterprise headquartered in Chivhu. Our work connects sustainable livestock farming and commercial poultry production with a distribution network built for real demand.</p><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">At our Chivhu facilities on the Beitbridge Road A4, hygiene and consistency are part of the everyday work. The result is a straightforward promise: products you can plan around, whether you are shopping for supper or sourcing for your shelves.</p><Link href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-forest underline decoration-wheat decoration-2 underline-offset-8">Learn about Home Ground <ArrowUpRight className="size-4" /></Link></div>
          </div>
        </section>

        <section className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28"><div className="mx-auto max-w-7xl"><p className="eyebrow">A better way to buy</p><div className="mt-3 grid gap-6 md:grid-cols-3"><div className="border-t-2 border-primary pt-5"><Wheat className="size-6 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold">From the farm</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Our agricultural roots give the butchery a clear understanding of livestock and poultry supply.</p></div><div className="border-t-2 border-primary pt-5"><PackageCheck className="size-6 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold">For the trade</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Talk to us about high volume supply for retailers, butcheries and supermarkets.</p></div><div className="border-t-2 border-primary pt-5"><MapPin className="size-6 text-primary" /><h3 className="mt-5 font-display text-xl font-semibold">In Chivhu</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Find us at Al Majid Mall along the A4 Beitbridge Road, next to Chicken Inn.</p></div></div></div></section>

        <section className="bg-primary px-6 py-16 text-primary-foreground sm:px-10 lg:px-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">Ready when you are</p><h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">Bring home something good.</h2></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="tel:+263780289132" className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary"><Phone className="size-4" /> Call the team</Link><Link href="/contact" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3.5 text-sm font-bold text-primary-foreground">Get in touch <ArrowUpRight className="size-4" /></Link></div></div></section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
