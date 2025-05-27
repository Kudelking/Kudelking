import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, Phone, Mail, ArrowRight } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mb-8">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your message has been sent successfully. We appreciate you reaching out to us.
          </p>

          {/* What Happens Next */}
          <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What Happens Next?</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <span className="text-lg font-semibold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">We Review Your Request</h3>
                <p className="text-sm text-gray-600">
                  Our team will carefully review your project details and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <span className="text-lg font-semibold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">We Contact You</h3>
                <p className="text-sm text-gray-600">
                  We'll reach out within 24 hours to discuss your project and schedule a consultation.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                  <span className="text-lg font-semibold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Free Estimate</h3>
                <p className="text-sm text-gray-600">
                  We'll provide you with a detailed, no-obligation estimate for your project.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-900 text-white rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>(240) 426-7900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>builddogllc@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/portfolio" className="flex items-center gap-2">
                View Our Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Follow us for design inspiration:</p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
