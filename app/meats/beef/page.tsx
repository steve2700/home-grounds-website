import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beef, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Beef",
  description: "Premium grass-fed and grain-fed beef cuts from Zimbabwe farms. Quality steaks, roasts, and mince available.",
}

const cuts = [
  { name: "Ribeye Steak", description: "Well-marbled, rich flavor", price: "From $18/kg" },
  { name: "Sirloin Steak", description: "Lean and tender", price: "From $16/kg" },
  { name: "T-Bone Steak", description: "Best of both worlds", price: "From $17/kg" },
  { name: "Fillet Mignon", description: "Premium tenderness", price: "From $22/kg" },
  { name: "Rump Steak", description: "Flavorful and economical", price: "From $14/kg" },
  { name: "Beef Mince", description: "Fresh ground daily", price: "From $10/kg" },
  { name: "Beef Roast", description: "Perfect for Sunday roast", price: "From $12/kg" },
  { name: "Beef Stew Meat", description: "Cubed for convenience", price: "From $11/kg" },
]

export default function BeefPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-meats.jpg"
              alt="Premium beef cuts"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-2xl text-background">
              <nav className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link href="/" className="hover:text-background">Home</Link>
                <span>/</span>
                <Link href="/meats" className="hover:text-background">Meats</Link>
                <span>/</span>
                <span className="text-background">Beef</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Beef className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premium Beef
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Grass-fed and grain-fed beef from Zimbabwe's finest farms. Quality you can taste.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/order">
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Cuts Guide */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Beef Cuts Available
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From premium steaks to everyday cuts, all vacuum-packed for freshness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {cuts.map((cut, index) => (
                <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{cut.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{cut.description}</p>
                    <p className="text-secondary font-bold">{cut.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              * Prices may vary. Contact us for current pricing and bulk order discounts.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Order Premium Beef Today
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us for current pricing, bulk orders, or to place your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/order">Place Order</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent">
                <a href="tel:+263780289132">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
