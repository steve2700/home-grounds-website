import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Shield, Home, Lightbulb, Wrench, Package, Star, Droplets, Ruler, Drill, Hammer, CloudRain, Wind, Thermometer, AlertTriangle, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Roofing & Waterproofing Zimbabwe | Roof Installation, Repairs & Maintenance Harare, Bulawayo",
  description: "Professional roofing and waterproofing solutions in Zimbabwe. Complete roof installations, repairs, maintenance, and waterproofing systems. Protect your property from leaks and weather damage. Serving Harare, Bulawayo, Masvingo. Free quotes.",
  keywords: "roofing Zimbabwe, waterproofing services, roof installation Harare, roof repairs Bulawayo, roof maintenance Masvingo, leak repair, weather protection, roof replacement Zimbabwe, waterproofing systems",
  openGraph: {
    title: "Expert Roofing & Waterproofing Zimbabwe | Home Grounds Investments",
    description: "Professional roofing installations, repairs, and waterproofing systems to protect properties from leaks and weather damage.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/roofing-waterproofing",
  },
}

const roofingServices = [
  {
    title: "Roof Installations",
    description: "Complete new roof installations with premium materials. Expert craftsmanship for residential and commercial properties.",
    icon: Home,
    features: ["Metal roofing (IBR, Corrugated)", "Tile roofing (Concrete, Clay)", "Asbestos replacement", "Steel truss fabrication"],
  },
  {
    title: "Roof Repairs & Maintenance",
    description: "Professional repair services for all roof types. Quick response to leaks, damage, and structural issues.",
    icon: Wrench,
    features: ["Leak detection & repair", "Damaged sheet replacement", "Gutter repairs", "Structural reinforcement"],
  },
  {
    title: "Waterproofing Systems",
    description: "Advanced waterproofing solutions for roofs, walls, and foundations. Long-lasting protection against water damage.",
    icon: Droplets,
    features: ["Torch-on waterproofing", "Liquid membrane systems", "Crack sealing & treatment", "Damp proofing"],
  },
  {
    title: "Gutter Systems",
    description: "Complete gutter installation, repairs, and cleaning services. Proper drainage to protect your property.",
    icon: CloudRain,
    features: ["Gutter installation", "Downpipe systems", "Gutter cleaning & maintenance", "Valley gutter repairs"],
  },
  {
    title: "Roof Painting & Coating",
    description: "Protective roof coatings and painting services. Extend roof life and improve weather resistance.",
    icon: Package,
    features: ["Roof cleaning & preparation", "Waterproof paint application", "Heat-reflective coatings", "Rust treatment"],
  },
  {
    title: "Storm Damage Repairs",
    description: "Emergency response for storm and wind damage. Fast repairs to prevent further water intrusion.",
    icon: Wind,
    features: ["Emergency leak repairs", "Wind damage assessment", "Sheet replacement", "Structural repairs"],
  },
]

const processSteps = [
  {
    step: 1,
    title: "Property Inspection",
    description: "Comprehensive roof inspection to identify issues, assess condition, and recommend solutions.",
    icon: Home,
  },
  {
    step: 2,
    title: "Detailed Assessment & Quote",
    description: "Written report with findings, recommended solutions, material options, and transparent pricing.",
    icon: Package,
  },
  {
    step: 3,
    title: "Material Selection",
    description: "Choose from quality roofing materials and waterproofing systems suited to your needs and budget.",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Professional Installation",
    description: "Expert installation by certified roofing specialists using proper techniques and safety protocols.",
    icon: Drill,
  },
  {
    step: 5,
    title: "Quality Inspection & Warranty",
    description: "Thorough inspection, leak testing, and comprehensive warranty on workmanship and materials.",
    icon: Award,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "500+ Roofs",
    description: "Successfully installed and repaired",
    stat: "500+"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "24-hour emergency leak repairs",
    stat: "24 Hours"
  },
  {
    icon: Shield,
    title: "Long Warranty",
    description: "Up to 10 years on installations",
    stat: "10 Years"
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Happy customers across Zimbabwe",
    stat: "98%"
  },
]

const roofingMaterials = [
  {
    material: "IBR Sheeting",
    description: "Durable corrugated metal roofing, cost-effective, weather-resistant, available in multiple colors",
    icon: Home,
  },
  {
    material: "Tile Roofing",
    description: "Premium concrete or clay tiles, excellent durability, traditional aesthetic appeal",
    icon: Package,
  },
  {
    material: "Stone-Coated Steel",
    description: "Modern stone-coated metal tiles, superior weather resistance, 50+ year lifespan",
    icon: Shield,
  },
  {
    material: "Chromadek & Zincalume",
    description: "Pre-painted steel sheeting, excellent corrosion resistance, low maintenance",
    icon: Star,
  },
]

