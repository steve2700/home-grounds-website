import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Heart, Shield, Users, Target, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Home Ground Investments - Zimbabwe's trusted partner for quality renovations and property improvements since 2015.",
}

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on quality. Every project meets our high standards.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your satisfaction is our priority. We treat every customer like family.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're committed to building better communities across Zimbabwe.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, every single day.",
  },
]

const timeline = [
  { year: "2015", event: "Company founded in Waterfalls, Harare" },
  { year: "2017", event: "Expanded to commercial renovations" },
  { year: "2019", event: "Opened Bulawayo branch" },
  { year: "2021", event: "Expanded sustainable solutions division" },
  { year: "2023", event: "Expanded to Masvingo and Mutare" },
  { year: "2026", event: "Serving 500+ satisfied clients" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Home Ground Investments Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-2xl text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Home Ground
              </h1>
              <p className="text-xl text-background/90 mb-8 leading-relaxed">
                Building better homes and spaces. Since 2015, we've been Zimbabwe's trusted partner for quality renovations.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Home Ground Investments was founded with a simple vision: to provide Zimbabweans with quality renovation services they can trust. What started as a small renovation company in Waterfalls has grown into a well-established business serving hundreds of clients across Zimbabwe.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Over the years, we've expanded from residential renovations into commercial fit-outs, sustainable solutions, and full property maintenance — always driven by the same commitment to craftsmanship and client satisfaction.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're proud to be a family-owned business that treats every customer like family. Our success is built on the trust of our community, and we work hard every day to earn that trust.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/home-exterior.jpg"
                  alt="Home Ground team at work"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From kitchens and bathrooms to full commercial fit-outs — quality craftsmanship across every project.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/kitchen-renovation-harare.jpg"
                    alt="Residential renovations"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/90 to-transparent px-4 py-4">
                    <h3 className="text-xl font-bold text-white">Residential Renovations</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Kitchen & bathroom remodels</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Interior remodeling</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Exterior improvements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/commercial-renovation.jpg"
                    alt="Commercial fit-outs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/90 to-transparent px-4 py-4">
                    <h3 className="text-xl font-bold text-white">Commercial Fit-Outs</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Office fit-outs</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Retail renovations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Property maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/images/hero-renovations.jpg"
                    alt="Sustainable solutions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-900/90 to-transparent px-4 py-4">
                    <h3 className="text-xl font-bold text-white">Sustainable Solutions</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Solar installations</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Energy-efficient systems</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>Smart home upgrades</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Journey
              </h2>
              <p className="text-background/70 text-lg max-w-2xl mx-auto">
                From humble beginnings to serving hundreds across Zimbabwe.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-primary font-bold text-xl">{item.year}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-background/90">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/quote">Get Free Quote</Link>
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
