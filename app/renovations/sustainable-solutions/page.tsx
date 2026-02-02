import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, Leaf, Sun, Droplets, Wind, Battery, TreePine, Recycle, ThermometerSun, Lightbulb, Home, Sprout, Award, Star, MapPin, TrendingDown, DollarSign, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Sustainable & Eco-Friendly Renovations Zimbabwe | Solar, Green Building & Energy Efficient Design Harare",
  description: "Transform your property with sustainable renovations in Zimbabwe. Expert solar installation, rainwater harvesting, energy-efficient design, and green building solutions in Harare, Bulawayo & Masvingo. Reduce costs, increase value.",
  keywords: "sustainable renovations Zimbabwe, green building Harare, solar panel installation, eco-friendly construction, energy efficient homes Zimbabwe, rainwater harvesting, passive cooling, sustainable architecture Bulawayo, LEED building, off-grid solutions Masvingo",
  openGraph: {
    title: "Sustainable Renovations Zimbabwe | Solar & Green Building Experts | Home Grounds Investments",
    description: "Cut energy costs by 60% with sustainable renovations. Professional solar installation, green building design, and eco-friendly construction across Zimbabwe.",
    type: "website",
    locale: "en_ZW",
  },
  alternates: {
    canonical: "https://homegrounds.co.zw/renovations/sustainable-solutions",
  },
}

const sustainableServices = [
  {
    title: "Solar Energy Systems",
    description: "Harness Zimbabwe's abundant sunshine with professional solar panel installation and complete off-grid solutions. Reduce your electricity bills by up to 60% and protect yourself from load-shedding with reliable, renewable solar power.",
    features: ["Rooftop Solar Panel Installation", "Ground-Mounted PV Systems", "Solar Water Heating (Geysers)", "Battery Storage & Inverter Systems", "Grid-Tied & Off-Grid Solutions", "Solar Pump Installation"],
    icon: <Sun className="h-8 w-8 text-primary" />,
    savings: "Save 40-60% on electricity costs",
  },
  {
    title: "Water Conservation & Harvesting",
    description: "Combat water scarcity with intelligent water management systems. Our rainwater harvesting and greywater recycling solutions help you become water-independent while reducing municipal water bills in drought-prone Zimbabwe.",
    features: ["Rainwater Harvesting Systems", "Storage Tank Installation", "Greywater Recycling Systems", "Water-Efficient Plumbing Fixtures", "Borehole Integration", "Smart Irrigation Systems"],
    icon: <Droplets className="h-8 w-8 text-primary" />,
    savings: "Reduce water bills by 30-50%",
  },
  {
    title: "Energy-Efficient Design & Retrofitting",
    description: "Transform existing buildings with energy-efficient upgrades that dramatically reduce power consumption. From LED lighting to advanced insulation and passive cooling strategies adapted to Zimbabwe's climate.",
    features: ["LED Lighting Installation", "High-Performance Insulation", "Energy-Efficient Windows & Doors", "Smart HVAC Systems", "Ceiling Fans & Natural Ventilation", "Energy Audits & Optimization"],
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    savings: "Cut energy use by 25-40%",
  },
  {
    title: "Passive Cooling & Climate Design",
    description: "Design buildings that naturally stay cool in Zimbabwe's hot climate without relying on air conditioning. Our passive cooling strategies use cross-ventilation, thermal mass, and strategic shading to maintain comfortable temperatures.",
    features: ["Cross-Ventilation Design", "Deep Roof Overhangs & Shading", "Thermal Mass Integration", "Strategic Window Placement", "Natural Ventilation Systems", "Reflective Roofing Materials"],
    icon: <Wind className="h-8 w-8 text-primary" />,
    savings: "Reduce cooling costs by 50-70%",
  },
  {
    title: "Sustainable Building Materials",
    description: "Build or renovate with eco-friendly, locally-sourced materials that reduce your carbon footprint and support the Zimbabwean economy. From rammed earth to recycled concrete and sustainable timber.",
    features: ["Rammed Earth Construction", "Compressed Stabilised Earth Blocks (CSEBs)", "Recycled Concrete & Steel", "Sustainable Local Timber", "Bamboo Applications", "Low-VOC Paints & Finishes"],
    icon: <Recycle className="h-8 w-8 text-primary" />,
    savings: "Lower construction costs by 15-30%",
  },
  {
    title: "Green Landscaping & Biodiversity",
    description: "Create sustainable outdoor spaces that conserve water, support local biodiversity, and enhance your property's microclimate. Indigenous plants, permeable surfaces, and edible gardens designed for Zimbabwe's conditions.",
    features: ["Indigenous Plant Selection", "Drought-Resistant Landscaping", "Permeable Paving & Surfaces", "Edible Garden Design", "Composting Systems", "Native Tree Planting"],
    icon: <TreePine className="h-8 w-8 text-primary" />,
    savings: "Save 40% on garden water use",
  },
]