const commonIssues = [
  {
    issue: "Roof Leaks",
    description: "Water penetration through damaged sheets, flashing, or valleys causing interior damage.",
    solution: "Professional leak detection, sheet replacement, and waterproofing application.",
    icon: Droplets,
  },
  {
    issue: "Rust & Corrosion",
    description: "Metal roof deterioration due to age, weather exposure, or poor initial coating.",
    solution: "Rust treatment, protective coating application, or sheet replacement if severe.",
    icon: AlertTriangle,
  },
  {
    issue: "Storm Damage",
    description: "Wind-lifted sheets, hail damage, or debris impact requiring urgent repairs.",
    solution: "Emergency response, temporary weatherproofing, and permanent repairs.",
    icon: Wind,
  },
  {
    issue: "Poor Drainage",
    description: "Blocked gutters or improper slope causing water pooling and potential leaks.",
    solution: "Gutter cleaning, realignment, and installation of proper drainage systems.",
    icon: CloudRain,
  },
]

const roofingFAQs = [
  {
    question: "How long does a roof installation take in Zimbabwe?",
    answer: "A standard residential roof installation takes 3-7 days depending on size and complexity. Simple roof replacements on small houses can be completed in 2-3 days, while larger homes with complex designs may take 7-10 days. Commercial roofing projects vary based on scope. Weather conditions can affect timelines. We provide accurate schedules during your quote.",
  },
  {
    question: "How much does roofing cost in Zimbabwe?",
    answer: "Roofing costs vary by material and size. IBR sheeting installations start from USD $15-25 per square meter installed. Tile roofing ranges from $30-50 per square meter. Stone-coated steel is $40-70 per square meter. A typical 3-bedroom house roof ranges from $3,000-8,000 depending on materials. We provide detailed quotes including materials, labor, and waterproofing.",
  },
  {
    question: "What roofing material is best for Zimbabwe's climate?",
    answer: "For Zimbabwe's climate, we recommend IBR or Chromadek sheeting for cost-effectiveness and durability, or stone-coated steel tiles for premium applications. These materials handle our hot summers, seasonal rains, and occasional hail. Proper installation with waterproofing is more important than material choice. We help you select based on budget, aesthetics, and performance needs.",
  },
  {
    question: "How do I know if my roof needs repairs or replacement?",
    answer: "Signs your roof needs attention include visible leaks or water stains, missing or damaged sheets, rust spots, sagging areas, or daylight visible through the roof. If your roof is 15+ years old with multiple issues, replacement may be more cost-effective than repairs. We offer free inspections to assess condition and recommend the best solution for your situation and budget.",
  },
  {
    question: "Do you offer emergency roof repair services?",
    answer: "Yes! We provide 24-hour emergency response for urgent roof leaks and storm damage. Our team responds quickly to prevent further water damage to your property. We perform temporary weatherproofing immediately, then schedule permanent repairs within 24-48 hours. Emergency services are available throughout Harare, Bulawayo, and Masvingo. Call us immediately if you have an active leak.",
  },
  {
    question: "What warranty do you provide on roofing work?",
    answer: "We provide up to 10-year warranties on new roof installations (workmanship), and 2-5 year warranties on repairs depending on scope. Materials come with manufacturer warranties: IBR sheeting (10-15 years), stone-coated steel (50 years), tiles (30+ years). Waterproofing systems have 5-year guarantees. All warranties are in writing and include regular inspection provisions.",
  },
  {
    question: "Can you handle waterproofing for existing roofs?",
    answer: "Absolutely! We specialize in waterproofing existing roofs without full replacement. Our solutions include torch-on membrane systems, liquid waterproofing coatings, and crack sealing. This is cost-effective for roofs with good structural integrity but weatherproofing issues. We clean, prepare, treat rust, and apply professional waterproofing systems. Most waterproofing projects take 2-4 days and come with 5-year guarantees.",
  },
  {
    question: "Do you work on commercial and industrial roofs?",
    answer: "Yes, we handle commercial, industrial, and residential projects. Our team has experience with warehouses, factories, shopping centers, schools, and apartment complexes. We work with various roofing systems including large-span IBR, industrial cladding, and specialized waterproofing. We coordinate with minimal business disruption and provide maintenance contracts for commercial properties. Contact us for a commercial roofing consultation.",
  },
]

