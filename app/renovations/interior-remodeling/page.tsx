import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle, Sparkles, Award, Clock, Shield, Home, PaintBucket, Ruler, Grid3x3, Hammer, Brush, Star, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Interior Remodeling & Upgrades Zimbabwe | Modern Interior Design Harare, Bulawayo",
  description: "Transform your interiors with professional remodeling services in Zimbabwe. Ceilings, painting, tiling, flooring, drywalling, and stylish finishes. Expert craftsmanship in Harare, Bulawayo, Masvingo.",
  keywords: "interior remodeling Zimbabwe, interior design Harare, painting services, tiling Bulawayo, flooring installation, drywall Zimbabwe, ceiling installation, interior upgrades Masvingo",
  openGraph: {
    title: "Interior Remodeling & Upgrades Zimbabwe | Home Grounds Investments",
    description: "Professional interior improvements - ceilings, painting, tiling, flooring, drywalling. Transform your space with expert craftsmanship.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/interior-remodeling",
  },
}

const interiorServices = [
  {
    title: "Ceiling Installation & Design",
    description: "Modern ceiling solutions including suspended ceilings, coffered designs, pop ceilings, and decorative finishes that add elegance to any space.",
    icon: Grid3x3,
    features: ["Suspended Grid Ceilings", "Pop & Gypsum Ceilings", "Coffered Ceiling Designs", "Ceiling Lighting Integration"],
  },
  {
    title: "Professional Painting",
    description: "Expert interior and exterior painting services with premium paints, perfect finishes, and color consultation for residential and commercial properties.",
    icon: PaintBucket,
    features: ["Interior Wall Painting", "Exterior House Painting", "Decorative Finishes", "Color Consultation"],
  },
  {
    title: "Tiling & Backsplashes",
    description: "Precision tile installation for floors, walls, bathrooms, and kitchens using ceramic, porcelain, natural stone, and decorative tiles.",
    icon: Grid3x3,
    features: ["Floor Tiling (Ceramic, Porcelain)", "Wall Tiling & Backsplashes", "Bathroom & Shower Tiling", "Natural Stone Installation"],
  },
  {
    title: "Flooring Solutions",
    description: "Comprehensive flooring installation including tiles, hardwood, laminate, vinyl, and engineered wood for beautiful, durable floors.",
    icon: Ruler,
    features: ["Hardwood & Engineered Wood", "Laminate Flooring", "Vinyl Plank Installation", "Floor Refinishing"],
  },
  {
    title: "Drywalling & Partitions",
    description: "Professional drywall installation for room divisions, wall repairs, soundproofing, and creating flexible interior spaces.",
    icon: Hammer,
    features: ["Drywall Installation", "Room Partitions", "Wall Repairs & Patching", "Soundproof Walls"],
  },
  {
    title: "Stylish Finishes & Details",
    description: "Finishing touches that elevate your interior including crown molding, baseboards, wainscoting, and decorative trim work.",
    icon: Brush,
    features: ["Crown Molding & Trim", "Baseboards & Skirting", "Wainscoting & Paneling", "Decorative Accents"],
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "300+ Projects",
    description: "Successfully completed interior renovations",
    stat: "300+"
  },
  {
    icon: Clock,
    title: "Fast Completion",
    description: "Most projects done in 1-3 weeks",
    stat: "1-3 Weeks"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "2-year warranty on workmanship",
    stat: "2 Years"
  },
  {
    icon: Star,
    title: "Client Satisfaction",
    description: "Consistently excellent reviews",
    stat: "98%"
  },
]

const processSteps = [
  {
    step: 1,
    title: "Design Consultation",
    description: "We visit your property to understand your style preferences, assess the space, and discuss material options and budget.",
    icon: Home,
  },
  {
    step: 2,
    title: "Detailed Quote & Plan",
    description: "Receive a comprehensive quote with timelines, material specifications, and color/finish recommendations.",
    icon: Ruler,
  },
  {
    step: 3,
    title: "Professional Installation",
    description: "Our skilled craftsmen execute the work with precision, maintaining cleanliness and respecting your schedule.",
    icon: Hammer,
  },
  {
    step: 4,
    title: "Final Inspection",
    description: "Thorough quality check and walkthrough to ensure every detail meets our high standards and your expectations.",
    icon: Award,
  },
]

