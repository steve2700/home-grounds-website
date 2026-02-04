import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Calendar, DollarSign, Users, Award, CheckCircle, Star, Home, Building2, Wrench, PaintBucket } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio - Completed Renovation Projects Zimbabwe | Home Grounds Investments",
  description: "View Home Grounds Investments' completed renovation projects across Zimbabwe. Kitchen, bathroom, commercial, residential transformations in Harare, Bulawayo & Masvingo. Before & after photos.",
  keywords: "renovation portfolio Zimbabwe, completed projects Harare, kitchen renovation photos, bathroom remodel before after, commercial renovation examples, Home Grounds Investments projects, Bulawayo renovations, Masvingo construction",
  openGraph: {
    title: "Our Portfolio - Completed Renovation Projects in Zimbabwe",
    description: "Browse our portfolio of successful renovation projects across Zimbabwe. Quality transformations in kitchens, bathrooms, offices, and complete homes.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/portfolio",
  },
}

const projects = [
  {
    title: "Modern Kitchen Renovation",
    location: "Borrowdale, Harare",
    category: "Residential",
    type: "Kitchen",
    description: "Complete kitchen transformation featuring custom cabinetry, imported granite countertops, modern stainless steel appliances, and ambient lighting. This project included removing a wall to create an open-plan layout connecting to the dining area.",
    image: "/images/kitchen-renovation-harare.jpg",
    duration: "4 weeks",
    size: "25 sqm",
    year: "2024",
    features: ["Custom Cabinetry", "Granite Countertops", "Appliance Installation", "Open-Plan Design"],
  },
  {
    title: "Corporate Office Fit-Out",
    location: "CBD, Harare",
    category: "Commercial",
    type: "Office",
    description: "Modern open-plan office design for a growing tech company with 50+ employees. Included private meeting rooms, collaborative workspaces, break areas, and complete IT infrastructure integration with stylish modern finishes.",
    image: "/images/commercial-renovation.jpg",
    duration: "6 weeks",
    size: "300 sqm",
    year: "2024",
    features: ["Open-Plan Layout", "Meeting Rooms", "IT Infrastructure", "Break Areas"],
  },
  {
    title: "Luxury Full House Renovation",
    location: "Hillside, Bulawayo",
    category: "Residential",
    type: "Full House",
    description: "Complete home makeover including two modern kitchens, three bathrooms with luxury fixtures, hardwood flooring throughout, exterior painting, and landscaped garden. This comprehensive renovation transformed a 1980s house into a contemporary family home.",
    image: "/images/home-exterior.jpg",
    duration: "12 weeks",
    size: "280 sqm",
    year: "2023",
    features: ["2 Kitchens", "3 Bathrooms", "Hardwood Floors", "Exterior Paint"],
  },
  {
    title: "Restaurant Interior Renovation",
    location: "Avondale, Harare",
    category: "Commercial",
    type: "Restaurant",
    description: "Complete restaurant interior redesign with commercial kitchen upgrade, new seating for 80 guests, ambient lighting system, bar area construction, and health compliance upgrades. The renovation was completed in phases to minimize business disruption.",
    image: "/images/restaurant-interior-renovation-avondale.jpg",
    duration: "8 weeks",
    size: "200 sqm",
    year: "2024",
    features: ["Commercial Kitchen", "Seating for 80", "Bar Construction", "Lighting Design"],
  },
  {
    title: "Master Bathroom Spa Remodel",
    location: "Mount Pleasant, Masvingo",
    category: "Residential",
    type: "Bathroom",
    description: "Luxury master bathroom renovation featuring walk-in rain shower, freestanding bathtub, double vanity with marble countertops, heated flooring, and modern fixtures. Included complete waterproofing and ventilation upgrades.",
    image: "/images/master-bathroom-spa-remodel.jpg",
    duration: "3 weeks",
    size: "15 sqm",
    year: "2024",
    features: ["Walk-in Shower", "Heated Flooring", "Double Vanity", "Marble Finishes"],
  },
  {
    title: "Retail Store Transformation",
    location: "Eastgate Mall, Harare",
    category: "Commercial",
    type: "Retail",
    description: "Complete retail space redesign for a fashion boutique including modern display systems, strategic lighting to highlight merchandise, fitting rooms, POS area, and customer flow optimization. The design maximized the 120 sqm space.",
    image: "/images/retail-store-transformation-eastgate-mall.jpg",
    duration: "5 weeks",
    size: "120 sqm",
    year: "2023",
    features: ["Display Systems", "Strategic Lighting", "Fitting Rooms", "Flow Optimization"],
  },
  {
    title: "Residential Kitchen Extension",
    location: "Glen Lorne, Harare",
    category: "Residential",
    type: "Extension",
    description: "Kitchen extension adding 15 sqm to create a spacious modern kitchen with island, pantry, and breakfast nook. Included structural work, roofing, tiling, and seamless integration with existing architecture.",
    image: "/images/hero-renovations.jpg",
    duration: "6 weeks",
    size: "15 sqm addition",
    year: "2024",
    features: ["Kitchen Island", "Pantry", "Breakfast Nook", "Structural Extension"],
  },
  {
    title: "Medical Clinic Renovation",
    location: "Bulawayo",
    category: "Commercial",
    type: "Medical",
    description: "Complete medical clinic renovation including reception area, consultation rooms, treatment room, sterilization area, and patient facilities. All work completed to health department specifications with medical-grade finishes.",
    image: "/images/medical-clinic-renovation.jpg",
    duration: "7 weeks",
    size: "180 sqm",
    year: "2023",
    features: ["6 Consultation Rooms", "Medical Finishes", "Health Compliant", "Sterilization Area"],
  },
  {
    title: "Exterior Home Transformation",
    location: "Highlands, Harare",
    category: "Residential",
    type: "Exterior",
    description: "Complete exterior renovation including new boundary wall, driveway paving with interlocking bricks, exterior painting with weather-resistant paint, and landscaped front garden. The transformation dramatically improved curb appeal.",
    image: "/images/home-exterior.jpg",
    duration: "5 weeks",
    size: "Full exterior",
    year: "2024",
    features: ["Boundary Wall", "Driveway Paving", "Exterior Paint", "Landscaping"],
  },
]

