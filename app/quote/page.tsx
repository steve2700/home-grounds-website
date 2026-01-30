import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Shield,
  Calendar,
  FileText,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Get a Free Quote | Renovation Services",
  description:
    "Request a free renovation quote from Home Grounds Investments. Kitchen, bathroom, commercial and residential renovations across Zimbabwe.",
  alternates: {
    canonical: "https://homegrounds.co.zw/quote",
  },
}

const projectTypes = [
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Full House Renovation",
  "Office Fit-Out",
  "Retail Renovation",
  "Property Maintenance",
  "Waterproofing",
  "Solar Installation",
  "Other",
]

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "Over $50,000",
  "Not Sure - Need Consultation",
]

const timelines = [
  "As Soon As Possible",
  "Within 1 Month",
  "1-3 Months",
  "3-6 Months",
  "6+ Months",
  "Just Planning",
]

const benefits = [
  {
    icon: Shield,
    title: "No Obligation",
    description: "Free consultation with no pressure to commit",
  },
  {
    icon: Calendar,
    title: "Quick Response",
    description: "We respond within 24 hours",
  },
  {
    icon: FileText,
    title: "Detailed Quote",
    description: "Clear breakdown of costs and timeline",
  },
]

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Get Your Free Renovation Quote
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
                Tell us about your project and receive a detailed, no-obligation
                quote within 24 hours. Our experts will help you plan your
                perfect renovation.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-center gap-2 text-white"
                  >
                    <benefit.icon className="h-5 w-5 text-[#8DC63F]" />
                    <span className="text-sm">{benefit.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              placeholder="Your first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              placeholder="Your last name"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+263 7X XXX XXXX"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Property Location *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your area" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="harare">Harare</SelectItem>
                              <SelectItem value="bulawayo">Bulawayo</SelectItem>
                              <SelectItem value="masvingo">Masvingo</SelectItem>
                              <SelectItem value="waterfalls">
                                Waterfalls
                              </SelectItem>
                              <SelectItem value="other">
                                Other Location
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Project Information */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-foreground">
                          Project Information
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="projectType">Project Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="What type of project?" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem
                                  key={type}
                                  value={type.toLowerCase().replace(/\s+/g, "-")}
                                >
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="budget">Estimated Budget</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                {budgetRanges.map((range) => (
                                  <SelectItem
                                    key={range}
                                    value={range.toLowerCase().replace(/\s+/g, "-")}
                                  >
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="timeline">Desired Timeline</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="When do you want to start?" />
                              </SelectTrigger>
                              <SelectContent>
                                {timelines.map((timeline) => (
                                  <SelectItem
                                    key={timeline}
                                    value={timeline
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}
                                  >
                                    {timeline}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="description">
                            Project Description *
                          </Label>
                          <Textarea
                            id="description"
                            placeholder="Tell us about your project... What are you looking to achieve? Any specific requirements or preferences?"
                            rows={5}
                            required
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-6">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#E31E24] hover:bg-[#c91a1f] text-white"
                        >
                          Submit Quote Request
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-sm text-muted-foreground text-center mt-4">
                          By submitting, you agree to our{" "}
                          <Link
                            href="/privacy"
                            className="underline hover:text-foreground"
                          >
                            Privacy Policy
                          </Link>
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-[#F5F5F5]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      What Happens Next?
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-sm font-medium">
                          1
                        </div>
                        <div>
                          <p className="font-medium">We Review Your Request</p>
                          <p className="text-sm text-muted-foreground">
                            Our team evaluates your project details
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-sm font-medium">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Schedule Consultation</p>
                          <p className="text-sm text-muted-foreground">
                            We call to discuss details and arrange a site visit
                          </p>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E31E24] text-white flex items-center justify-center text-sm font-medium">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Receive Detailed Quote</p>
                          <p className="text-sm text-muted-foreground">
                            Get a comprehensive breakdown of costs
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Need Immediate Help?
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+263780289132"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Phone className="h-5 w-5 text-[#E31E24]" />
                        <div>
                          <p className="font-medium">+263 78 028 9132</p>
                          <p className="text-sm text-muted-foreground">
                            Call us directly
                          </p>
                        </div>
                      </a>
                      <a
                        href="mailto:info@homegrounds.co.zw"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-[#E31E24]" />
                        <div>
                          <p className="font-medium">info@homegrounds.co.zw</p>
                          <p className="text-sm text-muted-foreground">
                            Email us anytime
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#8DC63F]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-[#8DC63F]" />
                      <h3 className="text-lg font-semibold">Operating Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">8:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <div className="bg-[#2D2D2D] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {[
                      "Licensed & Insured",
                      "Free Site Inspections",
                      "Transparent Pricing",
                      "Quality Guaranteed",
                      "Local Zimbabwe Team",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8DC63F]" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
