import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, CheckCircle, Phone, Award, Clock, Shield, Star, MapPin, PaintBucket, Fence, Sparkles, TreeDeciduous, Sun, Droplets } from "lucide-react"

export const metadata: Metadata = {
  title: "Exterior Home Improvements Zimbabwe | Wall Finishes, Paving & Boundary Walls Harare",
  description: "Professional exterior home improvements in Zimbabwe by Home Grounds Investments. Wall finishes, paving, boundary walls, exterior painting, and landscaping in Harare, Bulawayo & Masvingo. Boost your curb appeal.",
  keywords: "exterior home improvements Zimbabwe, wall finishes Harare, paving Bulawayo, boundary walls Masvingo, exterior painting Zimbabwe, curb appeal, Home Grounds Investments, driveway paving, garden walls, home exterior renovation",
  openGraph: {
    title: "Professional Exterior Home Improvements in Zimbabwe | Home Grounds Investments",
    description: "Transform your home's exterior with professional wall finishes, paving, boundary walls, and painting services across Zimbabwe.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/exterior",
  },
}

const services = [
  {
    title: "Wall Finishes & Cladding",
    description: "Enhance your home's exterior with modern wall finishes and cladding options. From textured plaster to stone cladding and modern render systems, we create stunning facades that protect and beautify your property.",
    features: [
      "Textured Plaster Finishes",
      "Stone & Brick Cladding",
      "Modern Render Systems",
      "Acrylic & Cement Finishes",
      "Feature Wall Designs",
      "Weatherproofing Solutions",
    ],
    icon: <PaintBucket className="h-8 w-8 text-primary" />,
  },
  {
    title: "Paving & Driveways",
    description: "Professional paving services for driveways, walkways, patios, and outdoor areas. We use quality materials and proven techniques to create durable, attractive paved surfaces that enhance your property's curb appeal.",
    features: [
      "Driveway Paving & Resurfacing",
      "Concrete & Interlocking Pavers",
      "Stamped Concrete Designs",
      "Patio & Pool Deck Paving",
      "Walkway Construction",
      "Drainage Integration",
    ],
    icon: <Home className="h-8 w-8 text-primary" />,
  },
  {
    title: "Boundary Walls & Fencing",
    description: "Secure your property with professionally constructed boundary walls and fencing. We build durable, attractive perimeter walls that provide security, privacy, and aesthetic appeal while adding value to your property.",
    features: [
      "Brick & Block Boundary Walls",
      "Precast Concrete Walls",
      "Stone & Faced Walls",
      "Security Wall Designs",
      "Gate Installation",
      "Wall Capping & Finishes",
    ],
    icon: <Fence className="h-8 w-8 text-primary" />,
  },
  {
    title: "Exterior Painting & Coatings",
    description: "Professional exterior painting services using premium weather-resistant paints and coatings. Protect your home from Zimbabwe's harsh sun and rainy seasons while refreshing its appearance with expert color consultation.",
    features: [
      "Weather-Resistant Paints",
      "Roof Coating & Painting",
      "Wall Painting & Preparation",
      "Color Consultation",
      "Anti-Fungal Treatments",
      "Protective Sealants",
    ],
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "Landscaping & Gardens",
    description: "Transform your outdoor spaces with professional landscaping services. From garden design to installation, we create beautiful, functional outdoor areas that complement your home's architecture and suit Zimbabwe's climate.",
    features: [
      "Garden Design & Layout",
      "Lawn Installation & Maintenance",
      "Planting & Irrigation Systems",
      "Retaining Walls",
      "Outdoor Lighting",
      "Water Features",
    ],
    icon: <TreeDeciduous className="h-8 w-8 text-primary" />,
  },
  {
    title: "Outdoor Living Spaces",
    description: "Create functional outdoor entertaining areas with patios, pergolas, braai areas, and outdoor kitchens. We design and build outdoor spaces that extend your living area and are perfect for Zimbabwe's climate.",
    features: [
      "Patio Construction",
      "Pergola & Shade Structures",
      "Braai & BBQ Areas",
      "Outdoor Kitchens",
      "Seating & Entertainment Areas",
      "Pool Surrounds",
    ],
    icon: <Sun className="h-8 w-8 text-primary" />,
  },
]

