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
} from "lucide-react"

const locationData: Record<
  string,
  {
    name: string
    address: string
    phone: string
    email: string
    hours: { day: string; time: string }[]
    description: string
    services: string[]
    isHeadOffice?: boolean
  }
> = {
  harare: {
    name: "Harare",
    address: "123 Samora Machel Avenue, Harare CBD",
    phone: "+263 78 028 9132",
    email: "harare@homegrounds.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "Our Harare branch serves the greater Harare metropolitan area, including Avondale, Borrowdale, Mt Pleasant, and surrounding suburbs. We offer full renovation services and our butchery is stocked with fresh meats daily.",
    services: [
      "Residential Renovations",
      "Commercial Fit-Outs",
      "Kitchen & Bathroom Remodeling",
      "Property Maintenance",
      "Premium Beef & Pork",
      "Fresh Poultry",
      "Custom Butchery Services",
    ],
  },
  bulawayo: {
    name: "Bulawayo",
    address: "45 Main Street, Bulawayo CBD",
    phone: "+263 78 028 9132",
    email: "bulawayo@homegrounds.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "Serving Bulawayo and the Matabeleland region, our branch offers comprehensive renovation services and quality meats. We understand the unique architectural heritage of Bulawayo and specialize in both modern and heritage-sensitive renovations.",
    services: [
      "Residential Renovations",
      "Heritage Property Restoration",
      "Commercial Renovations",
      "Property Maintenance",
      "Premium Meats",
      "Wholesale Supply",
    ],
  },
  masvingo: {
    name: "Masvingo",
    address: "12 Robert Mugabe Way, Masvingo",
    phone: "+263 78 028 9132",
    email: "masvingo@homegrounds.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    description:
      "Our Masvingo branch serves the historic city and surrounding areas. Close to Great Zimbabwe, we bring quality renovation services and farm-fresh meats to the Masvingo Province.",
    services: [
      "Residential Renovations",
      "Commercial Projects",
      "Property Maintenance",
      "Premium Meats",
      "Farm Partnerships",
    ],
  },
  waterfalls: {
    name: "Waterfalls (Head Office)",
    address: "14A, 6th Avenue Parktown, Waterfalls, Harare",
    phone: "+263 78 028 9132",
    email: "info@homegrounds.co.zw",
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed (Butchery: 8AM-1PM)" },
    ],
    description:
      "Our head office in Waterfalls is the hub of Home Grounds Investments operations. This is where our executive team is based and where we coordinate all nationwide projects. Our flagship butchery is also located here with the widest selection of premium meats.",
    services: [
      "All Renovation Services",
      "Project Coordination",
      "Executive Consultations",
      "Full Butchery Services",
      "Wholesale Operations",
      "Corporate Inquiries",
    ],
    isHeadOffice: true,
  },
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
    title: `${location.name} Branch | Renovations & Meats`,
    description: `Home Grounds Investments ${location.name} - ${location.description.slice(0, 150)}...`,
    alternates: {
      canonical: `https://homegrounds.co.zw/locations/${city}`,
    },
    openGraph: {
      title: `Home Grounds ${location.name} Branch`,
      description: `Quality renovations and premium meats in ${location.name}`,
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
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Home Grounds {location.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
                {location.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-[#E31E24] hover:bg-[#c91a1f]">
                  <Link href="/quote">Get a Quote</Link>
                </Button>
                <Button asChild className="bg-[#8DC63F] hover:bg-[#7ab635]">
                  <Link href="/order">Order Meats</Link>
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
                    Visit Our {location.name} Branch
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="h-6 w-6 text-[#E31E24] flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-2">Address</h3>
                            <p className="text-muted-foreground">
                              {location.address}
                            </p>
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
                            <a
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
                            <a
                              href={`mailto:${location.email}`}
                              className="text-muted-foreground hover:text-[#E31E24]"
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
                            <h3 className="font-semibold mb-2">Hours</h3>
                            <div className="space-y-1 text-sm text-muted-foreground">
                              {location.hours.map((h) => (
                                <div
                                  key={h.day}
                                  className="flex justify-between gap-4"
                                >
                                  <span>{h.day}</span>
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
                    Services Available in {location.name}
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

                {/* Map Placeholder */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {location.address}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
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
                      Looking to transform your space in {location.name}? Get a
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
                      Fresh, quality meats delivered to your door in{" "}
                      {location.name}.
                    </p>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-white text-[#8DC63F] hover:bg-white/90"
                    >
                      <Link href="/order">Place Order</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Other Locations */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Other Locations</h3>
                    <div className="space-y-3">
                      {Object.entries(locationData)
                        .filter(([key]) => key !== city)
                        .map(([key, loc]) => (
                          <Link
                            key={key}
                            href={`/locations/${key}`}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                          >
                            <span className="font-medium">{loc.name}</span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground" />
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
