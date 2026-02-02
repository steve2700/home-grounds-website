import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Shield, Home, Lightbulb, Wrench, Package, Star, Bath, Ruler, Drill, PaintBucket, Droplets, Zap, Thermometer } from "lucide-react"

export const metadata: Metadata = {
  title: "Expert Bathroom Renovations Zimbabwe | Modern Bathroom Remodeling Harare, Bulawayo, Masvingo",
  description: "Transform your bathroom with professional renovation services in Zimbabwe. Complete tiling, waterproofing, plumbing installations, modern fittings & stylish finishes. Serving Harare, Bulawayo, Masvingo. Free quotes available.",
  keywords: "bathroom renovation Zimbabwe, bathroom remodeling Harare, bathroom tiling, waterproofing services Bulawayo, modern bathroom fittings Masvingo, bathroom plumbing upgrades, shower installation Zimbabwe, bathroom makeover",
  openGraph: {
    title: "Expert Bathroom Renovations Zimbabwe | Home Grounds Investments",
    description: "Professional bathroom remodeling with complete tiling, waterproofing, modern fittings, and stylish finishes. Transform your bathroom in 2-4 weeks.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/bathroom-renovation",
  },
}

const bathroomServices = [
  {
    title: "Complete Tiling Solutions",
    description: "Expert wall and floor tiling with premium ceramics, porcelain, and natural stone. Professional grouting and finishing.",
    icon: PaintBucket,
    features: ["Wall & floor tiling", "Premium tile selection", "Waterfall shower designs", "Decorative accent walls"],
  },
  {
    title: "Waterproofing Systems",
    description: "Professional waterproofing for wet areas, showers, and bathrooms. Guaranteed leak-proof installations.",
    icon: Droplets,
    features: ["Tanking systems", "Shower waterproofing", "Floor membrane installation", "Leak detection & repair"],
  },
  {
    title: "Plumbing Installations",
    description: "Complete bathroom plumbing including showers, taps, toilets, basins, and drainage systems.",
    icon: Wrench,
    features: ["Modern shower systems", "Designer taps & mixers", "Toilet installations", "Drainage upgrades"],
  },
  {
    title: "Electrical & Lighting",
    description: "Safe bathroom electrical work including lighting, ventilation, heated towel rails, and mirror lighting.",
    icon: Zap,
    features: ["LED downlights", "Extractor fans", "Mirror lighting", "Heated towel rails"],
  },
  {
    title: "Modern Fittings & Fixtures",
    description: "Premium bathroom fittings including vanities, mirrors, shower enclosures, and storage solutions.",
    icon: Bath,
    features: ["Custom vanity units", "Frameless shower screens", "Designer mirrors", "Built-in storage"],
  },
  {
    title: "Complete Bathroom Layouts",
    description: "Full bathroom redesign for improved functionality, space optimization, and modern aesthetics.",
    icon: Ruler,
    features: ["Space planning", "Layout optimization", "Accessibility features", "Storage maximization"],
  },
]

const processSteps = [
  {
    step: 1,
    title: "Free Consultation & Assessment",
    description: "We visit your home to assess the space, discuss your vision, and identify any structural or plumbing considerations.",
    icon: Home,
  },
  {
    step: 2,
    title: "Design & Material Selection",
    description: "Choose from our range of tiles, fittings, and finishes with 3D visualizations of your new bathroom.",
    icon: Sparkles,
  },
  {
    step: 3,
    title: "Detailed Quote & Planning",
    description: "Receive a comprehensive quote with timeline, material costs, and project schedule.",
    icon: Package,
  },
  {
    step: 4,
    title: "Professional Installation",
    description: "Our certified team handles demolition, waterproofing, tiling, plumbing, and electrical work with precision.",
    icon: Drill,
  },
  {
    step: 5,
    title: "Quality Check & Handover",
    description: "Thorough inspection, leak testing, and final walkthrough to ensure everything is perfect.",
    icon: Award,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "300+ Bathrooms",
    description: "Successfully renovated across Zimbabwe",
    stat: "300+"
  },
  {
    icon: Clock,
    title: "Fast Completion",
    description: "Most bathrooms done in 2-4 weeks",
    stat: "2-4 Weeks"
  },
  {
    icon: Shield,
    title: "Waterproof Guarantee",
    description: "5-year warranty on waterproofing",
    stat: "5 Years"
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Happy customers recommend us",
    stat: "99%"
  },
]

