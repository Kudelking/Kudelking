import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Textured Limewash Walls | Accent Walls Pro",
  description:
    "Transform your space with dramatic textured limewash walls. Professional application throughout DC, Maryland & Virginia.",
}

export default function TexturedLimewashWallsPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/limewash-mediterranean-wall.png"
            alt="Textured Limewash Wall Finish"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Textured Limewash Walls</h1>
              <p className="text-lg md:text-xl opacity-90">Dramatic texture with old-world charm and rustic elegance</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Rich Texture with Old-World Character</h2>
            <p className="text-muted-foreground mb-4">
              Our textured limewash creates walls with pronounced dimension, depth, and rustic character. This artisanal
              finish celebrates the beauty of imperfection, with subtle variations and organic movement that evoke the
              centuries-old walls of Mediterranean villas and European country houses.
            </p>
            <p className="text-muted-foreground mb-4">
              Unlike typical wall treatments, textured limewash creates a tactile, three-dimensional surface that
              invites touch and creates rich visual interest through its interplay of light and shadow throughout the
              day.
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
            <Image
              src="/placeholder.svg?key=okq3e"
              alt="Textured Limewash Detail Closeup"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/10 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">The Beauty of Textured Limewash</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Dramatic Dimension</h3>
            <p className="text-muted-foreground">
              Textured limewash creates surfaces with pronounced variation, tactile dimension, and a depth that
              transforms flat walls into architectural features.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Old-World Charm</h3>
            <p className="text-muted-foreground">
              The rustic finish evokes the ancient walls of Mediterranean villas, Tuscan farmhouses, and European
              chateaus, bringing authentic historical character to modern spaces.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Striking Light Play</h3>
            <p className="text-muted-foreground">
              The varied topography of textured limewash creates dramatic interplay with light, casting subtle shadows
              that change throughout the day and enhance the wall's depth.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Artisanal Character</h3>
            <p className="text-muted-foreground">
              Each wall is a unique creation, hand-applied by skilled artisans using traditional techniques that cannot
              be replicated by machine or mass production.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Natural Materials</h3>
            <p className="text-muted-foreground">
              Made from limestone that has been crushed, burned, and mixed with water, limewash is an eco-friendly,
              non-toxic wall finish with excellent breathability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-3">Evolving Beauty</h3>
            <p className="text-muted-foreground">
              Textured limewash continues to carbonate and develop over time, creating a living finish that gains
              character and patina with age.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Texture Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image src="/placeholder.svg?key=rwyqu" alt="Mediterranean Texture" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Mediterranean</h3>
              <p className="text-muted-foreground mb-4">
                Inspired by the sun-baked walls of Mediterranean villas, this texture style features moderate dimension
                with subtle swirls and natural variations. The finish creates the authentic look of walls that have aged
                gracefully under southern European skies.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Moderate dimension and texture depth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Subtle movement and directional swirls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Perfect for living rooms and dining spaces</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image src="/rustic-farmhouse-limewash.png" alt="Rustic Farmhouse Texture" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Rustic Farmhouse</h3>
              <p className="text-muted-foreground mb-4">
                This more pronounced texture evokes the walls of European country homes and rustic farmhouses. With
                heightened dimension and organic variations, this finish creates a bold statement with authentic
                old-world character.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>More pronounced texture and dimension</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Dramatic light and shadow play</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Ideal for creating statement walls</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image src="/santa-fe-adobe-limewash.png" alt="Santa Fe Texture" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Santa Fe</h3>
              <p className="text-muted-foreground mb-4">
                Inspired by adobe architecture of the American Southwest, this texture style features soft, rounded
                edges and gentle undulations. The organic finish creates a warm, grounding presence reminiscent of
                traditional earthen buildings.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Soft, rounded texture with adobe-like appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Earthy, organic character</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Beautiful with Southwestern and desert modern décor</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-56">
              <Image
                src="/placeholder.svg?height=300&width=500&query=contemporary artisan limewash texture"
                alt="Contemporary Artisan Texture"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Contemporary Artisan</h3>
              <p className="text-muted-foreground mb-4">
                Our modern interpretation of textured limewash features intentional pattern work and more controlled
                texture application. This style brings ancient techniques into contemporary spaces with deliberate
                artistry and refined execution.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Intentional pattern work and directional texture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>More controlled, refined appearance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Perfect for modern and transitional interiors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Color Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="relative rounded-lg overflow-hidden aspect-square group">
            <Image
              src="/placeholder.svg?height=300&width=300&query=white textured limewash wall"
              alt="Whites & Off-Whites"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Whites & Off-Whites</h3>
                <p className="text-sm">Classic brightness that highlights texture</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden aspect-square group">
            <Image
              src="/placeholder.svg?height=300&width=300&query=warm earth tone textured limewash"
              alt="Earth Tones"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Earth Tones</h3>
                <p className="text-sm">Warm, grounding hues with natural appeal</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden aspect-square group">
            <Image
              src="/placeholder.svg?height=300&width=300&query=terracotta textured limewash wall"
              alt="Mediterranean Hues"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Mediterranean Hues</h3>
                <p className="text-sm">Terracottas, ochres, and sun-washed tones</p>
              </div>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden aspect-square group">
            <Image
              src="/placeholder.svg?height=300&width=300&query=custom color textured limewash wall"
              alt="Custom Colors"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Custom Colors</h3>
                <p className="text-sm">Personalized hues to match your vision</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-muted-foreground mb-4">
            The unique nature of textured limewash means that each color develops rich variations and subtle nuances
            that add to the character and depth of your walls. We'll help you select the perfect color to achieve your
            desired aesthetic.
          </p>
          <Button asChild>
            <Link href="/contact">Schedule a Color Consultation</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Ideal Spaces for Textured Limewash</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=textured limewash dining room"
                alt="Dining Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Dining Rooms</h3>
              <p className="text-muted-foreground">
                Textured limewash creates an intimate, inviting atmosphere perfect for dining spaces. The warm, tactile
                walls provide a beautiful backdrop for meals and gatherings, adding character that enhances the dining
                experience.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=textured limewash accent wall living room"
                alt="Accent Walls"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Accent Walls</h3>
              <p className="text-muted-foreground">
                A textured limewash accent wall creates a dramatic focal point in any room. The dimensional finish draws
                the eye and adds architectural interest, making it perfect for highlighting important areas in your
                home.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=textured limewash entryway"
                alt="Entryways"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Entryways & Foyers</h3>
              <p className="text-muted-foreground">
                Make a striking first impression with textured limewash in your entryway. The old-world character
                creates an immediate sense of warmth and welcome while setting the tone for the rest of your home.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div className="relative h-32 w-32 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=200&width=200&query=textured limewash powder room"
                alt="Powder Rooms"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Powder Rooms & Small Spaces</h3>
              <p className="text-muted-foreground">
                Small spaces like powder rooms are perfect for textured limewash, where the dramatic finish can create a
                jewel-box effect. The breathable nature of limewash also helps manage humidity in bathroom spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 p-8 rounded-xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Artisanal Process</h2>
          <p className="text-muted-foreground mb-8">
            Creating beautiful textured limewash requires traditional techniques passed down through generations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=textured limewash color samples"
                alt="Consultation & Design"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Consultation & Design</h3>
            <p className="text-muted-foreground">
              We begin with a detailed consultation to understand your aesthetic goals and help you select the perfect
              texture style and color. We create samples to ensure you're confident in your choices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=wall preparation for textured limewash"
                alt="Surface Preparation"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Meticulous Preparation</h3>
            <p className="text-muted-foreground">
              We carefully prepare your walls for limewash application, ensuring the surface is clean, stable, and
              properly primed to accept the limewash and allow for optimal texture development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=300&query=artisan applying textured limewash"
                alt="Artisanal Application"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Traditional Application</h3>
            <p className="text-muted-foreground">
              Our artisans apply multiple layers of limewash using specialized tools and time-honored techniques to
              build the desired texture. Each stroke is intentional, creating a truly handcrafted finish.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Textured Limewash Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=textured limewash dining room rustic"
              alt="Rustic Dining Room"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Rustic Dining Room</h3>
                <p className="text-sm">Bethesda, MD</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=mediterranean style bedroom with textured walls"
              alt="Mediterranean Bedroom"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Mediterranean Primary Bedroom</h3>
                <p className="text-sm">Alexandria, VA</p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square rounded-lg overflow-hidden group">
            <Image
              src="/placeholder.svg?height=400&width=400&query=powder room with dramatic textured limewash"
              alt="Luxury Powder Room"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 text-white">
                <h3 className="font-bold">Luxury Powder Room</h3>
                <p className="text-sm">Chevy Chase, MD</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">How durable is textured limewash?</h3>
            <p className="text-muted-foreground">
              Textured limewash is remarkably durable when properly applied. It continues to cure and harden over time,
              becoming more resilient with age. In interior applications, it can last for decades with minimal
              maintenance. The natural limestone composition makes it resistant to mold and mildew.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Can textured limewash be applied over existing paint?</h3>
            <p className="text-muted-foreground">
              Yes, textured limewash can be applied over most existing painted surfaces with proper preparation. Our
              team will assess your current walls and recommend the appropriate primer and preparation techniques to
              ensure optimal adhesion and texture development.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">How is textured limewash different from regular paint?</h3>
            <p className="text-muted-foreground">
              Unlike paint, which forms a film on the surface, limewash penetrates the substrate and crystallizes,
              creating a breathable surface that allows moisture to escape. Textured limewash has a distinctive
              dimensional quality with natural variations in color and texture that cannot be achieved with regular
              paint. It also has natural antimicrobial properties.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Can I clean walls with textured limewash?</h3>
            <p className="text-muted-foreground">
              Yes, textured limewash walls can be cleaned, though with some care. For routine maintenance, dusting with
              a soft brush or vacuum with a brush attachment is recommended. For spot cleaning, a slightly damp cloth
              can be used. Avoid harsh chemicals or abrasive scrubbing that might damage the texture.
            </p>
          </div>
        </div>
      </section>

      <section id="quote-form" className="bg-primary/5 p-8 rounded-xl">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Request a Quote</h2>
          <p className="text-muted-foreground">
            Interested in transforming your space with textured limewash? Fill out the form below to request a
            consultation and quote. Our team will contact you to discuss your project in detail.
          </p>
        </div>

        {/* Quote form would be inserted here */}
        <div className="text-center p-8 border border-dashed border-muted-foreground/50 rounded-lg">
          <p className="text-muted-foreground mb-4">Quote form component would be rendered here</p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
