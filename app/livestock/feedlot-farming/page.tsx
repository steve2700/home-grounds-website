import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Phone, MapPin, Sprout, Heart, TrendingUp, Shield, Truck, Award, Users, ChefHat, Droplet, Sun, Wind, Thermometer, Activity, Target, Stethoscope, Leaf, Package, Sparkles, ClipboardList, BarChart3, Tractor, Wheat, Settings, FileText, Calendar, DollarSign, UserCheck, Database, LineChart, Zap, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Farm Management Services Zimbabwe | HomeGround Investments",
  description: "Expert farm management services in Zimbabwe. Full-service agricultural management, crop planning, livestock oversight, financial analysis. Maximize your farm's profitability.",
}

const managementServices = [
  {
    icon: ClipboardList,
    title: "Complete Farm Oversight",
    description: "End-to-end management of all farm operations from planting to harvest, livestock care to product sales",
    features: ["Daily Operations", "Staff Management", "Quality Control", "Performance Monitoring"],
    stat: "24/7 Management"
  },
  {
    icon: BarChart3,
    title: "Financial Management",
    description: "Comprehensive financial planning, budgeting, and profitability analysis to maximize your returns",
    features: ["Budget Planning", "Cost Control", "Profit Analysis", "Investment Strategy"],
    stat: "ROI Focused"
  },
  {
    icon: Wheat,
    title: "Crop Management",
    description: "Expert crop selection, planting schedules, pest control, and harvest optimization for maximum yields",
    features: ["Crop Selection", "Soil Testing", "Pest Management", "Harvest Planning"],
    stat: "High Yields"
  },
  {
    icon: Tractor,
    title: "Equipment & Maintenance",
    description: "Professional management of farm machinery, irrigation systems, and infrastructure maintenance",
    features: ["Equipment Fleet", "Preventive Maintenance", "Repair Coordination", "Asset Management"],
    stat: "Zero Downtime"
  },
  {
    icon: Users,
    title: "Labor Management",
    description: "Recruitment, training, and supervision of farm workers ensuring productivity and compliance",
    features: ["Staff Recruitment", "Skills Training", "Performance Reviews", "Safety Compliance"],
    stat: "Expert Teams"
  },
  {
    icon: Database,
    title: "Record Keeping",
    description: "Detailed documentation of all farm activities, expenses, yields, and regulatory compliance",
    features: ["Digital Records", "Compliance Tracking", "Yield Documentation", "Financial Reports"],
    stat: "100% Documented"
  },
]

const farmTypes = [
  {
    title: "Cattle Farms",
    description: "Comprehensive management of beef and dairy operations including breeding, feeding programs, and herd health",
    image: "/images/cattle.jpg",
    services: ["Herd Management", "Pasture Rotation", "Breeding Programs", "Health Protocols"],
    icon: Target,
  },
  {
    title: "Poultry Operations",
    description: "Expert oversight of broiler and layer farms with focus on biosecurity, production efficiency, and quality control",
    image: "/images/live-poultry.jpg",
    services: ["Flock Management", "Feed Programs", "Biosecurity", "Production Tracking"],
    icon: Target,
  },
  {
    title: "Crop Farming",
    description: "Professional management of field crops, orchards, and vegetable production with precision agriculture techniques",
    image: "/images/management-crops.jpg",
    services: ["Crop Planning", "Irrigation Management", "Harvest Coordination", "Market Timing"],
    icon: Target,
  },
  {
    title: "Mixed Farming",
    description: "Integrated management of diversified farms combining livestock, crops, and other agricultural enterprises",
    image: "/images/management-mixed.jpg",
    services: ["Enterprise Integration", "Resource Optimization", "Risk Diversification", "Synergy Planning"],
    icon: Target,
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Over 15 years managing diverse agricultural operations across Zimbabwe",
    stat: "15+ Years"
  },
  {
    icon: TrendingUp,
    title: "Increased Profitability",
    description: "Average 30% increase in farm profitability within first year of management",
    stat: "+30% Profit"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive insurance, compliance, and contingency planning for all operations",
    stat: "Fully Protected"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Qualified agronomists, veterinarians, and farm managers at your service",
    stat: "Expert Staff"
  },
]

const managementProcess = [
  {
    step: "01",
    title: "Farm Assessment",
    description: "Comprehensive evaluation of your property, resources, soil quality, infrastructure, and current operations",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Strategic Planning",
    description: "Development of customized management plan aligned with your goals, budget, and market opportunities",
    icon: FileText,
  },
  {
    step: "03",
    title: "Implementation",
    description: "Deployment of our expert team and systems to execute the management plan and optimize operations",
    icon: Settings,
  },
  {
    step: "04",
    title: "Monitoring & Reporting",
    description: "Continuous performance tracking with regular reports on productivity, finances, and goal achievement",
    icon: LineChart,
  },
]

