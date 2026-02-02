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
  openGraph: {
    title: "Expert Kitchen Renovations Zimbabwe | Home Grounds Investments",
    description: "Professional kitchen remodeling with custom cabinetry, granite countertops, and modern layouts. Transform your kitchen in 3-6 weeks.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/kitchen-renovation",
  },
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

const kitchenFAQs = [
  {
    question: "How long does a kitchen renovation take in Zimbabwe?",
    answer: "Most kitchen renovations in Zimbabwe take 3-6 weeks from start to finish. This includes demolition, installation of new cabinets, countertops, plumbing, electrical work, tiling, and painting. Simple cabinet replacements can be done in 1-2 weeks, while full renovations with structural changes may take 6-8 weeks. We provide a detailed timeline during your consultation.",
  },
  {
    question: "How much does a kitchen renovation cost in Zimbabwe?",
    answer: "Kitchen renovation costs in Zimbabwe vary based on size and finishes. A basic kitchen refresh (painting, new countertops, fixtures) starts from USD $3,000-5,000. Mid-range renovations with new cabinets and appliances range from $8,000-15,000. High-end custom kitchens with premium materials can be $20,000+. We provide detailed quotes with transparent pricing and material options.",
  },
  {
    question: "Can you work with my existing kitchen layout?",
    answer: "Absolutely! We specialize in both refreshing existing layouts and complete redesigns. If your current layout works well, we can update cabinets, countertops, and finishes while keeping plumbing and electrical in place—this is more cost-effective and faster. If you want to change the layout for better workflow, we handle all structural, plumbing, and electrical modifications.",
  },
  {
    question: "What countertop materials do you recommend for Zimbabwe?",
    answer: "For Zimbabwe's climate, we recommend granite (locally available and heat-resistant), quartz (durable and low-maintenance), or solid surface materials. Granite is most popular due to local availability and affordability. We help you choose based on your budget, cooking habits, and style preferences. All our countertops come with professional installation and sealing.",
  },
  {
    question: "Do you provide 3D designs before starting work?",
    answer: "Yes! We provide detailed 3D renderings of your new kitchen so you can visualize the final result before we begin. This includes cabinet layouts, color schemes, countertops, and lighting. You can request changes until you're completely satisfied. This design service is included in our comprehensive quotes.",
  },
  {
    question: "What warranty do you offer on kitchen renovations?",
    answer: "We provide a 2-year warranty on all workmanship including cabinet installation, plumbing, electrical work, and tiling. Cabinet manufacturers typically offer 5-10 year warranties on their products. Countertop materials come with manufacturer warranties (granite sealed for 15 years, quartz for 10+ years). We also offer ongoing maintenance support.",
  },
  {
    question: "Can I use my kitchen during the renovation?",
    answer: "Partial use is possible during most renovations. We set up temporary washing stations and protect appliances. However, there will be 3-5 days when the kitchen is completely unusable (during countertop installation, plumbing connections, electrical work). We work efficiently to minimize disruption and can discuss scheduling to accommodate your needs.",
  },
  {
    question: "Do you handle electrical and plumbing upgrades?",
    answer: "Yes, we have licensed electricians and plumbers on our team. We upgrade wiring for modern appliances, add power points, install under-cabinet lighting, relocate plumbing for new sink positions, install dishwasher connections, and upgrade to water-efficient fixtures. All work complies with Zimbabwe building codes and is professionally certified.",
  },
]

export default function KitchenRenovationPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Kitchen Renovation and Remodeling Services",
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

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
                Zimbabwe's Premier Kitchen Renovation & Remodeling Experts
              </h2>
              <div className="prose prose-lg max-w-none text-zinc-600 space-y-4">
                <p>
                  Home Grounds Investments is Zimbabwe's leading kitchen renovation specialist, transforming outdated kitchens into modern, functional spaces that enhance your home's value and your daily living experience. With over 200 successfully completed kitchen projects across Harare, Bulawayo, and Masvingo, we bring unmatched expertise in custom kitchen design, professional installation, and complete project management.
                </p>
                <p>
                  A kitchen renovation is one of the most valuable home improvements you can make in Zimbabwe. Recent property market data shows that professionally renovated kitchens can increase property values by 25-35%, while dramatically improving functionality and aesthetics. Whether you're planning a simple refresh with new countertops and cabinets, or a complete kitchen redesign with structural changes, our team delivers exceptional results on time and within budget.
                </p>
                <p>
                  We specialize in custom cabinetry designed specifically for your space—from modern handleless designs with high-gloss finishes to timeless traditional styles with detailed craftsmanship. Our in-house team includes expert cabinet makers, licensed electricians, certified plumbers, and professional tilers who work together seamlessly to ensure every aspect of your kitchen renovation exceeds expectations. From initial 3D design renderings to final installation and quality checks, we manage every detail of your project.
                </p>
                <p>
                  Most kitchen renovations in Zimbabwe take 3-6 weeks from start to finish, and we're known for our exceptional on-time completion rate. We work with trusted local and international suppliers to provide premium materials at competitive prices—from durable granite and quartz countertops sourced from reliable quarries, to high-quality cabinetry hardware, water-efficient fixtures, and energy-saving LED lighting systems. Our comprehensive warranties and ongoing support ensure your investment is protected for years to come.
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

        {/* Service Areas Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Home className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Service Areas</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                Kitchen Renovations{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Across Zimbabwe
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Professional kitchen remodeling services in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: "Harare", 
                  description: "Serving all suburbs including Borrowdale, Mount Pleasant, Highlands, Avondale, and surrounding areas with expert kitchen renovations" 
                },
                { 
                  name: "Bulawayo", 
                  description: "Professional kitchen remodeling across all Bulawayo suburbs with custom designs and quality installations" 
                },
                { 
                  name: "Masvingo", 
                  description: "Complete kitchen renovation services throughout Masvingo province with local expertise and support" 
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
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Common Questions</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Kitchen Renovation{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  FAQs
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Common questions about kitchen remodeling in Zimbabwe
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {kitchenFAQs.map((faq, index) => (
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Real feedback from homeowners we've helped transform their kitchens
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Sarah M.", 
                  location: "Borrowdale, Harare", 
                  review: "Our kitchen transformation exceeded all expectations. The team was professional, on time, and the quality is outstanding. We now have our dream kitchen and our property value increased by 30%!" 
                },
                { 
                  name: "David K.", 
                  location: "Bulawayo", 
                  review: "From design to completion in just 4 weeks! The 3D renderings helped us visualize everything perfectly. The custom cabinets and granite countertops are beautiful. Highly recommend Home Grounds." 
                },
                { 
                  name: "Chipo T.", 
                  location: "Masvingo", 
                  review: "They completely redesigned our outdated kitchen into a modern, functional space. The attention to detail was impressive and they worked within our budget. Best decision we made for our home." 
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
