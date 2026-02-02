import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Shield, Home, Lightbulb, Wrench, Package, Star, ChefHat, Ruler, Drill, PaintBucket } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Kitchen Renovations Zimbabwe | Modern Kitchen Remodeling Harare, Bulawayo, Masvingo",
  description: "Transform your kitchen with professional renovation services in Zimbabwe. Custom cabinetry, modern layouts, granite countertops, plumbing & electrical upgrades. Serving Harare, Bulawayo, Masvingo. Free quotes available.",
  keywords: "kitchen renovation Zimbabwe, kitchen remodeling Harare, custom kitchen cabinets, modern kitchen design Bulawayo, kitchen countertops Masvingo, kitchen plumbing electrical, kitchen makeover Zimbabwe",
}

const kitchenServices = [
  {
    title: "Custom Cabinetry Design",
    description: "Bespoke kitchen cabinets tailored to your space and style. Modern, classic, or contemporary designs with premium finishes.",
    icon: Package,
    features: ["Custom measurements & design", "Premium materials & hardware", "Soft-close mechanisms", "Multiple finish options"],
  },
  {
    title: "Countertops & Surfaces",
    description: "High-quality countertops including granite, quartz, marble, and laminate. Durable, beautiful, and easy to maintain.",
    icon: Ruler,
    features: ["Granite & quartz installation", "Marble surfaces", "Waterfall edges", "Professional sealing"],
  },
  {
    title: "Plumbing Upgrades",
    description: "Complete kitchen plumbing renovation including sinks, taps, dishwashers, and water filtration systems.",
    icon: Wrench,
    features: ["Modern sink installation", "Designer taps & fixtures", "Dishwasher connections", "Water filtration systems"],
  },
  {
    title: "Electrical & Lighting",
    description: "Rewiring, modern lighting design, and smart kitchen electrical solutions for safety and convenience.",
    icon: Lightbulb,
    features: ["LED task lighting", "Under-cabinet lights", "Smart switches", "Additional power points"],
  },
  {
    title: "Flooring & Tiling",
    description: "Durable kitchen flooring and stylish backsplash tiling that combines beauty with practicality.",
    icon: PaintBucket,
    features: ["Ceramic & porcelain tiles", "Vinyl & laminate flooring", "Backsplash installation", "Waterproof solutions"],
  },
  {
    title: "Full Kitchen Layouts",
    description: "Complete kitchen redesign for improved workflow, storage, and modern aesthetics.",
    icon: ChefHat,
    features: ["Space optimization", "Modern layouts (L-shape, U-shape, Island)", "Pantry design", "Appliance integration"],
  },
]

const processSteps = [
  {
    step: 1,
    title: "Free Consultation & Site Visit",
    description: "We visit your home to understand your vision, measure the space, and discuss your budget and timeline.",
    icon: Home,
  },
  {
    step: 2,
    title: "3D Design & Quote",
    description: "Receive detailed 3D renderings of your new kitchen with a comprehensive quote and material selections.",
    icon: Sparkles,
  },
  {
    step: 3,
    title: "Material Selection",
    description: "Choose from our range of cabinets, countertops, tiles, and finishes with expert guidance.",
    icon: Package,
  },
  {
    step: 4,
    title: "Professional Installation",
    description: "Our skilled craftsmen transform your kitchen with precision workmanship and attention to detail.",
    icon: Drill,
  },
  {
    step: 5,
    title: "Final Inspection & Handover",
    description: "Thorough quality check and walkthrough to ensure everything meets your expectations.",
    icon: Award,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "200+ Kitchens",
    description: "Successfully completed across Zimbabwe",
    stat: "200+"
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    description: "Most kitchens done in 3-6 weeks",
    stat: "95%"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "2-year warranty on all workmanship",
    stat: "2 Years"
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Happy customers recommend us",
    stat: "98%"
  },
]

const kitchenStyles = [
  {
    style: "Modern Contemporary",
    description: "Sleek lines, minimalist design, handleless cabinets, and high-gloss finishes",
  },
  {
    style: "Classic Traditional",
    description: "Timeless elegance with detailed cabinetry, crown molding, and warm wood tones",
  },
  {
    style: "Farmhouse Rustic",
    description: "Cozy charm with open shelving, natural materials, and vintage-inspired fixtures",
  },
  {
    style: "Industrial Chic",
    description: "Urban style with exposed elements, metal accents, and bold contrasts",
  },
]

export default function KitchenRenovationPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/kitchen-hero.jpg"
              alt="Modern kitchen renovation in Zimbabwe"
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
              <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/renovations" className="hover:text-white transition-colors">Renovations</Link>
                <span>/</span>
                <span className="text-white">Kitchen Renovations</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <ChefHat className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Kitchen Renovations</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Kitchen
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Expert kitchen remodeling with custom cabinetry, modern layouts, granite countertops, and complete plumbing & electrical upgrades.
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

        {/* Before & After Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Real Transformations</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Before &{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  After
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                See the stunning transformations we've created for homeowners across Zimbabwe
              </p>
            </div>

            {/* Before/After Image */}
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/kitchen-before-after.jpg"
                    alt="Kitchen renovation before and after transformation in Zimbabwe"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Results Cards */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                  <div className="text-4xl font-black text-amber-600 mb-2">3 Weeks</div>
                  <div className="text-zinc-600 font-medium">Completion Time</div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                  <div className="text-4xl font-black text-amber-600 mb-2">+35%</div>
                  <div className="text-zinc-600 font-medium">Property Value Increase</div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                  <div className="text-4xl font-black text-amber-600 mb-2">100%</div>
                  <div className="text-zinc-600 font-medium">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Stats */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <div className="text-3xl font-black text-amber-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Wrench className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete Kitchen{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From design to installation, we handle every aspect of your kitchen renovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {kitchenServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-8 border border-zinc-200 shadow-lg hover:shadow-2xl transition-all h-full">
                    <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <service.icon className="h-8 w-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                          <span className="text-zinc-700 font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kitchen Styles */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Popular Kitchen{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Styles
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Choose a style that matches your taste and home aesthetic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {kitchenStyles.map((style, index) => (
                <div key={index} className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 hover:border-amber-300 hover:bg-white transition-all">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{style.style}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                How We{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Work
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                A streamlined process from consultation to completion
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-amber-200 to-transparent" />
                  )}
                  
                  <div className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
                      {step.step}
                    </div>
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
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Ready for Your Dream Kitchen?
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Get a free consultation and detailed quote for your kitchen renovation project
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
                
                <a href="tel:+263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      <Phone className="h-5 w-5" />
                      +263 78 028 9132
                    </div>
                  </div>
                </a>
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
