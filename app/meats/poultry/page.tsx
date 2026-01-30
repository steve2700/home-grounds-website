import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Fresh Poultry",
  description: "Farm-fresh chickens and portions. Free-range options available. Daily delivery across Zimbabwe.",
}

const products = [
  { name: "Whole Chicken", description: "Farm-fresh, ready to cook", price: "From $8/each" },
  { name: "Chicken Breast", description: "Boneless, skinless", price: "From $12/kg" },
  { name: "Chicken Thighs", description: "Bone-in, juicy", price: "From $9/kg" },
  { name: "Chicken Wings", description: "Perfect for braai", price: "From $8/kg" },
  { name: "Chicken Drumsticks", description: "Family favorite", price: "From $8/kg" },
  { name: "Free-Range Chicken", description: "Premium quality", price: "From $12/each" },
  { name: "Chicken Livers", description: "Fresh daily", price: "From $6/kg" },
  { name: "Chicken Gizzards", description: "Traditional favorite", price: "From $5/kg" },
]

export default function PoultryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/poultry.jpg"
              alt="Fresh poultry"
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
                <span className="text-background">Poultry</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Leaf className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Free-Range Available</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fresh Poultry
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Farm-fresh chickens and portions, delivered daily. Free-range options available.
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
                Poultry Products
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fresh daily from farm to table. Quality you can trust.
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
              Order Fresh Poultry Today
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
