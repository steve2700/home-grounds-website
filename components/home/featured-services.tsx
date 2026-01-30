import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Kitchen Renovations",
    description: "Modern kitchen designs with quality finishes",
    image: "/images/hero-renovations.jpg",
    href: "/renovations/residential",
    category: "Renovations",
    categoryColor: "bg-primary",
  },
  {
    title: "Premium Beef",
    description: "Grass-fed, quality cuts from Zimbabwe farms",
    image: "/images/hero-meats.jpg",
    href: "/meats/beef",
    category: "Meats",
    categoryColor: "bg-secondary",
  },
  {
    title: "Commercial Fit-Outs",
    description: "Professional office and retail renovations",
    image: "/images/commercial-renovation.jpg",
    href: "/renovations/commercial",
    category: "Renovations",
    categoryColor: "bg-primary",
  },
  {
    title: "Fresh Poultry",
    description: "Farm-fresh chicken delivered daily",
    image: "/images/poultry.jpg",
    href: "/meats/poultry",
    category: "Meats",
    categoryColor: "bg-secondary",
  },
  {
    title: "Property Maintenance",
    description: "Preventive and emergency repairs",
    image: "/images/home-exterior.jpg",
    href: "/renovations/maintenance",
    category: "Renovations",
    categoryColor: "bg-primary",
  },
  {
    title: "Quality Pork",
    description: "Fresh cuts, sausages, and smoked products",
    image: "/images/pork.jpg",
    href: "/meats/pork",
    category: "Meats",
    categoryColor: "bg-secondary",
  },
]

export function FeaturedServices() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Services & Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our most popular offerings across both divisions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <Card className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`${service.categoryColor} text-background text-xs font-medium px-3 py-1 rounded-full`}>
                      {service.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center text-primary font-medium">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
