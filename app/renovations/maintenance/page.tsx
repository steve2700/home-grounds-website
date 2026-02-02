import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Wrench, CheckCircle, Phone, AlertTriangle, Shield, Clock, Award, Star, MapPin, Droplets, Zap, Home, Hammer, PaintBucket, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Property Maintenance & Repairs Zimbabwe | Waterproofing, Plumbing & Electrical Services Harare",
  description: "Professional property maintenance and repair services in Zimbabwe by Home Grounds Investments. Waterproofing, plumbing, electrical repairs, and 24/7 emergency services in Harare, Bulawayo & Masvingo.",
  keywords: "property maintenance Zimbabwe, waterproofing Harare, plumbing repairs Bulawayo, electrical repairs Masvingo, emergency repairs Zimbabwe, property repairs, Home Grounds Investments, damp proofing, structural repairs",
  openGraph: {
    title: "Expert Property Maintenance & Repairs in Zimbabwe | Home Grounds Investments",
    description: "Keep your property in perfect condition with professional maintenance, waterproofing, and 24/7 emergency repair services across Zimbabwe.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/maintenance",
  },
}

const services = [
  {
    title: "General Property Maintenance",
    description: "Comprehensive routine maintenance services to keep your residential or commercial property in optimal condition. Our preventive maintenance programs identify and address issues before they become costly repairs.",
    features: ["Regular Property Inspections", "Preventive Repair Programs", "Professional Painting & Touch-ups", "Door & Window Repairs", "Fixture Replacements", "Seasonal Maintenance"],
    icon: <Home className="h-8 w-8 text-primary" />,
  },
  {
    title: "Waterproofing & Damp Proofing",
    description: "Expert waterproofing solutions to protect your property from Zimbabwe's rainy seasons. We prevent water damage, mold growth, and structural deterioration with professional waterproofing and damp-proofing services.",
    features: ["Roof Waterproofing & Sealing", "Basement Waterproofing", "External Wall Treatment", "Gutter Installation & Repair", "Drainage System Solutions", "Rising Damp Treatment"],
    icon: <Droplets className="h-8 w-8 text-primary" />,
  },
  {
    title: "Structural Repairs & Restoration",
    description: "Professional structural repair services to address foundation issues, cracks, and deterioration. We use quality materials and proven techniques to restore your property's structural integrity and safety.",
    features: ["Foundation Crack Repairs", "Wall Crack Treatment", "Concrete Restoration", "Wall Reinforcement", "Beam & Column Repairs", "Subsidence Solutions"],
    icon: <Hammer className="h-8 w-8 text-primary" />,
  },
  {
    title: "Electrical & Plumbing Services",
    description: "Licensed electricians and plumbers providing comprehensive electrical and plumbing maintenance, repairs, and installations. From routine fixes to emergency callouts, we ensure your systems function safely and efficiently.",
    features: ["Electrical Fault Repairs", "Plumbing Leak Fixes", "Fixture Installation & Replacement", "Water Heater Services", "Drain Unblocking", "24/7 Emergency Callouts"],
    icon: <Zap className="h-8 w-8 text-primary" />,
  },
]

const emergencyServices = [
  {
    icon: <Droplets className="h-6 w-6" />,
    title: "Burst Pipes & Leaks",
    description: "Immediate response to plumbing emergencies",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Electrical Failures",
    description: "24/7 electrical emergency repairs",
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Roof Leaks",
    description: "Emergency roof repair and waterproofing",
  },
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    title: "Structural Damage",
    description: "Urgent structural assessment and repairs",
  },
]

const maintenancePackages = [
  {
    name: "Basic Maintenance Plan",
    frequency: "Quarterly Inspections",
    features: [
      "4 property inspections per year",
      "Minor repairs included",
      "Preventive maintenance report",
      "Priority scheduling",
      "10% discount on major repairs",
    ],
    ideal: "Residential properties",
  },
  {
    name: "Premium Maintenance Plan",
    frequency: "Monthly Inspections",
    features: [
      "12 property inspections per year",
      "All minor repairs included",
      "Detailed maintenance reports",
      "24/7 emergency support",
      "15% discount on major repairs",
      "Free annual waterproofing check",
    ],
    ideal: "Commercial properties & landlords",
  },
  {
    name: "Emergency-Only Service",
    frequency: "On-Demand",
    features: [
      "24/7 emergency response",
      "Fast callout service",
      "Licensed technicians",
      "Transparent pricing",
      "No monthly fees",
    ],
    ideal: "All property types",
  },
]

const whyChooseUs = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent property repairs",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Licensed Professionals",
    description: "Qualified electricians, plumbers, and contractors",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "15+ Years Experience",
    description: "Trusted property maintenance across Zimbabwe",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Quality Guaranteed",
    description: "All work backed by comprehensive warranties",
  },
]

const serviceAreas = [
  { name: "Harare", description: "All suburbs including Borrowdale, Mount Pleasant, Highlands, and Avondale" },
  { name: "Bulawayo", description: "Complete coverage across Bulawayo and surrounding residential areas" },
  { name: "Masvingo", description: "Professional maintenance services throughout Masvingo province" },
]

