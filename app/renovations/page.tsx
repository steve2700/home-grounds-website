import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Building2, Wrench, Sun, CheckCircle, Phone, Sparkles, Award, Clock, Shield, Hammer, MapPin, Star, Users, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Renovations & Property Improvements Zimbabwe | Home Grounds Investments",
  description: "Expert residential & commercial renovation services in Harare, Bulawayo & Masvingo. Kitchen renovations, bathroom remodeling, office fit-outs, maintenance & sustainable solutions. 500+ projects completed. Get free quote today.",
  keywords: "renovations Zimbabwe, property improvements Harare, kitchen renovations, bathroom remodeling, commercial renovations Bulawayo, office fit-outs, house renovations Masvingo, home improvements, sustainable renovations, property maintenance Zimbabwe",
  openGraph: {
    title: "Professional Renovations & Property Improvements Zimbabwe | Home Grounds",
    description: "Transform your property with expert renovation services. Residential, commercial, maintenance & sustainable solutions across Zimbabwe. 500+ successful projects.",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "/images/hero-renovations.jpg",
        width: 1200,
        height: 630,
        alt: "Professional renovations and property improvements in Zimbabwe",
      },
    ],
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const services = [
  {
    title: "Residential Renovations",
    description: "Transform your home with expert renovations for kitchens, bathrooms, bedrooms, and full house makeovers. From modern upgrades to complete home transformations.",
    icon: Home,
    href: "/renovations/residential",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: ["Kitchen Renovations", "Bathroom Remodeling", "Full House Renovations", "Extensions & Additions"],
  },
  {
    title: "Commercial Renovations",
    description: "Professional office fit-outs, retail renovations, restaurant makeovers, and tenant installations for businesses across Zimbabwe.",
    icon: Building2,
    href: "/renovations/commercial",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: ["Office Fit-Outs", "Retail Space Renovations", "Restaurant Renovations", "Warehouse Refurbishments"],
  },
  {
    title: "Property Maintenance & Repairs",
    description: "Preventive maintenance, emergency repairs, waterproofing, and structural repairs to keep your property in top condition year-round.",
    icon: Wrench,
    href: "/renovations/maintenance",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: ["General Maintenance", "Waterproofing Solutions", "Structural Repairs", "Electrical & Plumbing"],
  },
  {
    title: "Sustainable & Eco-Friendly Solutions",
    description: "Modern eco-friendly upgrades including solar panel installation, energy efficiency improvements, rainwater harvesting, and smart home systems.",
    icon: Sun,
    href: "/renovations/sustainable",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    features: ["Solar Panel Installations", "Energy Efficiency Upgrades", "Smart Home Systems", "Water Conservation"],
  },
]

const processSteps = [
  { 
    step: 1, 
    title: "Free Consultation & Site Visit", 
    description: "We visit your property in Harare, Bulawayo, or Masvingo to discuss your vision, requirements, and budget. Our experts assess the space and provide initial recommendations.",
    icon: Phone 
  },
  { 
    step: 2, 
    title: "Detailed Quote & Design", 
    description: "Receive a comprehensive, itemized quote with timeline, material specifications, and 3D renderings where applicable. Full transparency on costs and project scope.",
    icon: CheckCircle 
  },
  { 
    step: 3, 
    title: "Planning & Permits", 
    description: "Our team handles all design details, material procurement, contractor scheduling, and any required building permits or approvals.",
    icon: Sparkles 
  },
  { 
    step: 4, 
    title: "Expert Construction", 
    description: "Licensed professionals and skilled craftsmen bring your vision to life with precision workmanship. Regular updates keep you informed throughout the project.",
    icon: Hammer 
  },
  { 
    step: 5, 
    title: "Quality Inspection & Handover", 
    description: "Comprehensive final walkthrough to ensure every detail meets our high standards and your expectations. Complete documentation and warranty information provided.",
    icon: Award 
  },
]

const whyChooseUs = [
  { 
    icon: Award, 
    title: "500+ Successful Projects", 
    description: "Completed across Zimbabwe with proven results" 
  },
  { 
    icon: Shield, 
    title: "Quality Guaranteed", 
    description: "Comprehensive warranties on all work" 
  },
  { 
    icon: Clock, 
    title: "On-Time Delivery", 
    description: "95% projects completed on schedule" 
  },
  { 
    icon: CheckCircle, 
    title: "Licensed & Insured", 
    description: "Fully certified construction professionals" 
  },
]

const serviceAreas = [
  {
    city: "Harare",
    description: "Serving all suburbs including Borrowdale, Mount Pleasant, Highlands, Avondale, and surrounding areas",
  },
  {
    city: "Bulawayo",
    description: "Complete renovation coverage across Bulawayo and surrounding residential and commercial areas",
  },
  {
    city: "Masvingo",
    description: "Professional renovation services throughout Masvingo province and surrounding regions",
  },
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "3", label: "Major Cities Served" },
]

const testimonials = [
  {
    name: "Sarah M.",
    location: "Mount Pleasant, Harare",
    rating: 5,
    text: "Home Grounds transformed our kitchen beyond our expectations. The project was completed on time and within budget. Professional team from start to finish!",
  },
  {
    name: "David K.",
    location: "Bulawayo CBD",
    rating: 5,
    text: "Our office renovation was seamless. They minimized disruption to our business operations and delivered a modern, functional workspace. Highly recommend!",
  },
  {
    name: "Grace T.",
    location: "Masvingo",
    rating: 5,
    text: "The team handled our full house renovation with expertise. From design to completion, they were professional, responsive, and the quality is outstanding.",
  },
]

