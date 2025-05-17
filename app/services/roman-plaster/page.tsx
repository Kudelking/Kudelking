import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { QuoteForm } from "@/components/quote-form"
import { OptimizedImage } from "@/components/optimized-image"

export const metadata = {
  title: "Roman Plaster Wall Finishes | AccentWallsPro",
  description:
    "Transform your space with luxurious Roman Plaster wall finishes. We offer smooth, textured, and marmorino finishes for a timeless, elegant look. Serving DC, Maryland & Virginia.",
}

export default function RomanPlasterPage() {
  // Константа для URL изображения Roman Plaster
  const ROMAN_PLASTER_IMAGE =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"

  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
          <OptimizedImage
            src={ROMAN_PLASTER_IMAGE}
            alt="Roman Plaster Wall Finishes"
            fill
            className="w-full h-full"
            priority
            unoptimized={true}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Roman Plaster Wall Finishes</h1>
              <p className="text-lg md:text-xl opacity-90">
                Timeless elegance with depth, texture, and luxurious appeal
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Luxurious Wall Finishes with Timeless Appeal</h2>
            <p className="text-muted-foreground mb-4">
              Roman Plaster (also known as Venetian Plaster) is a luxurious wall finishing technique that dates back to
              ancient Rome. This timeless finish creates walls with depth, texture, and a subtle sheen that catches the
              light beautifully.
            </p>
            <p className="text-muted-foreground mb-4">
              Our skilled artisans apply multiple layers of plaster, burnishing between coats to create a smooth,
              polished surface that resembles natural stone or marble. The result is a wall finish with incredible depth
              and character that becomes more beautiful with age.
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
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <OptimizedImage
              src={ROMAN_PLASTER_IMAGE}
              alt="Roman Plaster Texture Close-up"
              fill
              className="w-full h-full"
              unoptimized={true}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Discover the Beauty of Roman Plaster</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="/images/services/roman-plaster/artisan-craftsmanship.png"
              alt="Roman Plaster Application Process"
              fill
              className="w-full h-full"
              fallbackSrc={ROMAN_PLASTER_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold mb-1">Artisan Craftsmanship</h3>
                <p className="text-sm">Applied by skilled artisans using traditional techniques</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="/images/services/roman-plaster/light-interaction.png"
              alt="Roman Plaster Light Interaction"
              fill
              className="w-full h-full"
              fallbackSrc={ROMAN_PLASTER_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold mb-1">Depth & Dimension</h3>
                <p className="text-sm">Unique interaction with light creates visual depth and movement</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <OptimizedImage
              src="/images/services/roman-plaster/elegant-interior.png"
              alt="Roman Plaster in Interior Design"
              fill
              className="w-full h-full"
              fallbackSrc={ROMAN_PLASTER_IMAGE}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-lg font-bold mb-1">Timeless Elegance</h3>
                <p className="text-sm">Elevates any space with sophisticated, enduring beauty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Roman Plaster Finish Options</h2>
        <Tabs defaultValue="smooth">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
            <TabsTrigger value="smooth">Smooth Finish</TabsTrigger>
            <TabsTrigger value="textured">Textured Finish</TabsTrigger>
            <TabsTrigger value="marmorino">Marmorino</TabsTrigger>
          </TabsList>
          <TabsContent value="smooth" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <OptimizedImage
                  src={ROMAN_PLASTER_IMAGE}
                  alt="Smooth Roman Plaster Finish"
                  fill
                  className="w-full h-full"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Smooth Roman Plaster</h3>
                <p className="text-muted-foreground mb-4">
                  Our smooth Roman Plaster finish creates a sleek, polished surface with subtle depth and movement. This
                  elegant finish works beautifully in contemporary and traditional spaces alike, adding a touch of
                  luxury without overwhelming the design.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Subtle, sophisticated appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Polished, reflective surface</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Perfect for contemporary spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Available in countless color options</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/roman-plaster/smooth">Learn More</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="textured" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <OptimizedImage
                  src={ROMAN_PLASTER_IMAGE}
                  alt="Textured Roman Plaster Finish"
                  fill
                  className="w-full h-full"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Textured Roman Plaster</h3>
                <p className="text-muted-foreground mb-4">
                  Our textured Roman Plaster finish creates walls with pronounced texture and dramatic visual interest.
                  This finish adds character and depth to any space, creating a focal point that draws the eye and
                  invites touch.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Dramatic, tactile texture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Creates visual interest and depth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Perfect for creating focal points</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Customizable texture patterns</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/roman-plaster/textured">Learn More</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="marmorino" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <OptimizedImage
                  src={ROMAN_PLASTER_IMAGE}
                  alt="Marmorino Roman Plaster Finish"
                  fill
                  className="w-full h-full"
                  unoptimized={true}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Marmorino Plaster</h3>
                <p className="text-muted-foreground mb-4">
                  Marmorino is a luxurious type of Roman Plaster that mimics the appearance of polished marble. This
                  premium finish creates walls with incredible depth, subtle veining, and a high-end, stone-like
                  appearance that transforms any space into a showcase of elegance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Marble-like appearance with natural veining</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Highly polished, luxurious finish</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Perfect for high-end residential and commercial spaces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Durable and long-lasting</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/services/roman-plaster/marmorino">Learn More</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Roman Plaster Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Modern Living Room Accent Wall"
            description="Smooth Roman Plaster in a soft gray tone creates an elegant focal point in this contemporary living room."
            imageSrc="/images/portfolio/living-room-accent.png"
            category="Smooth Finish"
            location="Bethesda, MD"
          />
          <ProjectCard
            title="Luxury Master Bathroom"
            description="Marmorino plaster with subtle veining creates a spa-like atmosphere in this master bathroom."
            imageSrc="/images/portfolio/luxury-bathroom.png"
            category="Marmorino"
            location="McLean, VA"
          />
          <ProjectCard
            title="Dining Room Feature Wall"
            description="Textured Roman Plaster in a rich terracotta adds warmth and character to this dining space."
            imageSrc="/images/portfolio/dining-room-feature.png"
            category="Textured Finish"
            location="Washington, DC"
          />
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <OptimizedImage
              src="/images/services/roman-plaster/before-after-split.png"
              alt="Before and After Roman Plaster Transformation"
              fill
              className="w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Space</h2>
            <p className="text-muted-foreground mb-4">
              See the dramatic difference Roman Plaster can make in your home. Our skilled artisans can transform
              ordinary walls into extraordinary focal points that elevate your entire space.
            </p>
            <p className="text-muted-foreground mb-4">
              Whether you're looking to add subtle elegance to your living room, create a statement wall in your dining
              area, or bring spa-like luxury to your bathroom, Roman Plaster offers endless possibilities.
            </p>
            <Button asChild>
              <Link href="/portfolio">View More Transformations</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Benefits of Roman Plaster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Timeless Elegance</h3>
            <p className="text-muted-foreground">
              Roman Plaster has been used for centuries in the most elegant homes and palaces. Its timeless appeal never
              goes out of style and adds a touch of luxury to any space.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Depth and Dimension</h3>
            <p className="text-muted-foreground">
              Unlike flat paint, Roman Plaster creates walls with visual depth and dimension that change appearance as
              light moves across the surface throughout the day.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Durability</h3>
            <p className="text-muted-foreground">
              Roman Plaster is incredibly durable and becomes harder over time. It's resistant to scratches, scuffs, and
              can last for decades with minimal maintenance.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Natural Materials</h3>
            <p className="text-muted-foreground">
              Made from limestone and marble dust, Roman Plaster is a natural material that's environmentally friendly
              and contributes to better indoor air quality.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Versatility</h3>
            <p className="text-muted-foreground">
              Roman Plaster can be applied to virtually any surface and comes in countless colors and finishes to match
              any design aesthetic, from traditional to ultra-modern.
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Unique Character</h3>
            <p className="text-muted-foreground">
              Each Roman Plaster application is unique, with subtle variations in texture and finish that create
              one-of-a-kind walls that can't be replicated with paint.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Pricing</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Smooth Finish</h3>
              <div className="text-primary text-3xl font-bold mb-1">$12-18</div>
              <div className="text-muted-foreground">per square foot</div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Elegant, polished appearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Subtle depth and movement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Multiple color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Professional surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Protective sealer application</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/services/roman-plaster/smooth">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col relative">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Textured Finish</h3>
              <div className="text-primary text-3xl font-bold mb-1">$15-22</div>
              <div className="text-muted-foreground">per square foot</div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Dramatic texture and depth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Customizable texture patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Multiple color options</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Professional surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Protective sealer application</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/services/roman-plaster/textured">Learn More</Link>
            </Button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">Marmorino</h3>
              <div className="text-primary text-3xl font-bold mb-1">$25-35</div>
              <div className="text-muted-foreground">per square foot</div>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Luxurious marble-like appearance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Natural veining and depth</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Professional surface preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium protective sealer</span>
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/services/roman-plaster/marmorino">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Prices are estimates and may vary based on project specifics, wall condition, and location.</p>
          <p className="mt-2">Minimum project size may apply. Contact us for a personalized quote.</p>
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Help Choosing a Color?</h2>
          <p className="text-muted-foreground mb-6">
            Selecting the perfect color for your Roman Plaster walls is an important decision. Our comprehensive color
            guide will help you make the right choice for your space.
          </p>
          <Button asChild size="lg">
            <Link href="/guides/roman-plaster-colors">View Our Color Selection Guide</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions About Roman Plaster?</h2>
          <p className="text-muted-foreground mb-6">
            Find answers to common questions about Roman Plaster, including durability, maintenance, application
            process, and more in our comprehensive FAQ.
          </p>
          <Button asChild size="lg">
            <Link href="/guides/roman-plaster-faq">View Roman Plaster FAQs</Link>
          </Button>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/services/roman-plaster/artisan-application.png"
            alt="Roman Plaster Application"
            fill
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Craftsmanship</h2>
              <p className="text-lg mb-8">
                Our skilled artisans have years of specialized training in traditional Roman Plaster techniques. Each
                project is meticulously crafted to ensure exceptional quality and lasting beauty.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                <Link href="/about">Meet Our Artisans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Request a Quote</h2>
          <p className="text-center text-muted-foreground mb-6">
            Interested in Roman Plaster for your home or business? Fill out the form below to get a free quote.
          </p>
          <QuoteForm />
        </div>
      </section>
    </div>
  )
}
