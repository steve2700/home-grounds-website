import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Beef, CheckCircle, Phone, Truck, Shield, Leaf, Clock, Award, Heart, ChefHat, Package, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Premium Farm-Fresh Meats & Professional Butchery | Home Grounds Zimbabwe",
  description: "Farm-to-table premium beef, pork, and poultry from Zimbabwe's finest farms. Hygienic processing, custom butchery services. Daily fresh delivery to Harare, Bulawayo, Masvingo.",
}

const products = [
  {
    title: "Premium Beef",
    description: "Quality grass-fed and grain-fed beef from Zimbabwe's finest farms. Rich flavor, tender texture, expertly prepared.",
    image: "/images/hero-meats.jpg",
    href: "/meats/beef",
    features: ["Grass-Fed & Grain-Fed Options", "Premium Cuts & Mince", "Bulk & Wholesale Orders", "Vacuum Sealed Freshness"],
  },
  {
    title: "Quality Pork",
    description: "Fresh pork cuts, artisan sausages, and expertly smoked products. Perfect for any occasion.",
    image: "/images/pork.jpg",
    href: "/meats/pork",
    features: ["Fresh Daily Cuts", "Handmade Sausages", "Cured & Smoked Products", "Wholesale Available"],
  },
  {
    title: "Fresh Poultry",
    description: "Farm-fresh chickens and portions, delivered daily. Free-range and conventional options available.",
    image: "/images/poultry.jpg",
    href: "/meats/poultry",
    features: ["Whole Chickens & Portions", "Fresh & Frozen Options", "Free-Range Available", "Daily Fresh Supply"],
  },
  {
    title: "Butchery Services",
    description: "Expert custom cutting, deboning, party packs, and catering services for events of all sizes.",
    image: "/images/hero-meats.jpg",
    href: "/meats/butchery",
    features: ["Custom Cutting & Deboning", "Party & Event Packs", "Catering Services", "Same-Day Delivery"],
  },
]

const qualityFeatures = [
  {
    icon: Leaf,
    title: "Farm Fresh Daily",
    description: "Sourced from trusted Zimbabwe farms every day",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Strict hygiene standards and quality controls",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Fresh delivery across all major cities",
  },
  {
    icon: Award,
    title: "Expert Butchers",
    description: "Professionally trained meat specialists",
  },
]

const whyChooseUs = [
  {
    icon: Heart,
    title: "Family Owned",
    description: "Three generations of butchery expertise serving Zimbabwe families",
    stat: "15+ Years"
  },
  {
    icon: ChefHat,
    title: "Professional Processing",
    description: "State-of-the-art hygienic facilities with trained butchers",
    stat: "100% Hygienic"
  },
  {
    icon: Package,
    title: "Fresh Daily",
    description: "Delivered fresh every day, never frozen unless requested",
    stat: "Daily Supply"
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Consistent quality and on-time delivery you can count on",
    stat: "98% On-Time"
  },
]

export default function MeatsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-meats.jpg"
              alt="Premium meats in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-full px-5 py-2 mb-8">
                <Beef className="h-4 w-4 text-red-400" />
                <span className="text-sm font-bold text-red-100 uppercase tracking-wide">Premium Meats & Butchery</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Farm-Fresh{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
                  Quality
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Premium beef, pork, and poultry from Zimbabwe's finest farms. Expertly processed, hygienically prepared, delivered fresh to your door.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      Order Now
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

        {/* Quality Features Bar - Enhanced */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
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

        {/* Why Choose Us Section - NEW */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Award className="h-4 w-4 text-red-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's Most{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Trusted
                </span>{" "}
                Butcher
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Three generations of expertise delivering premium quality meats to families across Zimbabwe
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-red-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-red-600" />
                    </div>
                    <div className="text-3xl font-black text-red-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid - Enhanced */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-red-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Products</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Premium{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Meats
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From premium cuts to custom butchery, we offer the finest quality meats Zimbabwe has to offer
              </p>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => (
                <Link key={index} href={product.href} className="group block">
                  <div className="relative h-full">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Card */}
                    <Card className="relative h-full overflow-hidden border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-64">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                      </div>

                      {/* Content */}
                      <CardContent className="p-8 bg-white">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all">
                          {product.title}
                        </h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed">{product.description}</p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                              <span className="text-zinc-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex items-center gap-2 font-bold text-zinc-900 group-hover:gap-3 transition-all">
                          <span className="relative">
                            Shop Now
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-600 w-0 group-hover:w-full transition-all duration-300" />
                          </span>
                          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Farm to Table Story - Enhanced */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/zimbabwe-farm.jpg"
                    alt="Zimbabwe cattle farm"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <Leaf className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Story</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  From Our Farms to{" "}
                  <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    Your Table
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  At Home Grounds Meats, we partner with trusted Zimbabwe farmers who share our commitment to quality and animal welfare. Our cattle graze on Zimbabwe's rich grasslands, producing beef with exceptional flavor and tender texture.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  Every cut is processed in our state-of-the-art hygienic facilities by expert butchers, ensuring the freshest, safest meat for your family. We believe in complete transparency - from farm to table, you can trust the quality of our products.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-red-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Trusted Local Partnerships</div>
                      <div className="text-sm text-zinc-600">Working with Zimbabwe's best farmers for 15+ years</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Strict Quality Controls</div>
                      <div className="text-sm text-zinc-600">Multiple inspection points ensure premium quality</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-red-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Fresh Daily Processing</div>
                      <div className="text-sm text-zinc-600">Processed and delivered fresh every single day</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Order Fresh Meats Today
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Experience the difference of farm-fresh quality. Order for delivery or visit our butchery across Zimbabwe.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/order" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-red-600">
                      Place Order
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <a href="https://wa.me/263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      WhatsApp Order
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
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
