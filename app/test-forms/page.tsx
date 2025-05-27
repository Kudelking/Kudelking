import { ContactForm } from "@/components/contact-form"
import { QuoteForm } from "@/components/quote-form"

export default function TestFormsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Test Forms - Email Notifications</h1>
          <p className="text-gray-600">
            Use these forms to test if email notifications are working properly.
            <br />
            Emails should be sent to: <strong>builddogllc@gmail.com</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Test */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Form Test</h2>
            <ContactForm />
          </div>

          {/* Quote Form Test */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Quote Form Test</h2>
            <QuoteForm />
          </div>
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Fill out either form with test data</li>
            <li>Submit the form</li>
            <li>Check builddogllc@gmail.com for email notification</li>
            <li>Check spam folder if email doesn't arrive in inbox</li>
            <li>Verify that reply-to address is set to the form submitter's email</li>
          </ol>
        </div>

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">Troubleshooting:</h3>
          <ul className="list-disc list-inside space-y-2 text-yellow-700">
            <li>If no email arrives, check the Vercel function logs</li>
            <li>Verify RESEND_API_KEY is properly set in environment variables</li>
            <li>Check Resend dashboard for delivery status</li>
            <li>Make sure the API routes are deployed correctly</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