const benefits = [
  {
    icon: <Star className="h-8 w-8" />,
    title: "Increased Property Value",
    description: "Quality exterior improvements can increase your home's value by 10-20%",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Enhanced Protection",
    description: "Weather-resistant finishes protect your home from sun and rain damage",
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Improved Curb Appeal",
    description: "Create a stunning first impression with professional exterior upgrades",
  },
  {
    icon: <Droplets className="h-8 w-8" />,
    title: "Better Drainage",
    description: "Proper paving and grading prevents water damage and erosion",
  },
]

const whyChooseUs = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "15+ Years Experience",
    description: "Extensive experience in exterior home improvements across Zimbabwe",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Quality Materials",
    description: "We use premium, weather-resistant materials suited to Zimbabwe's climate",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Professional Finish",
    description: "Attention to detail and craftsmanship in every project",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Timely Completion",
    description: "Projects completed on schedule without compromising quality",
  },
]

const serviceAreas = [
  { name: "Harare", description: "All suburbs including Borrowdale, Mount Pleasant, Highlands, Glen Lorne, and Avondale" },
  { name: "Bulawayo", description: "Complete exterior improvement services across Bulawayo and surrounding areas" },
  { name: "Masvingo", description: "Professional exterior upgrades throughout Masvingo province" },
]

const popularProjects = [
  {
    title: "Driveway Makeover",
    description: "Complete driveway replacement with interlocking pavers",
    timeline: "5-7 days",
  },
  {
    title: "Boundary Wall Construction",
    description: "New perimeter wall with security features and modern finish",
    timeline: "2-3 weeks",
  },
  {
    title: "Full Exterior Repaint",
    description: "Complete house exterior painting with preparation and weatherproofing",
    timeline: "1-2 weeks",
  },
  {
    title: "Garden & Patio Design",
    description: "Landscaping with paved patio and outdoor entertainment area",
    timeline: "2-4 weeks",
  },
]

const faqs = [
  {
    question: "What exterior wall finishes are best for Zimbabwe's climate?",
    answer: "We recommend weather-resistant finishes like acrylic renders, textured plasters, and stone cladding. These materials withstand Zimbabwe's sun exposure and rainy seasons while requiring minimal maintenance. We'll assess your specific location and recommend the best solution.",
  },
  {
    question: "How long does exterior painting last in Zimbabwe?",
    answer: "With quality weather-resistant paints and proper preparation, exterior painting typically lasts 5-7 years in Zimbabwe's climate. We use premium UV-resistant and anti-fungal paints designed for harsh weather conditions.",
  },
  {
    question: "What paving options do you offer for driveways?",
    answer: "We offer concrete paving, interlocking pavers, stamped concrete, and brick paving. Each option has different benefits - interlocking pavers are popular for their durability and easy repair, while stamped concrete offers custom design possibilities.",
  },
  {
    question: "Do you need planning permission for boundary walls in Zimbabwe?",
    answer: "Yes, most municipalities in Zimbabwe require approval for boundary wall construction. We handle all necessary permits and ensure compliance with local building codes and height restrictions.",
  },
  {
    question: "Can you work during the rainy season?",
    answer: "Some exterior work like painting and certain finishes should ideally be done during dry months. However, we can schedule projects like boundary walls and paving year-round with proper weather planning. We'll advise on the best timing for your specific project.",
  },
  {
    question: "Do you offer design consultation for exterior improvements?",
    answer: "Absolutely! Our team provides free design consultations, color recommendations, and material selection guidance. We'll help you choose finishes and designs that complement your home's architecture and suit your budget.",
  },
]

