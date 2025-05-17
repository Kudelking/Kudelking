import type { Metadata } from "next"
import { SimpleHeader } from "@/components/simple-header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ServiceAreaMap } from "@/components/service-area-map"
import { TrustBadges } from "@/components/trust-badges"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "Contact Us | Accent Walls Pro",
  description:
    "Get in touch with our team for a free consultation and quote. We serve the entire DMV area including DC, Maryland, and Virginia.",
  keywords: ["contact", "accent walls", "free quote", "consultation", "DMV area", "Maryland", "Virginia", "DC"],
}

export default function ContactPage() {
  return (
    <>
      <SimpleHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">Get in touch with our team for a free consultation and quote</p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <ContactInfo />
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Our Service Area</h2>
                  <ServiceAreaMap />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Why Choose Accent Walls Pro</h2>
            <TrustBadges />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Faq
              items={[
                {
                  question: "How do I get a quote for my project?",
                  answer:
                    "You can request a quote by filling out our contact form, calling us directly, or sending us an email. We'll schedule a consultation to discuss your project details and provide a free estimate.",
                },
                {
                  question: "What areas do you serve?",
                  answer:
                    "We serve the entire DMV area including Washington DC, Maryland (Montgomery County, Prince George's County, Howard County), and Northern Virginia (Arlington, Alexandria, Fairfax).",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Project timelines vary depending on the scope and complexity. A standard accent wall installation typically takes 1-2 days, while more complex projects like custom media walls or fireplace buildouts may take 3-5 days.",
                },
                {
                  question: "Do you offer warranties on your work?",
                  answer:
                    "Yes, we offer a 2-year warranty on all our installations. This covers any defects in workmanship or materials. We're committed to ensuring your complete satisfaction with our work.",
                },
                {
                  question: "Can I see samples of materials before deciding?",
                  answer:
                    "During our consultation, we can provide material samples and show you our portfolio of similar projects to help you make an informed decision.",
                },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
