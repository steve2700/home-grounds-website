import { Shield, MapPin, Heart, Award } from "lucide-react"

const trustPillars = [
  {
    icon: Award,
    title: "Local Expertise",
    description: "Years of experience serving Zimbabwe's renovation and meat industry",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "We stand behind every project and product we deliver",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: MapPin,
    title: "Multi-City Service",
    description: "Serving Harare, Bulawayo, Masvingo, and Waterfalls",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Family-Owned Values",
    description: "Treating every customer like family with integrity and care",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Home Grounds?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built on trust, delivered with excellence. Here's what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {trustPillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${pillar.bgColor} mb-6 transition-transform group-hover:scale-110`}>
                <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 py-12 px-8 bg-foreground rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-background">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-background/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">4</div>
              <div className="text-background/70">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-background/70">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <div className="text-background/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
