import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialCard } from "@/components/testimonial-card"

export const metadata = {
  title: "Textured Roman Plaster Wall Finishes | AccentWallsPro",
  description:
    "Add depth and character to your space with our textured Roman Plaster finish. Create dramatic focal points with rich texture and visual interest. Serving DC, Maryland & Virginia.",
}

export default function TexturedRomanPlasterPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/modern-home-roman-plaster.png"
            alt="Textured Roman Plaster Wall Finish"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Textured Roman Plaster</h1>
              <p className="text-lg md:text-xl opacity-90">
                Dramatic walls with rich texture and captivating visual interest
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Bold Texture for Statement Walls</h2>
            <p className="text-muted-foreground mb-4">
              Our textured Roman Plaster finish creates walls with pronounced texture and dramatic visual interest. This
              finish adds character and depth to any space, creating a focal point that draws the eye and invites touch.
            </p>
            <p className="text-muted-foreground mb-4">
              Each application is carefully crafted by our skilled artisans who use specialized techniques to create
              custom texture patterns that range from subtle to bold, depending on your design preferences.
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
              src="/placeholder.svg?key=3b1gn"
              alt="Textured Roman Plaster Close-up"
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
                src="/textured-plaster-living-room.png"
                alt="Accent Walls"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Accent Walls</h3>
            <p className="text-muted-foreground">
              Create a dramatic focal point with a textured Roman Plaster accent wall.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image src="/roman-plaster-restaurant.png" alt="Restaurants" fill className="object-cover" unoptimized />
            </div>
            <h3 className="text-xl font-bold mb-2">Restaurants</h3>
            <p className="text-muted-foreground">Add character and warmth to dining spaces with textured walls.</p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/hotel-lobby-roman-plaster.png"
                alt="Hotel Lobbies"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Hotel Lobbies</h3>
            <p className="text-muted-foreground">Create a memorable first impression with textured feature walls.</p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg text-center">
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <Image src="/home-office-roman-plaster.png" alt="Home Offices" fill className="object-cover" unoptimized />
            </div>
            <h3 className="text-xl font-bold mb-2">Home Offices</h3>
            <p className="text-muted-foreground">
              Add character and inspiration to your workspace with textured walls.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Modern Dining Room"
            description="Textured Roman Plaster in a rich terracotta creates a warm, inviting atmosphere in this dining space."
            imageSrc="/terracotta-roman-dining.png"
            category="Textured Finish"
            location="Alexandria, VA"
          />
          <ProjectCard
            title="Boutique Hotel Lobby"
            description="Textured Roman Plaster in a deep charcoal creates a dramatic first impression in this hotel lobby."
            imageSrc="/placeholder.svg?key=uev6v"
            category="Textured Finish"
            location="Washington, DC"
          />
          <ProjectCard
            title="Modern Living Room"
            description="Textured Roman Plaster in a warm beige creates a dramatic focal point in this high-ceiling contemporary living space."
            imageSrc="/images/services/roman-plaster/luxury-living-room.png"
            category="Textured Finish"
            location="Bethesda, MD"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TestimonialCard
            quote="The textured Roman Plaster wall in our dining room is absolutely stunning. Everyone who visits comments on it, and it's become the focal point of our home. The craftsmanship is exceptional!"
            author="Jennifer K."
            location="Alexandria, VA"
          />
          <TestimonialCard
            quote="We wanted something unique for our restaurant, and the textured Roman Plaster walls delivered beyond our expectations. The depth and character they add to our space has helped create the exact atmosphere we were looking for."
            author="David L."
            location="Georgetown, DC"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Texture Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/subtle-roman-plaster.png" alt="Subtle Texture" fill className="object-cover" unoptimized />
            </div>
            <h3 className="text-xl font-bold mb-2">Subtle Texture</h3>
            <p className="text-muted-foreground mb-4">
              A gentle texture that adds interest without overwhelming the space. Perfect for larger areas and more
              traditional settings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?key=603rc" alt="Medium Texture" fill className="object-cover" unoptimized />
            </div>
            <h3 className="text-xl font-bold mb-2">Medium Texture</h3>
            <p className="text-muted-foreground mb-4">
              A balanced texture that creates noticeable depth and character. Our most popular option for accent walls.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=dramatic textured roman plaster wall sample"
                alt="Dramatic Texture"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Dramatic Texture</h3>
            <p className="text-muted-foreground mb-4">
              Bold, pronounced texture that creates a strong statement. Perfect for feature walls and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Need help selecting a color?</h3>
        <p className="text-muted-foreground mb-4">
          The right color can dramatically enhance the texture of your Roman Plaster walls. Our comprehensive color
          guide can help you select the perfect shade to complement your textured finish.
        </p>
        <Button asChild variant="outline">
          <Link href="/guides/roman-plaster-colors">View Our Color Selection Guide</Link>
        </Button>
      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing & Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Subtle Texture</h3>
            <div className="text-primary text-2xl font-bold mb-4">$15 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Gentle, understated texture</span>
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
            <p className="text-sm text-muted-foreground">Perfect for larger areas and more traditional settings.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20 ring-1 ring-primary/20">
            <div className="text-center mb-2">
              <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Medium Texture</h3>
            <div className="text-primary text-2xl font-bold mb-4">$18 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Balanced, noticeable texture</span>
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
                <span>Custom texture pattern</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Ideal for accent walls and feature areas in homes and businesses.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-2">Dramatic Texture</h3>
            <div className="text-primary text-2xl font-bold mb-4">$22 per sq ft</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Bold, pronounced texture</span>
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
                <span>Highly customized texture</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>5-year warranty</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Perfect for statement walls, commercial spaces, and luxury properties.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-muted/30 p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-3">Additional Considerations</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Minimum project size of 80 square feet</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Complex texture patterns may incur additional design fees</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Wall repairs or extensive prep work may incur additional costs</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Metallic additives available for an additional $3-5 per square foot</span>
            </li>
          </ul>
          <p className="mt-4">
            Have more questions about textured Roman Plaster? Check out our{" "}
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
            Interested in textured Roman Plaster for your home or business? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
