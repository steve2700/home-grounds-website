import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { LocalBusinessSchema } from "@/components/schema/organization-schema"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Home,
  Beef,
  Truck,
} from "lucide-react"

const locationData: Record
  string,
  {
    name: string
    isHeadOffice?: boolean
    deliveryArea: string
    phone: string
    email: string
    hours: { day: string; time: string }[]
    description: string
    services: string[]
  }
> = {
  harare: {
    name: "Harare",
    isHeadOffice: true,
    deliveryArea: "Harare and surrounding suburbs including Avondale, Borrowdale, Mt Pleasant, Greendale, and more",
    phone: "+263 78 028 9132",
    email: "info@homegroundinvestments.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "Our head office and main branch located in Crowhill Views, Borrowdale. We serve the greater Harare metropolitan area with full renovation services and our butchery is stocked with fresh meats daily.",
    services: [
      "Residential Renovations",
      "Commercial Fit-Outs",
      "Kitchen & Bathroom Remodeling",
      "Property Maintenance",
      "Premium Beef & Pork",
      "Fresh Poultry",
      "Custom Butchery Services",
      "Free Delivery in Harare",
    ],
  },
  bulawayo: {
    name: "Bulawayo",
    deliveryArea: "Bulawayo and Matabeleland region",
    phone: "+263 78 028 9132",
    email: "info@homegroundinvestments.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "We deliver quality renovation services and premium meats to Bulawayo and the Matabeleland region. We understand the unique architectural heritage of Bulawayo and specialize in both modern and heritage-sensitive renovations.",
    services: [
      "Residential Renovations",
      "Heritage Property Restoration",
      "Commercial Renovations",
      "Property Maintenance",
      "Premium Meats Delivery",
      "Wholesale Supply",
    ],
  },
  masvingo: {
    name: "Masvingo",
    deliveryArea: "Masvingo and surrounding areas",
    phone: "+263 78 028 9132",
    email: "info@homegroundinvestments.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "Serving the historic city of Masvingo and surrounding areas. Close to Great Zimbabwe, we bring quality renovation services and farm-fresh meats to the Masvingo Province through our reliable delivery service.",
    services: [
      "Residential Renovations",
      "Commercial Projects",
      "Property Maintenance",
      "Premium Meats Delivery",
      "Farm Partnerships",
    ],
  },
  chivhu: {
    name: "Chivhu",
    deliveryArea: "Chivhu and surrounding areas",
    phone: "+263 78 028 9132",
    email: "info@homegroundinvestments.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "We proudly serve Chivhu and the surrounding areas with our renovation services and premium meat delivery. Our team is committed to bringing quality products and services to your doorstep.",
    services: [
      "Residential Renovations",
      "Commercial Projects",
      "Property Maintenance",
      "Premium Meats Delivery",
      "Local Farm Partnerships",
    ],
  },
}

