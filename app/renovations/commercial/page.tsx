import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Building2, CheckCircle, Phone, Award, Clock, Shield, Star, MapPin, Store, Briefcase, Utensils, Users, TrendingUp, Lightbulb } from "lucide-react"

export const metadata: Metadata = {
  title: "Commercial Renovations Harare, Bulawayo & Masvingo | Office Fit-Outs & Retail Renovations Zimbabwe",
  description: "Expert commercial renovations in Zimbabwe by Home Grounds Investments. Professional office fit-outs, retail store renovations, restaurant remodeling in Harare, Bulawayo & Masvingo. Free quotes.",
  keywords: "commercial renovations Zimbabwe, office fit-outs Harare, retail renovations Bulawayo, restaurant renovations Masvingo, commercial property renovations, office renovations Zimbabwe, store renovations, Home Grounds Investments",
  openGraph: {
    title: "Professional Commercial Renovations in Zimbabwe | Home Grounds Investments",
    description: "Transform your business space with expert office fit-outs, retail renovations, and commercial property improvements across Zimbabwe.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/commercial",
  },
}

const services = [
  {
    title: "Office Fit-Outs & Renovations",
    description: "Create productive, modern workspaces that inspire your team and impress clients. Our office fit-outs include everything from open-plan layouts to executive suites, meeting rooms, and complete IT infrastructure integration.",
    features: ["Open Plan & Private Office Layouts", "Executive Meeting Rooms", "Modern Reception Areas", "Complete IT Infrastructure", "Ergonomic Workstations", "Breakout & Collaborative Spaces"],
    icon: <Briefcase className="h-8 w-8 text-primary" />,
  },
  {
    title: "Retail Store Renovations",
    description: "Transform your retail space to attract more customers and increase sales. We specialize in creating engaging shopping experiences through strategic layout design, modern lighting, and brand-aligned interiors.",
    features: ["Customer Flow Optimization", "Professional Display Systems", "Strategic Lighting Design", "Brand Identity Integration", "Fitting Room Construction", "POS & Checkout Areas"],
    icon: <Store className="h-8 w-8 text-primary" />,
  },
  {
    title: "Restaurant & Hospitality Renovations",
    description: "Complete kitchen and dining area renovations for restaurants, cafes, and hospitality businesses. We ensure health compliance while creating spaces that enhance your guests' dining experience.",
    features: ["Commercial Kitchen Design", "Dining Area Layouts", "Bar & Counter Construction", "Health & Safety Compliance", "Ventilation Systems", "Outdoor Seating Areas"],
    icon: <Utensils className="h-8 w-8 text-primary" />,
  },
  {
    title: "Tenant Fit-Out & Installations",
    description: "Fast-turnaround installations for new business tenants moving into commercial properties. We deliver quality work on time and within budget, minimizing disruption to your business operations.",
    features: ["Rapid Project Completion", "Minimal Business Disruption", "Budget-Conscious Solutions", "Full Code Compliance", "Turnkey Solutions", "Flexible Scheduling"],
    icon: <Building2 className="h-8 w-8 text-primary" />,
  },
]

const benefits = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Increased Property Value",
    description: "Quality renovations that boost your commercial property's market value",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Enhanced Customer Experience",
    description: "Create spaces that attract and retain customers",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Modern & Efficient Design",
    description: "Energy-efficient solutions that reduce operational costs",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Compliance Guaranteed",
    description: "All work meets Zimbabwe building codes and regulations",
  },
]

const whyChooseUs = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Commercial Expertise",
    description: "Specialized experience in commercial renovations across all business sectors",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Minimal Downtime",
    description: "We work around your schedule to minimize business disruption",
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Quality Assurance",
    description: "Premium materials and skilled craftsmen on every project",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Licensed & Insured",
    description: "Fully licensed contractors with comprehensive liability coverage",
  },
]

const serviceAreas = [
  { name: "Harare CBD", description: "Complete commercial renovations in Harare's central business district and surrounding areas" },
  { name: "Bulawayo", description: "Office and retail renovations across all commercial zones in Bulawayo" },
  { name: "Masvingo", description: "Professional commercial property improvements throughout Masvingo province" },
]

const industries = [
  "Corporate Offices",
  "Retail Stores & Shopping Centers",
  "Restaurants & Cafes",
  "Medical & Dental Clinics",
  "Hotels & Lodges",
  "Banks & Financial Institutions",
  "Gyms & Fitness Centers",
  "Schools & Training Centers",
  "Warehouses & Industrial Spaces",
  "Salons & Spas",
]

