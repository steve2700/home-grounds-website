import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { DivisionsSection } from "@/components/home/divisions-section"
import { TrustSection } from "@/components/home/trust-section"
import { FeaturedServices } from "@/components/home/featured-services"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { LocationsSection } from "@/components/home/locations-section"
import { CTASection } from "@/components/home/cta-section"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <DivisionsSection />
        <TrustSection />
        <FeaturedServices />
        <TestimonialsSection />
        <LocationsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