const interiorFAQs = [
  {
    question: "How long does interior remodeling take in Zimbabwe?",
    answer: "Timeline varies by project scope. Simple painting jobs take 3-5 days, ceiling installation 1-2 weeks, full room renovations with tiling, flooring, and painting typically 2-3 weeks. We provide accurate timelines during consultation and communicate any changes promptly.",
  },
  {
    question: "What painting brands and finishes do you use?",
    answer: "We use premium paint brands available in Zimbabwe including Plascon, Dulux, and Crown Paints. We offer various finishes: matte for ceilings and low-traffic areas, eggshell/satin for living spaces, semi-gloss for kitchens and bathrooms, and gloss for trim. All paints are low-VOC and durable.",
  },
  {
    question: "Can you help with interior design and color selection?",
    answer: "Absolutely! We provide complimentary color consultation and design advice. Our team can recommend color schemes that complement your furniture and lighting, suggest modern finishes and materials, and show you samples before starting work. We want you to be completely confident in your choices.",
  },
  {
    question: "What types of ceilings do you install?",
    answer: "We install various ceiling types: suspended grid ceilings (ideal for commercial spaces and easy access to utilities), POP (plaster of Paris) ceilings with smooth finishes, gypsum board ceilings for modern designs, coffered ceilings for luxury spaces, and decorative finishes. Each has different benefits for acoustics, aesthetics, and budget.",
  },
  {
    question: "Do you move furniture and protect my belongings?",
    answer: "Yes! We carefully move furniture to safe areas, cover items with protective sheeting, and use dust barriers where needed. For painting and tiling, we protect floors and fixtures. We maintain a clean work site and do daily cleanup. Your belongings are treated with care throughout the project.",
  },
  {
    question: "What flooring options work best for Zimbabwe's climate?",
    answer: "For Zimbabwe's climate, we recommend: ceramic or porcelain tiles (excellent heat resistance and durability), vinyl plank (affordable, water-resistant, comfortable underfoot), engineered wood (more stable than solid hardwood in humidity), and laminate (cost-effective with good durability). We assess your specific room conditions to recommend the best option.",
  },
  {
    question: "Can you match existing finishes or do partial renovations?",
    answer: "Yes, we specialize in seamless additions and repairs. We can match existing tile patterns, blend new paint with old walls, extend flooring into new areas, and repair damaged sections to blend perfectly. We bring samples to ensure color and texture matching before starting work.",
  },
  {
    question: "What warranty do you provide on interior work?",
    answer: "We provide a 2-year warranty on all workmanship including painting, tiling, flooring installation, ceiling work, and drywall. Material warranties vary by manufacturer (typically 5-10 years for tiles, 10-25 years for quality flooring). We stand behind our work and address any issues promptly.",
  },
]

