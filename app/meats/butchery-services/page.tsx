import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, CheckCircle, Scissors, Package, Truck, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Butchery Services",
  description: "Custom cutting, deboning, party packs, and meat delivery services in Zimbabwe.",
}

const services = [
  {
    icon: Scissors,
    title: "Custom Cutting",
    description: "Get your meat cut exactly how you want it. Our skilled butchers cater to your specific requirements.",
    features: ["Specific cut sizes", "Portioning", "Special requests"],
  },
  {
    icon: Package,
    title: "Party Packs",
    description: "Perfect meat selections for events, parties, and family gatherings.",
    features: ["Braai packs", "Event catering", "Bulk orders"],
  },
  {
    icon: Truck,
    title: "Delivery Services",
    description: "Fresh meat delivered to your door across Harare, Bulawayo, and Masvingo.",
    features: ["Same-day delivery", "Scheduled orders", "Bulk delivery"],
  },
  {
    icon: Users,
    title: "Wholesale Supply",
    description: "Reliable meat supply for restaurants, hotels, and retail businesses.",
    features: ["Regular supply", "Volume discounts", "Custom orders"],
  },
]

export default function ButcheryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-meats.jpg"
              alt="Butchery services"
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
                <span className="text-background">Butchery Services</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Butchery Services
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Custom cutting, party packs, delivery, and wholesale supply. Professional butchery services.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/order">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional butchery services for individuals and businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border border-border shadow-sm">
                  <CardContent className="p-8">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
              Need Custom Butchery Services?
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us to discuss your requirements. We cater to all orders, big or small.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/contact">Contact Us</Link>
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
