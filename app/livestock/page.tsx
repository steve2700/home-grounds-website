import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, Beef, Egg, PiggyBank, Tractor, HeartHandshake, TrendingUp, Shield } from "lucide-react"

export default function LivestockPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-emerald-800/80 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/livestock-hero.jpg"
            alt="Livestock Farming"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-green-600/30 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6">
            <Sprout className="h-5 w-5" />
            <span className="font-semibold">Sustainable Livestock Farming</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Quality Livestock
            <span className="block text-green-400">Farming Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-green-100">
            Modern farming practices delivering premium cattle, poultry, and pork with sustainable, ethical approaches
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-6">
              <Link href="/contact">Start Your Farm Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold text-lg px-8 py-6">
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
              Why Choose Home Grounds Livestock
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              We combine traditional farming wisdom with modern technology for sustainable, profitable livestock operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Strict health protocols and veterinary care ensuring premium livestock quality
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Tractor className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Modern Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Advanced farming equipment and management systems for optimal productivity
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Ethical Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Humane treatment and sustainable farming methods for all livestock
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-500 transition-all hover:shadow-xl">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Track record of high-yield, profitable farming operations across Zimbabwe
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4">
              Our Livestock Services
            </h2>
            <p className="text-xl text-zinc-600">
              Comprehensive farming solutions from setup to market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all border-2 hover:border-green-500">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Beef className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Cattle Farming</CardTitle>
                <CardDescription>Beef & Dairy Operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600">Complete cattle farming management including:</p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Breed selection and procurement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Pasture management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Health monitoring & veterinary care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Market-ready beef & dairy production</span>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <Link href="/livestock/cattle">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all border-2 hover:border-green-500">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Egg className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Poultry Farming</CardTitle>
                <CardDescription>Layers & Broilers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600">Commercial poultry operations including:</p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Modern broiler houses setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Layer farm management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Feed formulation & nutrition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Disease prevention programs</span>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <Link href="/livestock/poultry">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all border-2 hover:border-green-500">
              <CardHeader>
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PiggyBank className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Pig Farming</CardTitle>
                <CardDescription>Commercial Pork Production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-zinc-600">Quality pig farming services including:</p>
                <ul className="space-y-2 text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Breeding stock selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Housing & infrastructure setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Nutrition & feeding programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Market linkage & sales</span>
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  <Link href="/livestock/pigs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your Livestock Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Let's discuss how we can help you build a profitable, sustainable livestock farming operation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 font-bold text-lg px-8 py-6">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold text-lg px-8 py-6">
              <Link href="tel:+263780289132">Call: +263 78 028 9132</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