const servicePackages = [
  {
    name: "Essential",
    description: "Perfect for smaller farms needing professional guidance",
    price: "Customized",
    features: [
      "Monthly farm visits",
      "Crop/livestock planning",
      "Financial reporting",
      "Phone consultation",
      "Seasonal strategies",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    description: "Comprehensive management for growing operations",
    price: "Customized",
    features: [
      "Weekly farm oversight",
      "Staff supervision",
      "Supply chain management",
      "Marketing support",
      "Quarterly business reviews",
      "Emergency response",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    description: "Full-service management for large commercial farms",
    price: "Customized",
    features: [
      "Daily on-site management",
      "Complete staff management",
      "Financial optimization",
      "Market intelligence",
      "Technology integration",
      "Legal compliance",
      "24/7 support",
    ],
    highlighted: false,
  },
]

const successMetrics = [
  {
    icon: TrendingUp,
    metric: "30%",
    label: "Average Profit Increase",
  },
  {
    icon: BarChart3,
    metric: "25%",
    label: "Cost Reduction",
  },
  {
    icon: Wheat,
    metric: "40%",
    label: "Yield Improvement",
  },
  {
    icon: UserCheck,
    metric: "98%",
    label: "Client Retention",
  },
]

export default function FarmManagementPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="/images/cattle.jpg"
              alt="HomeGround Investments professional farm management services in Zimbabwe"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/85 to-zinc-900/60" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 rounded-full px-5 py-2 mb-8">
                <ClipboardList className="h-4 w-4 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-100 uppercase tracking-wide">Professional Farm Management</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Expert Farm{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Management
                </span>
                {" "}Services
              </h1>

              {/* Description */}
              <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed">
                Maximize your agricultural investment with professional farm management. From crop planning to livestock oversight, we handle every aspect of your operation.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <metric.icon className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{metric.metric}</div>
                    <div className="text-sm text-zinc-400 uppercase tracking-wide">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      Get Free Consultation
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                <a href="tel:+263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-white">
                      <Phone className="h-5 w-5" />
                      Call Now
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Management Services Section */}
        <section className="py-24 bg-gradient-to-b from-white to-zinc-50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Settings className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Management Solutions
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Full-service farm management covering every aspect of agricultural operations
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {managementServices.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <Card className="relative h-full border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                    <CardContent className="p-8">
                      <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="h-7 w-7 text-emerald-600" />
                      </div>
                      
                      <div className="text-2xl font-black text-emerald-600 mb-3">{service.stat}</div>
                      <h3 className="text-2xl font-black text-zinc-900 mb-4">{service.title}</h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>

                      {/* Features */}
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-zinc-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm Types We Manage */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Tractor className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Farm Types</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                We Manage{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  All Farm Types
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Specialized management expertise across diverse agricultural operations
              </p>
            </div>

            {/* Farm Type Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {farmTypes.map((farm, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  <Card className="relative h-full overflow-hidden border border-zinc-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64">
                      <Image
                        src={farm.image || "/placeholder.svg"}
                        alt={farm.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-8 bg-white">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all">
                        {farm.title}
                      </h3>
                      <p className="text-zinc-600 mb-6 leading-relaxed">{farm.description}</p>

                      {/* Services */}
                      <div className="grid grid-cols-2 gap-3">
                        {farm.services.map((service, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                            <span className="text-zinc-700 font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Process */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Activity className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Our Process</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                How We{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Work
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Our proven four-step process for transforming farm performance
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {managementProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    {/* Step Number */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-2xl font-black mb-6">
                      {process.step}
                    </div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-50 mb-4">
                      <process.icon className="h-7 w-7 text-emerald-600" />
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{process.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{process.description}</p>
                  </div>

                  {/* Connector Line (hidden on last item) */}
                  {index < managementProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-200 to-blue-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Package className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Service Packages</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Management Plan
                </span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                Flexible packages tailored to your farm size and management needs
              </p>
            </div>

            {/* Package Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicePackages.map((pkg, index) => (
                <div key={index} className="group relative">
                  {pkg.highlighted && (
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-40" />
                  )}
                  <Card className={`relative h-full border-2 rounded-3xl shadow-lg hover:shadow-2xl transition-all ${
                    pkg.highlighted ? 'border-emerald-500 bg-gradient-to-b from-emerald-50/50 to-white' : 'border-zinc-200'
                  }`}>
                    <CardContent className="p-8">
                      {pkg.highlighted && (
                        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                          <Sparkles className="h-3 w-3" />
                          MOST POPULAR
                        </div>
                      )}
                      
                      <h3 className="text-2xl font-black text-zinc-900 mb-2">{pkg.name}</h3>
                      <p className="text-zinc-600 text-sm mb-6">{pkg.description}</p>
                      
                      <div className="mb-6">
                        <div className="text-4xl font-black text-emerald-600 mb-1">{pkg.price}</div>
                        <div className="text-sm text-zinc-500">Contact for pricing</div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span className="text-zinc-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact" className="block">
                        <div className={`relative overflow-hidden rounded-xl ${
                          pkg.highlighted ? 'bg-gradient-to-r from-emerald-600 to-blue-600' : 'bg-zinc-100'
                        }`}>
                          <div className={`relative flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold ${
                            pkg.highlighted ? 'text-white' : 'text-zinc-900'
                          }`}>
                            Get Started
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-b from-zinc-50 to-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-zinc-100 rounded-full px-5 py-2 mb-6">
                <Award className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-semibold text-zinc-700 uppercase tracking-wide">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                Zimbabwe's{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                  Trusted
                </span>{" "}
                Farm Managers
              </h2>
            </div>

            {/* Why Choose Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="h-7 w-7 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-black text-emerald-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-600" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
                Ready to Optimize Your Farm?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Get a free farm assessment and customized management proposal. Let's maximize your agricultural investment together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-emerald-600">
                      Get Free Assessment
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
                
                <a href="tel:+263780289132" className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border-2 border-white/30" />
                    <div className="relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white">
                      <Phone className="h-5 w-5" />
                      Call: +263 78 028 9132
                    </div>
                  </div>
                </a>
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
