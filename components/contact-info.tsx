import { Phone, Mail, Clock, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

      <div className="space-y-6">
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-gray-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-700 mt-1">(301) 555-1234</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri, 8am-6pm</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="h-5 w-5 text-gray-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <a href="mailto:info@accentwallspro.com" className="text-gray-700 hover:text-gray-900 mt-1 block">
              info@accentwallspro.com
            </a>
            <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-gray-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Service Area</h3>
            <p className="text-gray-700 mt-1">Washington DC, Maryland, and Northern Virginia</p>
            <p className="text-sm text-gray-500 mt-1">We serve the entire DMV area</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-gray-600 mt-1 mr-4" />
          <div>
            <h3 className="font-medium text-gray-900">Business Hours</h3>
            <div className="text-gray-700 mt-1 grid grid-cols-2 gap-x-4">
              <span>Monday - Friday:</span>
              <span>8:00 AM - 6:00 PM</span>
              <span>Saturday:</span>
              <span>9:00 AM - 4:00 PM</span>
              <span>Sunday:</span>
              <span>Closed</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/accentwalls.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571978974930"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com/accentwallspro"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
