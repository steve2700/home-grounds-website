import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, CheckCircle, Phone, Award, Clock, Shield, Star, MapPin, Wrench, PaintBucket, Hammer } from "lucide-react"

export const metadata: Metadata = {
  title: "Residential Renovations Harare, Bulawayo & Masvingo | Kitchen & Bathroom Remodeling Zimbabwe",
  description: "Expert residential renovations in Zimbabwe by Home Grounds Investments. Professional kitchen remodeling, bathroom renovations, and full house transformations in Harare, Bulawayo & Masvingo. Free quotes available.",
  keywords: "residential renovations Zimbabwe, kitchen renovations Harare, bathroom remodeling Bulawayo, house renovations Masvingo, home extensions Zimbabwe, kitchen remodeling, bathroom renovation contractors, Home Grounds Investments",
  openGraph: {
    title: "Professional Residential Renovations in Zimbabwe | Home Grounds Investments",
    description: "Transform your home with expert kitchen, bathroom, and full house renovations. Serving Harare, Bulawayo, and Masvingo.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/residential",
  },
}

const services = [
  {
    title: "Kitchen Renovations",
    description: "Transform your kitchen into a modern culinary haven with custom cabinetry, premium countertops, and professional appliance installations. We design functional and beautiful kitchens that increase your home's value.",
    features: ["Custom Cabinetry Design", "Granite/Marble Countertops", "Appliance Installation", "Modern Lighting Design", "Plumbing & Electrical Updates", "Backsplash Tiling"],
    icon: <PaintBucket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Bathroom Remodeling",
    description: "Complete bathroom transformations featuring modern fixtures, quality tile work, and expert waterproofing. Create a spa-like retreat in your own home with our professional bathroom renovation services.",
    features: ["Modern Fixture Installation", "Professional Tile Work", "Waterproofing Solutions", "Custom Vanity Installation", "Walk-in Showers", "Heated Flooring Options"],
    icon: <Wrench className="h-8 w-8 text-primary" />,
  },
  {
    title: "Full House Renovations",
    description: "Complete home makeovers from initial planning to final touches. We handle everything including interior design, structural modifications, flooring installation, and professional painting services.",
    features: ["Interior Design Consultation", "Structural Changes", "Hardwood & Tile Flooring", "Professional Painting", "Window & Door Replacement", "Ceiling Treatments"],
    icon: <Home className="h-8 w-8 text-primary" />,
  },
  {
    title: "Extensions & Additions",
    description: "Expand your living space with quality room additions and home extensions. Whether you need an extra bedroom, second floor, or outdoor living area, we deliver exceptional results.",
    features: ["Room Additions", "Second Floor Construction", "Garage Conversions", "Outdoor Living Spaces", "Patio Enclosures", "Home Office Additions"],
    icon: <Hammer className="h-8 w-8 text-primary" />,
  },
]

const whyChooseUs = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "15+ Years Experience",
    description: "Over a decade of successful residential renovations across Zimbabwe",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Licensed & Insured",
    description: "Fully licensed contractors with comprehensive insurance coverage",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Quality Guaranteed",
    description: "We stand behind our work with solid warranties and guarantees",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "On-Time Delivery",
    description: "Projects completed on schedule without compromising quality",
  },
]

const serviceAreas = [
  { name: "Harare", description: "Serving all suburbs including Borrowdale, Mount Pleasant, Highlands, and CBD" },
  { name: "Bulawayo", description: "Complete coverage across Bulawayo and surrounding areas" },
  { name: "Masvingo", description: "Professional renovation services throughout Masvingo province" },
]

const faqs = [
  {
    question: "How long does a typical kitchen renovation take?",
    answer: "Most kitchen renovations take 3-6 weeks depending on the scope of work. We provide a detailed timeline during consultation.",
  },
  {
    question: "Do you help with design and planning?",
    answer: "Yes! We offer complete design consultation services to help you visualize your dream space before construction begins.",
  },
  {
    question: "What is included in your free quote?",
    answer: "Our free quotes include a detailed breakdown of materials, labor costs, timeline estimates, and 3D renderings when applicable.",
  },
  {
    question: "Do you handle permits and approvals?",
    answer: "Absolutely. We manage all necessary permits and ensure full compliance with local building regulations.",
  },
]

