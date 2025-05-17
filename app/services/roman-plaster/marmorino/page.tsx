import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialCard } from "@/components/testimonial-card"

export const metadata = {
  title: "Marmorino Roman Plaster Wall Finishes | AccentWallsPro",
  description:
    "Transform your space with luxurious Marmorino Roman Plaster that mimics the appearance of polished marble. Create stunning, high-end walls with natural veining and depth. Serving DC, Maryland & Virginia.",
}

export default function MarmorinoRomanPlasterPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=400&width=1000&query=luxury marmorino roman plaster wall finish"
            alt="Marmorino Roman Plaster Wall Finish"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Marmorino Roman Plaster</h1>
              <p className="text-lg md:text-xl opacity-90">
                Luxurious marble-like finish with natural veining and incredible depth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">The Ultimate Luxury Wall Finish</h2>
            <p className="text-muted-foreground mb-4">
              Marmorino is a premium type of Roman Plaster that mimics the appearance of polished marble. This luxurious
              finish creates walls with incredible depth, subtle veining, and a high-end, stone-like appearance that
              transforms any space into a showcase of elegance.
            </p>
            <p className="text-muted-foreground mb-4">
              Our master artisans apply multiple layers of lime-based plaster mixed with marble dust, using specialized
              techniques to create the characteristic veining and depth that makes Marmorino so sought-after in high-end
              residential and commercial spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild size="lg">
                <Link href="#quote-form">Request a Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&query=close up of marmorino roman plaster wall with veining"
              alt="Marmorino Roman Plaster Close-up"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=luxury bathroom with marmorino roman plaster walls"
                alt="Luxury Bathrooms"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Luxury Bathrooms</h3>
            <p className="text-muted-foreground">
              Create a spa-like retreat with waterproof Marmorino walls that mimic natural stone.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=grand entryway with marmorino roman plaster walls"
                alt="Grand Entryways"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Grand Entryways</h3>
            <p className="text-muted-foreground">
              Make a stunning first impression with marble-like walls in your foyer or entryway.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=luxury hotel lobby with marmorino roman plaster columns"
                alt="Luxury Hotels"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Luxury Hotels</h3>
            <p className="text-muted-foreground">
              Create an atmosphere of opulence in hotel lobbies, spas, and suites.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=high end retail store with marmorino roman plaster walls"
                alt="High-End Retail"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">High-End Retail</h3>
            <p className="text-muted-foreground">
              Elevate your retail space with luxurious walls that enhance the shopping experience.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Luxury Master Bathroom"
            description="Marmorino plaster in a soft white with subtle gray veining creates a spa-like atmosphere in this master bathroom."
            imageSrc="/placeholder.svg?height=300&width=400&query=luxury bathroom with white marmorino plaster walls"
            category="Marmorino"
            location="McLean, VA"
          />
          <ProjectCard
            title="Luxury Living Room"
            description="Marmorino plaster in a warm beige with subtle gold accents creates a stunning backdrop in this modern living space."
            imageSrc="/placeholder.svg?height=300&width=400&query=luxury living room with beige marmorino plaster walls"
            category="Marmorino"
            location="Potomac, MD"
          />
          <ProjectCard
            title="Grand Foyer"
            description="Marmorino plaster in a classic cream with subtle veining creates an impressive entrance in this luxury home."
            imageSrc="/placeholder.svg?height=300&width=400&query=grand foyer with cream marmorino plaster walls"
            category="Marmorino"
            location="Potomac, MD"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="The Marmorino finish in our master bathroom is absolutely breathtaking. It looks like real marble but without the maintenance issues. We're so pleased with the craftsmanship and attention to detail."
            author="Elizabeth R."
            location="McLean, VA"
          />
          <TestimonialCard
            quote="Our hotel lobby has been completely transformed by the Marmorino plaster walls. The depth and luxury they bring to the space has impressed both our staff and guests. It was worth every penny."
            author="James W."
            location="Washington, DC"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Color Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=white marmorino plaster with gray veining"
                alt="Classic White"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Classic White</h3>
            <p className="text-muted-foreground mb-4">
              Timeless white Marmorino with subtle gray veining, reminiscent of Carrara marble. Our most popular choice
              for bathrooms and elegant spaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=warm beige marmorino plaster with gold accents"
                alt="Warm Beige"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Warm Beige</h3>
            <p className="text-muted-foreground mb-4">
              Rich, warm beige Marmorino with gold and brown veining, creating a luxurious, inviting atmosphere perfect
              for dining rooms and living spaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=verde green marmorino plaster with white veining"
                alt="Verde Green"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Verde Green</h3>
            <p className="text-muted-foreground mb-4">
              Sophisticated green Marmorino with white veining, inspired by Verde Alpi marble. Makes a bold statement in
              studies, libraries, and upscale commercial spaces.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Need help selecting the perfect color?</h3>
        <p className="text-muted-foreground mb-4">
          The color you choose for your Marmorino finish will significantly impact its marble-like appearance. Our
          comprehensive color guide can help you select the perfect shade to achieve your desired look.
        </p>
        <Button asChild variant="outline">
          <Link href="/guides/roman-plaster-colors">View Our Color Selection Guide</Link>
        </Button>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Classic Marmorino</h3>
            <div className="text-primary text-2xl font-bold mb-4">$25 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Traditional Marmorino finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Three-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Standard color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Subtle veining</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium protective sealer</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Perfect for bathrooms, accent walls, and smaller luxury spaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20 ring-1 ring-primary/20">
            <div className="text-center mb-2">
              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Marmorino</h3>
            <div className="text-primary text-2xl font-bold mb-4">$30 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Enhanced Marmorino finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Four-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Extended color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Pronounced veining</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>High-performance sealer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Enhanced polishing</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Ideal for entryways, dining rooms, and primary living spaces.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Luxury Marmorino</h3>
            <div className="text-primary text-2xl font-bold mb-4">$35 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Museum-quality finish</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Five-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Custom color matching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Custom veining design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Imported Italian materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Maximum polish and depth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>10-year warranty</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Perfect for luxury homes, high-end commercial spaces, and showcase areas.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Additional Considerations</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Minimum project size of 60 square feet</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Custom veining patterns require a design consultation</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Gold or silver leaf accents available for an additional $8-12 per square foot</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Waterproof sealer for bathrooms and wet areas included in all packages</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Volume discounts available for projects over 200 square feet</span>
            </li>
          </ul>
          <p className="mt-4">
            Have more questions about Marmorino Roman Plaster? Check out our{" "}
            <Link href="/guides/roman-plaster-faq" className="text-primary underline underline-offset-4">
              comprehensive FAQ
            </Link>{" "}
            for detailed answers.
          </p>
        </div>
      </section>

      <section id="quote-form" className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Request a Quote</h2>
          <p className="text-center text-muted-foreground mb-6">
            Interested in Marmorino Roman Plaster for your home or business? Fill out the form below to get a free
            quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