const stats = [
  { icon: <Award className="h-8 w-8" />, number: "150+", label: "Projects Completed" },
  { icon: <Users className="h-8 w-8" />, number: "200+", label: "Happy Clients" },
  { icon: <Star className="h-8 w-8" />, number: "15+", label: "Years Experience" },
  { icon: <MapPin className="h-8 w-8" />, number: "3", label: "Cities Served" },
]

const categories = [
  { name: "All Projects", icon: <Home className="h-5 w-5" /> },
  { name: "Residential", icon: <Home className="h-5 w-5" /> },
  { name: "Commercial", icon: <Building2 className="h-5 w-5" /> },
]

const projectTypes = [
  { name: "Kitchen", icon: <Home className="h-4 w-4" />, href: "/renovations/kitchen-renovations" },
  { name: "Bathroom", icon: <Wrench className="h-4 w-4" />, href: "/renovations/bathroom-renovations" },
  { name: "Interior", icon: <PaintBucket className="h-4 w-4" />, href: "/renovations/interior-remodeling" },
  { name: "Office", icon: <Building2 className="h-4 w-4" />, href: "/renovations/commercial" },
  { name: "Restaurant", icon: <Building2 className="h-4 w-4" />, href: "/renovations/commercial" },
  { name: "Retail", icon: <Building2 className="h-4 w-4" />, href: "/renovations/commercial" },
  { name: "Full House", icon: <Home className="h-4 w-4" />, href: "/renovations/residential" },
  { name: "Exterior", icon: <PaintBucket className="h-4 w-4" />, href: "/renovations/exterior-home-improvements" },
]

const testimonials = [
  {
    name: "Sarah M.",
    project: "Kitchen Renovation",
    location: "Borrowdale, Harare",
    quote: "Home Grounds Investments transformed our outdated kitchen into a modern masterpiece. The attention to detail and quality of workmanship exceeded our expectations.",
    rating: 5,
  },
  {
    name: "John K.",
    project: "Office Fit-Out",
    location: "CBD, Harare",
    quote: "Professional service from start to finish. They completed our office renovation on time and within budget. Our team loves the new workspace.",
    rating: 5,
  },
  {
    name: "Patricia N.",
    project: "Full House Renovation",
    location: "Bulawayo",
    quote: "The team handled our complete home renovation beautifully. Communication was excellent, and the final result is stunning. Highly recommended.",
    rating: 5,
  },
]

