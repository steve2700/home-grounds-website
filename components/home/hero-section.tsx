import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Images - Split Design */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <Image
            src="/images/hero-renovations.jpg"
            alt="Quality home renovations in Zimbabwe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/images/hero-meats.jpg"
            alt="Premium farm-fresh meats in Zimbabwe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-foreground/80 via-foreground/60 to-transparent" />
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="absolute inset-0 bg-foreground/50 md:hidden" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center text-background">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-8">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Serving Harare, Bulawayo, Masvingo & Waterfalls</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Building Better Homes.{" "}
            <span className="text-secondary">Feeding Better Lives.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-background/90 mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Zimbabwe's trusted partner for quality renovations and premium farm-to-table meats across Harare, Bulawayo, and Masvingo
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/quote">
                Plan Your Renovation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/order">
                Order Premium Meats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-background/70">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>500+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-secondary" />
              <span>Family-Owned Business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-background/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-background/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
