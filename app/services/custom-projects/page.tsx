import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Custom Wall Projects | Accent Walls Pro",
  description:
    "Bespoke custom wall projects for unique spaces. Our expert team brings your vision to life with premium materials and craftsmanship.",
}

export default function CustomProjectsPage() {
  return (
    <div>
      <section className="mb-12">
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=500&width=1000&query=custom luxury wall treatment in modern home"
            alt="Custom Wall Projects"
            width={1000}
            height={500}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">Custom Wall Projects</h1>
        <p className="text-muted-foreground mb-6">
          When standard solutions don't fit your unique vision, our custom wall projects service brings your ideas to
          life. From bespoke designs to challenging spaces, our expert team creates one-of-a-kind wall treatments
          tailored specifically to your needs and aesthetic preferences.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Discuss Your Project</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/portfolio">View Our Portfolio</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Custom Wall Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=mixed material accent wall with wood and metal"
                alt="Mixed Materials"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mixed Materials</h3>
              <p className="text-muted-foreground mb-4">
                Combining different materials like wood, metal, stone, and textiles to create unique textural and visual
                experiences.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=3d wall panels with integrated lighting"
                alt="3D Wall Treatments"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">3D Wall Treatments</h3>
              <p className="text-muted-foreground mb-4">
                Sculptural wall elements that create depth, shadow, and dimension beyond traditional flat surfaces.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=custom wall mural hand painted"
                alt="Custom Murals"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Custom Murals</h3>
              <p className="text-muted-foreground mb-4">
                Bespoke painted or applied murals that tell your story or complement your space's unique character.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall with integrated storage and display"
                alt="Functional Walls"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Functional Walls</h3>
              <p className="text-muted-foreground mb-4">
                Walls that incorporate storage, display areas, or other functional elements while maintaining aesthetic
                appeal.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=wall with integrated smart home technology"
                alt="Smart Walls"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Walls</h3>
              <p className="text-muted-foreground mb-4">
                Integrating technology, lighting, and automation into wall designs for both functionality and ambiance.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=300&width=400&query=unique architectural wall feature in odd shaped room"
                alt="Challenging Spaces"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Challenging Spaces</h3>
              <p className="text-muted-foreground mb-4">
                Custom solutions for unusual room shapes, awkward corners, or architectural challenges that require
                bespoke approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Our Custom Project Process</h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=interior designer consultation for custom wall"
                alt="Consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">1. Consultation & Concept Development</h3>
              <p className="text-muted-foreground">
                We begin with an in-depth consultation to understand your vision, needs, and space. Our design team
                works with you to develop concepts that align with your aesthetic preferences, functional requirements,
                and budget considerations. This collaborative process ensures we capture your unique vision.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">2. Design & Material Selection</h3>
              <p className="text-muted-foreground">
                Once the concept is approved, we create detailed designs and select materials that will bring your
                vision to life. We source premium materials that meet both aesthetic and durability requirements,
                presenting samples and mockups to help you visualize the final result before proceeding.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=material samples for custom wall project"
                alt="Material Selection"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=craftsman working on custom wall installation"
                alt="Fabrication"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">3. Fabrication & Preparation</h3>
              <p className="text-muted-foreground">
                Our skilled craftsmen fabricate custom elements in our workshop while our team prepares your space for
                installation. This phase involves precise measurements, custom cutting, finishing, and any necessary
                pre-assembly to ensure a smooth installation process.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">4. Professional Installation</h3>
              <p className="text-muted-foreground">
                Our experienced installation team brings your custom wall project to life with meticulous attention to
                detail. We work efficiently while maintaining the highest standards of craftsmanship, ensuring every
                element is perfectly placed and secured for lasting beauty and functionality.
              </p>
            </div>
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=final installation of custom wall feature"
                alt="Installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3 relative h-48 w-full rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400&query=final reveal of custom wall project"
                alt="Final Reveal"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2">5. Final Reveal & Care Instructions</h3>
              <p className="text-muted-foreground">
                We present your completed custom wall project and provide detailed care and maintenance instructions to
                ensure its longevity. Our team conducts a final walkthrough with you to ensure every aspect meets your
                expectations and addresses any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Featured Custom Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600&query=luxury mixed material feature wall in modern living room"
                alt="Modern Living Room Feature"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Living Room Feature</h3>
              <p className="text-muted-foreground mb-4">
                A stunning mixed-material wall combining walnut wood slats, brushed brass accents, and integrated LED
                lighting to create a warm, sophisticated focal point in this contemporary living space.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600&query=restaurant custom 3d wall installation with lighting"
                alt="Restaurant Statement Wall"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Restaurant Statement Wall</h3>
              <p className="text-muted-foreground mb-4">
                A dramatic 3D geometric installation with integrated color-changing lighting that creates different
                moods throughout the day, becoming a signature element of this upscale dining establishment.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600&query=home office with built-in storage wall and desk"
                alt="Functional Home Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Functional Home Office</h3>
              <p className="text-muted-foreground mb-4">
                A custom wall system integrating a floating desk, concealed storage, and decorative elements to create a
                beautiful yet highly functional workspace in a compact urban apartment.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=400&width=600&query=custom curved wall with integrated seating in odd shaped room"
                alt="Architectural Challenge Solution"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Architectural Challenge Solution</h3>
              <p className="text-muted-foreground mb-4">
                A bespoke curved wall treatment with integrated seating that transformed an awkward corner into a
                stunning architectural feature and functional conversation area.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Create Something Unique?</h2>
          <p className="mb-6">
            Contact us today to discuss your custom wall project. Our team of designers and craftsmen are ready to bring
            your vision to life with exceptional materials and craftsmanship.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Custom Project</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