export default function PortfolioPage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Renovation Projects Portfolio",
    "description": "Completed renovation projects by Home Grounds Investments across Zimbabwe",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Home Grounds Investments",
      "url": "https://homegrounds.co.zw",
      "telephone": "+263780289132",
      "areaServed": ["Harare", "Bulawayo", "Masvingo"]
    }
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-foreground text-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-background/70 mb-6">
                <Link href="/" className="hover:text-background">Home</Link>
                <span>/</span>
                <span className="text-background">Portfolio</span>
              </nav>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Our Renovation Portfolio
              </h1>
              <p className="text-xl md:text-2xl text-background/90 leading-relaxed mb-4">
                Browse our completed renovation projects across Zimbabwe. Quality craftsmanship, satisfied clients, and transformations that speak for themselves.
              </p>
              <p className="text-lg text-background/80">
                From modern kitchens in Harare to commercial fit-outs in Bulawayo, see how Home Grounds Investments has transformed spaces across Zimbabwe.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Transforming Spaces Across Zimbabwe Since 2009
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  At Home Grounds Investments, we take pride in every project we complete. Our portfolio showcases residential renovations including modern kitchens, luxury bathrooms, and complete home transformations, as well as commercial projects featuring office fit-outs, retail stores, restaurants, and medical facilities across Harare, Bulawayo, and Masvingo.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Each project represents our commitment to quality craftsmanship, attention to detail, and client satisfaction. Browse our work below to see the Home Grounds Investments difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Buttons - Visual Only */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-primary" : ""}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} by Home Grounds Investments in ${project.location}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        variant={project.category === "Residential" ? "default" : "secondary"}
                        className={project.category === "Residential" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}
                      >
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="bg-background/90 text-foreground border-border">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-2 pt-4 border-t border-border">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Home className="h-3 w-3" />
                          {project.size}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types - WITH INTERNAL LINKS */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Project Types We Excel At
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Specialized expertise across various renovation categories
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {projectTypes.map((type, index) => (
                <Link key={index} href={type.href} className="group">
                  <Card className="border border-border hover:border-primary hover:shadow-lg transition-all">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {type.icon}
                      </div>
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {type.name} Renovations
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground text-lg">
                Real feedback from real renovation projects
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                      <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How We Deliver Exceptional Results
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our proven process ensures every project meets our high standards
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Initial Consultation", desc: "Free site visit and detailed discussion of your vision and budget" },
                  { title: "Design & Planning", desc: "Professional designs, 3D renderings, and comprehensive quotes" },
                  { title: "Permit Handling", desc: "We manage all approvals and regulatory requirements" },
                  { title: "Expert Execution", desc: "Skilled craftsmen deliver quality work on schedule" },
                  { title: "Quality Checks", desc: "Regular inspections ensure standards are maintained" },
                  { title: "Final Handover", desc: "Walkthrough, warranty, and aftercare support" },
                ].map((step, index) => (
                  <Card key={index} className="border border-border">
                    <CardContent className="p-6 flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Serving Major Cities Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Quality renovations in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { city: "Harare", suburbs: "Borrowdale, Mount Pleasant, Highlands, Glen Lorne, Avondale, CBD", projects: "80+ projects" },
                { city: "Bulawayo", suburbs: "Hillside, Burnside, Suburbs, CBD", projects: "45+ projects" },
                { city: "Masvingo", suburbs: "All areas and surrounding districts", projects: "25+ projects" },
              ].map((area, index) => (
                <Card key={index} className="border border-border text-center">
                  <CardContent className="p-6">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{area.city}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{area.suburbs}</p>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {area.projects}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Renovation Project?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-4 max-w-2xl mx-auto">
              Join our growing list of satisfied clients across Zimbabwe. Let Home Grounds Investments bring your vision to life with quality craftsmanship and professional service.
            </p>
            <p className="text-primary-foreground/80 mb-8">
              Get a free consultation and detailed quote for your renovation project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 text-lg px-8">
                <Link href="/quote">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
