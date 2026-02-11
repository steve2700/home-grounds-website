"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, ArrowRight, Building2, Star, CheckCircle, Tractor } from "lucide-react"

const locations = [
  {
    city: "Harare",
    address: "Stand 2688, Crowhill Views, Borrowdale",
    description: "Headquarters serving greater Harare area",
    services: ["Full Renovations", "Meat Delivery", "Consultations"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/harare",
    isHeadquarters: true,
    color: "amber",
  },
  {
    city: "Bulawayo",
    description: "Serving Bulawayo and surrounding provinces",
    services: ["Residential", "Commercial", "Pickup Available"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/bulawayo",
    color: "blue",
  },
  {
    city: "Masvingo",
    description: "Southern region services and delivery",
    services: ["Home Renovations", "Fresh Meats", "Pickup Available"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/masvingo",
    color: "green",
  },
  {
    city: "Chivhu",
    description: "Our farms and livestock operations center",
    services: ["Livestock Sales", "Farm Visits", "Pickup Available"],
    phone: "+263 78 028 9132",
    hours: "Mon-Sat: 7AM-6PM",
    href: "/locations/chivhu",
    isFarmLocation: true,
    color: "emerald",
  },
]

const colorClasses = {
  amber: {
    glow: 'bg-gradient-to-r from-amber-500 to-yellow-500',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
  blue: {
    glow: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: 'text-blue-600',
    iconBg: 'bg-blue-50',
  },
  green: {
    glow: 'bg-gradient-to-r from-green-500 to-emerald-500',
    badge: 'bg-green-50 text-green-700 border-green-200',
    icon: 'text-green-600',
    iconBg: 'bg-green-50',
  },
  emerald: {
    glow: 'bg-gradient-to-r from-emerald-500 to-green-500',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
}

export function LocationsSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-100/30 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
            <MapPin className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Locations</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            We Come{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              To You
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            With locations across Zimbabwe, quality renovations and fresh meats from Home Ground Investment are always within reach
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {locations.map((location, index) => {
            const colors = colorClasses[location.color as keyof typeof colorClasses]
            
            return (
              <Link key={index} href={location.href} className="group block">
                {/* Card Container */}
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 ${colors.glow} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Card */}
                  <div className={`relative h-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border ${
                    location.isHeadquarters 
                      ? 'border-amber-300 ring-2 ring-amber-200' 
                      : location.isFarmLocation
                      ? 'border-emerald-300 ring-2 ring-emerald-200'
                      : 'border-zinc-200/50'
                  }`}>
                    {/* Headquarters Badge */}
                    {location.isHeadquarters && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <Star className="h-3 w-3 fill-white" />
                          Headquarters
                        </div>
                      </div>
                    )}

                    {/* Farm Location Badge */}
                    {location.isFarmLocation && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <Tractor className="h-3 w-3" />
                          Our Farms
                        </div>
                      </div>
                    )}

                    {/* City Icon & Name */}
                    <div className="flex items-center gap-3 mb-4 mt-2">
                      <div className={`${colors.iconBg} p-3 rounded-2xl`}>
                        {location.isFarmLocation ? (
                          <Tractor className={`h-6 w-6 ${colors.icon}`} />
                        ) : (
                          <Building2 className={`h-6 w-6 ${colors.icon}`} />
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900">{location.city}</h3>
                    </div>

                    {/* Address (for Harare) */}
                    {location.address && (
                      <div className="mb-4">
                        <p className="text-xs text-zinc-500 font-medium">{location.address}</p>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      {location.description}
                    </p>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-zinc-100 p-2 rounded-lg">
                          <Phone className="h-4 w-4 text-zinc-600" />
                        </div>
                        <span className="text-sm text-zinc-700 font-medium">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-zinc-100 p-2 rounded-lg">
                          <Clock className="h-4 w-4 text-zinc-600" />
                        </div>
                        <span className="text-sm text-zinc-700 font-medium">{location.hours}</span>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-zinc-200">
                      {location.services.map((service, i) => (
                        <div key={i} className={`${colors.badge} text-xs font-semibold px-3 py-1.5 rounded-lg border`}>
                          {service}
                        </div>
                      ))}
                    </div>

                    {/* View Location Link */}
                    <div className="flex items-center justify-between text-zinc-900 font-bold">
                      <span className="relative">
                        View Location
                        <span className={`absolute -bottom-1 left-0 h-0.5 ${colors.glow} w-0 group-hover:w-full transition-all duration-300`} />
                      </span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Coverage Map Visual */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-50 to-white border border-zinc-200 rounded-3xl p-12 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-zinc-900 mb-3">
                Complete Zimbabwe Coverage
              </h3>
              <p className="text-zinc-600 text-lg">
                Delivery service in major cities, pickup available at all locations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Coverage Feature 1 */}
              <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200">
                <div className="bg-amber-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-7 w-7 text-amber-600" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">Delivery Service</h4>
                <p className="text-sm text-zinc-600">Available in Harare, Bulawayo, and Masvingo</p>
              </div>

              {/* Coverage Feature 2 */}
              <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200">
                <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Tractor className="h-7 w-7 text-emerald-600" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">Farm Pickups</h4>
                <p className="text-sm text-zinc-600">Visit our farms in Chivhu for fresh livestock</p>
              </div>

              {/* Coverage Feature 3 */}
              <div className="text-center p-6 bg-white rounded-2xl border border-zinc-200">
                <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-7 w-7 text-blue-600" />
                </div>
                <h4 className="font-bold text-zinc-900 mb-2">Easy Contact</h4>
                <p className="text-sm text-zinc-600">One number for all locations and services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-600 mb-6 text-lg">
            Not sure which location to contact?
          </p>
          <a 
            href="tel:+263780289132" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Phone className="h-5 w-5" />
            Call +263 78 028 9132
          </a>
        </div>
      </div>
    </section>
  )
}
