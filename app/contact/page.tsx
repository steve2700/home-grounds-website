"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, Building2 } from "lucide-react"

const contactInfo = {
  headquarters: {
    title: "Headquarters",
    address: "Stand 2688, Crowhill Views Borrowdale",
    city: "Harare, Zimbabwe",
    phone: "+263 78 028 9132",
    whatsapp: "+27 61 436 6718",
    email: "info@homegroundinvestments.co.zw",
  },
}

const serviceAreas = [
  {
    city: "Harare",
    description: "Greater Harare Area & Surrounding Suburbs",
  },
  {
    city: "Bulawayo",
    description: "Bulawayo Metropolitan Area",
  },
  {
    city: "Masvingo",
    description: "Masvingo Province",
  },
  {
    city: "Mutare",
    description: "Mutare & Eastern Highlands",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.service}

*Message:*
${formData.message}
    `.trim()

    const whatsappUrl = `https://wa.me/27614366718?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-zinc-900 py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80 z-10" />
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/kitchen-renovation-harare.jpg"
              alt="Kitchen Renovation Harare"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Ready to transform your space? Reach out to our team and let's get started.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <a href="https://wa.me/27614366718" target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

                  {/* Headquarters */}
                  <Card className="mb-6 border-2 border-amber-500/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{contactInfo.headquarters.title}</h3>
                          <p className="text-muted-foreground">{contactInfo.headquarters.address}</p>
                          <p className="text-muted-foreground">{contactInfo.headquarters.city}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mt-6 pt-6 border-t">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-amber-600" />
                          <a href="tel:+263780289132" className="hover:text-amber-600 transition-colors">
                            {contactInfo.headquarters.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          <a href="https://wa.me/27614366718" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                            {contactInfo.headquarters.whatsapp}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-amber-600" />
                          <a href={`mailto:${contactInfo.headquarters.email}`} className="hover:text-amber-600 transition-colors">
                            {contactInfo.headquarters.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Operating Hours */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-5 w-5 text-amber-600" />
                        <h3 className="font-bold text-lg">Operating Hours</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Monday - Friday</span>
                          <span className="font-semibold">8:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Saturday</span>
                          <span className="font-semibold">8:00 AM - 2:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Sunday</span>
                          <span className="font-semibold text-muted-foreground">Closed</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                  <Image
                    src="/images/hero-renovations.jpg"
                    alt="Home Ground Investments"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div>
                <div className="bg-muted/30 p-8 rounded-2xl">
                  <h2 className="text-3xl font-bold text-foreground mb-2">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8">We'll get back to you within 24 hours</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+263 78..."
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">I'm Interested In *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                        required
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Renovations</SelectItem>
                          <SelectItem value="commercial">Commercial Fit-Outs</SelectItem>
                          <SelectItem value="kitchen">Kitchen Renovations</SelectItem>
                          <SelectItem value="bathroom">Bathroom Renovations</SelectItem>
                          <SelectItem value="maintenance">Property Maintenance</SelectItem>
                          <SelectItem value="sustainable">Sustainable Solutions</SelectItem>
                          <SelectItem value="other">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message via WhatsApp
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, your message will be sent to us via WhatsApp for faster response.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We Serve Across Zimbabwe
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quality renovations delivered to your location nationwide
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="border-2 hover:border-amber-500/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4">
                      <Building2 className="h-7 w-7 text-amber-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{area.city}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Stand 2688, Crowhill Views Borrowdale
                  </p>
                  <p className="text-muted-foreground mb-4">Harare, Zimbabwe</p>
                  <Button asChild className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-bold">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Stand+2688+Crowhill+Views+Borrowdale+Harare+Zimbabwe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
