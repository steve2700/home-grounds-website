import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Home Grounds transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the quality exceeded our expectations.",
    author: "Sarah Moyo",
    location: "Harare",
    project: "Kitchen Renovation",
    rating: 5,
  },
  {
    quote: "The quality of their beef is unmatched in Zimbabwe. Fresh, well-cut, and delivered right to our door. Our restaurant has never served better steaks.",
    author: "Tendai Chikomo",
    location: "Bulawayo",
    project: "Restaurant Supply",
    rating: 5,
  },
  {
    quote: "From the initial consultation to the final touches, the renovation team was excellent. They understood our vision and brought it to life perfectly.",
    author: "John & Grace Mutasa",
    location: "Masvingo",
    project: "Full House Renovation",
    rating: 5,
  },
  {
    quote: "We've been ordering our weekly meat supply from Home Grounds for over a year. Consistent quality, fair prices, and always reliable delivery.",
    author: "Emily Ncube",
    location: "Waterfalls",
    project: "Weekly Meat Supply",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join over 500 happy clients who trust Home Grounds for their renovation and meat needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/30 mb-4" />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
