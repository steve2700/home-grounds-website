import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Building2, Wrench, Sun, CheckCircle, Phone, Sparkles, Award, Clock, Shield, Hammer } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Renovations & Property Improvements | Home Grounds Zimbabwe",
  description: "Expert residential & commercial renovation services across Zimbabwe. Kitchen, bathroom, office renovations, maintenance and sustainable solutions. Quality guaranteed.",
}

const services = [
  {
    title: "Residential Services",
    description: "Transform your home with expert renovations for kitchens, bathrooms, bedrooms, and full house makeovers.",
    icon: Home,
    href: "/renovations/residential",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    features: ["Kitchen Renovations", "Bathroom Remodeling", "Full House Renovations", "Extensions & Additions"],
  },
  {
    title: "Commercial Services",
    description: "Professional office fit-outs, retail renovations, and tenant installations for businesses.",
    icon: Building2,
    href: "/renovations/commercial",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    features: ["Office Fit-Outs", "Retail Renovations", "Restaurant Renovations", "Warehouse Refurbishments"],
  },
  {
    title: "Maintenance & Repairs",
    description: "Preventive maintenance and emergency repairs to keep your property in top condition.",
    icon: Wrench,
    href: "/renovations/maintenance",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    features: ["General Maintenance", "Waterproofing", "Structural Repairs", "Electrical & Plumbing"],
  },
  {
    title: "Sustainable Solutions",
    description: "Modern eco-friendly upgrades including solar, smart home systems, and energy efficiency.",
    icon: Sun,
    href: "/renovations/sustainable",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    features: ["Solar Installations", "Energy Efficiency", "Smart Home Systems", "Water-Wise Solutions"],
  },
]

const processSteps = [
  { step: 1, title: "Free Consultation", description: "We visit your property to discuss your vision and requirements", icon: Phone },
  { step: 2, title: "Detailed Quote", description: "Receive a comprehensive quote with timeline and material options", icon: CheckCircle },
  { step: 3, title: "Design & Planning", description: "Our team creates detailed plans and schedules the project", icon: Sparkles },
  { step: 4, title: "Quality Construction", description: "Expert craftsmen bring your vision to life with precision", icon: Hammer },
  { step: 5, title: "Final Walkthrough", description: "We ensure everything meets your expectations before handover", icon: Award },
]

const whyChooseUs = [
  { icon: Award, title: "500+ Projects", description: "Successfully completed across Zimbabwe" },
  { icon: Shield, title: "Quality Guaranteed", description: "We stand behind every project" },
  { icon: Clock, title: "On-Time Delivery", description: "Respect for your time and schedule" },
  { icon: CheckCircle, title: "Licensed & Insured", description: "Fully certified professionals" },
]

export default function RenovationsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-renovations.jpg"
              alt="Professional renovations in Zimbabwe"
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
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <Hammer className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Renovations & Improvements</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Space
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Professional renovation services for homes and businesses across Zimbabwe. Quality craftsmanship, transparent pricing, on-time delivery.
              </p>

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
                      Call Now
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">What We Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Our Renovation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From minor repairs to complete transformations, we handle projects of all sizes with the same dedication to quality.
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
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">How It Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Our Simple{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Process
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                A transparent journey from initial consultation to final handover
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
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Get a free consultation and detailed quote for your renovation project
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-zinc-900">
                      Get Free Quote
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <Link href="/portfolio" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      View Our Work
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