const bathroomStyles = [
  {
    style: "Modern Minimalist",
    description: "Clean lines, neutral tones, frameless glass, and sleek fixtures for a contemporary spa-like feel",
  },
  {
    style: "Luxury Spa",
    description: "Premium materials, rainfall showers, freestanding tubs, and indulgent finishes",
  },
  {
    style: "Classic Elegance",
    description: "Timeless designs with subway tiles, classic fixtures, and sophisticated color schemes",
  },
  {
    style: "Natural Organic",
    description: "Natural stone, wood accents, earth tones, and organic textures for a calming retreat",
  },
]

const bathroomFAQs = [
  {
    question: "How long does a bathroom renovation take in Zimbabwe?",
    answer: "Most bathroom renovations in Zimbabwe take 2-4 weeks from start to finish. This includes demolition, waterproofing, tiling, plumbing installations, electrical work, and fitting of fixtures. Simple refreshes (new tiles, fixtures) can be completed in 1-2 weeks, while complete renovations with layout changes may take 4-6 weeks. We provide a detailed timeline during your consultation.",
  },
  {
    question: "How much does a bathroom renovation cost in Zimbabwe?",
    answer: "Bathroom renovation costs in Zimbabwe vary by size and finishes. A basic bathroom refresh (retiling, new fixtures) starts from USD $2,500-4,000. Mid-range renovations with quality tiles and modern fittings range from $5,000-10,000. Luxury bathrooms with premium materials and high-end fixtures can be $12,000+. We provide transparent quotes with material options to suit your budget.",
  },
  {
    question: "What waterproofing system do you use?",
    answer: "We use professional tanking systems including membrane waterproofing for shower areas and wet zones. Our process includes surface preparation, primer application, multiple membrane layers, and sealed joints. All waterproofing is tested before tiling and comes with a 5-year guarantee. This prevents water damage, leaks, and structural issues common in poorly waterproofed bathrooms.",
  },
  {
    question: "What tiles do you recommend for Zimbabwe bathrooms?",
    answer: "For Zimbabwe bathrooms, we recommend porcelain or ceramic tiles due to their durability, water resistance, and low maintenance. Porcelain is ideal for floors (non-slip finish), while ceramics work well for walls. We also offer natural stone options like travertine and marble for luxury finishes. All tiles are sourced from reputable suppliers and come with proper waterproofing underneath.",
  },
  {
    question: "Can you work with my existing bathroom layout?",
    answer: "Yes! We can refresh your existing layout (more cost-effective and faster) or redesign completely. If your current layout works well, we update tiles, fixtures, and finishes while keeping plumbing in place. For layout changes to improve functionality or add features, we handle all structural modifications, plumbing relocations, and electrical upgrades. We advise on the best approach during consultation.",
  },
  {
    question: "Do you handle plumbing and electrical work?",
    answer: "Absolutely. We have licensed plumbers and electricians on our team who handle all bathroom installations. This includes shower systems, toilets, basins, taps, drainage, water heaters, ventilation fans, lighting, and heated towel rails. All work complies with Zimbabwe building codes and is professionally certified. We also upgrade old plumbing to prevent future issues.",
  },
  {
    question: "What warranty do you provide?",
    answer: "We provide a 5-year warranty on waterproofing systems, 2-year warranty on tiling workmanship, and 1-year warranty on plumbing and electrical installations. Fixtures and fittings come with manufacturer warranties (typically 2-10 years depending on brand). We also offer ongoing maintenance support and rapid response for any issues that may arise.",
  },
  {
    question: "Can I use my bathroom during renovation?",
    answer: "Unfortunately, no. The bathroom will be completely unusable during renovation due to demolition, waterproofing curing time (24-48 hours), plumbing work, and tiling. For homes with multiple bathrooms, we can renovate one at a time. For single-bathroom homes, we work as efficiently as possible to minimize downtime and can discuss scheduling to accommodate your needs. Most clients arrange temporary alternatives during the 2-4 week period.",
  },
]

