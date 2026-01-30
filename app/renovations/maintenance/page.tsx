import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Wrench, CheckCircle, Phone, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Property Maintenance & Repairs",
  description: "Professional property maintenance, waterproofing, and repair services across Zimbabwe.",
}

const services = [
  {
    title: "General Property Maintenance",
    description: "Regular maintenance to keep your property in top condition.",
    features: ["Routine Inspections", "Preventive Repairs", "Painting & Touch-ups", "Fixture Repairs"],
  },
  {
    title: "Waterproofing & Damp Proofing",
    description: "Protect your property from water damage with expert waterproofing.",
    features: ["Roof Waterproofing", "Basement Sealing", "Wall Treatment", "Drainage Solutions"],
  },
  {
    title: "Structural Repairs",
    description: "Address structural issues before they become major problems.",
    features: ["Foundation Repairs", "Crack Filling", "Wall Reinforcement", "Beam Repairs"],
  },
  {
    title: "Electrical & Plumbing",
    description: "Professional electrical and plumbing maintenance services.",
    features: ["Electrical Repairs", "Plumbing Fixes", "Fixture Installation", "Emergency Services"],
  },
]

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/home-exterior.jpg"
              alt="Property maintenance in Zimbabwe"
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
                <span className="text-background">Maintenance</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Maintenance & Repairs
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Keep your property in perfect condition with our professional maintenance services.
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

        {/* Emergency Banner */}
        <section className="bg-primary py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-primary-foreground">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">Emergency repairs available 24/7</span>
              <a href="tel:+263780289132" className="underline hover:no-underline">Call Now</a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Maintenance Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From routine maintenance to emergency repairs, we keep your property safe and functional.
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
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Schedule Your Maintenance
            </h2>
            <p className="text-background/90 text-lg mb-8 max-w-2xl mx-auto">
              Preventive maintenance saves money in the long run. Contact us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground bg-transparent">
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
