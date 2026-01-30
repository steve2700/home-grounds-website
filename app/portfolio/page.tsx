import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "View our completed renovation projects across Zimbabwe. Kitchen, bathroom, commercial, and residential transformations.",
}

const projects = [
  {
    title: "Modern Kitchen Renovation",
    location: "Borrowdale, Harare",
    category: "Residential",
    description: "Complete kitchen transformation with custom cabinetry, granite countertops, and modern appliances.",
    image: "/images/hero-renovations.jpg",
  },
  {
    title: "Office Fit-Out",
    location: "CBD, Harare",
    category: "Commercial",
    description: "Modern open-plan office design for a growing tech company, including meeting rooms and break areas.",
    image: "/images/commercial-renovation.jpg",
  },
  {
    title: "Full House Renovation",
    location: "Hillside, Bulawayo",
    category: "Residential",
    description: "Complete home makeover including kitchen, bathrooms, flooring, and exterior painting.",
    image: "/images/home-exterior.jpg",
  },
  {
    title: "Restaurant Renovation",
    location: "Avondale, Harare",
    category: "Commercial",
    description: "Restaurant interior redesign with new kitchen equipment, seating, and ambient lighting.",
    image: "/images/commercial-renovation.jpg",
  },
  {
    title: "Bathroom Remodel",
    location: "Masvingo",
    category: "Residential",
    description: "Luxury bathroom renovation with walk-in shower, modern fixtures, and heated flooring.",
    image: "/images/hero-renovations.jpg",
  },
  {
    title: "Retail Shop Renovation",
    location: "Eastgate, Harare",
    category: "Commercial",
    description: "Complete retail space redesign with modern displays, lighting, and customer flow optimization.",
    image: "/images/commercial-renovation.jpg",
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Portfolio
              </h1>
              <p className="text-xl text-background/90 leading-relaxed">
                Browse our completed projects. Quality craftsmanship, satisfied clients, and transformations that speak for themselves.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={project.category === "Residential" ? "default" : "secondary"}
                        className={project.category === "Residential" ? "bg-primary" : "bg-secondary"}
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {project.location}
                    </div>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life. Get a free consultation and quote for your renovation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
                <Link href="/contact">Contact Us</Link>
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
