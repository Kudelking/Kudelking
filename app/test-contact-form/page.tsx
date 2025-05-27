import { ContactFormTest } from "@/components/contact-form-test"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Form Test | Accent Walls Pro",
  description: "Testing page for contact form functionality",
  robots: "noindex, nofollow",
}

export default function TestContactFormPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <ContactFormTest />
      </div>
    </div>
  )
}
