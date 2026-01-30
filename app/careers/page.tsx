import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Briefcase,
  Users,
  Heart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers | Join Our Team",
  description:
    "Join the Home Grounds Investments team. We're looking for talented individuals in construction, butchery, sales, and administration across Zimbabwe.",
  alternates: {
    canonical: "https://homegrounds.co.zw/careers",
  },
}

const jobOpenings = [
  {
    id: 1,
    title: "Senior Project Manager - Renovations",
    department: "Renovations",
    location: "Harare",
    type: "Full-time",
    description:
      "Lead renovation projects from conception to completion. Manage teams, budgets, and client relationships.",
    requirements: [
      "5+ years construction/renovation experience",
      "Project management certification preferred",
      "Strong leadership and communication skills",
      "Valid driver's license",
    ],
  },
  {
    id: 2,
    title: "Skilled Carpenter / Joiner",
    department: "Renovations",
    location: "Harare / Bulawayo",
    type: "Full-time",
    description:
      "Create custom cabinetry, fit kitchens, and complete carpentry work for residential and commercial projects.",
    requirements: [
      "3+ years carpentry experience",
      "Ability to read technical drawings",
      "Own basic tools",
      "Attention to detail",
    ],
  },
  {
    id: 3,
    title: "Master Butcher",
    department: "Meats",
    location: "Waterfalls",
    type: "Full-time",
    description:
      "Lead our butchery operations, train junior staff, and ensure quality standards are maintained.",
    requirements: [
      "5+ years butchery experience",
      "Knowledge of meat cuts and processing",
      "Food hygiene certification",
      "Leadership experience",
    ],
  },
  {
    id: 4,
    title: "Sales Representative",
    department: "Sales",
    location: "Bulawayo",
    type: "Full-time",
    description:
      "Drive sales for both renovation services and meat products in the Bulawayo region.",
    requirements: [
      "2+ years sales experience",
      "Excellent communication skills",
      "Self-motivated",
      "Own vehicle preferred",
    ],
  },
  {
    id: 5,
    title: "Delivery Driver",
    department: "Meats",
    location: "Harare",
    type: "Full-time",
    description:
      "Deliver fresh meat products to customers across Harare. Ensure proper handling and customer satisfaction.",
    requirements: [
      "Valid Class 4 driver's license",
      "Clean driving record",
      "Good knowledge of Harare",
      "Customer service skills",
    ],
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Clear career paths and promotion opportunities",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Medical aid contributions for full-time staff",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Supportive, family-oriented work environment",
  },
  {
    icon: Briefcase,
    title: "Training",
    description: "Ongoing skills development and training programs",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Build Your Career with Home Grounds
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
                Join a growing team that values quality, integrity, and
                community. We&apos;re always looking for talented individuals to
                help us serve Zimbabwe better.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-[#8DC63F] hover:bg-[#7ab635]"
              >
                <a href="#openings">View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At Home Grounds, we believe our people are our greatest asset.
                We invest in our team and create an environment where everyone
                can thrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#8DC63F]/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-[#8DC63F]" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="openings" className="py-16 md:py-24 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Current Openings
              </h2>
              <p className="text-muted-foreground">
                Find your next opportunity with Home Grounds Investments
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {jobOpenings.map((job) => (
                <Card key={job.id}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">{job.department}</Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                      <Button className="bg-[#E31E24] hover:bg-[#c91a1f] w-full md:w-auto">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>
                    <div>
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {job.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-[#8DC63F] mt-0.5 flex-shrink-0" />
                            {req}
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

        {/* General Application */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Don&apos;t See Your Role?
                </h2>
                <p className="text-muted-foreground mb-6">
                  We&apos;re always interested in meeting talented individuals.
                  Send us your CV and tell us how you can contribute to our
                  team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#E31E24] text-[#E31E24] hover:bg-[#E31E24] hover:text-white bg-transparent"
                  >
                    <a href="mailto:careers@homegrounds.co.zw">
                      Send Your CV
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
