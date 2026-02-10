"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Home, Beef, Wrench, Utensils, Building2, Truck, Hammer, ChefHat, Sparkles, Shield, Clock, Award, Sprout, TreePine } from "lucide-react"

export function DivisionsSection() {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Divisions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            Four Divisions,<br />
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">One Commitment</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            From farm to table, from ground to finish - transforming spaces, raising quality livestock, 
            and delivering premium meats across Zimbabwe.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {/* Renovations Division */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/hero-renovations.jpg"
                  alt="Home Grounds Renovations"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-3 bg-amber-500 text-white rounded-2xl px-5 py-3 shadow-lg">
                    <Hammer className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">Renovations</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">500+</div>
                    <div className="text-xs text-white/80 font-medium">Projects</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">15+</div>
                    <div className="text-xs text-white/80 font-medium">Years</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-zinc-900 mb-4">
                  Transform Your Space
                </h3>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  Professional renovation services for homes and businesses across Zimbabwe. 
                  Quality craftsmanship, modern designs, on-time delivery.
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-amber-50 rounded-lg group-hover/item:bg-amber-100 transition-colors">
                      <Wrench className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Kitchen & Bathroom Renovations</div>
                      <div className="text-sm text-zinc-600">Complete remodels with modern finishes</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-amber-50 rounded-lg group-hover/item:bg-amber-100 transition-colors">
                      <Building2 className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Commercial Fit-Outs</div>
                      <div className="text-sm text-zinc-600">Office spaces and retail renovations</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-amber-50 rounded-lg group-hover/item:bg-amber-100 transition-colors">
                      <Home className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Property Maintenance</div>
                      <div className="text-sm text-zinc-600">Ongoing care and improvements</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/renovations" className="block group/btn">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-bold">
                      Explore Renovation Services
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Meats Division */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/hero-meats.jpg"
                  alt="Home Grounds Premium Meats"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-3 bg-red-600 text-white rounded-2xl px-5 py-3 shadow-lg">
                    <Beef className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">Premium Meats</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">Daily</div>
                    <div className="text-xs text-white/80 font-medium">Fresh Supply</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">100%</div>
                    <div className="text-xs text-white/80 font-medium">Quality</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-zinc-900 mb-4">
                  Farm-Fresh Quality
                </h3>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  Premium beef, pork, and poultry from our Chivhu farms, processed in our own abattoir, 
                  and delivered fresh in refrigerated vehicles.
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Beef className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Premium Beef & Pork Cuts</div>
                      <div className="text-sm text-zinc-600">Finest quality meats, expertly prepared</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <ChefHat className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Own Abattoir Processing</div>
                      <div className="text-sm text-zinc-600">Hygienic processing with quality control</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-red-50 rounded-lg group-hover/item:bg-red-100 transition-colors">
                      <Truck className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Refrigerated Delivery</div>
                      <div className="text-sm text-zinc-600">Fresh delivery to homes and butcheries</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/meats" className="block group/btn">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-bold">
                      Shop Premium Meats
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Livestock Farming Division */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/livestock-cattle.jpg"
                  alt="Home Grounds Livestock Farming"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-3 bg-green-600 text-white rounded-2xl px-5 py-3 shadow-lg">
                    <Sprout className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">Livestock Farming</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">Chivhu</div>
                    <div className="text-xs text-white/80 font-medium">Farms</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">Quality</div>
                    <div className="text-xs text-white/80 font-medium">Breeding</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-zinc-900 mb-4">
                  Sustainable Farming
                </h3>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  Quality livestock raised on our Chivhu farms with sustainable practices, 
                  ensuring healthy animals and superior meat quality.
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-green-50 rounded-lg group-hover/item:bg-green-100 transition-colors">
                      <Beef className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Premium Cattle Breeding</div>
                      <div className="text-sm text-zinc-600">Quality genetics and expert care</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-green-50 rounded-lg group-hover/item:bg-green-100 transition-colors">
                      <TreePine className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Sustainable Practices</div>
                      <div className="text-sm text-zinc-600">Environmental stewardship and animal welfare</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-green-50 rounded-lg group-hover/item:bg-green-100 transition-colors">
                      <Shield className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Health Monitoring</div>
                      <div className="text-sm text-zinc-600">Veterinary care and disease prevention</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/livestock" className="block group/btn">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-bold">
                      Explore Livestock Farming
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Feedlot Farming Division */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50">
              {/* Image Section */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/hero-feedlot.jpg"
                  alt="Home Grounds Feedlot Farming"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-3 bg-blue-600 text-white rounded-2xl px-5 py-3 shadow-lg">
                    <Utensils className="h-5 w-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">Feedlot Farming</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">Expert</div>
                    <div className="text-xs text-white/80 font-medium">Finishing</div>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3">
                    <div className="text-2xl font-black text-white">Prime</div>
                    <div className="text-xs text-white/80 font-medium">Quality</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-zinc-900 mb-4">
                  Premium Finishing
                </h3>
                <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                  Professional feedlot operations ensuring optimal weight gain and meat quality 
                  through controlled nutrition and expert management.
                </p>

                {/* Feature List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-colors">
                      <Utensils className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Controlled Feeding Programs</div>
                      <div className="text-sm text-zinc-600">Scientifically formulated nutrition plans</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-colors">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Superior Marbling</div>
                      <div className="text-sm text-zinc-600">Premium meat quality and tenderness</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="mt-1 p-2 bg-blue-50 rounded-lg group-hover/item:bg-blue-100 transition-colors">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-zinc-900 mb-1">Professional Management</div>
                      <div className="text-sm text-zinc-600">Optimized finishing timelines</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/livestock/feedlot-farming" className="block group/btn">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-4 text-white font-bold">
                      Discover Feedlot Operations
                      <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200/50">
            <Shield className="h-10 w-10 text-amber-600 mx-auto mb-3" />
            <div className="text-2xl font-black text-zinc-900 mb-1">Licensed</div>
            <div className="text-sm text-zinc-600">Fully Certified</div>
          </div>

          <div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200/50">
            <Award className="h-10 w-10 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-black text-zinc-900 mb-1">Quality</div>
            <div className="text-sm text-zinc-600">Guaranteed</div>
          </div>

          <div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200/50">
            <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-black text-zinc-900 mb-1">On-Time</div>
            <div className="text-sm text-zinc-600">Delivery</div>
          </div>

          <div className="text-center p-6 bg-zinc-50 rounded-2xl border border-zinc-200/50">
            <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-black text-zinc-900 mb-1">Family</div>
            <div className="text-sm text-zinc-600">Owned</div>
          </div>
        </div>
      </div>
    </section>
  )
}
