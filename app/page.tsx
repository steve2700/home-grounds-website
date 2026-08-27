import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, Truck, Wheat, PackageCheck } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

// --- SEO -----------------------------------------------------------------
// Confirm this is the live domain before shipping — used for canonical/OG URLs.
const SITE_URL = "https://homegroundinvestments.co.zw"

export const metadata: Metadata = {
  title: "Home Ground Butchery | Beef, Poultry & Pork in Chivhu, Zimbabwe",
  description:
    "Farm-fresh frozen chicken, turkey, pork and graded beef from Home Ground Butchery in Chivhu, Zimbabwe. Supplying households, retailers, butcheries and supermarkets from Masvingo to Harare.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Home Ground Butchery",
    description: "Farm-fresh beef, poultry and pork from Chivhu, Zimbabwe — for households and the trade.",
    url: SITE_URL,
    siteName: "Home Ground Butchery",
    images: [{ url: "/images/homeground-butchery-shopfront-interior.jpg", width: 1200, height: 630 }],
    locale: "en_ZW",
    type: "website",
  },
}

// Structured data so Google can surface address/phone directly in search results.
// Add openingHoursSpecification once you confirm trading hours.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: "Home Ground Butchery",
  image: `${SITE_URL}/images/homeground-butchery-shopfront-interior.jpg`,
  telephone: "+263780289132",
  email: "sales@homegroundinvestments.co.zw",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Majid Mall, A4 Beitbridge Road",
    addressLocality: "Chivhu",
    addressCountry: "ZW",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Home Ground Investments",
  },
}

// --- Content ---------------------------------------------------------------
// Each product links to /contact with its name pre-filled as a query param,
// so an enquiry form on that page can read it and preselect the product.
type Product = {
  name: string
  note: string
  image: string
}

const products: Product[] = [
  { name: "Beef", note: "Graded cuts for the family table and trade", image: "/images/hero-beaf.jpg" },
  { name: "Poultry", note: "Frozen chicken and turkey for reliable supply", image: "/images/poultry.jpg" },
  { name: "Pork", note: "Farm raised pork and familiar favourites", image: "/images/pork.jpg" },
]

type Feature = {
  icon: typeof Wheat
  title: string
  body: string
}

const features: Feature[] = [
  {
    icon: Wheat,
    title: "From the farm",
    body: "Our agricultural roots give the butchery a clear understanding of livestock and poultry supply.",
  },
  {
    icon: PackageCheck,
    title: "For the trade",
    body: "Talk to us about high volume supply for retailers, butcheries and supermarkets.",
  },
  {
    icon: MapPin,
    title: "In Chivhu",
    body: "Find us at Al Majid Mall along the A4 Beitbridge Road, next to Chicken Inn.",
  },
]

// Shared class strings so button styling only needs to change in one place.
const buttonPrimary =
  "inline-flex items-center justify-center gap-2 bg-wheat px-6 py-3.5 text-sm font-bold text-forest transition hover:bg-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
const buttonOutline =
  "inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:border-wheat hover:text-wheat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

export default function HomePage() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-script-component-in-head -- static JSON-LD, no external script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />

      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-forest text-primary-foreground">
          <div className="mx-auto grid max-w-7xl lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-wheat">
                <span className="h-px w-10 bg-wheat" aria-hidden="true" /> Home Ground Butchery
              </p>
              <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                From Zimbabwean ground to your table.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
                Farm fresh frozen chicken, turkey, pork and graded beef from our Chivhu operation, supplied to
                households, retailers, butcheries and supermarkets.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className={buttonPrimary}>
                  Visit the butchery <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="mailto:sales@homegroundinvestments.co.zw"
                  className={buttonOutline}
                  aria-label="Email us about wholesale enquiries"
                >
                  Wholesale enquiries
                </Link>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-4 border-t border-primary-foreground/20 pt-5 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-wheat" aria-hidden="true" /> Al Majid Mall, A4, Chivhu
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="size-4 text-wheat" aria-hidden="true" /> Masvingo to Harare
                </span>
              </div>
            </div>
            <div className="relative min-h-[430px] lg:min-h-full">
              <Image
                src="/images/homeground-butchery-shopfront-interior.jpg"
                alt="Home Ground Butchery shop interior at Al Majid Mall in Chivhu"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              <div className="absolute bottom-6 left-6 border border-primary-foreground/40 bg-forest/80 px-4 py-3 text-xs uppercase tracking-[0.18em] text-primary-foreground backdrop-blur-sm">
                Chivhu, Zimbabwe
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">What we supply</p>
                <h2 className="section-title mt-3 max-w-2xl">Good food starts with a dependable source.</h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">
                A practical range of everyday proteins, prepared for the home kitchen and the buying needs of
                Zimbabwean trade.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="group block overflow-hidden border border-border bg-card transition hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Enquire about ${product.name}`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={product.image}
                      alt={`${product.name} supply from Home Ground Butchery`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4 p-5">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-foreground">{product.name}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{product.note}</p>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-5 shrink-0 text-primary transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About / story */}
        <section className="bg-sand px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/livestock-hero.jpg"
                alt="Livestock management connected to Home Ground Investments in Zimbabwe"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 right-5 bg-wheat px-4 py-3 text-xs font-bold uppercase tracking-widest text-forest">
                Home Ground Investments
              </div>
            </div>
            <div>
              <p className="eyebrow">The home ground</p>
              <h2 className="section-title mt-3">Raised with care. Handled with discipline. Served with purpose.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                Home Ground Butchery trades under Home Ground Investments, a Zimbabwean agricultural enterprise
                headquartered in Chivhu. Our work connects sustainable livestock farming and commercial poultry
                production with a distribution network built for real demand.
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                At our Chivhu facilities on the Beitbridge Road A4, hygiene and consistency are part of the
                everyday work. The result is a straightforward promise: products you can plan around, whether you
                are shopping for supper or sourcing for your shelves.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 font-bold text-forest underline decoration-wheat decoration-2 underline-offset-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Learn about Home Ground <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-background px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <p className="eyebrow">A better way to buy</p>
            <div className="mt-3 grid gap-6 md:grid-cols-3">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="border-t-2 border-primary pt-5">
                  <Icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary px-6 py-16 text-primary-foreground sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
                Ready when you are
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
                Bring home something good.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="tel:+263780289132"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Phone className="size-4" aria-hidden="true" /> Call the team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 px-6 py-3.5 text-sm font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get a wholesale quote <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
