import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Quality Pork",
  description: "Fresh pork cuts, sausages, and smoked products. Quality pork from Zimbabwe farms.",
}

const products = [
  { name: "Pork Chops", description: "Bone-in, tender cuts", price: "From $12/kg" },
  { name: "Pork Ribs", description: "Perfect for braai", price: "From $10/kg" },
  { name: "Pork Loin", description: "Lean and versatile", price: "From $14/kg" },
  { name: "Pork Belly", description: "Rich and flavorful", price: "From $11/kg" },
  { name: "Boerewors", description: "Traditional sausage", price: "From $13/kg" },
  { name: "Pork Sausages", description: "Fresh daily", price: "From $12/kg" },
  { name: "Bacon", description: "Smoked to perfection", price: "From $15/kg" },
  { name: "Ham", description: "Quality cured ham", price: "From $16/kg" },
]

export default function PorkPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/pork.jpg"
              alt="Quality pork cuts"
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
                <span className="text-background">Pork</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Pork
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Fresh pork cuts, sausages, and smoked products from quality farms.
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

        {/* Products */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pork Products
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From fresh cuts to smoked products, quality you can trust.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <p className="text-secondary font-bold">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Order Quality Pork Today
            </h2>
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
