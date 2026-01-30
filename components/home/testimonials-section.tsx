"use client"

import { Star, Quote, MessageCircle, Award } from "lucide-react"

const testimonials = [
  {
    quote: "Home Grounds transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the quality exceeded our expectations.",
    author: "Sarah Moyo",
    location: "Harare",
    project: "Kitchen Renovation",
    rating: 5,
    category: "renovation",
  },
  {
    quote: "The quality of their beef is unmatched in Zimbabwe. Fresh, well-cut, and delivered right to our door. Our restaurant has never served better steaks.",
    author: "Tendai Chikomo",
    location: "Bulawayo",
    project: "Restaurant Supply",
    rating: 5,
    category: "meats",
  },
  {
    quote: "From the initial consultation to the final touches, the renovation team was excellent. They understood our vision and brought it to life perfectly.",
    author: "John & Grace Mutasa",
    location: "Masvingo",
    project: "Full House Renovation",
    rating: 5,
    category: "renovation",
  },
  {
    quote: "We've been ordering our weekly meat supply from Home Grounds for over a year. Consistent quality, fair prices, and always reliable delivery.",
    author: "Emily Ncube",
    location: "Waterfalls",
    project: "Weekly Meat Supply",
    rating: 5,
    category: "meats",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-zinc-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/30 to-transparent rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-red-100/30 to-transparent rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full px-5 py-2 mb-6 shadow-sm">
            <MessageCircle className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
            What Our Clients{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join over 500 happy clients who trust Home Grounds for their renovation and meat needs
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-600" />
              <span className="text-zinc-700 font-semibold">500+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span className="text-zinc-700 font-semibold">4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <span className="text-zinc-700 font-semibold">100% Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 ${
                testimonial.category === 'renovation' 
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-500' 
                  : 'bg-gradient-to-r from-red-500 to-orange-500'
              } rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200/50 h-full flex flex-col">
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <div className={`${
                    testimonial.category === 'renovation'
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-red-50 text-red-700 border-red-200'
                  } text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border`}>
                    {testimonial.category === 'renovation' ? 'Renovation' : 'Meats'}
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-amber-400 text-amber-400 transition-transform group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className={`${
                  testimonial.category === 'renovation'
                    ? 'bg-amber-50'
                    : 'bg-red-50'
                } w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <Quote className={`h-7 w-7 ${
                    testimonial.category === 'renovation'
                      ? 'text-amber-600'
                      : 'text-red-600'
                  }`} />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-zinc-700 leading-relaxed text-lg mb-8 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
                  <div className="flex-1">
                    <div className="font-bold text-zinc-900 text-lg mb-1">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-zinc-500 font-medium">
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${
                      testimonial.category === 'renovation'
                        ? 'text-amber-600'
                        : 'text-red-600'
                    }`}>
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-zinc-200 rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                Ready to Join Our Happy Clients?
              </h3>
              <p className="text-zinc-600">
                Get started with a free consultation or place your first order today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="/quote" 
                className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-900 font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Get a Quote
              </a>
              <a 
                href="/order" 
                className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
