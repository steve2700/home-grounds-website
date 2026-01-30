import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Hammer, Beef } from "lucide-react"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Home Grounds renovation services and premium meats. Learn about our process, pricing, and delivery.",
  alternates: {
    canonical: "https://homegrounds.co.zw/faq",
  },
}

const renovationFAQs = [
  {
    question: "How do I get a quote for my renovation project?",
    answer:
      "Getting a quote is easy! You can fill out our online quote form, call us at +263 78 028 9132, or send us a WhatsApp message. We typically respond within 24 hours and can schedule a free site visit to provide an accurate estimate.",
  },
  {
    question: "What areas do you serve for renovations?",
    answer:
      "We provide renovation services across Zimbabwe, with primary operations in Harare (including Waterfalls), Bulawayo, and Masvingo. For projects outside these areas, please contact us to discuss availability.",
  },
  {
    question: "How long does a typical kitchen renovation take?",
    answer:
      "A standard kitchen renovation typically takes 2-4 weeks, depending on the scope of work. Full gut renovations with custom cabinetry may take 6-8 weeks. We'll provide a detailed timeline with your quote.",
  },
  {
    question: "Do you provide materials, or should I buy my own?",
    answer:
      "We can handle everything! We source quality materials through our trusted suppliers and pass on bulk discounts to you. However, if you prefer specific materials or have already purchased some, we're happy to work with what you provide.",
  },
  {
    question: "What payment terms do you offer?",
    answer:
      "We typically require a 30% deposit to commence work, with milestone payments throughout the project. The final 20% is due upon completion and your satisfaction. We accept bank transfers, EcoCash, and cash payments.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes! We provide a 12-month workmanship warranty on all renovation projects. Manufacturer warranties on materials and fixtures are passed on to you directly. We stand behind the quality of our work.",
  },
  {
    question: "Can you help with building plans and permits?",
    answer:
      "Absolutely. For larger projects requiring plans and council approval, we work with qualified architects and can guide you through the permit process. We ensure all work complies with local building regulations.",
  },
  {
    question: "What happens if there are unexpected issues during renovation?",
    answer:
      "Surprises can happen, especially in older properties. We document everything and immediately communicate any issues found. We'll provide options and pricing before proceeding with any additional work.",
  },
  {
    question: "Do you do emergency repairs?",
    answer:
      "Yes, we offer emergency repair services for urgent issues like burst pipes, electrical faults, and roof leaks. Call our emergency line for immediate assistance.",
  },
  {
    question: "Can I stay in my home during renovations?",
    answer:
      "In most cases, yes! We work to minimize disruption and can phase work to keep areas of your home functional. For major renovations, we'll discuss the best approach during planning.",
  },
]

const meatsFAQs = [
  {
    question: "Where does your meat come from?",
    answer:
      "Our meat is sourced from local Zimbabwean farms that meet our strict quality standards. We prioritize farms that practice ethical animal husbandry and sustainable farming methods.",
  },
  {
    question: "How fresh is the meat?",
    answer:
      "Extremely fresh! Our beef and pork are processed within 24-48 hours of delivery. Poultry is processed daily. We never sell frozen meat as fresh—what you see is what you get.",
  },
  {
    question: "Do you deliver? What are your delivery areas?",
    answer:
      "Yes! We deliver throughout Harare, Bulawayo, and Masvingo. Delivery is free for orders over $100. For orders under $100, a small delivery fee applies based on location.",
  },
  {
    question: "What is the minimum order for delivery?",
    answer:
      "The minimum order for delivery is $30. For smaller purchases, you're welcome to visit our butchery directly.",
  },
  {
    question: "Do you offer bulk/wholesale pricing?",
    answer:
      "Yes! We offer competitive wholesale pricing for restaurants, hotels, and bulk buyers. Contact us for a wholesale price list and to set up a business account.",
  },
  {
    question: "Can you do custom cuts?",
    answer:
      "Absolutely! Our skilled butchers can provide any cut you need. Whether it's a specific thickness for steaks or deboning for a special recipe, just let us know your requirements.",
  },
  {
    question: "How should I store the meat?",
    answer:
      "Fresh meat should be refrigerated immediately and used within 3-5 days. For longer storage, freeze within 24 hours of purchase. We can vacuum pack your order for extended freezer life (up to 6 months).",
  },
  {
    question: "Do you supply for events and parties?",
    answer:
      "Yes! We offer party packs and can supply meat for events of any size. Give us at least 3 days notice for large orders so we can ensure availability and freshness.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, EcoCash, bank transfers, and mobile money. For delivery orders, cash on delivery and EcoCash are the most convenient options.",
  },
  {
    question: "Can I visit your butchery?",
    answer:
      "Yes! Our butchery is open to walk-in customers. Visit us at our Waterfalls location during business hours. You can see our products and have them cut fresh while you wait.",
  },
]

