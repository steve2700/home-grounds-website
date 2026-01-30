import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Home Grounds Investments services. Read our service agreements and policies.",
  alternates: {
    canonical: "https://homegrounds.co.zw/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Terms & Conditions
              </h1>
              <p className="text-gray-300">Last updated: January 30, 2026</p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl prose prose-gray">
              <p className="lead text-lg text-muted-foreground">
                Welcome to Home Grounds Investments Company. By accessing our
                website or using our services, you agree to be bound by these
                Terms & Conditions. Please read them carefully.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                1. Services Overview
              </h2>
              <p className="text-muted-foreground">
                Home Grounds Investments Company provides two main categories of
                services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>
                  <strong>Renovation Services:</strong> Residential and
                  commercial renovation, construction, maintenance, and related
                  services.
                </li>
                <li>
                  <strong>Meat Products:</strong> Sale of premium beef, pork,
                  poultry, and related butchery services.
                </li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">
                2. Renovation Services Terms
              </h2>
              <h3 className="text-lg font-semibold mt-6 mb-3">
                2.1 Quotations
              </h3>
              <p className="text-muted-foreground">
                All quotations are valid for 30 days from the date of issue.
                Quotations are based on information provided by the client and
                may be adjusted if site conditions differ from what was
                described.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Payment</h3>
              <p className="text-muted-foreground">
                Standard payment terms are:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                <li>30% deposit upon acceptance of quotation</li>
                <li>50% upon reaching project midpoint (as defined in contract)</li>
                <li>20% upon completion and client satisfaction</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Payment methods accepted: Bank transfer, EcoCash, cash.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">2.3 Warranty</h3>
              <p className="text-muted-foreground">
                All renovation work carries a 12-month workmanship warranty from
                the date of completion. This warranty covers defects in
                workmanship but does not cover normal wear and tear, damage
                caused by client or third parties, or items not installed by
                Home Grounds.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                2.4 Variations
              </h3>
              <p className="text-muted-foreground">
                Any changes to the agreed scope of work must be approved in
                writing. Additional costs for variations will be quoted before
                work proceeds.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                3. Meat Products Terms
              </h2>
              <h3 className="text-lg font-semibold mt-6 mb-3">3.1 Orders</h3>
              <p className="text-muted-foreground">
                Orders can be placed via our website, phone, WhatsApp, or
                in-person at our butchery. Minimum order for delivery is $30.
                Prices are subject to change without notice.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">3.2 Delivery</h3>
              <p className="text-muted-foreground">
                Delivery is available within Harare, Bulawayo, and Masvingo.
                Free delivery on orders over $100. Same-day delivery is
                available for orders placed before 11 AM. We are not responsible
                for delays due to factors beyond our control.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                3.3 Quality Guarantee
              </h3>
              <p className="text-muted-foreground">
                We guarantee the freshness and quality of our meat products. If
                you are not satisfied with any product, please contact us within
                24 hours of delivery for a replacement or refund.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                3.4 Returns & Refunds
              </h3>
              <p className="text-muted-foreground">
                Due to the perishable nature of our products, returns are only
                accepted for quality issues reported within 24 hours of
                delivery. Refunds will be processed within 7 business days.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                4. General Terms
              </h2>
              <h3 className="text-lg font-semibold mt-6 mb-3">
                4.1 Website Use
              </h3>
              <p className="text-muted-foreground">
                You may use our website for lawful purposes only. You must not
                use our website to transmit harmful content, attempt to gain
                unauthorized access, or engage in any activity that could damage
                our systems or reputation.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                4.2 Intellectual Property
              </h3>
              <p className="text-muted-foreground">
                All content on this website, including text, images, logos, and
                designs, is the property of Home Grounds Investments Company.
                You may not reproduce, distribute, or use any content without
                our written permission.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                4.3 Limitation of Liability
              </h3>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Home Grounds Investments
                Company shall not be liable for any indirect, incidental, or
                consequential damages arising from the use of our services or
                website.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">
                4.4 Governing Law
              </h3>
              <p className="text-muted-foreground">
                These terms are governed by the laws of Zimbabwe. Any disputes
                shall be resolved in the courts of Zimbabwe.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                5. Changes to Terms
              </h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting to our website.
                Continued use of our services constitutes acceptance of the
                modified terms.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms & Conditions, please
                contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@homegrounds.co.zw"
                    className="text-[#E31E24] hover:underline"
                  >
                    info@homegrounds.co.zw
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong> +263 78 028 9132
                </li>
                <li>
                  <strong>Address:</strong> 14A, 6th Avenue Parktown, Waterfalls,
                  Harare, Zimbabwe
                </li>
              </ul>

              <div className="mt-12 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  By using our website and services, you acknowledge that you
                  have read, understood, and agree to these Terms & Conditions.
                  Please also review our{" "}
                  <Link
                    href="/privacy"
                    className="text-[#E31E24] hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
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
