import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Renovations",
  description: "Professional office fit-outs, retail renovations, and commercial property improvements in Zimbabwe.",
}

const services = [
  {
    title: "Office Fit-Outs",
    description: "Create productive workspaces with modern office design and construction.",
    features: ["Open Plan Layouts", "Meeting Rooms", "Reception Areas", "IT Infrastructure"],
  },
  {
    title: "Retail Renovations",
    description: "Transform retail spaces to attract customers and boost sales.",
    features: ["Store Layouts", "Display Systems", "Lighting Design", "Brand Integration"],
  },
  {
    title: "Restaurant Renovations",
    description: "Kitchen and dining area renovations for hospitality businesses.",
    features: ["Commercial Kitchens", "Dining Areas", "Bar Construction", "Health Compliance"],
  },
  {
    title: "Tenant Installations",
    description: "Quick-turnaround installations for new business tenants.",
    features: ["Fast Completion", "Minimal Disruption", "Budget-Friendly", "Code Compliance"],
  },
]

export default function CommercialPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/commercial-renovation.jpg"
              alt="Commercial renovations in Zimbabwe"
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
                <span className="text-background">Commercial</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Renovations
              </h1>
              <p className="text-xl text-background/90 mb-8">
                Professional renovation services for offices, retail spaces, and commercial properties.
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
                Commercial Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From offices to retail, we deliver professional commercial renovations.
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
              Transform Your Business Space
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Get a professional consultation for your commercial project.
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