const faqs = [
  {
    question: "Do you offer emergency repair services?",
    answer: "Yes! We provide 24/7 emergency repair services for urgent issues like burst pipes, electrical failures, roof leaks, and structural damage. Call +263 78 028 9132 anytime for immediate assistance.",
  },
  {
    question: "What's included in a property maintenance inspection?",
    answer: "Our inspections cover roof condition, waterproofing, plumbing systems, electrical safety, structural integrity, doors and windows, drainage, and general wear and tear. You receive a detailed report with recommendations.",
  },
  {
    question: "How often should I waterproof my roof in Zimbabwe?",
    answer: "We recommend professional roof waterproofing every 3-5 years, or immediately if you notice leaks. Zimbabwe's rainy season can be harsh, and preventive waterproofing saves costly interior damage repairs.",
  },
  {
    question: "Are your maintenance packages suitable for landlords?",
    answer: "Absolutely! Our maintenance packages are ideal for landlords with multiple properties. We handle all routine maintenance and repairs, keeping your properties in rentable condition and tenants satisfied.",
  },
  {
    question: "Do you provide same-day repair services?",
    answer: "For emergencies, we provide same-day service. For non-urgent repairs, we typically schedule within 2-3 business days depending on availability and location.",
  },
]

export default function MaintenancePage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Property Maintenance and Repair Services",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Home Grounds Investments",
      "url": "https://homegrounds.co.zw",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZW"
      },
      "telephone": "+263780289132",
      "areaServed": ["Harare", "Bulawayo", "Masvingo"],
      "openingHours": "Mo-Su 00:00-23:59"
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
              src="/images/home-exterior.jpg"
              alt="Professional property maintenance and repairs in Zimbabwe - waterproofing, plumbing, and electrical services"
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
                <span className="text-background">Maintenance</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Property Maintenance & Repairs in Zimbabwe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4">
                Professional property maintenance, waterproofing, plumbing, and electrical repair services across Harare, Bulawayo, and Masvingo. 24/7 emergency support available.
              </p>
              <p className="text-lg text-background/80 mb-8">
                ✓ 24/7 Emergency Service  ✓ Licensed Technicians  ✓ Same-Day Response  ✓ Quality Guaranteed
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
                    Emergency: +263 78 028 9132
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground text-center sm:text-left">
              <AlertTriangle className="h-6 w-6 flex-shrink-0" />
              <span className="font-semibold text-lg">Need Emergency Repairs? We're Available 24/7</span>
              <a href="tel:+263780289132" className="font-bold underline hover:no-underline text-lg">Call +263 78 028 9132 Now</a>
            </div>
          </div>
        </section>

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Home Grounds Investments: Your Trusted Property Maintenance Partner in Zimbabwe
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Home Grounds Investments provides comprehensive property maintenance and repair services across Zimbabwe. Whether you need routine maintenance in Harare, emergency waterproofing in Bulawayo, or urgent plumbing repairs in Masvingo, our experienced team of licensed professionals is ready to help 24/7.
                </p>
                <p>
                  With over 15 years of experience maintaining residential and commercial properties throughout Zimbabwe, we understand the unique challenges property owners face. From the damaging effects of the rainy season requiring expert waterproofing, to electrical issues that need immediate attention, our comprehensive maintenance services keep your property safe, functional, and valuable.
                </p>
                <p>
                  Our property maintenance services include regular inspections and preventive maintenance programs, professional waterproofing and damp-proofing solutions, structural repairs for foundations and walls, licensed electrical and plumbing services, emergency 24/7 repair callouts, and customized maintenance packages for landlords and property managers. Every service is delivered by qualified technicians using quality materials and backed by comprehensive warranties.
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
                Complete Property Maintenance Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From preventive maintenance to emergency repairs, we keep your property safe, functional, and well-maintained year-round.
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
                      <p className="font-semibold text-sm text-foreground mb-3">Services Include:</p>
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

        {/* Emergency Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                24/7 Emergency Repair Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Property emergencies don't wait for business hours. We're available round-the-clock for urgent repairs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="border border-border text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:+263780289132">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Emergency Hotline: +263 78 028 9132
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Maintenance Packages */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Property Maintenance Packages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose a maintenance plan that fits your property needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {maintenancePackages.map((pkg, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                      <p className="text-primary font-semibold">{pkg.frequency}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Ideal for:</span> {pkg.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/quote">Get Custom Maintenance Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Home Grounds Investments for Property Maintenance
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Trusted by homeowners and property managers across Zimbabwe
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
                Property Maintenance Services Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional maintenance and emergency repairs in your area
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

        {/* FAQ Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Property Maintenance FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our maintenance and repair services
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Property Owners Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "James R.", location: "Borrowdale, Harare", review: "Fast response to our roof leak emergency. They arrived within 2 hours and fixed the problem professionally. Highly recommend their waterproofing services." },
                { name: "Linda M.", location: "Bulawayo", review: "We use their quarterly maintenance package for our rental properties. They handle everything efficiently and keep our tenants happy." },
                { name: "Thomas K.", location: "Masvingo", review: "Excellent electrical repair service. Licensed electrician arrived same day and resolved our power issues quickly and safely." },
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
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Don't Wait for Small Problems to Become Big Ones
            </h2>
            <p className="text-background/90 text-lg mb-4 max-w-2xl mx-auto">
              Schedule your property maintenance today and save money on costly future repairs. Preventive maintenance is an investment in your property's longevity and value.
            </p>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Serving Harare, Bulawayo, Masvingo, and surrounding areas with professional property maintenance and 24/7 emergency repair services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Link href="/quote">Schedule Maintenance</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground bg-transparent text-lg px-8">
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
