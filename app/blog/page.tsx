import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Home Improvement Tips & Recipes",
  description:
    "Expert advice on home renovations, property maintenance, meat preparation, and recipes from Home Grounds Investments Zimbabwe.",
  alternates: {
    canonical: "https://homegrounds.co.zw/blog",
  },
}

const blogPosts = [
  {
    id: 1,
    title: "5 Kitchen Renovation Trends for Zimbabwe Homes in 2026",
    excerpt:
      "Discover the latest kitchen design trends that blend modern aesthetics with practical Zimbabwean living. From open-plan layouts to energy-efficient appliances.",
    image: "/images/kitchen-renovation.jpg",
    category: "Renovations",
    author: "Home Grounds Team",
    date: "January 28, 2026",
    readTime: "5 min read",
    slug: "kitchen-renovation-trends-2026",
  },
  {
    id: 2,
    title: "How to Choose the Right Beef Cut for Your Braai",
    excerpt:
      "Master the art of selecting the perfect beef cuts for your next braai. Learn about marbling, aging, and which cuts work best for grilling.",
    image: "/images/beef-steaks.jpg",
    category: "Meats",
    author: "Home Grounds Butchery",
    date: "January 25, 2026",
    readTime: "4 min read",
    slug: "choosing-beef-cuts-braai",
  },
  {
    id: 3,
    title: "Waterproofing Your Home: A Zimbabwe Homeowner's Guide",
    excerpt:
      "Protect your property from water damage during the rainy season. Essential waterproofing tips for roofs, walls, and foundations.",
    image: "/images/home-exterior.jpg",
    category: "Maintenance",
    author: "Home Grounds Team",
    date: "January 22, 2026",
    readTime: "6 min read",
    slug: "waterproofing-guide-zimbabwe",
  },
  {
    id: 4,
    title: "Traditional Zimbabwean Recipes with Premium Meats",
    excerpt:
      "Celebrate local cuisine with these traditional Zimbabwean recipes featuring quality beef, pork, and chicken from our farms.",
    image: "/images/hero-meats.jpg",
    category: "Recipes",
    author: "Home Grounds Kitchen",
    date: "January 18, 2026",
    readTime: "8 min read",
    slug: "traditional-zimbabwean-recipes",
  },
  {
    id: 5,
    title: "Solar Power for Your Home: Is It Worth It?",
    excerpt:
      "Analyzing the costs and benefits of solar installation for Zimbabwean homes. Calculate your potential savings and ROI.",
    image: "/images/commercial-renovation.jpg",
    category: "Sustainable",
    author: "Home Grounds Team",
    date: "January 15, 2026",
    readTime: "7 min read",
    slug: "solar-power-worth-it-zimbabwe",
  },
  {
    id: 6,
    title: "The Complete Guide to Meat Storage and Handling",
    excerpt:
      "Keep your meat fresh and safe with proper storage techniques. Learn about refrigeration, freezing, and food safety best practices.",
    image: "/images/pork.jpg",
    category: "Meats",
    author: "Home Grounds Butchery",
    date: "January 12, 2026",
    readTime: "5 min read",
    slug: "meat-storage-handling-guide",
  },
]

const categories = [
  "All",
  "Renovations",
  "Meats",
  "Recipes",
  "Maintenance",
  "Sustainable",
]

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const otherPosts = blogPosts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
                Home Grounds Blog
              </h1>
              <p className="text-lg md:text-xl text-gray-300 text-pretty">
                Expert tips on home improvement, property maintenance, delicious
                recipes, and more from the Home Grounds team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-[#E31E24]">
                      Featured
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#E31E24] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All"
                      ? "bg-[#E31E24] hover:bg-[#c91a1f]"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <Card className="h-full overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-[#2D2D2D]">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-[#E31E24] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-[#F5F5F5]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest home improvement tips, recipes, and exclusive
                offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
                />
                <Button className="bg-[#E31E24] hover:bg-[#c91a1f]">
                  Subscribe
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
