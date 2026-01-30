import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Home Grounds Investments privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://homegrounds.co.zw/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#2D2D2D] py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-300">
                Last updated: January 30, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl prose prose-gray">
              <p className="lead text-lg text-muted-foreground">
                Home Grounds Investments Company (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your information
                when you visit our website or use our services.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                Information We Collect
              </h2>
              <p className="text-muted-foreground mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  phone number, and physical address when you submit forms or
                  place orders.
                </li>
                <li>
                  <strong>Order Information:</strong> Details about products or
                  services you purchase, including payment information.
                </li>
                <li>
                  <strong>Communication Data:</strong> Records of correspondence
                  when you contact us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including pages visited and time spent.
                </li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Process and fulfill your orders and service requests</li>
                <li>Communicate with you about your projects or orders</li>
                <li>Send you updates, promotions, and marketing materials (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">
                Information Sharing
              </h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>
                  Service providers who assist in our operations (e.g., delivery
                  services)
                </li>
                <li>Legal authorities when required by law</li>
                <li>
                  Business partners involved in fulfilling your service requests
                </li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4">Cookies</h2>
              <p className="text-muted-foreground">
                Our website may use cookies to enhance your browsing experience.
                Cookies are small files stored on your device that help us
                understand how you use our site. You can control cookies through
                your browser settings.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-4">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:privacy@homegrounds.co.zw"
                    className="text-[#E31E24] hover:underline"
                  >
                    privacy@homegrounds.co.zw
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
                  By using our website and services, you consent to the terms of
                  this Privacy Policy. Please also review our{" "}
                  <Link
                    href="/terms"
                    className="text-[#E31E24] hover:underline"
                  >
                    Terms & Conditions
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
