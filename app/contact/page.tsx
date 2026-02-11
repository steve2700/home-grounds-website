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
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Building2, Warehouse, Truck } from "lucide-react"

const contactInfo = {
  headquarters: {
    title: "Headquarters",
    address: "Stand 2688, Crowhill Views Borrowdale",
    city: "Harare, Zimbabwe",
    phone: "+263 78 028 9132",
    whatsapp: "+27 61 436 6718",
    email: "info@homegroundinvestments.co.zw",
  },
  farms: {
    title: "Farms & Production",
    location: "Chivhu Farms",
    facilities: ["Own Abattoir & Cold Storage", "Quality Control Processing"],
  },
}

const serviceAreas = [
  {
    city: "Harare",
    description: "Greater Harare Area & Surrounding Suburbs",
    icon: Building2,
  },
  {
    city: "Bulawayo",
    description: "Bulawayo Metropolitan Area",
    icon: Building2,
  },
  {
    city: "Masvingo",
    description: "Masvingo Province",
    icon: Building2,
  },
  {
    city: "Chivhu",
    description: "Chivhu & Surrounding Areas",
    icon: Warehouse,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    division: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create WhatsApp message
    const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Interest:* ${formData.division}

*Message:*
${formData.message}
    `.trim()

    const whatsappUrl = `https://wa.me/27614366718?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      division: "",
      message: "",
    })
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section with Background Image */}
        <section className="relative bg-[#2D2D2D] py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2D2D2D] via-[#2D2D2D]/95 to-[#2D2D2D]/80 z-10" />
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600')] bg-cover bg-center" />
          </div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Get In Touch
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Whether you need quality renovations or premium farm-fresh meats, we're here to help. 
                Reach out to our team today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-[#E31E24] hover:bg-[#c91a1f] text-white">
                  <a href="tel:+263780289132">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  <a href="https://wa.me/27614366718" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
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
                  <Card className="mb-6 border-2 border-[#E31E24]/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0">
                          <Building2 className="h-6 w-6 text-[#E31E24]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{contactInfo.headquarters.title}</h3>
                          <p className="text-muted-foreground">{contactInfo.headquarters.address}</p>
                          <p className="text-muted-foreground">{contactInfo.headquarters.city}</p>
                        </div>
                      </div>
                      <div className="space-y-3 mt-6 pt-6 border-t">
                        <div className="flex items-center gap-3">
                          <Phone className="h-4 w-4 text-[#E31E24]" />
                          <a href={`tel:${contactInfo.headquarters.phone.replace(/\s/g, '')}`} className="hover:text-[#E31E24]">
                            {contactInfo.headquarters.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-4 w-4 text-[#8DC63F]" />
                          <a href={`https://wa.me/${contactInfo.headquarters.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#8DC63F]">
                            {contactInfo.headquarters.whatsapp}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-4 w-4 text-[#E31E24]" />
                          <a href={`mailto:${contactInfo.headquarters.email}`} className="hover:text-[#E31E24]">
                            {contactInfo.headquarters.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Farms & Production */}
                  <Card className="mb-6 bg-[#8DC63F]/5 border-[#8DC63F]/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-[#8DC63F]/10 flex items-center justify-center flex-shrink-0">
                          <Warehouse className="h-6 w-6 text-[#8DC63F]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1">{contactInfo.farms.title}</h3>
                          <p className="text-muted-foreground mb-3">{contactInfo.farms.location}</p>
                          <ul className="space-y-1">
                            {contactInfo.farms.facilities.map((facility, index) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-[#8DC63F]" />
                                {facility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Operating Hours */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="h-5 w-5 text-[#E31E24]" />
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
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
                    alt="Home Ground Investments Office"
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
                      <Label htmlFor="division">I'm Interested In *</Label>
                      <Select
                        value={formData.division}
                        onValueChange={(value) => setFormData({ ...formData, division: value })}
                        required
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="renovations">Home & Commercial Renovations</SelectItem>
                          <SelectItem value="meats">Premium Meats & Butchery</SelectItem>
                          <SelectItem value="livestock">Livestock</SelectItem>
                          <SelectItem value="both">Both Services</SelectItem>
                          <SelectItem value="other">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or what you're looking for..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-[#E31E24] hover:bg-[#c91a1f] text-white">
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
                Quality renovations and farm-fresh meats delivered to your location
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {serviceAreas.map((area, index) => (
                <Card key={index} className="border-2 hover:border-[#E31E24]/30 transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="h-14 w-14 rounded-full bg-[#E31E24]/10 flex items-center justify-center mx-auto mb-4">
                      <area.icon className="h-7 w-7 text-[#E31E24]" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{area.city}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section - Placeholder */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
              <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Stand 2688, Crowhill Views Borrowdale
                  </p>
                  <p className="text-muted-foreground mb-4">Harare, Zimbabwe</p>
                  <Button asChild className="bg-[#E31E24] hover:bg-[#c91a1f]">
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