// Physical head office address (used for all locations)
const headOfficeAddress = {
  street: "Stand 2688 Crowhill Views Borrowdale",
  city: "Harare",
  country: "Zimbabwe",
  full: "Stand 2688 Crowhill Views Borrowdale, Harare, Zimbabwe",
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((city) => ({
    city,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const location = locationData[city]

  if (!location) {
    return {
      title: "Location Not Found",
    }
  }

  return {
    title: `${location.name} ${location.isHeadOffice ? "Head Office" : "Delivery"} | Renovations & Meats`,
    description: `Home Ground Investments serving ${location.name} - ${location.description.slice(0, 150)}...`,
    alternates: {
      canonical: `https://homegroundinvestments.co.zw/locations/${city}`,
    },
    openGraph: {
      title: `Home Ground ${location.name} ${location.isHeadOffice ? "Head Office" : "Delivery"}`,
      description: `Quality renovations and premium meats ${location.isHeadOffice ? "in" : "delivered to"} ${location.name}`,
    },
  }
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const location = locationData[city]

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LocalBusinessSchema location={location.name} />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              {location.isHeadOffice && (
                <span className="inline-block bg-[#8DC63F] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Head Office
                </span>
              )}
              {!location.isHeadOffice && (
                <span className="inline-block bg-[#E31E24] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Delivery Service Available
                </span>
              )}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                {location.isHeadOffice ? "Home Ground Investments" : `Serving ${location.name}`}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#E31E24] hover:bg-[#c91a1f]">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
                <Button asChild className="bg-[#8DC63F] hover:bg-[#7ab635]">
                  <Link href="/meats">Order Meats</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Details */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Location Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    {location.isHeadOffice ? "Visit Our Head Office" : `Delivery to ${location.name}`}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {location.isHeadOffice ? (
                            <MapPin className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          ) : (
                            <Truck className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          )}
                          <div>
                            <h3 className="font-semibold mb-2">
                              {location.isHeadOffice ? "Our Address" : "Delivery Area"}
                            </h3>
                            <p className="text-muted-foreground">
                              {location.isHeadOffice
                                ? headOfficeAddress.full
                                : location.deliveryArea}
                            </p>
                            {!location.isHeadOffice && (
                              <p className="text-sm text-muted-foreground mt-2">
                                Head Office: {headOfficeAddress.full}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Phone className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-2">Phone</h3>
                            
                              href={`tel:${location.phone.replace(/\s/g, "")}`}
                              className="text-muted-foreground hover:text-[#E31E24]"
                            >
                              {location.phone}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Mail className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            
                              href={`mailto:${location.email}`}
                              className="text-muted-foreground hover:text-[#E31E24] break-all"
                            >
                              {location.email}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Clock className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-2">Operating Hours</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              {location.hours.map((h) => (
                                <div
                                  key={h.day}
                                  className="flex justify-between gap-4"
                                >
                                  <span className="font-medium">{h.day}</span>
                                  <span>{h.time}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Services Available */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Services Available {location.isHeadOffice ? "at Our Head Office" : `in ${location.name}`}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {location.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#8DC63F] flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map - Only show for head office */}
                {location.isHeadOffice && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground font-medium">
                          {headOfficeAddress.full}
                        </p>
                        
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(headOfficeAddress.full)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#E31E24] hover:underline mt-2"
                        >
                          Open in Google Maps
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Delivery Info - Only show for non-head office locations */}
                {!location.isHeadOffice && (
                  <Card className="bg-muted/50">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Truck className="h-8 w-8 text-[#E31E24] flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold mb-2">
                            Delivery Service
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            We deliver both renovation materials and premium meats to {location.name}. 
                            Contact us to discuss your project or place an order for delivery.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Button asChild size="sm" className="bg-[#E31E24] hover:bg-[#c91a1f]">
                              <Link href="/quote">Request Quote</Link>
                            </Button>
                            <Button asChild size="sm" variant="outline">
                              <a href={`tel:${location.phone.replace(/\s/g, "")}`}>
                                Call {location.phone}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-[#E31E24] text-white">
                  <CardContent className="p-6">
                    <Home className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">
                      Renovation Inquiry
                    </h3>
                    <p className="text-white/90 mb-4">
                      Looking to transform your space {location.isHeadOffice ? "in Harare" : `in ${location.name}`}? Get a
                      free consultation.
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-white text-[#E31E24] hover:bg-white/90"
                    >
                      <Link href="/quote">Get Free Quote</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-[#8DC63F] text-white">
                  <CardContent className="p-6">
                    <Beef className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Order Meats</h3>
                    <p className="text-white/90 mb-4">
                      Fresh, quality meats {location.isHeadOffice ? "available at our butchery or " : ""}delivered to {location.isHeadOffice ? "your door in Harare" : location.name}.
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-white text-[#8DC63F] hover:bg-white/90"
                    >
                      <Link href="/meats">Place Order</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Other Locations */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">We Also Serve</h3>
                    <div className="space-y-3">
                      {Object.entries(locationData)
                        .filter(([key]) => key !== city)
                        .map(([key, loc]) => (
                          <Link
                            key={key}
                            href={`/locations/${key}`}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
                          >
                            <div>
                              <span className="font-medium block">{loc.name}</span>
                              {loc.isHeadOffice && (
                                <span className="text-xs text-muted-foreground">Head Office</span>
                              )}
                            </div>
                            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[#E31E24] transition-colors" />
                          </Link>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