export default function ExteriorPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Exterior Home Improvement Services",
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
              src="/images/home-exterior.jpg"
              alt="Professional exterior home improvements in Zimbabwe - wall finishes, paving, and boundary walls"
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
                <span className="text-background">Exterior</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Exterior Home Improvements in Zimbabwe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4">
                Transform your home's exterior with professional wall finishes, paving, boundary walls, painting, and landscaping services across Harare, Bulawayo, and Masvingo.
              </p>
              <p className="text-lg text-background/80 mb-8">
                ✓ Premium Materials  ✓ Expert Craftsmanship  ✓ Weather-Resistant Finishes  ✓ Free Design Consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                  <Link href="/quote">
                    Get Free Consultation
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
                Home Grounds Investments: Exterior Improvement Specialists in Zimbabwe
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Home Grounds Investments is your trusted partner for exterior home improvements across Zimbabwe. Whether you need modern wall finishes in Harare, professional paving in Bulawayo, or a complete exterior transformation in Masvingo, our experienced team delivers exceptional results that enhance your property's curb appeal, value, and protection from the elements.
                </p>
                <p>
                  With over 15 years of experience in exterior home improvements throughout Zimbabwe, we understand the unique challenges of our climate. From the intense sun exposure that fades paintwork to the rainy season that tests waterproofing, we use premium, weather-resistant materials specifically chosen for Zimbabwe's conditions. Our comprehensive exterior services ensure your home not only looks stunning but is also protected for years to come.
                </p>
                <p>
                  Our exterior improvement services include modern wall finishes and cladding with weatherproofing, professional driveway and patio paving with proper drainage, secure boundary walls and perimeter fencing, expert exterior painting with UV-resistant coatings, beautiful landscaping and garden design suited to Zimbabwe's climate, and functional outdoor living spaces including braai areas and entertainment zones. Every project combines aesthetic excellence with practical durability, backed by comprehensive warranties and professional craftsmanship.
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
                Comprehensive Exterior Improvement Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From wall finishes to outdoor living spaces, we transform your home's exterior with quality materials and expert craftsmanship.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Benefits of Exterior Home Improvements
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality exterior upgrades deliver lasting value and protection for your home
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Projects Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Popular Exterior Improvement Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                Common exterior upgrades that transform homes across Zimbabwe
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {popularProjects.map((project, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium">Timeline: {project.timeline}</span>
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
                Why Choose Home Grounds Investments
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Trusted exterior improvement specialists delivering quality results across Zimbabwe
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

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Exterior Improvement Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A streamlined approach ensuring quality results and satisfied clients
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: "01", title: "Free Site Assessment", desc: "We visit your property to assess the current condition, discuss your vision, and understand your budget and timeline requirements" },
                  { step: "02", title: "Design & Material Selection", desc: "Our team creates design proposals with material recommendations, color schemes, and detailed cost estimates with 3D visualizations when applicable" },
                  { step: "03", title: "Permit & Planning", desc: "We handle all necessary permits and approvals with local authorities, ensuring full compliance with Zimbabwe building regulations" },
                  { step: "04", title: "Professional Installation", desc: "Experienced craftsmen execute the work with attention to detail, using premium materials and proven techniques for lasting results" },
                  { step: "05", title: "Quality Inspection & Handover", desc: "Final walkthrough to ensure everything meets our quality standards and your expectations, with comprehensive warranty documentation" },
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

        {/* Service Areas Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Exterior Improvement Services Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional exterior upgrades in your area
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Exterior Improvements FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our exterior home improvement services
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
                What Homeowners Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Robert M.", location: "Glen Lorne, Harare", review: "Our driveway transformation exceeded expectations. The interlocking pavers look stunning and the drainage system works perfectly. Highly professional team." },
                { name: "Elizabeth K.", location: "Bulawayo", review: "The new boundary wall with modern finish completely transformed our property's appearance and security. Quality workmanship throughout." },
                { name: "Peter N.", location: "Masvingo", review: "Excellent exterior painting service. They recommended the perfect weather-resistant paint and the finish is flawless. Our home looks brand new." },
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
              Ready to Transform Your Home's Exterior?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-4 max-w-2xl mx-auto">
              Contact Home Grounds Investments today for a free consultation and detailed quote. Let's enhance your home's curb appeal and value.
            </p>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Serving Harare, Bulawayo, Masvingo, and across Zimbabwe with professional exterior improvement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                <Link href="/quote">Get Free Consultation</Link>
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