const sustainableBenefits = [
  {
    icon: <TrendingDown className="h-8 w-8" />,
    title: "Dramatically Lower Utility Bills",
    description: "Solar, water harvesting, and energy efficiency reduce monthly costs by 40-70%",
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: "Increase Property Value",
    description: "Green buildings command 15-25% higher prices in Zimbabwe's market",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Energy Independence",
    description: "Protect yourself from load-shedding and utility price increases",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Environmental Impact",
    description: "Reduce carbon footprint by 30-50% and preserve Zimbabwe's resources",
  },
  {
    icon: <ThermometerSun className="h-8 w-8" />,
    title: "Superior Comfort",
    description: "Passive cooling and smart design keep homes comfortable year-round",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Future-Proof Investment",
    description: "Meet emerging green building standards and regulations",
  },
]

const sustainableProjects = [
  {
    name: "Residential Solar Installation",
    location: "Borrowdale, Harare",
    description: "Complete off-grid solar system with 10kW capacity, battery storage, and solar water heating for a 4-bedroom home.",
    results: ["65% reduction in electricity costs", "Zero load-shedding impact", "USD $850 monthly savings"],
  },
  {
    name: "Commercial Green Retrofit",
    location: "CBD, Harare",
    description: "Office building retrofit with solar panels, LED lighting, rainwater harvesting, and energy-efficient HVAC systems.",
    results: ["45% energy reduction", "30% water savings", "ROI in 3.5 years"],
  },
  {
    name: "Sustainable New Build",
    location: "Masvingo",
    description: "New eco-home with rammed earth walls, passive cooling, solar power, and complete water independence.",
    results: ["Off-grid capable", "70% lower running costs", "30% cheaper to build"],
  },
]

const greenBuildingStandards = [
  {
    standard: "EDGE Certification",
    description: "Excellence in Design for Greater Efficiencies - internationally recognized green building certification adapted for Zimbabwe's context.",
  },
  {
    standard: "Local Green Guidelines",
    description: "Zimbabwe Green Building Council standards and CTCN/UN Habitat guidelines for sustainable construction.",
  },
  {
    standard: "Energy Performance",
    description: "Following Zimbabwe's emerging Energy Conservation Building Codes for optimal efficiency.",
  },
]

const sustainableFAQs = [
  {
    question: "How much can I really save with solar panels in Zimbabwe?",
    answer: "Most residential solar installations in Zimbabwe achieve 40-60% reduction in electricity costs. With Zimbabwe's abundant sunshine (averaging 3,000+ hours annually) and rising ZESA tariffs, solar systems typically pay for themselves within 4-6 years while providing 25+ years of savings.",
  },
  {
    question: "Will sustainable renovations increase my property value?",
    answer: "Yes significantly. Recent Zimbabwe Green Building Council studies show properties with solar systems, water independence, and energy efficiency command 15-25% higher market values. With load-shedding and water shortages, buyers actively seek energy-resilient homes.",
  },
  {
    question: "What's the payback period for sustainable renovations?",
    answer: "Payback varies by upgrade: Solar systems typically 4-6 years, LED lighting under 1 year, rainwater harvesting 3-5 years, and insulation 2-4 years. Combined, most sustainable renovation packages achieve full ROI within 5-7 years while immediately reducing monthly costs.",
  },
  {
    question: "Can you make my existing home sustainable, or is it only for new builds?",
    answer: "Absolutely! Sustainable retrofitting is highly effective for existing properties. We specialize in upgrading older homes with solar panels, improved insulation, LED lighting, rainwater harvesting, and passive cooling modifications without major structural changes.",
  },
  {
    question: "How do passive cooling strategies work in Zimbabwe's climate?",
    answer: "Zimbabwe's climate is ideal for passive cooling. We use cross-ventilation to capture prevailing breezes, deep overhangs to block harsh summer sun, thermal mass (thick walls) to absorb daytime heat and release it at night, and strategic window placement. These techniques can reduce indoor temperatures by 5-10°C without air conditioning.",
  },
  {
    question: "Are sustainable building materials really cheaper?",
    answer: "Yes, especially when sourced locally. Rammed earth and Compressed Stabilised Earth Blocks (CSEBs) can reduce construction costs by 15-30% compared to conventional materials while providing excellent thermal performance. They eliminate transportation costs and support local economies.",
  },
  {
    question: "What government incentives exist for green building in Zimbabwe?",
    answer: "While comprehensive incentives are still developing, solar equipment currently enjoys duty-free importation. The government is actively working with CTCN and UN Habitat to establish green building by-laws and incentive structures. Early adopters position themselves advantageously for future programs.",
  },
  {
    question: "How long does a solar installation take?",
    answer: "Residential solar installations typically take 3-7 days depending on system size. This includes panel mounting, inverter installation, battery setup, and testing. We handle all permits and grid connection paperwork for grid-tied systems.",
  },
]

