import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

const locations = [
  {
    city: "Harare",
    description: "Capital city headquarters serving greater Harare area",
    services: ["Full Renovations", "Meat Delivery", "Consultations"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/harare",
  },
  {
    city: "Bulawayo",
    description: "Serving Bulawayo and surrounding provinces",
    services: ["Residential", "Commercial", "Meat Orders"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/bulawayo",
  },
  {
    city: "Masvingo",
    description: "Southern region services and delivery",
    services: ["Home Renovations", "Fresh Meats", "Maintenance"],
    phone: "+263 78 028 9132",
    hours: "Mon-Fri: 8AM-5PM",
    href: "/locations/masvingo",
  },
  {
    city: "Waterfalls",
    description: "Head office and main operations center",
    services: ["All Services", "Butchery", "Walk-in Available"],
    phone: "+263 78 028 9132",
    hours: "Mon-Sat: 7AM-6PM",
    href: "/locations/waterfalls",
    isHeadquarters: true,
  },
]

export function LocationsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Come To You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With locations across Zimbabwe, quality renovations and fresh meats are always within reach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Link key={index} href={location.href}>
              <Card className={`h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group ${location.isHeadquarters ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6">
                  {location.isHeadquarters && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded mb-4">
                      Head Office
                    </span>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{location.city}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{location.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{location.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{location.hours}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {location.services.map((service, i) => (
                      <span key={i} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium text-sm">
                    View Location
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
