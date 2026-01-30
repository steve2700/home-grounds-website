import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beef, CheckCircle, Phone, Truck, Shield, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Meats & Butcher",
  description: "Farm-to-table premium beef, pork, and poultry. Hygienic processing, custom butchery services. Serving Harare, Bulawayo, Masvingo.",
}

const products = [
  {
    title: "Premium Beef",
    description: "Quality grass-fed and grain-fed beef from Zimbabwe's finest farms.",
    image: "/images/hero-meats.jpg",
    href: "/meats/beef",
    features: ["Grass-Fed Options", "Premium Cuts", "Bulk Orders", "Vacuum Packed"],
  },
  {
    title: "Quality Pork",
    description: "Fresh pork cuts, sausages, and smoked products.",
    image: "/images/pork.jpg",
    href: "/meats/pork",
    features: ["Fresh Cuts", "Sausages", "Smoked Products", "Wholesale"],
  },
  {
    title: "Fresh Poultry",
    description: "Farm-fresh chickens and portions, delivered daily.",
    image: "/images/poultry.jpg",
    href: "/meats/poultry",
    features: ["Whole Chickens", "Portions", "Free-Range", "Daily Fresh"],
  },
  {
    title: "Butchery Services",
    description: "Custom cutting, party packs, and catering services.",
    image: "/images/hero-meats.jpg",
    href: "/meats/butchery",
    features: ["Custom Cutting", "Deboning", "Party Packs", "Delivery"],
  },
]

const qualityFeatures = [
  {
    icon: Leaf,
    title: "Farm Fresh",
    description: "Sourced from trusted Zimbabwe farms",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Strict hygiene and quality standards",
  },
  {
    icon: Truck,
    title: "Fresh Delivery",
    description: "Delivered fresh to your door",
  },
]

export default function MeatsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-meats.jpg"
              alt="Premium meats in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-2xl text-background">
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Beef className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">Meats & Butcher</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Farm-Fresh Quality
              </h1>
              <p className="text-xl text-background/90 mb-8 leading-relaxed">
                Premium beef, pork, and poultry from Zimbabwe's finest farms. Hygienic processing, delivered fresh to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/order">
                    Order Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 text-secondary-foreground">
                  <div className="h-12 w-12 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-secondary-foreground/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Products
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From premium cuts to custom butchery, we offer the finest quality meats in Zimbabwe.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, index) => (
                <Link key={index} href={product.href}>
                  <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-56">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{product.description}</p>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-secondary font-medium">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Farm to Table Story */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/zimbabwe-farm.jpg"
                  alt="Zimbabwe cattle farm"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  From Our Farms to Your Table
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  At Home Grounds Meats, we partner with trusted Zimbabwe farmers who share our commitment to quality and animal welfare. Our cattle graze on Zimbabwe's rich grasslands, producing beef with exceptional flavor and texture.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Every cut is processed in our hygienic facilities, ensuring the freshest, safest meat for your family. We believe in transparency - from farm to table, you can trust the quality of our products.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Trusted local farm partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Strict hygiene and quality controls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Fresh daily processing and delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Order Fresh Meats Today
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Experience the difference of farm-fresh quality. Order for delivery or visit our butchery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/order">Place Order</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary bg-transparent">
                <a href="https://wa.me/263780289132">
                  WhatsApp Order
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
