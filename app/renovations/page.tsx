import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Building2, Wrench, Sun, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Renovations & Property Improvements",
  description: "Professional residential & commercial renovation services across Zimbabwe. Kitchen, bathroom, office renovations, maintenance and sustainable solutions.",
}

const services = [
  {
    title: "Residential Services",
    description: "Transform your home with expert renovations for kitchens, bathrooms, bedrooms, and full house makeovers.",
    icon: Home,
    href: "/renovations/residential",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: ["Kitchen Renovations", "Bathroom Remodeling", "Full House Renovations", "Extensions & Additions"],
  },
  {
    title: "Commercial Services",
    description: "Professional office fit-outs, retail renovations, and tenant installations for businesses.",
    icon: Building2,
    href: "/renovations/commercial",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    features: ["Office Fit-Outs", "Retail Renovations", "Restaurant Renovations", "Warehouse Refurbishments"],
  },
  {
    title: "Maintenance & Repairs",
    description: "Preventive maintenance and emergency repairs to keep your property in top condition.",
    icon: Wrench,
    href: "/renovations/maintenance",
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: ["General Maintenance", "Waterproofing", "Structural Repairs", "Electrical & Plumbing"],
  },
  {
    title: "Sustainable Solutions",
    description: "Modern eco-friendly upgrades including solar, smart home systems, and energy efficiency.",
    icon: Sun,
    href: "/renovations/sustainable",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    features: ["Solar Installations", "Energy Efficiency", "Smart Home Systems", "Water-Wise Solutions"],
  },
]

const processSteps = [
  { step: 1, title: "Free Consultation", description: "We visit your property to discuss your vision and requirements" },
  { step: 2, title: "Detailed Quote", description: "Receive a comprehensive quote with timeline and material options" },
  { step: 3, title: "Design & Planning", description: "Our team creates detailed plans and schedules the project" },
  { step: 4, title: "Quality Construction", description: "Expert craftsmen bring your vision to life with precision" },
  { step: 5, title: "Final Walkthrough", description: "We ensure everything meets your expectations before handover" },
]

export default function RenovationsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Professional renovations in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-2xl text-background">
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Home className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Renovations & Improvements</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transform Your Space
              </h1>
              <p className="text-xl text-background/90 mb-8 leading-relaxed">
                Professional renovation services for homes and businesses across Zimbabwe. Quality craftsmanship, transparent pricing, on-time delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/quote">
                    Get Free Quote
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

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Renovation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From minor repairs to complete transformations, we handle projects of all sizes with the same dedication to quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Card className="h-full border border-border shadow-sm hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-lg ${service.bgColor} mb-6 transition-transform group-hover:scale-110`}>
                        <service.icon className={`h-7 w-7 ${service.color}`} />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-secondary" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center text-primary font-medium">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A simple, transparent process from initial consultation to final handover
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and detailed quote for your renovation project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/portfolio">View Our Work</Link>
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
