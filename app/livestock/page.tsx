import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sprout, Beef, Egg, PiggyBank, Tractor, HeartHandshake, TrendingUp, Shield, CheckCircle, Phone, Award, Leaf, ChefHat, Users, Target, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Livestock Farming Solutions | Cattle, Poultry & Pigs | Home Grounds Zimbabwe",
  description: "Commercial livestock farming in Zimbabwe. Expert cattle, poultry, and pig farming services. Modern farm management, breeding stock, feed programs. Harare, Bulawayo, Masvingo.",
}

const livestockProducts = [
  {
    title: "Cattle Farming",
    description: "Premium beef and dairy cattle operations with expert breeding programs, pasture management, and modern farming techniques for maximum productivity.",
    image: "/images/livestock-cattle.jpg",
    href: "/livestock/cattle",
    features: ["Beef & Dairy Cattle", "Breed Selection & Procurement", "Pasture Management", "Veterinary Care Programs"],
  },
  {
    title: "Poultry Farming",
    description: "Commercial broiler and layer operations with state-of-the-art housing, nutrition programs, and disease prevention for optimal production.",
    image: "/images/livestock-poultry.jpg",
    href: "/livestock/poultry",
    features: ["Broiler Houses Setup", "Layer Farm Management", "Feed Formulation", "Disease Prevention"],
  },
  {
    title: "Pig Farming",
    description: "Quality pork production with modern facilities, breeding stock selection, nutrition management, and market linkage for profitable operations.",
    image: "/images/livestock-pigs.jpg",
    href: "/livestock/pigs",
    features: ["Breeding Stock Selection", "Modern Housing Setup", "Nutrition Programs", "Market Linkage"],
  },
  {
    title: "Farm Management",
    description: "Complete farm management solutions including infrastructure, technology integration, staff training, and operational excellence for sustainable farming.",
    image: "/images/livestock-management.jpg",
    href: "/livestock/management",
    features: ["Infrastructure Development", "Technology Integration", "Staff Training", "Operational Support"],
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Decades of livestock farming experience across Zimbabwe",
    stat: "20+ Years"
  },
  {
    icon: Target,
    title: "High Yields",
    description: "Optimized farming practices delivering superior productivity",
    stat: "Top 10%"
  },
  {
    icon: HeartHandshake,
    title: "Ethical Farming",
    description: "Humane treatment and sustainable practices guaranteed",
    stat: "100% Ethical"
  },
  {
    icon: Users,
    title: "Full Support",
    description: "Expert guidance from setup to market delivery",
    stat: "24/7 Support"
  },
]

const qualityFeatures = [
  {
    icon: Tractor,
    title: "Modern Technology",
    description: "Latest farming equipment and systems",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Strict health and safety protocols",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Environmentally responsible farming",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Track record of profitable farms",
  },
]

export default function LivestockPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/livestock-hero.jpg"
              alt="Professional livestock farming in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full px-5 py-2 mb-8">
                <Sprout className="h-4 w-4 text-green-400" />
                <span className="text-sm font-bold text-green-100 uppercase tracking-wide">Professional Livestock Farming</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Building{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Profitable
                </span>
                {" "}Farms
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Expert livestock farming solutions across Zimbabwe. From cattle to poultry and pigs - we deliver sustainable, profitable farming operations with modern technology and proven methods.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      Start Your Project
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

        {/* Quality Features Bar */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
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


        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Award className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's Leading{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Livestock
                </span>{" "}
                Experts
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Decades of experience building profitable, sustainable livestock operations across Zimbabwe
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

        {/* Livestock Products/Services Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-green-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Complete{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Livestock
                </span>{" "}
                Solutions
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                From setup to market delivery, we provide comprehensive livestock farming services
              </p>
            </div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {livestockProducts.map((product, index) => (
                <Link key={index} href={product.href} className="group block">
                  <div className="relative h-full">
                    {/* Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                    
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
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all">
                          {product.title}
                        </h3>
                        <p className="text-zinc-600 mb-6 leading-relaxed">{product.description}</p>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                              <span className="text-zinc-700 font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex items-center gap-2 font-bold text-zinc-900 group-hover:gap-3 transition-all">
                          <span className="relative">
                            Learn More
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-600 to-emerald-600 w-0 group-hover:w-full transition-all duration-300" />
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


        {/* Our Approach Story Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur opacity-20" />
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-200">
                  <Image
                    src="/images/livestock-farm-operation.jpg"
                    alt="Professional livestock farming operation in Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                  <Leaf className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Approach</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                  Modern Farming{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Excellence
                  </span>
                </h2>

                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  At Home Grounds Livestock, we combine decades of farming experience with cutting-edge agricultural technology. Our comprehensive approach covers every aspect of livestock farming - from breed selection and infrastructure setup to nutrition programs and market delivery.
                </p>

                <p className="text-zinc-600 mb-8 leading-relaxed">
                  We work with farmers across Zimbabwe to build sustainable, profitable operations. Our expert team provides hands-on training, ongoing support, and proven systems that maximize productivity while maintaining the highest standards of animal welfare and environmental responsibility.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Complete Farm Setup</div>
                      <div className="text-sm text-zinc-600">Infrastructure, equipment, and systems tailored to your needs</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Expert Training & Support</div>
                      <div className="text-sm text-zinc-600">Ongoing guidance from experienced livestock specialists</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-green-50 rounded-lg p-2 mt-0.5">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Proven Results</div>
                      <div className="text-sm text-zinc-600">Track record of profitable, sustainable farming operations</div>
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
                Ready to Build Your Farm?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Let's discuss how we can help you create a profitable, sustainable livestock farming operation. Expert guidance from setup to success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-green-600">
                      Get Free Consultation
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
