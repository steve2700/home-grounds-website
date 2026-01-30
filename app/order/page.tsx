import type { Metadata } from "next"
import Image from "next/image"
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
import { Checkbox } from "@/components/ui/checkbox"
import {
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Truck,
  Shield,
  Leaf,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Order Premium Meats | Farm-Fresh Quality",
  description:
    "Order premium farm-fresh meats from Home Grounds. Beef, pork, poultry with delivery across Harare, Bulawayo, and Masvingo.",
  alternates: {
    canonical: "https://homegrounds.co.zw/order",
  },
}

const meatProducts = [
  {
    category: "Beef",
    items: [
      { name: "Beef Sirloin", price: "15.00", unit: "kg" },
      { name: "Beef Ribeye", price: "18.00", unit: "kg" },
      { name: "Beef Fillet", price: "22.00", unit: "kg" },
      { name: "Beef T-Bone", price: "16.00", unit: "kg" },
      { name: "Beef Mince", price: "10.00", unit: "kg" },
      { name: "Beef Stew Meat", price: "9.00", unit: "kg" },
    ],
  },
  {
    category: "Pork",
    items: [
      { name: "Pork Chops", price: "12.00", unit: "kg" },
      { name: "Pork Ribs", price: "11.00", unit: "kg" },
      { name: "Pork Belly", price: "10.00", unit: "kg" },
      { name: "Pork Sausages", price: "8.00", unit: "kg" },
      { name: "Smoked Bacon", price: "14.00", unit: "kg" },
    ],
  },
  {
    category: "Poultry",
    items: [
      { name: "Whole Chicken", price: "6.00", unit: "each" },
      { name: "Chicken Breasts", price: "8.00", unit: "kg" },
      { name: "Chicken Thighs", price: "7.00", unit: "kg" },
      { name: "Chicken Wings", price: "6.00", unit: "kg" },
      { name: "Free-Range Chicken", price: "10.00", unit: "each" },
    ],
  },
]

const deliveryAreas = [
  "Harare CBD",
  "Avondale",
  "Borrowdale",
  "Mt Pleasant",
  "Waterfalls",
  "Bulawayo",
  "Masvingo",
  "Other (Please specify)",
]

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <Image
            src="/images/hero-meats.jpg"
            alt="Premium farm-fresh meats"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Order Premium Farm-Fresh Meats
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 text-pretty">
                From our farms to your table. Quality beef, pork, and poultry
                with delivery across Zimbabwe.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Leaf, text: "Farm Fresh" },
                  { icon: Truck, text: "Delivery Available" },
                  { icon: Shield, text: "Quality Guaranteed" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <item.icon className="h-4 w-4 text-[#8DC63F]" />
                    <span className="text-white text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Order Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Place Your Order</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-8">
                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">
                          Contact Information
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              placeholder="Your full name"
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
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com (optional)"
                          />
                        </div>
                      </div>

                      {/* Product Selection */}
                      <div className="space-y-6 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-foreground">
                          Select Products
                        </h3>

                        {meatProducts.map((category) => (
                          <div key={category.category} className="space-y-4">
                            <h4 className="font-medium text-[#E31E24]">
                              {category.category}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-3">
                              {category.items.map((item) => (
                                <div
                                  key={item.name}
                                  className="flex items-center justify-between p-3 rounded-lg border hover:border-[#8DC63F] transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <Checkbox id={item.name} />
                                    <Label
                                      htmlFor={item.name}
                                      className="cursor-pointer"
                                    >
                                      {item.name}
                                    </Label>
                                  </div>
                                  <div className="text-sm">
                                    <span className="font-semibold">
                                      ${item.price}
                                    </span>
                                    <span className="text-muted-foreground">
                                      /{item.unit}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div className="space-y-2">
                          <Label htmlFor="quantities">
                            Order Details & Quantities *
                          </Label>
                          <Textarea
                            id="quantities"
                            placeholder="Please specify quantities for each product selected. E.g., 'Beef Sirloin - 2kg, Pork Chops - 1.5kg, Whole Chicken - 2'"
                            rows={4}
                            required
                          />
                        </div>
                      </div>

                      {/* Delivery Information */}
                      <div className="space-y-4 pt-6 border-t">
                        <h3 className="text-lg font-semibold text-foreground">
                          Delivery Information
                        </h3>
                        <div className="space-y-2">
                          <Label htmlFor="orderType">Order Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select order type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="delivery">
                                Delivery to My Address
                              </SelectItem>
                              <SelectItem value="pickup">
                                Pickup from Shop
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="area">Delivery Area</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your area" />
                            </SelectTrigger>
                            <SelectContent>
                              {deliveryAreas.map((area) => (
                                <SelectItem
                                  key={area}
                                  value={area.toLowerCase().replace(/\s+/g, "-")}
                                >
                                  {area}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Full Delivery Address</Label>
                          <Textarea
                            id="address"
                            placeholder="Enter your complete delivery address including suburb and any landmarks"
                            rows={3}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredDate">
                            Preferred Delivery Date
                          </Label>
                          <Input id="preferredDate" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Special Instructions</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special requests or instructions for your order?"
                            rows={2}
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="pt-6">
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full bg-[#8DC63F] hover:bg-[#7ab635] text-white"
                        >
                          Submit Order
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <p className="text-sm text-muted-foreground text-center mt-4">
                          We will contact you to confirm your order and payment
                          details
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-[#8DC63F]/10 border-[#8DC63F]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Order Information
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8DC63F] mt-0.5 flex-shrink-0" />
                        <span>Minimum order: $30 for delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8DC63F] mt-0.5 flex-shrink-0" />
                        <span>Free delivery on orders over $100</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8DC63F] mt-0.5 flex-shrink-0" />
                        <span>Same-day delivery if ordered before 11 AM</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8DC63F] mt-0.5 flex-shrink-0" />
                        <span>Cash on delivery or EcoCash accepted</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Prefer to Call?
                    </h3>
                    <div className="space-y-4">
                      <a
                        href="tel:+263780289132"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Phone className="h-5 w-5 text-[#8DC63F]" />
                        <div>
                          <p className="font-medium">+263 78 028 9132</p>
                          <p className="text-sm text-muted-foreground">
                            Call to order
                          </p>
                        </div>
                      </a>
                      <a
                        href="mailto:orders@homegrounds.co.zw"
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-[#8DC63F]" />
                        <div>
                          <p className="font-medium">orders@homegrounds.co.zw</p>
                          <p className="text-sm text-muted-foreground">
                            Email your order
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-[#8DC63F]" />
                      <h3 className="text-lg font-semibold">Shop Hours</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">7:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">7:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">8:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-[#2D2D2D] rounded-lg p-6 text-white">
                  <h3 className="font-semibold mb-4">Bulk Orders?</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Planning an event or need wholesale supply? Contact us for
                    special pricing on bulk orders.
                  </p>
                  <Link
                    href="/meats/butchery"
                    className="inline-flex items-center text-[#8DC63F] hover:underline text-sm"
                  >
                    Learn about bulk orders
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
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
