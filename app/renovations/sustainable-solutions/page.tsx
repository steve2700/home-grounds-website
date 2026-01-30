import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sun, CheckCircle, Phone, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainable Solutions",
  description: "Solar installations, smart home systems, and energy-efficient upgrades for Zimbabwe homes and businesses.",
}

const services = [
  {
    title: "Solar Installations",
    description: "Harness Zimbabwe's abundant sunshine with professional solar systems.",
    features: ["Solar Panels", "Battery Storage", "Inverter Systems", "Grid Connection"],
  },
  {
    title: "Energy Efficiency Upgrades",
    description: "Reduce your energy bills with efficiency improvements.",
    features: ["LED Lighting", "Insulation", "Efficient HVAC", "Smart Thermostats"],
  },
  {
    title: "Smart Home Systems",
    description: "Modern automation for comfort, security, and efficiency.",
    features: ["Home Automation", "Security Systems", "Smart Lighting", "Remote Control"],
  },
  {
    title: "Water-Wise Solutions",
    description: "Conserve water and reduce costs with smart water solutions.",
    features: ["Rainwater Harvesting", "Greywater Recycling", "Efficient Fixtures", "Tank Systems"],
  },
]

export default function SustainablePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/zimbabwe-farm.jpg"
              alt="Sustainable solutions in Zimbabwe"
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
                <span className="text-background">Sustainable</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Leaf className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Eco-Friendly</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sustainable Solutions
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Future-proof your property with solar, smart home systems, and energy-efficient upgrades.
              </p>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
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
                Sustainable Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Invest in a greener future while reducing your monthly costs.
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
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Go Green Today
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Start saving on energy costs while helping the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/quote">Get Free Quote</Link>
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