export default function ResidentialPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Residential Renovation Services",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Home Grounds Investments",
      "url": "https://homegrounds.co.zw",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZW"
      },
      "telephone": "+263780289132",
      "areaServed": ["Harare", "Bulawayo", "Masvingo"]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Professional residential renovations in Harare, Zimbabwe - kitchen and bathroom remodeling"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl text-background">
              <nav className="flex items-center gap-2 text-sm text-background/70 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-background">Home</Link>
                <span>/</span>
                <Link href="/renovations" className="hover:text-background">Renovations</Link>
                <span>/</span>
                <span className="text-background">Residential</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Residential Renovations in Zimbabwe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4">
                Transform your home with expert kitchen renovations, bathroom remodeling, and complete house transformations across Harare, Bulawayo, and Masvingo.
              </p>
              <p className="text-lg text-background/80 mb-8">
                ✓ Free Consultations  ✓ Licensed Contractors  ✓ Quality Guaranteed  ✓ Competitive Pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                  <Link href="/quote">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground backdrop-blur-sm text-lg">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    +263 78 028 9132
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Home Grounds Investments: Zimbabwe's Trusted Home Renovation Experts
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Home Grounds Investments is your trusted partner for residential renovations across Zimbabwe. Whether you're planning a modern kitchen renovation in Harare, a luxury bathroom remodel in Bulawayo, or a complete home transformation in Masvingo, our experienced team delivers exceptional results that exceed expectations. With over 15 years of residential renovation experience across Zimbabwe, we've helped hundreds of homeowners create the living spaces they've always dreamed of.
                </p>
                <p>
                  Our comprehensive residential renovation services include everything from minor upgrades to major home transformations. We specialize in kitchen remodeling with custom cabinetry and premium countertops, bathroom renovations featuring modern fixtures and expert waterproofing, full house renovations with structural modifications, and home extensions that seamlessly blend with your existing architecture.
                </p>
                <p>
                  Every project begins with a free consultation where we discuss your vision, budget, and timeline. Our licensed contractors work closely with you throughout the entire process, ensuring clear communication, quality craftsmanship, and on-time completion. We use only premium materials from trusted suppliers and stand behind our work with comprehensive warranties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Expanded */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Residential Renovation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From kitchens to complete home transformations, we deliver quality craftsmanship and exceptional value across all our renovation services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground mb-3">What's Included:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Our Renovation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We're committed to delivering exceptional quality and customer satisfaction on every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Major Cities Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional residential renovation services in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{area.name}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Renovation Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A streamlined approach that ensures quality results and stress-free experience
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: "01", title: "Free Consultation", desc: "We discuss your vision, requirements, and budget during an in-home consultation" },
                  { step: "02", title: "Design & Planning", desc: "Our team creates detailed plans, 3D renderings, and material selections" },
                  { step: "03", title: "Permit Processing", desc: "We handle all necessary permits and approvals with local authorities" },
                  { step: "04", title: "Construction", desc: "Skilled craftsmen execute the renovation with attention to detail and quality" },
                  { step: "05", title: "Final Walkthrough", desc: "We ensure everything meets your expectations before project completion" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our residential renovation services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Sarah M.", location: "Borrowdale, Harare", review: "The kitchen renovation exceeded our expectations. The team was professional, punctual, and the craftsmanship is outstanding." },
                { name: "John K.", location: "Bulawayo", review: "They transformed our outdated bathroom into a modern spa-like retreat. Highly recommended for anyone considering renovations." },
                { name: "Patricia N.", location: "Masvingo", review: "From start to finish, the communication was excellent. Our home extension was completed on time and within budget." },
              ].map((testimonial, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Home Transformation?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-4 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote. Let's bring your renovation vision to life.
            </p>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Serving Harare, Bulawayo, Masvingo, and surrounding areas with professional residential renovation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                <Link href="/quote">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8">
                <a href="tel:+263780289132">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +263 78 028 9132
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
