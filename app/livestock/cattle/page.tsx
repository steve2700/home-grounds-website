import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beef, CheckCircle, Phone, MapPin, Sprout, Heart, TrendingUp, Shield, Truck, Award, Users, ChefHat, Droplet, Sun, Wind, Thermometer, Activity, Target, Stethoscope, Leaf, Package, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Cattle Farming Zimbabwe | Beef & Dairy Production | Home Ground Livestock",
  description: "Professional cattle farming in Zimbabwe. Grass-fed beef cattle, dairy operations, pasture management. Expert breeding programs in Harare, Masvingo, Bulawayo. Tour our farms.",
}

const farmLocations = [
  {
    location: "Masvingo Ranch",
    size: "500 Hectares",
    capacity: "350 Head",
    type: "Beef Cattle",
    breeds: "Brahman, Tuli, Mashona",
    icon: MapPin,
  },
  {
    location: "Bulawayo Estate",
    size: "300 Hectares",
    capacity: "200 Head",
    type: "Dairy Operations",
    breeds: "Jersey, Holstein Friesian",
    icon: MapPin,
  },
  {
    location: "Harare Feedlot",
    size: "50 Hectares",
    capacity: "180 Head",
    type: "Finishing Unit",
    breeds: "Cross-bred Commercial",
    icon: MapPin,
  },
]

const breedingPrograms = [
  {
    title: "Brahman Cattle",
    description: "Heat-tolerant beef cattle perfect for Zimbabwe's climate. Superior weight gain and disease resistance.",
    image: "/images/cattle.jpg",
    features: ["Heat Resistant", "Fast Weight Gain", "Disease Resistant", "Premium Beef Quality"],
  },
  {
    title: "Tuli Cattle",
    description: "Indigenous African breed known for excellent meat quality and adaptability to local conditions.",
    image: "/images/cattle-tuli.jpg",
    features: ["Indigenous Breed", "Lean Quality Beef", "Low Maintenance", "Excellent Mothering"],
  },
  {
    title: "Mashona Cattle",
    description: "Traditional Zimbabwean cattle with outstanding hardiness and fertility in challenging environments.",
    image: "/images/cattle-mashona.jpg",
    features: ["Zimbabwe Native", "Tick Resistant", "High Fertility", "Drought Tolerant"],
  },
  {
    title: "Dairy Breeds",
    description: "Jersey and Holstein Friesian cattle producing high-quality milk for commercial dairy operations.",
    image: "/images/",
    features: ["High Milk Yield", "Quality Production", "Proven Genetics", "Expert Management"],
  },
]

const farmServices = [
  {
    icon: Sprout,
    title: "Pasture Management",
    description: "Rotational grazing systems and improved pastures maximizing grass quality and cattle health",
    stat: "500+ Ha Managed"
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description: "Full-time vets and health monitoring programs ensuring optimal herd wellness",
    stat: "24/7 Care"
  },
  {
    icon: Activity,
    title: "Breeding Programs",
    description: "Selective breeding with proven genetics for superior cattle quality and performance",
    stat: "95% Success Rate"
  },
  {
    icon: Package,
    title: "Feed Management",
    description: "Scientifically formulated nutrition programs for optimal growth and production",
    stat: "Custom Nutrition"
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "Over 15 years managing cattle operations across Zimbabwe's diverse regions",
    stat: "15+ Years"
  },
  {
    icon: Target,
    title: "High Performance",
    description: "Superior weight gain and production rates through expert management",
    stat: "Top 5% Yields"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Strict health protocols and quality controls on all our farms",
    stat: "100% Certified"
  },
  {
    icon: Heart,
    title: "Ethical Practices",
    description: "Humane treatment and sustainable farming methods across all operations",
    stat: "Fully Ethical"
  },
]

const climateFeatures = [
  {
    icon: Sun,
    title: "Zimbabwe Climate",
    description: "Perfect conditions for quality beef production year-round",
  },
  {
    icon: Droplet,
    title: "Water Systems",
    description: "Modern irrigation and water management infrastructure",
  },
  {
    icon: Wind,
    title: "Natural Grazing",
    description: "Rich grasslands producing superior beef quality",
  },
  {
    icon: Thermometer,
    title: "Climate Adapted",
    description: "Breeds selected for Zimbabwe's unique environment",
  },
]

