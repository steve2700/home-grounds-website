import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, CheckCircle, Scissors, Package, Truck, Users, Award, Clock, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Butchery Services | Custom Cutting & Meat Processing",
  description: "Expert butchery services in Zimbabwe. Custom cutting, deboning, party packs, wholesale supply, and refrigerated delivery across Harare, Bulawayo, and Masvingo.",
}

const services = [
  {
    icon: Scissors,
    title: "Custom Cutting & Deboning",
    description: "Get your meat cut exactly how you want it. Our skilled butchers cater to your specific requirements with precision.",
    features: ["Specific cut sizes", "Professional deboning", "Portioning services", "Special requests"],
    image: "/images/pork.jpg",
  },
  {
    icon: Package,
    title: "Party Packs & Events",
    description: "Perfect meat selections for events, parties, braais, and family gatherings. Let us handle your event catering.",
    features: ["Braai packs", "Event catering", "Bulk orders", "Custom assortments"],
    image: "/images/poultry.jpg",
  },
  {
    icon: Truck,
    title: "Refrigerated Delivery",
    description: "Fresh meat delivered to your door across Zimbabwe. Refrigerated trucks ensure quality from farm to table.",
    features: ["Same-day delivery", "Scheduled orders", "Cold chain maintained", "Nationwide coverage"],
    image: "/images/livestock-cattle.jpg",
  },
  {
    icon: Users,
    title: "Wholesale Supply",
    description: "Reliable meat supply for restaurants, hotels, butcheries, and retail businesses. Consistent quality guaranteed.",
    features: ["Regular supply contracts", "Volume discounts", "Custom orders", "Flexible payment terms"],
    image: "/images/livestock-goats.jpg",
  },
]

const qualityPoints = [
  {
    icon: Award,
    title: "Farm-Raised Quality",
    description: "All livestock raised on our Chivhu farms with strict quality control",
  },
  {
    icon: ShieldCheck,
    title: "Own Abattoir",
    description: "Hygienic processing in our state-of-the-art facility",
  },
  {
    icon: Clock,
    title: "Always Fresh",
    description: "Deep freezers and cold storage maintain optimal freshness",
  },
]

export default function ButcheryPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/live-poultry.jpg"
              alt="Professional Butchery Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D]/95 via-[#2D2D2D]/85 to-[#2D2D2D]/70" />
          </div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-3xl text-white">
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/meats" className="hover:text-white transition-colors">Meats</Link>
                <span>/</span>
                <span className="text-white">Butchery Services</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Butchery Services
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                From custom cutting to wholesale supply, we provide expert butchery services 
                for individuals and businesses across Zimbabwe.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#8DC63F] hover:bg-[#7ab635] text-white">
                  <Link href="/meats">
                    View Our Meats
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 hover:bg-white/20 text-white">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Points */}
        <section className="py-16 bg-[#8DC63F]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {qualityPoints.map((point, index) => (
                <div key={index} className="text-center text-white">
                  <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <point.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                  <p className="text-white/90">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Butchery Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional services tailored to meet your needs, whether you're hosting 
                a braai or running a restaurant.
              </p>
            </div>

            <div className="space-y-16 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-8">
                        <div className="h-14 w-14 rounded-xl bg-[#8DC63F]/10 flex items-center justify-center mb-6">
                          <service.icon className="h-7 w-7 text-[#8DC63F]" />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="space-y-3">
                          <h4 className="font-semibold text-foreground mb-3">What We Offer:</h4>
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-[#8DC63F] flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2">Choose Your Service</h3>
                  <p className="text-muted-foreground">
                    Select custom cutting, party packs, delivery, or wholesale supply
                  </p>
                </div>
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2">Place Your Order</h3>
                  <p className="text-muted-foreground">
                    Call, WhatsApp, or visit us to discuss your requirements
                  </p>
                </div>
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2">Get Fresh Meat</h3>
                  <p className="text-muted-foreground">
                    Pick up or have it delivered fresh to your door
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2D2D2D] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Butchery Services?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you're planning a family braai or need wholesale meat supply for your business, 
              our expert butchers are here to help. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#E31E24] hover:bg-[#c91a1f] text-white">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#8DC63F] hover:bg-[#7ab635] text-white">
                <a href="https://wa.me/27614366718" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/70 text-sm">
                📍 Stand 2688, Crowhill Views Borrowdale, Harare | 
                📞 +263 78 028 9132 | 
                💬 +27 61 436 6718
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
