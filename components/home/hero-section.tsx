"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, Hammer, Beef, CheckCircle2, Award, Users, Clock, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-zinc-950">
      {/* Enhanced Background Grid with Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10 animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Animated Gradient Orbs - More Dynamic */}
      <div className="absolute top-0 -left-48 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/30 to-yellow-500/20 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 -right-48 w-[500px] h-[500px] bg-gradient-to-tl from-red-600/30 to-orange-500/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite] [animation-delay:1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-[150px] animate-[pulse_10s_ease-in-out_infinite] [animation-delay:2s]" />

      {/* Dual Image Background with Smooth Transitions */}
      <div className="absolute inset-0">
        {/* Renovations Image */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === 0 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src="/images/hero-renovations.jpg"
            alt="Premium home renovations"
            fill
            className="object-cover scale-105 animate-[zoomSlow_20s_ease-in-out_infinite]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/98 via-zinc-950/85 to-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>

        {/* Meats Image */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            activeSlide === 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src="/images/hero-meats.jpg"
            alt="Premium farm-fresh meats"
            fill
            className="object-cover scale-105 animate-[zoomSlow_20s_ease-in-out_infinite] [animation-delay:10s]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-zinc-950/98 via-zinc-950/85 to-zinc-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
      </div>

      {/* Floating Division Labels */}
      <div className="absolute top-4 sm:top-8 left-4 sm:left-8 right-4 sm:right-8 z-10 flex flex-row gap-2 sm:gap-3 justify-center sm:justify-between">
        <div 
          className={`inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 to-yellow-500/10 backdrop-blur-xl border border-amber-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-amber-500/10 transition-all duration-500 ${
            activeSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-50 -translate-y-2'
          }`}
        >
          <Hammer className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-amber-400" />
          <span className="text-[10px] sm:text-sm font-bold tracking-wide text-amber-100 uppercase">Renovations</span>
        </div>

        <div 
          className={`inline-flex items-center gap-2 bg-gradient-to-r from-red-500/15 to-orange-500/10 backdrop-blur-xl border border-red-500/30 rounded-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 shadow-2xl shadow-red-500/10 transition-all duration-500 ${
            activeSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-50 -translate-y-2'
          }`}
        >
          <Beef className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-red-400" />
          <span className="text-[10px] sm:text-sm font-bold tracking-wide text-red-100 uppercase">Meats</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 pt-20 pb-32 sm:pt-24 sm:pb-24 lg:py-32 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Location Badge - Improved Mobile */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-8 hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-xl">
            <div className="relative">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
              <div className="absolute inset-0 bg-amber-400 blur-md opacity-50 animate-pulse" />
            </div>
            <span className="text-[10px] sm:text-sm font-semibold text-zinc-200 tracking-wide">
              <span className="hidden sm:inline">Harare • Bulawayo • Masvingo • Mutare • Chivhu</span>
              <span className="sm:hidden">Nationwide Service</span>
            </span>
          </div>

          {/* Main Headline - Optimized for Mobile */}
          <h1 className="text-[2.5rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black sm:leading-[0.9] mb-6 sm:mb-8 tracking-tighter">
            <span className="block text-white drop-shadow-2xl animate-[fadeInUp_0.6s_ease-out]">
              Building Better
            </span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-[fadeInUp_0.6s_ease-out_0.1s_both] bg-[length:200%_auto] [animation:fadeInUp_0.6s_ease-out_0.1s_both,gradient_3s_ease_infinite]">
              Homes.
            </span>
            <span className="block text-white drop-shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.2s_both]">
              Feeding Better
            </span>
            <span className="block bg-gradient-to-r from-red-500 via-orange-500 to-red-400 bg-clip-text text-transparent animate-[fadeInUp_0.6s_ease-out_0.3s_both] bg-[length:200%_auto] [animation:fadeInUp_0.6s_ease-out_0.3s_both,gradient_3s_ease_infinite]">
              Lives.
            </span>
          </h1>

          {/* Subheadline - Better Mobile Typography */}
          <p className="text-sm sm:text-xl md:text-2xl text-zinc-300 mb-6 sm:mb-12 max-w-3xl leading-relaxed animate-[fadeInUp_0.6s_ease-out_0.4s_both]">
            Zimbabwe's most trusted partner for <strong className="font-bold text-amber-300">quality renovations</strong> and <strong className="font-bold text-red-400">premium farm-to-table meats</strong>
          </p>

          {/* CTA Buttons - Enhanced Mobile Design */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-16 animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
            <Link href="/quote" className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 animate-[gradient_3s_ease_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-lg font-black text-zinc-950 transition-transform duration-300 group-hover:scale-[0.98]">
                <Hammer className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Plan Your Renovation</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link href="/order" className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-500 animate-[gradient_3s_ease_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-lg font-black text-white transition-transform duration-300 group-hover:scale-[0.98]">
                <Beef className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Order Premium Meats</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          {/* Trust Indicators - Mobile Optimized Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 max-w-5xl animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
            <div className="group relative p-3 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <Award className="h-5 w-5 sm:h-8 sm:w-8 text-amber-400 mb-1.5 sm:mb-3 relative z-10" />
              <div className="text-xl sm:text-3xl font-black text-white mb-0.5 sm:mb-1 relative z-10">500+</div>
              <div className="text-[9px] sm:text-sm text-zinc-400 font-semibold relative z-10 leading-tight">Projects</div>
            </div>

            <div className="group relative p-3 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <CheckCircle2 className="h-5 w-5 sm:h-8 sm:w-8 text-emerald-400 mb-1.5 sm:mb-3 relative z-10" />
              <div className="text-xl sm:text-3xl font-black text-white mb-0.5 sm:mb-1 relative z-10">100%</div>
              <div className="text-[9px] sm:text-sm text-zinc-400 font-semibold relative z-10 leading-tight">Quality</div>
            </div>

            <div className="group relative p-3 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <Users className="h-5 w-5 sm:h-8 sm:w-8 text-blue-400 mb-1.5 sm:mb-3 relative z-10" />
              <div className="text-xl sm:text-3xl font-black text-white mb-0.5 sm:mb-1 relative z-10">Family</div>
              <div className="text-[9px] sm:text-sm text-zinc-400 font-semibold relative z-10 leading-tight">Owned</div>
            </div>

            <div className="group relative p-3 sm:p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
              <Clock className="h-5 w-5 sm:h-8 sm:w-8 text-purple-400 mb-1.5 sm:mb-3 relative z-10" />
              <div className="text-xl sm:text-3xl font-black text-white mb-0.5 sm:mb-1 relative z-10">2026</div>
              <div className="text-[9px] sm:text-sm text-zinc-400 font-semibold relative z-10 leading-tight">Standards</div>
            </div>
          </div>

          {/* Star Rating Section */}
          <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
            <div className="flex gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 sm:h-6 sm:w-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="flex items-center gap-2 text-center sm:text-left">
              <span className="text-base sm:text-xl font-bold text-white">4.9/5</span>
              <span className="text-xs sm:text-base text-zinc-400">from 500+ clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
              activeSlide === index 
                ? 'w-8 sm:w-12 bg-amber-400' 
                : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-3 animate-bounce">
        <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-bold">Explore</span>
        <div className="w-7 h-12 border-2 border-zinc-700 rounded-full flex justify-center pt-2.5">
          <div className="w-1.5 h-2 bg-gradient-to-b from-amber-400 to-transparent rounded-full animate-[scrollDot_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomSlow {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }

        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(12px); opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}
