"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Hammer, Beef } from "lucide-react"

const services = [
  {
    title: "Kitchen Renovations",
    description: "Modern kitchen designs with quality finishes and expert craftsmanship",
    image: "/images/hero-renovations.jpg",
    href: "/renovations/kitchen-renovations",
    category: "Renovations",
    categoryColor: "bg-amber-500",
    categoryIcon: Hammer,
  },
  {
    title: "Premium Beef",
    description: "Grass-fed, quality cuts from Zimbabwe's finest farms",
    image: "/images/hero-meats.jpg",
    href: "/meats/beef",
    category: "Meats",
    categoryColor: "bg-red-600",
    categoryIcon: Beef,
  },
  {
    title: "Commercial Fit-Outs",
    description: "Professional office and retail renovations for modern businesses",
    image: "/images/commercial-renovation.jpg",
    href: "/renovations/commercial",
    category: "Renovations",
    categoryColor: "bg-amber-500",
    categoryIcon: Hammer,
  },
  {
    title: "Fresh Poultry",
    description: "Farm-fresh chicken delivered daily with quality guarantee",
    image: "/images/poultry.jpg",
    href: "/meats/poultry",
    category: "Meats",
    categoryColor: "bg-red-600",
    categoryIcon: Beef,
  },
  {
    title: "Property Maintenance",
    description: "Preventive and emergency repairs for lasting property value",
    image: "/images/home-exterior.jpg",
    href: "/renovations/maintenance",
    category: "Renovations",
    categoryColor: "bg-amber-500",
    categoryIcon: Hammer,
  },
  {
    title: "Quality Pork",
    description: "Fresh cuts, sausages, and smoked products prepared expertly",
    image: "/images/pork.jpg",
    href: "/meats/pork",
    category: "Meats",
    categoryColor: "bg-red-600",
    categoryIcon: Beef,
  },
]

export function FeaturedServices() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/40 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/40 to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            Featured Services &{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Explore our most popular offerings across both divisions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index} 
              href={service.href}
              className="group block"
            >
              {/* Card Container */}
              <div className="relative h-full">
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 ${service.categoryColor} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-zinc-200/50 shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 ${service.categoryColor} text-white rounded-xl px-4 py-2 shadow-lg`}>
                        <service.categoryIcon className="h-4 w-4" />
                        <span className="text-xs font-bold uppercase tracking-wide">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center gap-2 font-bold text-zinc-900 group-hover:gap-3 transition-all duration-300">
                      <span className="relative">
                        Learn More
                        <span className={`absolute -bottom-1 left-0 h-0.5 ${service.categoryColor} w-0 group-hover:w-full transition-all duration-300`} />
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg text-zinc-600 mb-6">
            Can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/renovations" className="group/btn">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500" />
                <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-zinc-900 font-bold">
                  <Hammer className="h-5 w-5" />
                  View All Renovation Services
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link href="/meats" className="group/btn">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600" />
                <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-bold">
                  <Beef className="h-5 w-5" />
                  Browse All Meat Products
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