const serviceAreas = [
  { 
    name: "Harare", 
    description: "Leading the green building revolution with solar retrofits in Borrowdale, Mount Pleasant, Highlands, and sustainable new developments citywide" 
  },
  { 
    name: "Bulawayo", 
    description: "Providing eco-friendly renovations, solar solutions, and water conservation systems across all suburbs" 
  },
  { 
    name: "Masvingo", 
    description: "Specializing in off-grid solar, rainwater harvesting, and climate-responsive design throughout the province" 
  },
]

export default function SustainablePage() {
  // Schema markup for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Sustainable Renovations and Green Building Services",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Home Grounds Investments",
      "url": "https://homegrounds.co.zw",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ZW"
      },
      "telephone": "+263780289132",
      "areaServed": ["Harare", "Bulawayo", "Masvingo"],
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
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
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/images/sustainable-building.jpg"
              alt="Sustainable green building with solar panels in Zimbabwe - eco-friendly architecture and renewable energy"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl text-background">
              <nav className="flex items-center gap-2 text-sm text-background/70 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-background">Home</Link>
                <span>/</span>
                <Link href="/renovations" className="hover:text-background">Renovations</Link>
                <span>/</span>
                <span className="text-background">Sustainable</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-background">Eco-Friendly Building Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sustainable & Eco-Friendly Renovations in Zimbabwe
              </h1>
              <p className="text-xl md:text-2xl text-background/90 mb-4">
                Transform your property with green building solutions, solar energy, and sustainable design. Reduce costs by 40-70%, increase value by 25%, and protect yourself from load-shedding.
              </p>
              <p className="text-lg text-background/80 mb-8">
                ✓ Solar Installation  ✓ Rainwater Harvesting  ✓ Energy Efficiency  ✓ Passive Cooling  ✓ Green Materials
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg">
                  <Link href="/quote">
                    Get Free Green Building Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-background/10 border-background text-background hover:bg-background hover:text-foreground backdrop-blur-sm text-lg">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +263 78 028 9132
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Banner */}
        <section className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground text-center md:text-left">
              <div className="flex items-center gap-3">
                <Sun className="h-8 w-8 flex-shrink-0" />
                <div>
                  <div className="font-bold text-2xl">60%</div>
                  <div className="text-sm">Lower Energy Costs</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-8 w-8 flex-shrink-0" />
                <div>
                  <div className="font-bold text-2xl">25%</div>
                  <div className="text-sm">Property Value Increase</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 flex-shrink-0" />
                <div>
                  <div className="font-bold text-2xl">100%</div>
                  <div className="text-sm">Load-Shedding Protection</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section - SEO Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Zimbabwe's Leading Sustainable Building & Green Renovation Experts
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Home Grounds Investments is at the forefront of Zimbabwe's green building revolution, helping property owners transform their homes and commercial buildings into sustainable, energy-independent, and cost-efficient spaces. As energy costs rise and environmental challenges intensify, sustainable renovations are no longer optional—they're essential investments that pay dividends for decades.
                </p>
                <p>
                  Zimbabwe faces unique challenges including persistent load-shedding, water scarcity in urban areas, rising utility costs, and increasing climate variability. Our sustainable renovation solutions directly address these challenges while positioning your property as a valuable, future-proof asset. From professional solar panel installation that eliminates load-shedding concerns to rainwater harvesting systems that ensure water independence, we provide comprehensive green building solutions tailored to Zimbabwe's specific conditions.
                </p>
                <p>
                  With Zimbabwe's abundant sunshine averaging over 3,000 hours annually, solar energy is not just viable—it's optimal. Our projects consistently achieve 40-60% reductions in electricity costs, with many properties becoming completely off-grid capable. Combined with passive cooling strategies adapted to Zimbabwe's hot climate, energy-efficient retrofitting, sustainable local building materials, and water conservation systems, our sustainable renovations typically reduce total property operating costs by 50-70% while dramatically increasing comfort and resilience.
                </p>
                <p>
                  We follow international green building standards including EDGE certification and work closely with the Zimbabwe Green Building Council and emerging national green building codes. Whether you're retrofitting an existing property in Harare's northern suburbs, building a new eco-home in Bulawayo, or creating an off-grid retreat in Masvingo, our team delivers professional, proven sustainable solutions backed by comprehensive warranties and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainable Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Sprout className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Comprehensive Green Solutions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Complete Sustainable Renovation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From solar energy to sustainable materials, we provide integrated green building solutions that reduce costs, increase value, and protect the environment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {sustainableServices.map((service, index) => (
                <Card key={index} className="border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-6">
                      <p className="text-primary font-semibold text-sm flex items-center gap-2">
                        <TrendingDown className="h-4 w-4" />
                        {service.savings}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-sm text-foreground mb-3">What We Provide:</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Sustainable Renovations in Zimbabwe?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Financial savings, environmental responsibility, and future-proof your property investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sustainableBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies / Projects Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Proven Sustainable Renovation Success Stories
              </h2>
              <p className="text-muted-foreground text-lg">
                Real results from our green building projects across Zimbabwe
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sustainableProjects.map((project, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-foreground mb-1">{project.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="border-t border-border pt-4">
                      <p className="text-sm font-semibold text-foreground mb-2">Results:</p>
                      <ul className="space-y-1">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-primary">
                            <CheckCircle className="h-3 w-3 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Green Building Standards */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certified Green Building Standards
              </h2>
              <p className="text-muted-foreground text-lg">
                We follow international and local standards for sustainable construction
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {greenBuildingStandards.map((standard, index) => (
                <Card key={index} className="border border-border text-center">
                  <CardContent className="p-6">
                    <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">{standard.standard}</h3>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Sustainable Renovation Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Energy & Sustainability Audit",
                    description: "Comprehensive assessment of your property's current energy use, water consumption, and sustainability opportunities. We identify the highest-impact improvements tailored to your budget.",
                  },
                  {
                    step: "2",
                    title: "Custom Green Building Plan",
                    description: "Detailed sustainable renovation plan with ROI projections, energy savings estimates, and prioritized recommendations. Options for phased implementation to fit your budget.",
                  },
                  {
                    step: "3",
                    title: "Professional Installation",
                    description: "Expert installation of solar systems, water harvesting, insulation, and sustainable materials by licensed professionals. Quality workmanship backed by comprehensive warranties.",
                  },
                  {
                    step: "4",
                    title: "Performance Monitoring & Support",
                    description: "Ongoing monitoring of system performance, energy savings verification, and continued support. We ensure your sustainable renovations deliver promised results.",
                  },
                ].map((process, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sustainable Building Services Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg">
                Professional green renovations and solar installations in your area
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{area.name}</h3>
                    <p className="text-muted-foreground text-sm">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Sustainable Renovation FAQs
              </h2>
              <p className="text-muted-foreground text-lg">
                Common questions about green building and eco-friendly renovations in Zimbabwe
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {sustainableFAQs.map((faq, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Green Building Clients Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: "Robert M.", 
                  location: "Mount Pleasant, Harare", 
                  review: "Our solar installation paid for itself in 4 years. We haven't paid an electricity bill in 18 months and our property value increased by 20%. Best investment we've made." 
                },
                { 
                  name: "Patricia K.", 
                  location: "Bulawayo", 
                  review: "The sustainable retrofit transformed our office building. Energy costs dropped 55%, staff comfort improved dramatically, and tenants actually compete to rent from us now." 
                },
                { 
                  name: "Tendai S.", 
                  location: "Masvingo", 
                  review: "They built us a completely off-grid eco-home with solar, rainwater harvesting, and passive cooling. We're 100% independent and our monthly running costs are almost zero." 
                },
              ].map((testimonial, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4 text-center">
            <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-6">
              Ready to Transform Your Property into a Sustainable, Energy-Independent Asset?
            </h2>
            <p className="text-background/90 text-lg mb-4 max-w-2xl mx-auto">
              Join Zimbabwe's green building revolution. Reduce your costs by 40-70%, protect yourself from load-shedding, increase your property value by 25%, and contribute to a sustainable future.
            </p>
            <p className="text-background/80 mb-8 max-w-xl mx-auto">
              Free energy audits and custom sustainable renovation plans. Serving Harare, Bulawayo, Masvingo, and all of Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
                <Link href="/quote">Get Free Sustainability Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-background text-background hover:bg-background hover:text-foreground bg-transparent text-lg px-8">
                <a href="tel:+263780289132">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +263 78 028 9132
                </a>
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