export default function CattlePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/livestock-cattle.jpg"
              alt="Home Grounds cattle farming operations in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full px-5 py-2 mb-8">
                <Beef className="h-4 w-4 text-green-400" />
                <span className="text-sm font-bold text-green-100 uppercase tracking-wide">Premium Cattle Farming</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-amber-400 to-green-500 bg-clip-text text-transparent">
                  Finest
                </span>
                {" "}Cattle Farms
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Over 500 hectares of prime grazing land producing premium beef and dairy cattle. Visit our operational farms in Masvingo, Bulawayo, and Harare.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">850+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Head of Cattle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">850</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Hectares</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">3</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Active Farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">15+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Years Experience</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      Visit Our Farms
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

        {/* Climate Features Bar */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {climateFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="h-14 w-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-white/90">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Farms Section */}
        <section className="py-24 bg-gradient-to-b from-white to-zinc-50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Locations</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Operating{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Cattle Farms
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Three fully operational farms across Zimbabwe producing premium beef and dairy cattle
              </p>
            </div>

            {/* Farm Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {farmLocations.map((farm, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Card className="relative h-full border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                      <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <farm.icon className="h-7 w-7 text-green-600" />
                      </div>
                      
                      <h3 className="text-2xl font-black text-zinc-900 mb-4">{farm.location}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-zinc-100">
                          <span className="text-sm text-zinc-600 font-medium">Farm Size</span>
                          <span className="text-sm font-bold text-zinc-900">{farm.size}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-zinc-100">
                          <span className="text-sm text-zinc-600 font-medium">Capacity</span>
                          <span className="text-sm font-bold text-zinc-900">{farm.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-zinc-100">
                          <span className="text-sm text-zinc-600 font-medium">Operation</span>
                          <span className="text-sm font-bold text-zinc-900">{farm.type}</span>
                        </div>
                      </div>

                      <div className="bg-zinc-50 rounded-xl p-4">
                        <div className="text-xs text-zinc-500 uppercase tracking-wide mb-2">Primary Breeds</div>
                        <div className="text-sm font-bold text-green-600">{farm.breeds}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all">
                Schedule a Farm Visit
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Award className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Leading
                </span>{" "}
                Cattle Operation
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Setting the standard for cattle farming excellence across Zimbabwe
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-green-600" />
                    </div>
                    <div className="text-3xl font-black text-green-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breeding Programs Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Breeds</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Cattle Breeds
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Carefully selected breeds optimized for Zimbabwe's climate and market demands
              </p>
            </div>

            {/* Breed Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {breedingPrograms.map((breed, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  <Card className="relative h-full overflow-hidden border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64">
                      <Image
                        src={breed.image || "/placeholder.svg"}
                        alt={breed.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 bg-white">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                        {breed.title}
                      </h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{breed.description}</p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {breed.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-zinc-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm Services Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Leaf className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Farm Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Cattle Care
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Expert management services ensuring optimal health, growth, and productivity
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {farmServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-green-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-green-600" />
                    </div>
                    <div className="text-2xl font-black text-green-600 mb-2">{service.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{service.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm to Table Story */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/hero_image_small.png"
                    alt="Cattle grazing on Home Grounds farms in Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <Beef className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  Raising Quality{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Zimbabwe Beef
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  Our cattle graze on Zimbabwe's rich natural grasslands, producing beef with exceptional flavor and tenderness. With over 850 hectares of prime pasture across three farms, we maintain the highest standards of animal welfare and sustainable farming practices.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Every animal receives expert veterinary care, scientifically formulated nutrition, and humane treatment throughout their lives. Our breeding programs select for cattle that thrive in Zimbabwe's climate while producing premium quality beef for local and export markets.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Natural Grazing Systems</div>
                      <div className="text-sm text-zinc-600">Rotational grazing on improved pastures for optimal cattle health</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Professional Management</div>
                      <div className="text-sm text-zinc-600">Expert team with decades of cattle farming experience</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Sustainable Practices</div>
                      <div className="text-sm text-zinc-600">Environmentally responsible farming for future generations</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Visit Our Cattle Farms
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                See our operations firsthand. Tour our farms in Masvingo, Bulawayo, or Harare and learn about our cattle farming excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-green-600">
                      Schedule Farm Visit
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <a href="tel:+263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      <Phone className="h-5 w-5" />
                      Call: +263 78 028 9132
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