const faqs = [
  {
    question: "How long does a typical commercial renovation take?",
    answer: "Project timelines vary based on scope. Small office fit-outs take 2-4 weeks, while larger commercial renovations can take 6-12 weeks. We provide detailed timelines during consultation and work efficiently to minimize business disruption.",
  },
  {
    question: "Can you work outside business hours?",
    answer: "Absolutely! We understand the importance of maintaining business operations. We can schedule work during evenings, weekends, or off-peak hours to minimize impact on your business.",
  },
  {
    question: "Do you handle permits and compliance?",
    answer: "Yes, we manage all building permits, health department approvals, and ensure full compliance with Zimbabwe building codes and regulations. This is included in our comprehensive service.",
  },
  {
    question: "What's included in your free consultation?",
    answer: "Our free consultation includes a site visit, needs assessment, preliminary design concepts, timeline estimates, and a detailed cost breakdown. We also provide recommendations for maximizing your budget.",
  },
  {
    question: "Do you offer maintenance after project completion?",
    answer: "Yes, we provide warranty coverage and offer ongoing maintenance services to ensure your renovated space remains in excellent condition. We're here to support your business long-term.",
  },
]

export default function CommercialPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Renovation Services",
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
              src="/images/medical-clinic-renovation.jpg"
              alt="Professional commercial renovations in Harare Zimbabwe - office fit-outs and retail store renovations"
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
                <span className="text-background">Commercial</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Commercial Renovations in Zimbabwe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4">
                Transform your business space with expert office fit-outs, retail renovations, and commercial property improvements across Harare, Bulawayo, and Masvingo.
              </p>
              <p className="text-lg text-background/80 mb-8">
                ✓ Minimal Business Disruption  ✓ Licensed Contractors  ✓ Fast Turnaround  ✓ Competitive Pricing
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
                Home Grounds Investments: Zimbabwe's Leading Commercial Renovation Specialists
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Home Grounds Investments is your trusted partner for commercial renovations across Zimbabwe. Whether you need a modern office fit-out in Harare's CBD, a retail store renovation in Bulawayo, or a complete restaurant remodel in Masvingo, our experienced team delivers exceptional results that enhance your business operations and customer experience.
                </p>
                <p>
                  With over 15 years of commercial renovation experience, we understand the unique challenges businesses face when upgrading their spaces. Our approach prioritizes minimal disruption to your operations while delivering high-quality workmanship that meets all regulatory requirements. From initial consultation to project completion, we work closely with business owners to ensure every detail aligns with their vision and budget.
                </p>
                <p>
                  Our comprehensive commercial renovation services include office fit-outs with modern layouts and IT infrastructure, retail renovations designed to maximize customer engagement, restaurant and hospitality renovations with full health compliance, and fast-turnaround tenant installations. We serve businesses across all sectors including corporate offices, retail stores, restaurants, medical facilities, hotels, banks, fitness centers, and more.
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
                Comprehensive Commercial Renovation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From offices to retail spaces, we deliver professional renovations that enhance your business and increase property value.
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
                      <p className="font-semibold text-sm text-foreground mb-3">Our Services Include:</p>
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
                Benefits of Commercial Renovation
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Investing in your commercial space delivers measurable returns for your business
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

        {/* Industries We Serve */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Industries We Serve
              </h2>
              <p className="text-muted-foreground text-lg">
                Expert commercial renovations across all business sectors in Zimbabwe
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <Card key={index} className="border border-border">
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{industry}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                We're committed to delivering exceptional quality while minimizing disruption to your business
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
                Commercial Renovation Services Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional commercial renovations in your business area
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
                Our Commercial Renovation Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A streamlined approach that minimizes business disruption and maximizes results
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: "01", title: "Free Business Consultation", desc: "We visit your location to understand your business needs, brand identity, and renovation goals" },
                  { step: "02", title: "Design & Cost Estimation", desc: "Our team creates detailed plans with 3D visualizations and provides transparent cost breakdowns" },
                  { step: "03", title: "Permits & Scheduling", desc: "We handle all permits and create a work schedule that minimizes disruption to your operations" },
                  { step: "04", title: "Professional Construction", desc: "Experienced contractors execute the renovation with minimal noise and disruption during agreed hours" },
                  { step: "05", title: "Quality Inspection & Handover", desc: "Final walkthrough, compliance checks, and complete handover with warranty documentation" },
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
                Commercial Renovation FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about our commercial renovation services
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
                What Business Owners Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Michael T.", business: "Tech Startup, Harare CBD", review: "The office fit-out was completed in 3 weeks with zero disruption to our team. The modern design has improved productivity significantly." },
                { name: "Grace M.", business: "Retail Store, Bulawayo", review: "Our store renovation exceeded expectations. Customer traffic increased by 40% in the first month. Highly professional team." },
                { name: "David K.", business: "Restaurant, Masvingo", review: "They transformed our outdated kitchen and dining area while we remained partially open. Everything passed health inspections perfectly." },
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
                      <p className="text-sm text-muted-foreground">{testimonial.business}</p>
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
              Ready to Transform Your Business Space?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-4 max-w-2xl mx-auto">
              Contact Home Grounds Investments today for a free consultation and detailed quote. Let's create a space that drives your business forward.
            </p>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Serving businesses in Harare, Bulawayo, Masvingo, and across Zimbabwe with professional commercial renovation services.
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