const generalFAQs = [
  {
    question: "How do I contact Home Grounds Investments?",
    answer:
      "You can reach us by phone at +263 78 028 9132, email at info@homegrounds.co.zw, or WhatsApp. Our head office is at 14A, 6th Avenue Parktown, Waterfalls. We're happy to help with any inquiries!",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Renovations Office: Monday-Friday 8AM-5PM, Saturday 8AM-1PM. Butchery: Monday-Friday 7AM-6PM, Saturday 7AM-4PM, Sunday 8AM-1PM.",
  },
  {
    question: "Do you have branches in other cities?",
    answer:
      "Yes! Besides our head office in Waterfalls, we have service centers in Harare CBD, Bulawayo, and Masvingo. Contact us for specific branch addresses and hours.",
  },
  {
    question: "Is Home Grounds a registered company?",
    answer:
      "Yes, Home Grounds Investments Company is a fully registered Zimbabwean company. We are licensed for both construction/renovation services and food retail.",
  },
  {
    question: "Do you offer any guarantees?",
    answer:
      "Yes! Our renovations come with a 12-month workmanship warranty. For meats, we guarantee freshness—if you're not satisfied, we'll make it right.",
  },
  {
    question: "Can I get both services for an event?",
    answer:
      "Absolutely! Planning a new restaurant or upgrading your home for an event? We can handle the renovation AND supply the meat for your gathering. Talk to us about combined service packages.",
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-gray-300 text-pretty">
                Find answers to common questions about our renovation services
                and premium meats. Can&apos;t find what you&apos;re looking for?
                Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="general" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="renovations" className="flex items-center gap-2">
                  <Hammer className="h-4 w-4" />
                  <span className="hidden sm:inline">Renovations</span>
                </TabsTrigger>
                <TabsTrigger value="meats" className="flex items-center gap-2">
                  <Beef className="h-4 w-4" />
                  <span className="hidden sm:inline">Meats</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {generalFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`general-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="renovations">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {renovationFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`reno-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meats">
                <Card>
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {meatsFAQs.map((faq, index) => (
                        <AccordionItem key={index} value={`meats-${index}`}>
                          <AccordionTrigger className="text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Still Have Questions */}
            <div className="max-w-4xl mx-auto mt-16">
              <Card className="bg-[#F5F5F5]">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">
                      Still Have Questions?
                    </h2>
                    <p className="text-muted-foreground">
                      Our team is here to help. Reach out through any of these
                      channels.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <a
                      href="tel:+263780289132"
                      className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
                    >
                      <Phone className="h-8 w-8 text-[#E31E24] mb-3" />
                      <span className="font-semibold">Call Us</span>
                      <span className="text-sm text-muted-foreground">
                        +263 78 028 9132
                      </span>
                    </a>
                    <a
                      href="mailto:info@homegrounds.co.zw"
                      className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
                    >
                      <Mail className="h-8 w-8 text-[#E31E24] mb-3" />
                      <span className="font-semibold">Email Us</span>
                      <span className="text-sm text-muted-foreground">
                        info@homegrounds.co.zw
                      </span>
                    </a>
                    <a
                      href="https://wa.me/263780289132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
                    >
                      <MessageCircle className="h-8 w-8 text-[#8DC63F] mb-3" />
                      <span className="font-semibold">WhatsApp</span>
                      <span className="text-sm text-muted-foreground">
                        Quick Response
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <div className="max-w-4xl mx-auto mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Ready to get started?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-[#E31E24] hover:bg-[#c91a1f]">
                  <Link href="/quote">Get Renovation Quote</Link>
                </Button>
                <Button asChild className="bg-[#8DC63F] hover:bg-[#7ab635]">
                  <Link href="/order">Order Premium Meats</Link>
                </Button>
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