export default function InteriorRemodelingPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Interior Remodeling and Renovation Services",
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
              src="/images/interior-hero.jpg"
              alt="Modern interior remodeling in Zimbabwe"
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
                <span className="text-white">Interior Remodeling</span>
              </nav>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-full px-5 py-2 mb-8">
                <PaintBucket className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-bold text-amber-100 uppercase tracking-wide">Interior Remodeling & Upgrades</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Elevate Your{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Interior
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Modern interior improvements - ceilings, painting, tiling, flooring, drywalling, and stylish finishes that enhance comfort and value.
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

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Professional Interior Remodeling Services in Zimbabwe
              </h2>
              <div className="prose prose-lg max-w-none text-zinc-600 space-y-4">
                <p>
                  Home Grounds Investments transforms interior spaces across Zimbabwe with expert remodeling services that combine aesthetic appeal with lasting quality. Whether you're updating a single room or renovating your entire home, our comprehensive interior improvement services—from ceiling installation and professional painting to precision tiling and modern flooring—deliver exceptional results that enhance both comfort and property value.
                </p>
                <p>
                  Interior renovations are among the most cost-effective ways to transform your property in Zimbabwe. Fresh paint, modern ceilings, stylish tiling, and quality flooring can completely change the look and feel of your space while significantly increasing market value. Our projects consistently demonstrate that professional interior upgrades provide excellent return on investment, with properly executed renovations adding 15-25% to property values while creating more comfortable, functional living environments.
                </p>
                <p>
                  We specialize in both residential and commercial interior remodeling, serving homes, offices, retail spaces, and hospitality properties throughout Harare, Bulawayo, and Masvingo. Our team includes skilled painters who deliver flawless finishes, expert tilers with precision craftsmanship, experienced ceiling installers familiar with modern techniques, professional flooring specialists, and certified drywall contractors—all working together to ensure every aspect of your interior renovation exceeds expectations.
                </p>
                <p>
                  Quality materials adapted to Zimbabwe's climate are essential for lasting results. We source premium paints formulated for durability in our conditions, tiles suited to local temperature variations, moisture-resistant materials for bathrooms and kitchens, and flooring products that withstand our climate while maintaining their beauty. Combined with expert installation techniques and rigorous quality control, we deliver interior improvements that look stunning and stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Two Photos Side by Side */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Before &{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  After
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Real transformations showcasing our interior remodeling expertise
              </p>
            </div>

            {/* Two Column Gallery */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Photo 1 */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/interior-before-after-1.jpg"
                    alt="Interior remodeling transformation - living room with modern ceiling and paint"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/90 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Modern Living Room Transformation</h3>
                    <p className="text-zinc-200 text-sm">Pop ceiling, premium paint, and stylish finishes</p>
                  </div>
                </div>
              </div>

              {/* Photo 2 */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/interior-before-after-2.jpg"
                    alt="Interior remodeling transformation - kitchen with new tiling and flooring"
                    width={600}
                    height={450}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/90 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Contemporary Kitchen Upgrade</h3>
                    <p className="text-zinc-200 text-sm">Premium tiling, new flooring, and professional paint</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                <div className="text-4xl font-black text-amber-600 mb-2">2 Weeks</div>
                <div className="text-zinc-600 font-medium">Average Completion</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                <div className="text-4xl font-black text-amber-600 mb-2">+25%</div>
                <div className="text-zinc-600 font-medium">Property Value Increase</div>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-center">
                <div className="text-4xl font-black text-amber-600 mb-2">300+</div>
                <div className="text-zinc-600 font-medium">Projects Completed</div>
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
                <Hammer className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete Interior{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Professional interior remodeling services for every room in your home or business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {interiorServices.map((service, index) => (
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

        {/* Process Section */}
        <section className="py-24 bg-white relative overflow-hidden">
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
                A simple, transparent process from consultation to completion
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

        {/* Service Areas Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Home className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Service Areas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Interior Remodeling{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Across Zimbabwe
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Professional interior services in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: "Harare", 
                  description: "Expert interior remodeling across all Harare suburbs with modern designs and quality finishes" 
                },
                { 
                  name: "Bulawayo", 
                  description: "Professional interior upgrades throughout Bulawayo with skilled craftsmanship and attention to detail" 
                },
                { 
                  name: "Masvingo", 
                  description: "Complete interior renovation services in Masvingo with local expertise and support" 
                },
              ].map((area, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Interior Remodeling{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about interior renovations in Zimbabwe
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {interiorFAQs.map((faq, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity" />
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
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Real feedback from satisfied homeowners
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Tatenda M.", 
                  location: "Mount Pleasant, Harare", 
                  review: "The team transformed our living room with a beautiful pop ceiling and fresh paint. The attention to detail was exceptional and they completed everything in just 10 days!" 
                },
                { 
                  name: "James K.", 
                  location: "Bulawayo", 
                  review: "Professional tiling and flooring installation throughout our office. The quality is outstanding and the team was respectful, clean, and efficient. Highly recommend!" 
                },
                { 
                  name: "Grace S.", 
                  location: "Masvingo", 
                  review: "They helped us choose perfect colors and finishes for our home. The painting quality is flawless and our house looks brand new. Worth every dollar!" 
                },
              ].map((testimonial, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
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
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Ready to Transform Your Interior?
              </h2>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
                Get a free consultation and detailed quote for your interior remodeling project
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
