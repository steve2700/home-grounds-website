import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Renovations",
  description: "Transform your home with professional kitchen, bathroom, and full house renovations in Harare, Bulawayo, and Masvingo.",
}

const services = [
  {
    title: "Kitchen Renovations",
    description: "Modern kitchen designs with quality cabinetry, countertops, and appliance installations.",
    features: ["Custom Cabinetry", "Granite/Marble Countertops", "Appliance Installation", "Lighting Design"],
  },
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom transformations with modern fixtures and waterproofing.",
    features: ["Modern Fixtures", "Tile Work", "Waterproofing", "Vanity Installation"],
  },
  {
    title: "Full House Renovations",
    description: "Complete home makeovers from planning to final touches.",
    features: ["Interior Design", "Structural Changes", "Flooring", "Painting"],
  },
  {
    title: "Extensions & Additions",
    description: "Expand your living space with quality room additions and extensions.",
    features: ["Room Additions", "Second Floors", "Garage Conversions", "Outdoor Living"],
  },
]

export default function ResidentialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Residential renovations in Zimbabwe"
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
                <Link href="/renovations" className="hover:text-background">Renovations</Link>
                <span>/</span>
                <span className="text-background">Residential</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Residential Renovations
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Transform your home into the space you've always dreamed of with our expert residential renovation services.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/quote">
                  Get Free Quote
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
                Our Residential Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From kitchens to complete home transformations, we deliver quality craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border border-border shadow-sm">
                  <CardContent className="p-8">
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
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Start Your Home Transformation
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
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
