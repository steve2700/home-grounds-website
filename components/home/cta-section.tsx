import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-background/80 text-lg mb-12 max-w-2xl mx-auto">
            Whether you're planning a renovation, need quality meats, or looking for livestock, we're here to help. Get in touch today.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {/* Renovations CTA */}
            <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Plan Your Renovation</h3>
              <p className="text-background/70 mb-6">
                Get a free consultation and quote for your home or commercial project
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="/quote">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Meats CTA */}
            <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Order Premium Meats</h3>
              <p className="text-background/70 mb-6">
                Browse our selection and order farm-fresh meats for delivery
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <Link href="/meats">
                  View Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            {/* Livestock CTA */}
            <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Browse Livestock</h3>
              <p className="text-background/70 mb-6">
                Explore our quality livestock and find the perfect animals for your needs
              </p>
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href="/livestock">
                  View Livestock
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-background/10">
            
              href="tel:+263780289132"
              className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-background/60">Call Us</div>
                <div className="font-semibold">+263 78 028 9132</div>
              </div>
            </a>
            
              href="https://wa.me/27614366718"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
              <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-secondary" />
              </div>
              <div className="text-left">
                <div className="text-sm text-background/60">WhatsApp</div>
                <div className="font-semibold">+27 61 436 6718</div>
              </div>
            </a>
          </div>
          <p className="mt-8 text-sm text-background/50">
            Operating Hours: Monday - Friday: 8AM - 5PM | Saturday: 8AM - 2PM
          </p>
        </div>
      </div>
    </section>
  )
}
