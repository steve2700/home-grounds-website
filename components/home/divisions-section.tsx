import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Home, Beef, Wrench, Utensils, Building2, Truck } from "lucide-react"

export function DivisionsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Two Divisions, One Commitment to Quality
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From transforming your living spaces to delivering farm-fresh meats to your table, we're your trusted partner for a better life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Renovations Division */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-renovations.jpg"
                alt="Home Grounds Renovations"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
            </div>
            <CardContent className="relative p-8 min-h-[500px] flex flex-col justify-end text-background">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <Home className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Renovations & Improvements</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Transform Your Space</h3>
                <p className="text-background/80 mb-6">
                  Professional renovation services for homes and businesses across Zimbabwe. Quality craftsmanship, on-time delivery.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Wrench className="h-4 w-4 text-primary" />
                  </div>
                  <span>Kitchen & Bathroom Renovations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                  <span>Commercial Fit-Outs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Home className="h-4 w-4 text-primary" />
                  </div>
                  <span>Property Maintenance</span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
              >
                <Link href="/renovations">
                  Explore Renovation Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Meats Division */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-meats.jpg"
                alt="Home Grounds Premium Meats"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20" />
            </div>
            <CardContent className="relative p-8 min-h-[500px] flex flex-col justify-end text-background">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                  <Beef className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">Meats & Butcher</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Farm-Fresh Quality</h3>
                <p className="text-background/80 mb-6">
                  Premium beef, pork, and poultry from Zimbabwe's finest farms. Hygienic processing, delivered fresh.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Beef className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Premium Beef & Pork Cuts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Utensils className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Custom Butchery Services</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Truck className="h-4 w-4 text-secondary" />
                  </div>
                  <span>Fresh Delivery Available</span>
                </li>
              </ul>

              <Button
                asChild
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group/btn"
              >
                <Link href="/meats">
                  Shop Premium Meats
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