export default function RoofingWaterproofingPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Roofing and Waterproofing Services",
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
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/roofing-in-zimbabwe.jpg"
              alt="Professional roofing and waterproofing services in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/renovations" className="hover:text-white transition-colors">Renovations</Link>
                <span>/</span>
                <span className="text-white">Roofing & Waterproofing</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <Home className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Roofing & Waterproofing</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Protect Your{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Property
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Expert roofing installations, repairs, and waterproofing systems to safeguard your property from leaks and weather damage.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500" />
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
                      Emergency: 24/7
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
                Zimbabwe's Trusted Roofing & Waterproofing Specialists
              </h2>
              <div className="prose prose-lg max-w-none text-zinc-600 space-y-4">
                <p>
                  Home Grounds Investments is Zimbabwe's premier roofing and waterproofing specialist, protecting properties across Harare, Bulawayo, and Masvingo from leaks and weather damage. With over 500 successfully completed roofing projects and decades of combined experience, we provide comprehensive solutions for residential, commercial, and industrial properties. From complete roof installations to emergency leak repairs and advanced waterproofing systems, our certified team delivers exceptional quality and reliability.
                </p>
                <p>
                  Professional roofing and waterproofing are critical investments for property protection in Zimbabwe's climate. Our seasonal rains, intense sun, and occasional severe weather can quickly damage improperly installed or maintained roofs. A quality roof installation with proper waterproofing can last 20-50 years depending on materials, while poor workmanship leads to costly leaks, structural damage, and premature replacement. We use only premium materials from trusted suppliers and employ proper installation techniques that ensure long-lasting protection.
                </p>
                <p>
                  We specialize in all roofing types—from cost-effective IBR and corrugated sheeting to premium stone-coated steel and traditional tile roofing. Our services include complete new installations, roof replacements, repairs and maintenance, waterproofing systems, gutter installations, storm damage repairs, and roof painting and coating. Our in-house team includes certified roofing specialists, waterproofing technicians, steel fabricators, and safety-trained installers who work together to deliver projects on time and within budget.
                </p>
                <p>
                  Most residential roof installations take 3-7 days from start to finish, and we're known for working efficiently while maintaining the highest safety and quality standards. We offer 24-hour emergency response for urgent leaks and storm damage, preventing further water intrusion and property damage. Our warranties are among the best in Zimbabwe—up to 10 years on installations and 5 years on waterproofing systems. We also provide maintenance contracts to extend the life of your roof and catch potential issues before they become expensive problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Stats */}
        <section className="py-20 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Wrench className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete Roofing{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive roofing and waterproofing services to protect your property
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {roofingServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
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

        {/* Roofing Materials */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Premium Roofing{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Materials
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Quality materials from trusted suppliers for long-lasting protection
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {roofingMaterials.map((material, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-amber-300 hover:shadow-lg transition-all">
                  <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <material.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{material.material}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">{material.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Issues Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Common Problems</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Roofing Issues{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  We Fix
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Expert solutions for all common roofing and waterproofing problems
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {commonIssues.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.issue}</h3>
                        <p className="text-zinc-600 text-sm mb-3">{item.description}</p>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-zinc-700 font-medium text-sm">{item.solution}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                How We{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Work
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                A systematic approach from inspection to warranty
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-amber-200 to-transparent" />
                  )}
                  
                  <div className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-500 text-white flex items-center justify-center font-black text-xl shadow-lg">
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

        {/* Service Areas Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Home className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Service Areas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Roofing Services{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Across Zimbabwe
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Professional roofing and waterproofing in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: "Harare", 
                  description: "Complete roofing services across all Harare suburbs including emergency repairs, installations, and waterproofing systems" 
                },
                { 
                  name: "Bulawayo", 
                  description: "Professional roofing solutions throughout Bulawayo with 24-hour emergency response and quality installations" 
                },
                { 
                  name: "Masvingo", 
                  description: "Expert roofing and waterproofing services across Masvingo province with local teams and rapid response" 
                },
              ].map((area, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-sm hover:shadow-lg transition-all">
                    <Home className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">{area.name}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Roofing & Waterproofing{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about roofing and waterproofing in Zimbabwe
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {roofingFAQs.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                    <h3 className="text-lg font-bold text-zinc-900 mb-3">{faq.question}</h3>
                    <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Real feedback from property owners we've protected
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Peter M.", 
                  location: "Borrowdale, Harare", 
                  review: "Our roof was leaking badly during every rainstorm. Home Grounds came out immediately, diagnosed the problem, and had it fixed within 2 days. No more leaks! Professional work and great warranty." 
                },
                { 
                  name: "Sharon N.", 
                  location: "Bulawayo", 
                  review: "They replaced our entire roof with IBR sheeting. The team was professional, worked safely, and completed it in just 5 days. The price was fair and the quality is excellent. Highly recommend!" 
                },
                { 
                  name: "Joseph T.", 
                  location: "Masvingo", 
                  review: "After storm damage, they responded within hours for emergency repairs. Then did a complete roof assessment and waterproofing. It's been 2 years with no issues. Outstanding service and reliability." 
                },
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                  <div className="relative bg-white border border-zinc-200 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-zinc-600 mb-6 italic leading-relaxed">"{testimonial.review}"</p>
                    <div>
                      <p className="font-bold text-zinc-900">{testimonial.name}</p>
                      <p className="text-sm text-zinc-500">{testimonial.location}</p>
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
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Protect Your Property Today
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Get a free roof inspection and detailed quote. 24-hour emergency service available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-zinc-900">
                      Get Free Inspection
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
