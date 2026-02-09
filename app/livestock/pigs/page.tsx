import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, PiggyBank, CheckCircle, Phone, MapPin, Sprout, Heart, TrendingUp, Shield, Truck, Award, Users, ChefHat, Droplet, Sun, Wind, Thermometer, Activity, Target, Stethoscope, Leaf, Package, Sparkles, Baby, Factory, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Pig Farming Zimbabwe | Pork Production | HomeGround Investments",
  description: "Professional pig farming in Zimbabwe. Commercial pork production, breeding programs, piglet sales. Expert operations in Harare, Masvingo, Bulawayo. Quality pork products.",
}

const farmLocations = [
  {
    location: "Masvingo Breeding Unit",
    size: "20 Hectares",
    capacity: "500 Sows",
    type: "Breeding & Farrowing",
    breeds: "Large White, Landrace",
    icon: MapPin,
  },
  {
    location: "Bulawayo Grower Farm",
    size: "25 Hectares",
    capacity: "2,000 Growers",
    type: "Growing & Finishing",
    breeds: "Commercial Crosses",
    icon: MapPin,
  },
  {
    location: "Harare Processing Centre",
    size: "8 Hectares",
    capacity: "300 Pigs/Day",
    type: "Processing Facility",
    breeds: "All Breeds",
    icon: MapPin,
  },
]

const breedingPrograms = [
  {
    title: "Large White Pigs",
    description: "Superior meat-type breed known for excellent growth rates, feed efficiency, and high-quality lean pork production.",
    image: "/images/pigs-large-white.jpg",
    features: ["Fast Growth Rate", "Lean Meat Quality", "Large Litters", "Excellent Mothering"],
  },
  {
    title: "Landrace Pigs",
    description: "Long-bodied pigs producing premium bacon and offering outstanding maternal characteristics with large litters.",
    image: "/images/pigs-landrace.jpg",
    features: ["Premium Bacon", "High Fertility", "12+ Piglets/Litter", "Good Temperament"],
  },
  {
    title: "Duroc Pigs",
    description: "Red-coated breed valued for excellent meat quality, marbling, and superior growth performance in Zimbabwe's climate.",
    image: "/images/pigs-duroc.jpg",
    features: ["Marbled Meat", "Heat Tolerant", "Fast Growing", "Premium Quality"],
  },
  {
    title: "Commercial Crosses",
    description: "Hybrid vigor pigs combining the best traits of multiple breeds for optimal production and profitability.",
    image: "/images/pigs-crosses.jpg",
    features: ["Hybrid Vigor", "Best Performance", "Market Ready", "Consistent Quality"],
  },
]

const farmServices = [
  {
    icon: Thermometer,
    title: "Climate Management",
    description: "Modern cooling and heating systems maintaining optimal temperatures for pig health and growth",
    stat: "24/7 Control"
  },
  {
    icon: Package,
    title: "Nutrition Programs",
    description: "Scientifically formulated feeds for each growth stage maximizing weight gain and meat quality",
    stat: "Custom Feeding"
  },
  {
    icon: Shield,
    title: "Biosecurity",
    description: "Strict disease control protocols and vaccination programs protecting herd health",
    stat: "Disease-Free"
  },
  {
    icon: Baby,
    title: "Breeding Excellence",
    description: "Advanced farrowing facilities and genetic selection producing superior breeding stock",
    stat: "12+ Piglets"
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Experience",
    description: "Over 15 years managing pig operations across Zimbabwe's diverse regions",
    stat: "15+ Years"
  },
  {
    icon: Target,
    title: "High Performance",
    description: "Superior growth rates and feed conversion through expert management",
    stat: "Top Genetics"
  },
  {
    icon: Shield,
    title: "Quality Certified",
    description: "International standards and quality controls on all our farms",
    stat: "100% Certified"
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
    description: "Climate-controlled housing for optimal pig comfort",
  },
  {
    icon: Droplet,
    title: "Water Systems",
    description: "Automated nipple drinkers ensuring fresh water 24/7",
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Advanced air quality management reducing disease risk",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Automated feeding and monitoring systems",
  },
]

export default function PigFarmingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/pig-farm-hero-zimbabwe.jpg"
              alt="HomeGround Investments pig farming operations in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-pink-500/10 backdrop-blur-md border border-pink-500/30 rounded-full px-5 py-2 mb-8">
                <PiggyBank className="h-4 w-4 text-pink-400" />
                <span className="text-sm font-bold text-pink-100 uppercase tracking-wide">Premium Pig Farming</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                  Premier
                </span>
                {" "}Pig Farms
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Over 2,500 pigs producing premium pork products across Zimbabwe. Modern facilities in Masvingo, Bulawayo, and Harare delivering quality breeding stock and market-ready pigs.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">2,500+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Pigs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">500</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Breeding Sows</div>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600" />
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
        <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600">
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
                <MapPin className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Locations</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Operating{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Pig Farms
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Three fully operational facilities across Zimbabwe producing premium breeding stock and market pigs
              </p>
            </div>

            {/* Farm Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {farmLocations.map((farm, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Card className="relative h-full border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                      <div className="bg-pink-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <farm.icon className="h-7 w-7 text-pink-600" />
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
                        <div className="text-sm font-bold text-pink-600">{farm.breeds}</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg transition-all">
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
                <Award className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Leading
                </span>{" "}
                Pig Operation
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Setting the standard for pig farming excellence across Zimbabwe
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-pink-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-pink-600" />
                    </div>
                    <div className="text-3xl font-black text-pink-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pig Breeds Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Breeds</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Pig Breeds
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  
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
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-rose-600 group-hover:bg-clip-text transition-all">
                        {breed.title}
                      </h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{breed.description}</p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {breed.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-pink-600 flex-shrink-0" />
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
                <Leaf className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Farm Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Pig Care
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-pink-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-7 w-7 text-pink-600" />
                    </div>
                    <div className="text-2xl font-black text-pink-600 mb-2">{service.stat}</div>
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl blur opacity-20" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/pig-farming-zimbabwe.jpg"
                    alt="Pig farming operations at HomeGround Investments in Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <PiggyBank className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  Raising Quality{" "}
                  <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                    Zimbabwe Pork
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  Our pigs are raised in modern, climate-controlled facilities with the highest standards of animal welfare and food safety. From breeding to market, we maintain excellence at every stage of production, delivering premium pork products to Zimbabwean families and businesses.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Every pig receives expert veterinary care, scientifically formulated nutrition, and humane treatment throughout their lives. Our breeding programs select for genetics that thrive in Zimbabwe's climate while producing superior meat quality and consistent performance.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Superior Genetics</div>
                      <div className="text-sm text-zinc-600">Imported breeding stock and proven genetic lines for optimal performance</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Modern Facilities</div>
                      <div className="text-sm text-zinc-600">Climate-controlled housing and automated systems for pig comfort</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-pink-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Food Safety Standards</div>
                      <div className="text-sm text-zinc-600">Certified processing and strict quality control measures</div>
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
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-rose-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Visit Our Pig Farms
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                See our operations firsthand. Tour our facilities in Masvingo, Bulawayo, or Harare and learn about our pig farming excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-pink-600">
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
