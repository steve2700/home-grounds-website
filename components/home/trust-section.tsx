"use client"

import { Shield, MapPin, Heart, Award, TrendingUp, Users, Clock, Star } from "lucide-react"

const trustPillars = [
  {
    icon: Award,
    title: "Local Expertise",
    description: "Years of experience serving Zimbabwe's renovation and meat industry",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We stand behind every project and product we deliver",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    icon: MapPin,
    title: "Multi-City Service",
    description: "Serving Harare, Bulawayo, Masvingo, and Waterfalls",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    icon: Heart,
    title: "Family-Owned Values",
    description: "Treating every customer like family with integrity and care",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
]

export function TrustSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-zinc-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-200/20 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Home Grounds?
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Built on trust, delivered with excellence. Here's what sets us apart from the rest.
          </p>
        </div>

        {/* Trust Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-24">
          {trustPillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 ${pillar.bgColor} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
              
              {/* Card */}
              <div className={`relative bg-white border ${pillar.borderColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300`}>
                {/* Icon */}
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${pillar.bgColor} mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                  <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{pillar.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar - Enhanced */}
        <div className="relative max-w-7xl mx-auto">
          {/* Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 rounded-3xl blur-lg opacity-30" />
          
          {/* Stats Container */}
          <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            
            {/* Stats Grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 p-12">
              {/* Stat 1 */}
              <div className="text-center group">
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full mx-auto transition-all duration-300 group-hover:w-24" />
                </div>
                <div className="text-zinc-400 font-medium">Projects Completed</div>
              </div>

              {/* Stat 2 */}
              <div className="text-center group">
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    4
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto transition-all duration-300 group-hover:w-24" />
                </div>
                <div className="text-zinc-400 font-medium">Cities Served</div>
              </div>

              {/* Stat 3 */}
              <div className="text-center group">
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto transition-all duration-300 group-hover:w-24" />
                </div>
                <div className="text-zinc-400 font-medium">Years Experience</div>
              </div>

              {/* Stat 4 */}
              <div className="text-center group">
                <div className="mb-4">
                  <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto transition-all duration-300 group-hover:w-24" />
                </div>
                <div className="text-zinc-400 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-full px-6 py-3 shadow-sm">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            <span className="text-sm font-semibold text-zinc-700">Growing Business</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-full px-6 py-3 shadow-sm">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-semibold text-zinc-700">Expert Team</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-zinc-200 rounded-full px-6 py-3 shadow-sm">
            <Clock className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-semibold text-zinc-700">On-Time Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}