export default function BathroomRenovationPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Bathroom Renovation and Remodeling Services",
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
              src="/images/bathroom-renovation.jpg"
              alt="Modern bathroom renovation in Zimbabwe"
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
                <span className="text-white">Bathroom Renovations</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <Bath className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Bathroom Renovations</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Bathroom
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Expert bathroom remodeling with complete tiling, waterproofing, modern fittings, plumbing installations, and stylish finishes.
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
                      Call Now
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
                Zimbabwe's Premier Bathroom Renovation & Remodeling Experts
              </h2>
              <div className="prose prose-lg max-w-none text-zinc-600 space-y-4">
                <p>
                  Home Grounds Investments is Zimbabwe's trusted bathroom renovation specialist, transforming outdated bathrooms into modern, functional sanctuaries that add significant value to your home. With over 300 successfully completed bathroom projects across Harare, Bulawayo, and Masvingo, we bring unmatched expertise in complete bathroom transformations, professional waterproofing, expert tiling, and modern fixture installations.
                </p>
                <p>
                  A professional bathroom renovation is one of the highest-return home improvements you can make in Zimbabwe. Recent property market data shows that well-executed bathroom renovations can increase property values by 20-30%, while dramatically improving daily comfort and functionality. Whether you're planning a simple refresh with new tiles and fixtures, or a complete bathroom redesign with layout changes and premium finishes, our team delivers exceptional results on time and within budget.
                </p>
                <p>
                  We specialize in comprehensive bathroom solutions—from professional waterproofing systems that prevent leaks and water damage, to expert tiling with premium ceramics, porcelain, and natural stone. Our in-house team includes certified waterproofing specialists, master tilers, licensed plumbers, qualified electricians, and experienced carpenters who work together seamlessly. We handle everything: demolition, waterproofing, tiling, plumbing installations, electrical work, vanity installations, shower screen fittings, and final finishing touches.
                </p>
                <p>
                  Most bathroom renovations in Zimbabwe take 2-4 weeks from start to finish, and we're known for our reliable completion times and quality workmanship. We work with trusted suppliers to provide premium materials at competitive prices—from durable porcelain tiles and waterproofing membranes, to modern shower systems, designer taps, quality vanities, and energy-efficient lighting. Our 5-year waterproofing guarantee and comprehensive warranties ensure your investment is protected, and we provide ongoing maintenance support for complete peace of mind.
                </p>
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
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  After
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                See the stunning bathroom transformations we've created for homeowners across Zimbabwe
              </p>
            </div>

            {/* Before/After Image */}
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/bathroom-before-after.jpg"
                    alt="Bathroom renovation before and after transformation in Zimbabwe"
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
                  <div className="text-4xl font-black text-amber-600 mb-2">+28%</div>
                  <div className="text-zinc-600 font-medium">Property Value Increase</div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                  <div className="text-4xl font-black text-amber-600 mb-2">100%</div>
                  <div className="text-zinc-600 font-medium">Waterproof Guaranteed</div>
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
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Wrench className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete Bathroom{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From design to installation, we handle every aspect of your bathroom renovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {bathroomServices.map((service, index) => (
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

        {/* Bathroom Styles */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Popular Bathroom{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Styles
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Choose a style that matches your taste and home aesthetic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {bathroomStyles.map((style, index) => (
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
                Bathroom Renovations{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Across Zimbabwe
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Professional bathroom remodeling services in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: "Harare", 
                  description: "Serving all suburbs including Borrowdale, Mount Pleasant, Highlands, Avondale, and surrounding areas with expert bathroom renovations" 
                },
                { 
                  name: "Bulawayo", 
                  description: "Professional bathroom remodeling across all Bulawayo suburbs with quality waterproofing and tiling installations" 
                },
                { 
                  name: "Masvingo", 
                  description: "Complete bathroom renovation services throughout Masvingo province with local expertise and support" 
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
                Bathroom Renovation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about bathroom remodeling in Zimbabwe
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {bathroomFAQs.map((faq, index) => (
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
                Real feedback from homeowners we've helped transform their bathrooms
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Michael T.", 
                  location: "Mount Pleasant, Harare", 
                  review: "Outstanding work! The waterproofing is perfect, the tiling is flawless, and the modern fixtures completely transformed our dated bathroom. Completed in just 3 weeks as promised. Highly professional team." 
                },
                { 
                  name: "Rumbidzai M.", 
                  location: "Bulawayo", 
                  review: "We had leaking issues for years. Home Grounds completely redid our bathroom with proper waterproofing and beautiful porcelain tiles. No more leaks and it looks absolutely stunning. Best investment we made!" 
                },
                { 
                  name: "James & Linda K.", 
                  location: "Masvingo", 
                  review: "They turned our small outdated bathroom into a modern spa-like retreat. The space planning was brilliant, and every detail was executed perfectly. The 5-year waterproofing guarantee gives us complete peace of mind." 
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
                Ready for Your Dream Bathroom?
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Get a free consultation and detailed quote for your bathroom renovation project
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500" />
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
