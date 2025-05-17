import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialCard } from "@/components/testimonial-card"

export const metadata = {
  title: "Smooth Roman Plaster Wall Finishes | AccentWallsPro",
  description:
    "Create elegant, polished walls with our smooth Roman Plaster finish. Perfect for contemporary and traditional spaces alike. Serving DC, Maryland & Virginia.",
}

export default function SmoothRomanPlasterPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/images/services/roman-plaster/smooth/hero.png"
            alt="Smooth Roman Plaster Wall Finish"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Smooth Roman Plaster</h1>
              <p className="text-lg md:text-xl opacity-90">
                Elegant, polished walls with subtle depth and luxurious appeal
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sophisticated Elegance for Modern Spaces</h2>
            <p className="text-muted-foreground mb-4">
              Our smooth Roman Plaster finish creates walls with a sleek, polished appearance and subtle depth that
              catches the light beautifully. This elegant finish works perfectly in both contemporary and traditional
              spaces, adding a touch of luxury without overwhelming the design.
            </p>
            <p className="text-muted-foreground mb-4">
              Each application is carefully crafted by our skilled artisans who apply multiple thin layers of plaster,
              burnishing between coats to create a smooth, polished surface with incredible depth and character.
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
              src="/images/services/roman-plaster/smooth/closeup.png"
              alt="Smooth Roman Plaster Texture Close-up"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/beige.png"
              alt="Neutral Beige Smooth Roman Plaster"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Neutral Beige</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/gray.png"
              alt="Soft Gray Smooth Roman Plaster"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Soft Gray</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/white.png"
              alt="Warm White Smooth Roman Plaster"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Warm White</p>
            </div>
          </div>
        </div>
        <p className="text-center text-muted-foreground mt-4">
          Smooth Roman Plaster is available in a wide range of colors to complement any design aesthetic
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Perfect For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/services/roman-plaster/smooth/living-room.png"
                alt="Living Rooms"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Living Rooms</h3>
            <p className="text-muted-foreground">
              Create an elegant backdrop for your furniture and art with smooth Roman Plaster walls.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/services/roman-plaster/smooth/bedroom.png"
                alt="Bedrooms"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Bedrooms</h3>
            <p className="text-muted-foreground">
              Add a touch of luxury to your bedroom with a smooth Roman Plaster accent wall.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/services/roman-plaster/smooth/dining-room.png"
                alt="Dining Rooms"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Dining Rooms</h3>
            <p className="text-muted-foreground">
              Create a sophisticated dining experience with elegant Roman Plaster walls.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/services/roman-plaster/smooth/bathroom.png"
                alt="Bathrooms"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Bathrooms</h3>
            <p className="text-muted-foreground">
              Transform your bathroom into a spa-like retreat with waterproof Roman Plaster.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Contemporary Living Room"
            description="Smooth Roman Plaster in a soft white creates an elegant backdrop for modern furniture and art."
            imageSrc="/images/portfolio/smooth-living-room.png"
            category="Smooth Finish"
            location="Chevy Chase, MD"
          />
          <ProjectCard
            title="Master Bedroom Retreat"
            description="Smooth Roman Plaster in a calming blue-gray creates a serene atmosphere in this master bedroom."
            imageSrc="/images/portfolio/smooth-bedroom.png"
            category="Smooth Finish"
            location="Arlington, VA"
          />
          <ProjectCard
            title="Elegant Dining Room"
            description="Smooth Roman Plaster in a rich taupe adds sophistication to this formal dining space."
            imageSrc="/images/portfolio/smooth-dining-room.jpg"
            category="Smooth Finish"
            location="Georgetown, DC"
          />
          <ProjectCard
            title="Luxury Living Room"
            description="Smooth Roman Plaster in a warm beige creates a stunning backdrop in this high-ceiling modern living room."
            imageSrc="/images/services/roman-plaster/luxury-living-room.png"
            category="Smooth Finish"
            location="Potomac, MD"
          />
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/roman-plaster/smooth/before-after.png"
            alt="Before and After Smooth Roman Plaster"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Space</h2>
              <p className="text-lg mb-8">
                See the dramatic difference Smooth Roman Plaster can make in your home. Our skilled artisans can
                transform ordinary walls into extraordinary focal points that elevate your entire space.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/portfolio">View More Transformations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="The smooth Roman Plaster finish in our living room is absolutely stunning. It has such a beautiful depth that changes throughout the day as the light shifts. We couldn't be happier with the result!"
            author="Sarah M."
            location="Bethesda, MD"
          />
          <TestimonialCard
            quote="We wanted something special for our dining room, and the smooth Roman Plaster exceeded our expectations. The finish is elegant and sophisticated without being flashy. It's the perfect backdrop for our dinner parties."
            author="Michael T."
            location="McLean, VA"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Process</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Consultation & Design</h3>
              <p className="text-muted-foreground">
                We begin with a thorough consultation to understand your vision, preferences, and the specific
                requirements of your space. Our design team will help you select the perfect color and finish for your
                Roman Plaster walls.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Surface Preparation</h3>
              <p className="text-muted-foreground">
                Proper preparation is crucial for a flawless finish. We carefully prepare your walls, ensuring they are
                clean, smooth, and properly primed to create the perfect foundation for the Roman Plaster application.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Base Coat Application</h3>
              <p className="text-muted-foreground">
                Our skilled artisans apply the first layer of plaster, creating the foundation for the smooth finish.
                This base coat is allowed to dry completely before proceeding to the next step.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">4</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Multiple Layer Application</h3>
              <p className="text-muted-foreground">
                We apply multiple thin layers of plaster, burnishing between each coat to create the smooth, polished
                surface that is characteristic of Roman Plaster. Each layer adds depth and dimension to the finish.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
              <span className="text-primary font-bold">5</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Final Polishing & Sealing</h3>
              <p className="text-muted-foreground">
                The final step involves polishing the surface to achieve the desired level of sheen and applying a
                protective sealer to enhance durability and make the surface easier to maintain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/process-1.png"
              alt="Base Coat Application"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Step 1: Base Coat Application</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/process-2.png"
              alt="Burnishing Process"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Step 2: Burnishing Process</p>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/services/roman-plaster/smooth/process-3.png"
              alt="Sealing Process"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bottom-0 w-full bg-black/60 p-2">
              <p className="text-white text-sm font-medium text-center">Step 3: Sealing Process</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Need help selecting a color?</h3>
        <p className="text-muted-foreground mb-4">
          Choosing the right color for your smooth Roman Plaster finish is crucial to achieving the look you desire. Our
          comprehensive color guide can help you make the perfect choice.
        </p>
        <Button asChild variant="outline">
          <Link href="/guides/roman-plaster-colors">View Our Color Selection Guide</Link>
        </Button>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Standard Package</h3>
            <div className="text-primary text-2xl font-bold mb-4">$12 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Basic surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Two-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Standard color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Basic protective sealer</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">Ideal for accent walls and smaller areas in good condition.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20 ring-1 ring-primary/20">
            <div className="text-center mb-2">
              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <div className="text-primary text-2xl font-bold mb-4">$15 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Thorough surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Three-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Extended color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium protective sealer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Enhanced burnishing</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">Perfect for living rooms, dining rooms, and primary spaces.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Luxury Package</h3>
            <div className="text-primary text-2xl font-bold mb-4">$18 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Four-coat application</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Custom color matching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>High-performance sealer</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Maximum polish and sheen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>5-year warranty</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Ideal for luxury homes, high-traffic areas, and statement walls.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Additional Considerations</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Minimum project size of 100 square feet</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Wall repairs or extensive prep work may incur additional costs</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Custom color matching available for an additional fee</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Multi-room discounts available for larger projects</span>
            </li>
          </ul>
          <p className="mt-4">
            Have more questions about smooth Roman Plaster? Check out our{" "}
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
            Interested in smooth Roman Plaster for your home or business? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
