import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, MapPin, Sprout, Heart, TrendingUp, Shield, Truck, Award, Users, Droplet, Sun, Wind, Thermometer, Activity, Target, Leaf, Package, Sparkles, Milk, TreePine, Mountain, Beef } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Goat Farming Zimbabwe | Boer & Dairy Goats | HomeGround Investments",
  description: "Professional goat farming in Zimbabwe. Boer goats, dairy goats, meat production, breeding services. Expert operations in Harare, Masvingo, Bulawayo. Quality livestock.",
}

const farmLocations = [
  {
    location: "Masvingo Breeding Ranch",
    size: "25 Hectares",
    capacity: "500 Goats",
    type: "Boer Meat Production",
    breeds: "Boer, Kalahari Red",
    icon: MapPin,
  },
  {
    location: "Bulawayo Dairy Farm",
    size: "20 Hectares",
    capacity: "300 Goats",
    type: "Dairy Production",
    breeds: "Saanen, Toggenburg",
    icon: MapPin,
  },
  {
    location: "Harare Breeding Center",
    size: "15 Hectares",
    capacity: "400 Goats",
    type: "Mixed Breeding",
    breeds: "All Commercial Breeds",
    icon: MapPin,
  },
]

const breedingPrograms = [
  {
    title: "Boer Goats",
    description: "Premium meat goats with exceptional growth rates and carcass quality. South Africa's finest breed optimized for Zimbabwe's climate and terrain.",
    image: "/images/goats.jpg",
    features: ["Fast Growth Rate", "Superior Meat Quality", "Hardy & Adaptable", "High Market Value"],
  },
  {
    title: "Dairy Goats",
    description: "High-producing milk goats including Saanen and Toggenburg breeds. Excellent for fresh milk, cheese, and yogurt production.",
    image: "/images/goats-dairy.jpg",
    features: ["3-4 Liters/Day", "High Butterfat", "Year-Round Production", "Disease Resistant"],
  },
  {
    title: "Kalahari Red",
    description: "Indigenous Southern African meat goats with superior heat tolerance and parasite resistance. Perfect for extensive grazing systems.",
    image: "/images/goats-kalahari.jpg",
    features: ["Heat Tolerant", "Low Maintenance", "Excellent Mothering", "Premium Red Meat"],
  },
  {
    title: "Indigenous Breeds",
    description: "Traditional Zimbabwean goats including Mashona and Matabele breeds. Hardy, adapted to local conditions, and ideal for smallholder farming.",
    image: "/images/goats.jpg",
    features: ["Zimbabwe Native", "Disease Resistant", "Low Input Costs", "Cultural Value"],
  },
]

const farmServices = [
  {
    icon: Heart,
    title: "Breeding Services",
    description: "Professional breeding programs with superior genetics and bloodlines for maximum productivity",
    stat: "95% Success Rate"
  },
  {
    icon: Milk,
    title: "Dairy Production",
    description: "Fresh goat milk daily with strict hygiene standards and modern milking facilities",
    stat: "1000+ Liters/Month"
  },
  {
    icon: Shield,
    title: "Veterinary Care",
    description: "Comprehensive health management, vaccination programs, and disease prevention protocols",
    stat: "24/7 Monitoring"
  },
  {
    icon: Beef,
    title: "Meat Processing",
    description: "Humane slaughter and professional processing meeting international food safety standards",
    stat: "HACCP Certified"
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Industry Leaders",
    description: "Over 15 years of goat farming excellence across Zimbabwe's diverse regions",
    stat: "15+ Years"
  },
  {
    icon: Target,
    title: "Superior Genetics",
    description: "Imported bloodlines and selective breeding producing top-quality livestock",
    stat: "Premium Stock"
  },
  {
    icon: Shield,
    title: "Certified Operations",
    description: "Meeting international standards for animal welfare and food safety",
    stat: "Fully Certified"
  },
  {
    icon: Heart,
    title: "Ethical Farming",
    description: "Sustainable grazing practices and humane treatment across all operations",
    stat: "Animal Welfare"
  },
]

const farmFeatures = [
  {
    icon: TreePine,
    title: "Natural Grazing",
    description: "Extensive pastures with diverse vegetation",
  },
  {
    icon: Droplet,
    title: "Clean Water",
    description: "Borehole water systems ensuring fresh supply",
  },
  {
    icon: Mountain,
    title: "Ideal Terrain",
    description: "Rolling hills perfect for goat health",
  },
  {
    icon: Sun,
    title: "Climate Adapted",
    description: "Breeds selected for Zimbabwe's climate",
  },
]

export default function GoatsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/goats.jpg"
              alt="HomeGround Investments goat farming operations in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full px-5 py-2 mb-8">
                <Mountain className="h-4 w-4 text-green-400" />
                <span className="text-sm font-bold text-green-100 uppercase tracking-wide">Premium Goat Farming</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Premier
                </span>
                {" "}Goat Farms
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Over 1,200 goats producing premium meat and fresh milk daily. Modern ranching facilities in Masvingo, Bulawayo, and Harare delivering quality livestock across Zimbabwe.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">1,200+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Goats</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">1,000+</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Liters/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">3</div>
                  <div className="text-sm text-zinc-400 uppercase tracking-wide">Ranch Sites</div>
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
                      Visit Our Ranches
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

        {/* Farm Features Bar */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {farmFeatures.map((feature, index) => (
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
                  Goat Ranches
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Three fully operational ranches across Zimbabwe producing premium meat goats, dairy goats, and breeding stock
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
                          <span className="text-sm text-zinc-600 font-medium">Ranch Size</span>
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
                Schedule a Ranch Visit
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
                Goat Operation
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Setting the standard for goat farming excellence across Zimbabwe
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

        {/* Goat Breeds Section */}
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
                  Goat Breeds
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
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Ranch Management</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Goat Care
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

        {/* Ranch Story */}
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
                    src="/images/goat-ranch-zimbabwe.jpg"
                    alt="Goat farming operations at HomeGround Investments ranches in Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <Mountain className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  Raising Quality{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Zimbabwe Goats
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  Our goats graze on natural pastures across Zimbabwe's finest ranching land, receiving expert care from experienced herders and veterinarians. From breeding stock to dairy production and premium meat, we maintain excellence throughout every stage.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Every animal receives comprehensive veterinary care, optimal nutrition from natural grazing and supplementary feeds, and humane treatment throughout their lives. Our sustainable ranching practices and quality controls ensure that HomeGround Investments delivers the healthiest, highest-quality goats and goat products to Zimbabwean families and businesses.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Natural Grazing Systems</div>
                      <div className="text-sm text-zinc-600">Extensive pastures with rotational grazing for optimal health and nutrition</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Premium Genetics</div>
                      <div className="text-sm text-zinc-600">Imported bloodlines and selective breeding programs</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Sustainable Practices</div>
                      <div className="text-sm text-zinc-600">Environmental stewardship and ethical animal husbandry</div>
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
                Visit Our Goat Ranches
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                See our operations firsthand. Tour our facilities in Masvingo, Bulawayo, or Harare and learn about our goat farming excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-green-600">
                      Schedule Ranch Visit
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
