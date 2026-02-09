import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bird, CheckCircle, Phone, MapPin, Sprout, Heart, TrendingUp, Shield, Truck, Award, Users, ChefHat, Droplet, Sun, Wind, Thermometer, Activity, Target, Stethoscope, Leaf, Package, Sparkles, Egg, Factory, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Poultry Farming Zimbabwe | Broilers & Layers | HomeGround Investments",
  description: "Professional poultry farming in Zimbabwe. Broiler chickens, layer hens, egg production, hatchery services. Expert operations in Harare, Masvingo, Bulawayo. Fresh daily delivery.",
}

const farmLocations = [
  {
    location: "Masvingo Hatchery",
    size: "10 Hectares",
    capacity: "25,000 Birds",
    type: "Broiler Production",
    breeds: "Ross 308, Cobb 500",
    icon: MapPin,
  },
  {
    location: "Bulawayo Layers Farm",
    size: "15 Hectares",
    capacity: "30,000 Layers",
    type: "Egg Production",
    breeds: "Lohmann Brown, Hyline",
    icon: MapPin,
  },
  {
    location: "Harare Processing Plant",
    size: "5 Hectares",
    capacity: "5,000 Birds/Day",
    type: "Processing Facility",
    breeds: "All Commercial Breeds",
    icon: MapPin,
  },
]

const breedingPrograms = [
  {
    title: "Broiler Chickens",
    description: "High-performance meat chickens with excellent growth rates and feed conversion. Ross 308 and Cobb 500 breeds optimized for Zimbabwe's market.",
    image: "/images/poultry-broilers.jpg",
    features: ["Fast Growth Rate", "Superior Meat Quality", "Efficient Feed Conversion", "Ready in 35-42 Days"],
  },
  {
    title: "Layer Chickens",
    description: "Premium egg-laying hens producing high-quality brown eggs. Lohmann Brown and Hyline breeds with exceptional productivity.",
    image: "/images/poultry-layers.jpg",
    features: ["300+ Eggs/Year", "Strong Shell Quality", "Consistent Production", "Peak Performance"],
  },
  {
    title: "Indigenous Breeds",
    description: "Traditional Zimbabwean chickens including Road Runners and village breeds. Hardy, disease-resistant, and perfect for free-range systems.",
    image: "/images/poultry-indigenous.jpg",
    features: ["Zimbabwe Native", "Disease Resistant", "Free-Range Ideal", "Premium Flavor"],
  },
  {
    title: "Specialty Poultry",
    description: "Turkeys, guinea fowl, and ducks for diverse market needs. Perfect for festive seasons and specialty meat markets.",
    image: "/images/poultry-specialty.jpg",
    features: ["Premium Turkeys", "Guinea Fowl", "Duck Production", "Seasonal Demand"],
  },
]

const farmServices = [
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "State-of-the-art ventilation and temperature management systems ensuring optimal bird health",
    stat: "24/7 Monitoring"
  },
  {
    icon: Package,
    title: "Feed Mill",
    description: "On-site feed production with scientifically formulated nutrition for maximum growth and egg production",
    stat: "Custom Blends"
  },
  {
    icon: Shield,
    title: "Biosecurity",
    description: "Strict disease prevention protocols and vaccination programs protecting flock health",
    stat: "99% Safety Rate"
  },
  {
    icon: Egg,
    title: "Hatchery Services",
    description: "Professional hatchery producing healthy day-old chicks with high survival rates",
    stat: "95% Hatch Rate"
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "Over 15 years managing poultry operations across Zimbabwe's diverse regions",
    stat: "15+ Years"
  },
  {
    icon: Target,
    title: "High Performance",
    description: "Superior growth rates and egg production through expert management",
    stat: "Top 5% Yields"
  },
  {
    icon: Shield,
    title: "HACCP Certified",
    description: "International food safety standards and quality controls on all our farms",
    stat: "Fully Certified"
  },
  {
    icon: Heart,
    title: "Ethical Practices",
    description: "Humane treatment and sustainable farming methods across all operations",
    stat: "Animal Welfare"
  },
]

const climateFeatures = [
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Climate-controlled houses maintaining optimal conditions",
  },
  {
    icon: Droplet,
    title: "Water Systems",
    description: "Automated nipple drinkers ensuring fresh water 24/7",
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Advanced air quality management for bird health",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Automated feeding and monitoring systems",
  },
]

export default function PoultryPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/poultry-hero-zimbabwe.jpg"
              alt="HomeGround Investments poultry farming operations in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-md border border-orange-500/30 rounded-full px-5 py-2 mb-8">
                <Bird className="h-4 w-4 text-orange-400" />
                <span className="text-sm font-bold text-orange-100 uppercase tracking-wide">Premium Poultry Farming</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
                  Premier
                </span>
                {" "}Poultry Farms
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Over 55,000 birds producing premium broilers and fresh eggs daily. Modern facilities in Masvingo, Bulawayo, and Harare delivering quality poultry products across Zimbabwe.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">55,000+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Birds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">500K+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Eggs/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">3</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Production Sites</div>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600" />
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
        <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
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
                <MapPin className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Locations</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Operating{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Poultry Farms
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Three fully operational facilities across Zimbabwe producing premium broilers, eggs, and processed poultry
              </p>
            </div>

            {/* Farm Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {farmLocations.map((farm, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Card className="relative h-full border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                      <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <farm.icon className="h-7 w-7 text-orange-600" />
                      </div>
                      
                      <h3 className="text-2xl font-black text-zinc-900 mb-4">{farm.location}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between py-2 border-b border-zinc-100">
                          <span className="text-sm text-zinc-600 font-medium">Facility Size</span>
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
                        <div className="text-sm font-bold text-orange-600">{farm.breeds}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all">
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
                <Award className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Leading
                </span>{" "}
                Poultry Operation
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Setting the standard for poultry farming excellence across Zimbabwe
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <div className="text-3xl font-black text-orange-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Poultry Breeds Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Breeds</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Poultry Breeds
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  
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
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 group-hover:bg-clip-text transition-all">
                        {breed.title}
                      </h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{breed.description}</p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {breed.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
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
                <Leaf className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Farm Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  Poultry Care
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-orange-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <div className="text-2xl font-black text-orange-600 mb-2">{service.stat}</div>
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl blur opacity-20" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/poultry-farm-zimbabwe.jpg"
                    alt="Poultry operations at HomeGround Investments farms in Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <Bird className="h-4 w-4 text-orange-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  Producing Quality{" "}
                  <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Zimbabwe Poultry
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  Our birds are raised in modern, climate-controlled facilities with the highest standards of animal welfare and food safety. From day-old chicks to fresh eggs and premium broilers, we maintain excellence at every stage of production.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Every bird receives expert veterinary care, scientifically formulated nutrition, and humane treatment throughout their lives. Our biosecurity protocols and quality controls ensure that HomeGround Investments delivers the safest, freshest poultry products to Zimbabwean families and businesses.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Modern Climate Control</div>
                      <div className="text-sm text-zinc-600">Temperature and ventilation systems ensuring optimal bird comfort</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Fresh Daily Delivery</div>
                      <div className="text-sm text-zinc-600">Farm-fresh eggs and poultry delivered to markets across Zimbabwe</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-orange-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Food Safety Standards</div>
                      <div className="text-sm text-zinc-600">HACCP certified processing and strict quality control measures</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-amber-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Visit Our Poultry Farms
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                See our operations firsthand. Tour our facilities in Masvingo, Bulawayo, or Harare and learn about our poultry farming excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-orange-600">
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