export default function RenovationsPage() {
  // Enhanced Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Home Grounds Investments - Renovations & Property Improvements",
    "image": "https://homegrounds.co.zw/images/hero-renovations.jpg",
    "description": "Professional residential and commercial renovation services across Zimbabwe. Kitchen renovations, bathroom remodeling, office fit-outs, property maintenance, and sustainable solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZW"
    },
    "telephone": "+263780289132",
    "url": "https://homegrounds.co.zw/renovations",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Harare",
        "containedIn": "Zimbabwe"
      },
      {
        "@type": "City",
        "name": "Bulawayo",
        "containedIn": "Zimbabwe"
      },
      {
        "@type": "City",
        "name": "Masvingo",
        "containedIn": "Zimbabwe"
      }
    ],
    "serviceType": ["Residential Renovations", "Commercial Renovations", "Property Maintenance", "Sustainable Solutions"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://homegrounds.co.zw"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Renovations",
        "item": "https://homegrounds.co.zw/renovations"
      }
    ]
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="bg-white">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Professional property renovations and improvements in Zimbabwe - kitchen, bathroom, and commercial renovations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Renovations</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <Hammer className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Renovations & Property Improvements</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Professional Renovations for{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Zimbabwe Properties
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-6 leading-relaxed">
                Expert residential & commercial renovation services in Harare, Bulawayo, and Masvingo. From kitchen remodels to complete property transformations.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-10 text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400" />
                  <span>500+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-amber-400" />
                  <span>15+ Years Experience</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-zinc-900">
                      Get Free Quote
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                <a href="tel:+263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      <Phone className="h-5 w-5" />
                      Call +263 78 028 9132
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Zimbabwe's Leading Renovation & Property Improvement Specialists
              </h2>
              <div className="prose prose-lg max-w-none text-zinc-600 space-y-4">
                <p>
                  Home Grounds Investments is Zimbabwe's premier provider of professional renovation and property improvement services. With over 15 years of experience and more than 500 successfully completed projects across Harare, Bulawayo, and Masvingo, we transform residential homes and commercial properties into beautiful, functional spaces that exceed expectations.
                </p>
                <p>
                  Whether you're looking to renovate your kitchen in Borrowdale, remodel a bathroom in Mount Pleasant, fit out a new office in Harare CBD, or undertake a complete house renovation in Bulawayo, our team of licensed professionals delivers exceptional craftsmanship, transparent pricing, and on-time project completion. We handle everything from initial design and planning to final construction and finishing, ensuring a seamless renovation experience from start to finish.
                </p>
                <p>
                  Our comprehensive renovation services include residential renovations (kitchens, bathrooms, bedrooms, living spaces, and full house makeovers), commercial renovations (office fit-outs, retail spaces, restaurants, and warehouses), property maintenance and repairs (preventive maintenance, waterproofing, structural repairs, plumbing, and electrical work), and sustainable solutions (solar panel installation, energy efficiency upgrades, rainwater harvesting, and smart home systems). Every project is backed by quality guarantees, proper licensing and insurance, and our commitment to your complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-zinc-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Why Choose Home Grounds for Your Renovation?
              </h2>
              <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                Trusted by homeowners and businesses across Zimbabwe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all">
                  <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
                  <p className="text-zinc-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete Renovation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From minor repairs to complete property transformations, we handle projects of all sizes with the same dedication to quality and attention to detail.
              </p>
            </div>

            {/* Services Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group block">
                  <div className="relative h-full">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.bgColor} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    
                    {/* Card */}
                    <div className={`relative h-full bg-white rounded-3xl p-8 border ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300`}>
                      {/* Icon */}
                      <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.bgColor} mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all">
                        {service.title}
                      </h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className={`h-5 w-5 ${service.color} flex-shrink-0`} />
                            <span className="text-zinc-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="flex items-center gap-2 font-bold text-zinc-900 group-hover:gap-3 transition-all">
                        <span className="relative">
                          Learn More
                          <span className={`absolute -bottom-1 left-0 h-0.5 ${service.bgColor} w-0 group-hover:w-full transition-all duration-300`} />
                        </span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Enhanced */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">How We Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Our 5-Step Renovation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                A transparent, proven methodology from initial consultation to final handover
              </p>
            </div>

            {/* Process Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="group relative">
                    {/* Connector Line */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-amber-200 to-transparent" />
                    )}
                    
                    <div className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                      {/* Step Number */}
                      <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                        {step.step}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="h-5 w-5 text-amber-600" />
                          <h3 className="text-2xl font-bold text-zinc-900">{step.title}</h3>
                        </div>
                        <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                Serving Zimbabwe's Major Cities
              </h2>
              <p className="text-xl text-zinc-600">
                Professional renovation services across the country
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">{area.city}</h3>
                    <p className="text-zinc-600 text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-zinc-600">
                Real feedback from satisfied property owners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-zinc-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-zinc-600 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold text-zinc-900">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Ready to Transform Your Property?
              </h2>
              <p className="text-xl text-zinc-300 mb-4 leading-relaxed">
                Get a free consultation and detailed quote for your renovation project in Harare, Bulawayo, or Masvingo.
              </p>
              <p className="text-lg text-zinc-400 mb-10">
                Join 500+ satisfied clients who have transformed their properties with Home Grounds Investments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-zinc-900">
                      Get Free Quote Today
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="/portfolio" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      View Our Portfolio
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
