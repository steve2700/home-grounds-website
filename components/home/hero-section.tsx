"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, Hammer, Beef, CheckCircle2, Award, Users, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-48 w-96 h-96 bg-amber-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-red-600/20 rounded-full blur-[128px] animate-pulse [animation-delay:1s]" />

      {/* Split Image Panels with Enhanced Overlays */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Renovations Side */}
        <div className="relative group">
          <Image
            src="/images/hero-renovations.jpg"
            alt="Premium home renovations"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/95 via-zinc-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          
          {/* Division Label */}
          <div className="absolute top-8 left-8 z-10">
            <div className="inline-flex items-center gap-3 bg-amber-500/10 backdrop-blur-md border border-amber-500/30 rounded-2xl px-6 py-3">
              <Hammer className="h-5 w-5 text-amber-400" />
              <span className="text-sm font-semibold tracking-wide text-amber-100 uppercase">Property Renovations & Maintenance Services</span>
            </div>
          </div>
        </div>

        {/* Meats Side */}
        <div className="relative group hidden lg:block">
          <Image
            src="/images/hero-meats.jpg"
            alt="Premium farm-fresh meats"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-zinc-950/95 via-zinc-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          
          {/* Division Label */}
          <div className="absolute top-8 right-8 z-10">
            <div className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-md border border-red-500/30 rounded-2xl px-6 py-3">
              <Beef className="h-5 w-5 text-red-400" />
              <span className="text-sm font-semibold tracking-wide text-red-100 uppercase">Premium Meats & Butchery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div className="absolute inset-0 bg-zinc-950/60 lg:hidden" />

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 py-24 lg:py-32 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 mb-8 hover:bg-white/10 transition-all duration-300">
            <MapPin className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-zinc-200">
              Harare • Bulawayo • Masvingo • Waterfalls •Chivhu
            </span>
          </div>

          {/* Main Headline - Extra Bold & Large */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight">
            <span className="block text-white">
              Building Better
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
              Homes.
            </span>
            <span className="block mt-2 text-white">
              Feeding Better
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-red-400 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] [animation-delay:0.5s]">
              Lives.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-zinc-300 mb-12 max-w-3xl leading-relaxed font-light">
            Zimbabwe's most trusted partner for <strong className="font-semibold text-amber-300">quality renovations</strong> and <strong className="font-semibold text-red-400">premium farm-to-table meats</strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/quote" className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-zinc-950">
                  <Hammer className="h-5 w-5" />
                  Plan Your Renovation
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            <Link href="/order" className="group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                <div className="relative flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white">
                  <Beef className="h-5 w-5" />
                  Order Premium Meats
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
            <div className="flex flex-col gap-2 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Award className="h-8 w-8 text-amber-400 mb-1" />
              <div className="text-3xl font-black text-white">500+</div>
              <div className="text-sm text-zinc-400 font-medium">Projects Completed</div>
            </div>

            <div className="flex flex-col gap-2 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <CheckCircle2 className="h-8 w-8 text-emerald-400 mb-1" />
              <div className="text-3xl font-black text-white">100%</div>
              <div className="text-sm text-zinc-400 font-medium">Quality Guaranteed</div>
            </div>

            <div className="flex flex-col gap-2 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Users className="h-8 w-8 text-blue-400 mb-1" />
              <div className="text-3xl font-black text-white">Family</div>
              <div className="text-sm text-zinc-400 font-medium">Owned Business</div>
            </div>

            <div className="flex flex-col gap-2 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <Clock className="h-8 w-8 text-purple-400 mb-1" />
              <div className="text-3xl font-black text-white">2026</div>
              <div className="text-sm text-zinc-400 font-medium">Modern Standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold">Explore</span>
        <div className="w-7 h-11 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}
