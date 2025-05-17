import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { imagePaths } from "@/app/utils/images"

export const metadata = {
  title: "Roman Plaster FAQs | AccentWallsPro",
  description:
    "Find answers to frequently asked questions about Roman Plaster wall finishes. Learn about durability, maintenance, cost, application process, and more.",
}

export default function RomanPlasterFAQPage() {
  return (
    <div className="space-y-12">
      <section>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
          <Image
            src={imagePaths.hero.faq || "/placeholder.svg"}
            alt="Roman Plaster Frequently Asked Questions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-6 max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roman Plaster FAQs</h1>
              <p className="text-lg md:text-xl opacity-90">
                Everything you need to know about luxurious Roman Plaster wall finishes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">
            We've compiled answers to the most common questions about Roman Plaster wall finishes. If you don't find the
            information you're looking for, please don't hesitate to{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              contact us
            </Link>{" "}
            directly.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">General Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="what-is-roman-plaster">
                  <AccordionTrigger>What exactly is Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster (also known as Venetian Plaster) is a traditional wall finishing technique that
                      dates back to ancient Rome. It's made from slaked lime, marble dust, and natural pigments,
                      creating a material that hardens over time through a process called carbonation.
                    </p>
                    <p>
                      When applied to walls in multiple thin layers and burnished (polished) between coats, it creates a
                      surface with remarkable depth, subtle texture, and a natural sheen that resembles polished stone
                      or marble. Unlike paint, Roman Plaster becomes part of the wall, creating a durable, breathable
                      surface with unique character.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={imagePaths.romanPlaster.smooth || "/placeholder.svg"}
                      alt="Smooth Roman Plaster Finish"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 p-2">
                      <p className="text-white text-sm font-medium text-center">Smooth Finish</p>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={imagePaths.romanPlaster.textured || "/placeholder.svg"}
                      alt="Textured Roman Plaster Finish"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 p-2">
                      <p className="text-white text-sm font-medium text-center">Textured Finish</p>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={imagePaths.romanPlaster.marmorino || "/placeholder.svg"}
                      alt="Marmorino Roman Plaster Finish"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 p-2">
                      <p className="text-white text-sm font-medium text-center">Marmorino Finish</p>
                    </div>
                  </div>
                </div>

                <AccordionItem value="difference-from-paint">
                  <AccordionTrigger>How is Roman Plaster different from regular paint?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Unlike paint, which sits on the surface of a wall, Roman Plaster becomes an integral part of the
                      wall through a chemical process called carbonation. Key differences include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Depth and dimension:</span> Roman Plaster has visual depth that
                        changes with lighting, while paint appears flat
                      </li>
                      <li>
                        <span className="font-medium">Texture and feel:</span> Roman Plaster has a smooth, cool,
                        stone-like feel, while paint has a uniform texture
                      </li>
                      <li>
                        <span className="font-medium">Durability:</span> Roman Plaster becomes harder over time and is
                        more resistant to scuffs and scratches
                      </li>
                      <li>
                        <span className="font-medium">Breathability:</span> Roman Plaster allows walls to breathe,
                        preventing moisture buildup
                      </li>
                      <li>
                        <span className="font-medium">Aging:</span> Roman Plaster develops a beautiful patina over time,
                        while paint tends to fade and deteriorate
                      </li>
                    </ul>
                    <p>
                      While paint offers a quick, economical solution, Roman Plaster provides a premium, long-lasting
                      finish with unique aesthetic qualities that can't be achieved with paint.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="types-of-roman-plaster">
                  <AccordionTrigger>What types of Roman Plaster finishes are available?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">We offer three main types of Roman Plaster finishes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <span className="font-medium">Smooth Finish:</span> A sleek, polished surface with subtle depth
                        and movement. This elegant finish works beautifully in contemporary and traditional spaces
                        alike.
                      </li>
                      <li>
                        <span className="font-medium">Textured Finish:</span> Creates walls with pronounced texture and
                        dramatic visual interest. This finish adds character and depth to any space, creating a focal
                        point that draws the eye.
                      </li>
                      <li>
                        <span className="font-medium">Marmorino:</span> A premium finish that mimics the appearance of
                        polished marble. This luxurious option creates walls with incredible depth, subtle veining, and
                        a high-end, stone-like appearance.
                      </li>
                    </ul>
                    <p className="mt-2">
                      Each finish can be customized with different colors, textures, and sheens to achieve your desired
                      look.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="history-of-roman-plaster">
                  <AccordionTrigger>What is the history of Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster has a rich history dating back to ancient Rome, where it was developed as a durable,
                      beautiful wall finish for important buildings and homes of the wealthy. The technique was refined
                      during the Renaissance in Venice (hence the alternative name "Venetian Plaster"), where artisans
                      perfected methods to create finishes that mimicked expensive marble.
                    </p>
                    <p className="mb-2">
                      The finish became popular throughout Europe in palaces, churches, and grand homes. Traditional
                      recipes used slaked lime, marble dust, and natural pigments, applied in multiple thin layers and
                      burnished to create a polished, stone-like appearance.
                    </p>
                    <p>
                      Today, Roman Plaster continues this tradition while incorporating modern materials for enhanced
                      performance. It remains a symbol of luxury and craftsmanship, valued for its beauty, durability,
                      and timeless appeal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Durability & Maintenance</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="how-durable">
                  <AccordionTrigger>How durable is Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster is exceptionally durable and becomes harder over time through a natural process
                      called carbonation. When properly applied and sealed, it can last for decades or even centuries,
                      as evidenced by ancient Roman structures that still display their original plaster finishes.
                    </p>
                    <p className="mb-2">
                      The finish is resistant to scratches, scuffs, and normal wear and tear. It doesn't chip or flake
                      like paint because it becomes an integral part of the wall rather than just sitting on the
                      surface.
                    </p>
                    <p>
                      While Roman Plaster is durable, it's not indestructible. Sharp objects can damage the surface, and
                      it can be stained if not properly sealed. However, minor damage can often be repaired without
                      having to redo the entire wall.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="maintenance-required">
                  <AccordionTrigger>How do I maintain Roman Plaster walls?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Roman Plaster requires minimal maintenance:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Regular cleaning:</span> Dust with a soft, dry cloth or use a
                        feather duster. For deeper cleaning, use a slightly damp microfiber cloth with mild, pH-neutral
                        soap if necessary.
                      </li>
                      <li>
                        <span className="font-medium">Avoid harsh chemicals:</span> Never use abrasive cleaners, acidic
                        solutions, or ammonia-based products, as these can damage the finish.
                      </li>
                      <li>
                        <span className="font-medium">Treat stains promptly:</span> Blot (don't rub) any spills
                        immediately with a clean, dry cloth.
                      </li>
                      <li>
                        <span className="font-medium">Periodic resealing:</span> In high-traffic areas or wet
                        environments, reapplying the protective sealer every 5-10 years may be recommended.
                      </li>
                    </ul>
                    <p>
                      With proper care, your Roman Plaster walls will maintain their beauty and may even develop a
                      desirable patina over time, enhancing their character and appeal.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="can-it-be-repaired">
                  <AccordionTrigger>Can Roman Plaster be repaired if damaged?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, Roman Plaster can be repaired if damaged, which is one of its advantages over other wall
                      finishes. The repair process depends on the extent of the damage:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Minor scratches or scuffs:</span> These can often be buffed out
                        with fine sandpaper and then resealed.
                      </li>
                      <li>
                        <span className="font-medium">Small chips or cracks:</span> These can be filled with matching
                        plaster, burnished to match the surrounding texture, and then sealed.
                      </li>
                      <li>
                        <span className="font-medium">Larger damaged areas:</span> The damaged section can be carefully
                        removed and new plaster applied to match the existing finish.
                      </li>
                    </ul>
                    <p>
                      For best results, repairs should be performed by experienced professionals who can match the
                      color, texture, and sheen of the existing finish. We keep detailed records of the specific
                      formulations used in each project to ensure accurate matching for future repairs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="waterproof">
                  <AccordionTrigger>Is Roman Plaster waterproof?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster itself is not inherently waterproof, but it can be made highly water-resistant with
                      the application of appropriate sealers. Here's what you should know:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Standard application:</span> All our Roman Plaster installations
                        include a protective sealer that provides good water resistance for normal living spaces.
                      </li>
                      <li>
                        <span className="font-medium">Wet areas:</span> For bathrooms, kitchens, and other areas with
                        high moisture exposure, we use specialized waterproof sealers that provide excellent protection
                        against water damage.
                      </li>
                      <li>
                        <span className="font-medium">Direct water contact:</span> While sealed Roman Plaster can handle
                        occasional splashes, it's not recommended for shower enclosures or areas with direct, prolonged
                        water exposure without additional waterproofing measures.
                      </li>
                    </ul>
                    <p>
                      When specifying Roman Plaster for your project, we'll recommend the appropriate sealer based on
                      the location and expected moisture levels to ensure long-lasting performance.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="my-8 bg-muted/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-center">Before & After Transformation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/before-transformation.png"
                    alt="Before Roman Plaster Application"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-2">
                    <p className="text-white text-sm font-medium text-center">Before: Standard Painted Wall</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/after-transformation.png"
                    alt="After Roman Plaster Application"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-2">
                    <p className="text-white text-sm font-medium text-center">After: Luxurious Roman Plaster</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Transform your space with the timeless elegance of Roman Plaster wall finishes
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Application Process</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="how-applied">
                  <AccordionTrigger>How is Roman Plaster applied?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster is applied by skilled artisans in a multi-step process that typically includes:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Surface preparation:</span> The wall is thoroughly cleaned,
                        repaired, and primed to create the perfect foundation.
                      </li>
                      <li>
                        <span className="font-medium">Base coat application:</span> The first layer of plaster is
                        applied using specialized trowels to create a consistent foundation.
                      </li>
                      <li>
                        <span className="font-medium">Multiple layer application:</span> Additional thin layers are
                        applied, with each layer allowed to partially set before the next is applied.
                      </li>
                      <li>
                        <span className="font-medium">Burnishing:</span> Between coats, the surface is polished or
                        "burnished" with a trowel to create the characteristic smooth finish and compress the material.
                      </li>
                      <li>
                        <span className="font-medium">Final polishing:</span> The final layer receives extensive
                        burnishing to achieve the desired level of sheen.
                      </li>
                      <li>
                        <span className="font-medium">Sealing:</span> A protective sealer is applied to enhance
                        durability and make the surface easier to maintain.
                      </li>
                    </ol>
                    <p>
                      The entire process is labor-intensive and requires significant skill and experience. Each layer
                      must be applied with precise timing and technique to achieve the beautiful, durable finish that
                      makes Roman Plaster so desirable.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="how-long-to-apply">
                  <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The application timeline for Roman Plaster depends on several factors, including the size of the
                      area, the specific finish chosen, and the condition of the existing walls. Here's a general
                      timeline:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Surface preparation:</span> 1-2 days, depending on the condition
                        of the existing walls
                      </li>
                      <li>
                        <span className="font-medium">Base coat application:</span> 1 day, plus 24 hours drying time
                      </li>
                      <li>
                        <span className="font-medium">Additional coats:</span> 1-3 days, depending on the number of
                        coats required for your chosen finish (each coat needs time to partially set)
                      </li>
                      <li>
                        <span className="font-medium">Final polishing and sealing:</span> 1 day, plus 24-48 hours for
                        the sealer to cure completely
                      </li>
                    </ul>
                    <p className="mb-2">
                      For a standard room, you can expect the entire process to take approximately 5-7 days from start
                      to finish. Larger projects or more complex finishes may take longer.
                    </p>
                    <p>
                      During the consultation phase, we'll provide you with a specific timeline for your project based
                      on your chosen finish and the scope of work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="preparation-needed">
                  <AccordionTrigger>What preparation is needed before application?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Proper preparation is crucial for a successful Roman Plaster installation. Here's what's typically
                      involved:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Wall assessment:</span> We'll evaluate the condition of your
                        existing walls to identify any issues that need to be addressed.
                      </li>
                      <li>
                        <span className="font-medium">Furniture and floor protection:</span> All furniture should be
                        removed or centered in the room and covered. Floors will be protected with drop cloths or
                        protective sheeting.
                      </li>
                      <li>
                        <span className="font-medium">Surface cleaning:</span> Walls will be thoroughly cleaned to
                        remove dust, dirt, grease, and any other contaminants.
                      </li>
                      <li>
                        <span className="font-medium">Repairs:</span> Any cracks, holes, or damage will be repaired to
                        create a smooth, consistent surface.
                      </li>
                      <li>
                        <span className="font-medium">Priming:</span> A specialized primer will be applied to ensure
                        proper adhesion of the plaster.
                      </li>
                      <li>
                        <span className="font-medium">Masking and protection:</span> Areas not receiving plaster will be
                        carefully masked and protected.
                      </li>
                    </ul>
                    <p>
                      Our team handles all aspects of preparation as part of our service. You'll simply need to provide
                      access to the space and, ideally, remove small, fragile items and valuable personal belongings
                      before we begin work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="drying-curing-time">
                  <AccordionTrigger>What is the drying and curing time?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster involves both drying time between coats and a longer curing process that continues
                      after the installation is complete:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Drying between coats:</span> Each layer needs to dry for
                        approximately 12-24 hours before the next coat can be applied.
                      </li>
                      <li>
                        <span className="font-medium">Initial drying after completion:</span> The final coat and sealer
                        typically need 24-48 hours to dry before the wall can be exposed to normal activity.
                      </li>
                      <li>
                        <span className="font-medium">Full curing:</span> While the surface will be dry to the touch
                        within days, Roman Plaster continues to cure and harden through carbonation for up to 6 months.
                        During this time, it gradually absorbs carbon dioxide from the air, converting back to limestone
                        and becoming increasingly durable.
                      </li>
                    </ul>
                    <p>
                      You can use the room normally once the sealer has dried (typically 48 hours after completion), but
                      you should avoid scrubbing or cleaning the walls for at least 30 days to allow the initial curing
                      process to progress.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="my-8">
              <h3 className="text-xl font-bold mb-4 text-center">The Application Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/application-step1.png"
                    alt="Applying Base Coat of Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-2">
                    <p className="text-white text-sm font-medium text-center">Step 1: Base Coat Application</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/application-step2.png"
                    alt="Burnishing Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-2">
                    <p className="text-white text-sm font-medium text-center">Step 2: Burnishing Process</p>
                  </div>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/application-step3.png"
                    alt="Sealing Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-2">
                    <p className="text-white text-sm font-medium text-center">Step 3: Sealing the Finish</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Cost & Value</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="how-much-cost">
                  <AccordionTrigger>How much does Roman Plaster cost?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster is a premium wall finish with pricing that reflects the high-quality materials,
                      skilled craftsmanship, and labor-intensive application process. Our current pricing ranges:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Smooth Finish:</span> $12-18 per square foot
                      </li>
                      <li>
                        <span className="font-medium">Textured Finish:</span> $15-22 per square foot
                      </li>
                      <li>
                        <span className="font-medium">Marmorino Finish:</span> $25-35 per square foot
                      </li>
                    </ul>
                    <p className="mb-2">
                      The specific cost for your project will depend on several factors, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>The specific finish and texture you choose</li>
                      <li>The condition of your existing walls and required preparation</li>
                      <li>The total square footage (larger projects may qualify for volume discounts)</li>
                      <li>The complexity of the space (high ceilings, intricate architectural details, etc.)</li>
                      <li>Any custom color matching or special effects</li>
                    </ul>
                    <p>
                      We provide detailed, transparent quotes after an in-person consultation where we can assess your
                      specific space and understand your design goals.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="worth-the-investment">
                  <AccordionTrigger>Is Roman Plaster worth the investment?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      While Roman Plaster is more expensive than standard paint, many homeowners and designers find it
                      to be an excellent investment for several reasons:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Longevity:</span> Roman Plaster can last for decades or even
                        centuries with minimal maintenance, while paint typically needs to be refreshed every 5-7 years.
                      </li>
                      <li>
                        <span className="font-medium">Timeless appeal:</span> The classic, elegant look of Roman Plaster
                        doesn't go out of style, unlike trendy paint colors or wallpaper patterns.
                      </li>
                      <li>
                        <span className="font-medium">Property value:</span> As a premium finish, Roman Plaster can
                        increase your property's value and appeal to luxury buyers.
                      </li>
                      <li>
                        <span className="font-medium">Unique character:</span> Each installation is one-of-a-kind,
                        adding distinctive character and craftsmanship to your space that can't be achieved with paint.
                      </li>
                      <li>
                        <span className="font-medium">Environmental benefits:</span> The natural materials and
                        exceptional durability make it an environmentally responsible choice compared to repainting
                        frequently.
                      </li>
                    </ul>
                    <p>
                      Many clients choose to install Roman Plaster in key areas like entryways, dining rooms, or feature
                      walls to maximize impact while managing their budget. When viewed as a long-term investment in
                      your home's beauty and value, Roman Plaster offers excellent returns.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="factors-affecting-cost">
                  <AccordionTrigger>What factors affect the cost of Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Several factors influence the final cost of a Roman Plaster installation:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Finish type:</span> Marmorino is more expensive than smooth or
                        textured finishes due to its more complex application and premium materials.
                      </li>
                      <li>
                        <span className="font-medium">Wall condition:</span> Walls requiring extensive repairs or
                        preparation will increase costs.
                      </li>
                      <li>
                        <span className="font-medium">Project size:</span> While larger projects have a higher total
                        cost, the per-square-foot price often decreases for larger areas due to economies of scale.
                      </li>
                      <li>
                        <span className="font-medium">Complexity:</span> Walls with many corners, cutouts, or
                        architectural features require more time and skill to finish properly.
                      </li>
                      <li>
                        <span className="font-medium">Height:</span> Tall walls or ceilings require additional equipment
                        and safety measures, increasing costs.
                      </li>
                      <li>
                        <span className="font-medium">Custom colors:</span> Custom color matching or specialized
                        pigments may add to the cost.
                      </li>
                      <li>
                        <span className="font-medium">Special effects:</span> Metallic additives, multiple colors, or
                        custom veining patterns will increase the price.
                      </li>
                      <li>
                        <span className="font-medium">Location accessibility:</span> Difficult-to-access areas may
                        require additional time and resources.
                      </li>
                    </ul>
                    <p>
                      During our consultation, we'll discuss these factors and provide options to help you achieve your
                      desired look while respecting your budget constraints.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="minimum-project-size">
                  <AccordionTrigger>Is there a minimum project size?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, we do have minimum project sizes for Roman Plaster installations, which vary by finish type:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Smooth Finish:</span> Minimum 100 square feet
                      </li>
                      <li>
                        <span className="font-medium">Textured Finish:</span> Minimum 80 square feet
                      </li>
                      <li>
                        <span className="font-medium">Marmorino Finish:</span> Minimum 60 square feet
                      </li>
                    </ul>
                    <p className="mb-2">
                      These minimums are in place because the application process requires significant setup time,
                      material preparation, and specialized equipment. For very small areas, the setup costs would make
                      the per-square-foot price prohibitively expensive.
                    </p>
                    <p>
                      If you're interested in a smaller area, we might suggest considering an accent wall or combining
                      multiple small areas in your home to meet the minimum. We're happy to discuss creative solutions
                      during our consultation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Design & Customization</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="color-options">
                  <AccordionTrigger>What color options are available?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster offers virtually unlimited color options. We can create custom colors to match any
                      sample or reference you provide:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Standard palette:</span> We offer a curated selection of popular
                        colors ranging from whites and neutrals to rich earth tones and bold accent colors.
                      </li>
                      <li>
                        <span className="font-medium">Custom matching:</span> We can match any paint chip, fabric
                        swatch, or other color reference you provide.
                      </li>
                      <li>
                        <span className="font-medium">Multi-tonal effects:</span> Roman Plaster can incorporate subtle
                        color variations within the same wall, creating depth and movement.
                      </li>
                      <li>
                        <span className="font-medium">Metallic options:</span> Gold, silver, bronze, and other metallic
                        pigments can be incorporated for added luxury and visual interest.
                      </li>
                      <li>
                        <span className="font-medium">Natural variations:</span> The inherent characteristics of Roman
                        Plaster create subtle variations in color absorption, giving each installation a unique
                        appearance.
                      </li>
                    </ul>
                    <p>
                      We recommend viewing our color samples in your actual space under different lighting conditions
                      before making a final selection. For more guidance, please visit our{" "}
                      <Link href="/guides/roman-plaster-colors" className="text-primary underline underline-offset-4">
                        comprehensive color selection guide
                      </Link>
                      .
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="which-rooms">
                  <AccordionTrigger>Which rooms are best for Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Roman Plaster can be used in virtually any room of your home or business, but certain spaces
                      particularly showcase its beauty:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Entryways and foyers:</span> Create a stunning first impression
                        with the luxurious look of Roman Plaster.
                      </li>
                      <li>
                        <span className="font-medium">Living and dining rooms:</span> These formal spaces benefit from
                        the elegance and sophistication of Roman Plaster.
                      </li>
                      <li>
                        <span className="font-medium">Master bedrooms:</span> Create a serene, upscale retreat with the
                        subtle texture and depth of Roman Plaster.
                      </li>
                      <li>
                        <span className="font-medium">Powder rooms and bathrooms:</span> With proper sealing, Roman
                        Plaster creates a spa-like atmosphere in these spaces.
                      </li>
                      <li>
                        <span className="font-medium">Home offices and libraries:</span> The timeless character of Roman
                        Plaster complements these scholarly spaces.
                      </li>
                      <li>
                        <span className="font-medium">Feature walls:</span> In any room, a Roman Plaster accent wall
                        creates a stunning focal point.
                      </li>
                    </ul>
                    <p>
                      Roman Plaster is also excellent for commercial spaces like restaurants, hotels, boutiques, and
                      offices where a distinctive, upscale appearance is desired.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="special-effects">
                  <AccordionTrigger>Can special effects or patterns be created?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, Roman Plaster is incredibly versatile and can be manipulated to create various special
                      effects and patterns:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Veining:</span> Particularly in Marmorino finishes, we can create
                        custom veining patterns that mimic specific types of marble.
                      </li>
                      <li>
                        <span className="font-medium">Metallic accents:</span> Gold, silver, or bronze highlights can be
                        incorporated for added luxury.
                      </li>
                      <li>
                        <span className="font-medium">Multi-tonal effects:</span> Subtle color variations can be created
                        within the same wall for added depth and interest.
                      </li>
                      <li>
                        <span className="font-medium">Texture patterns:</span> Various troweling techniques can create
                        intentional patterns in textured finishes.
                      </li>
                      <li>
                        <span className="font-medium">Stenciled designs:</span> For truly custom installations, stencils
                        can be used to create repeating patterns or motifs.
                      </li>
                      <li>
                        <span className="font-medium">Color blocking:</span> Different colors can be used in geometric
                        sections for a contemporary look.
                      </li>
                    </ul>
                    <p>
                      During our consultation, we can discuss these options and show you samples of different effects to
                      help you envision the possibilities for your space.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="design-styles">
                  <AccordionTrigger>What design styles work well with Roman Plaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      One of the remarkable qualities of Roman Plaster is its versatility across different design
                      styles:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Traditional and Classic:</span> Roman Plaster's historical roots
                        make it perfect for traditional interiors, especially in warm neutrals, rich burgundies, and
                        classic blues.
                      </li>
                      <li>
                        <span className="font-medium">Mediterranean and Tuscan:</span> The authentic Old World feel of
                        Roman Plaster is ideal for these styles, particularly in warm terracottas, golden ochres, and
                        olive greens.
                      </li>
                      <li>
                        <span className="font-medium">Modern and Contemporary:</span> In sleek whites, grays, or bold
                        accent colors, Roman Plaster adds subtle texture to minimalist spaces without overwhelming them.
                      </li>
                      <li>
                        <span className="font-medium">Transitional:</span> Roman Plaster bridges traditional
                        craftsmanship with contemporary sensibilities, perfect for transitional designs.
                      </li>
                      <li>
                        <span className="font-medium">Luxury and Glamour:</span> Especially with metallic accents or
                        Marmorino finishes, Roman Plaster adds undeniable luxury to high-end interiors.
                      </li>
                      <li>
                        <span className="font-medium">Coastal and Beach:</span> In soft blues, sea glass greens, and
                        sandy neutrals, Roman Plaster can evoke the subtle texture of weathered coastal elements.
                      </li>
                    </ul>
                    <p>
                      Our design team can help you select the perfect finish, texture, and color to complement your
                      existing design style or help establish the look you're trying to achieve.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="my-8 bg-muted/20 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-center">Popular Color Options</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-beige.png"
                    alt="Warm Beige Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Warm Beige</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image src="/images/faq/color-gray.png" alt="Soft Gray Roman Plaster" fill className="object-cover" />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Soft Gray</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-terracotta.png"
                    alt="Terracotta Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Terracotta</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-sage.jpg"
                    alt="Sage Green Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Sage Green</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-ivory.jpg"
                    alt="Ivory White Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Ivory White</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-charcoal.jpg"
                    alt="Charcoal Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Charcoal</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-bluegray.jpg"
                    alt="Blue Gray Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Blue Gray</p>
                  </div>
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="/images/faq/color-gold.jpg"
                    alt="Metallic Gold Roman Plaster"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 p-1">
                    <p className="text-white text-xs font-medium text-center">Metallic Gold</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                These are just a few examples from our extensive color palette. Visit our{" "}
                <Link href="/guides/roman-plaster-colors" className="text-primary underline underline-offset-4">
                  color guide
                </Link>{" "}
                for more options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Environmental Considerations</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="eco-friendly">
                  <AccordionTrigger>Is Roman Plaster eco-friendly?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, Roman Plaster is considered an environmentally friendly wall finish for several reasons:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Natural materials:</span> Traditional Roman Plaster is made
                        primarily from limestone, marble dust, and natural pigments—all naturally occurring materials.
                      </li>
                      <li>
                        <span className="font-medium">Low VOCs:</span> Our Roman Plaster formulations contain very low
                        or zero volatile organic compounds (VOCs), contributing to better indoor air quality.
                      </li>
                      <li>
                        <span className="font-medium">Carbon absorption:</span> During the curing process, lime-based
                        plasters actually absorb carbon dioxide from the air, effectively sequestering carbon in your
                        walls.
                      </li>
                      <li>
                        <span className="font-medium">Longevity:</span> The exceptional durability means less frequent
                        replacement and fewer resources used over time compared to paint or wallpaper.
                      </li>
                      <li>
                        <span className="font-medium">Breathability:</span> Roman Plaster allows walls to breathe,
                        helping to regulate humidity and prevent mold growth without chemical additives.
                      </li>
                      <li>
                        <span className="font-medium">Recyclability:</span> At the end of its life cycle (which can be
                        centuries), lime plaster can be recycled or will naturally decompose without harmful
                        environmental impact.
                      </li>
                    </ul>
                    <p>
                      For clients with specific environmental concerns, we can provide detailed information about the
                      composition of our plasters and sealers to ensure they meet your sustainability requirements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="indoor-air-quality">
                  <AccordionTrigger>How does Roman Plaster affect indoor air quality?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Roman Plaster can positively impact indoor air quality in several ways:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Low or zero VOCs:</span> Unlike many paints and wall coverings,
                        quality Roman Plaster contains minimal volatile organic compounds, reducing harmful emissions in
                        your home.
                      </li>
                      <li>
                        <span className="font-medium">Natural antimicrobial properties:</span> The high alkalinity of
                        lime-based plasters naturally inhibits the growth of mold, mildew, and certain bacteria.
                      </li>
                      <li>
                        <span className="font-medium">Humidity regulation:</span> Roman Plaster is breathable and can
                        absorb and release moisture, helping to naturally regulate humidity levels in your home.
                      </li>
                      <li>
                        <span className="font-medium">No off-gassing:</span> Once cured, Roman Plaster doesn't continue
                        to release chemicals into your home, unlike some synthetic wall finishes.
                      </li>
                      <li>
                        <span className="font-medium">Hypoallergenic:</span> The natural mineral composition makes it an
                        excellent choice for people with chemical sensitivities or allergies.
                      </li>
                    </ul>
                    <p>
                      For clients with specific health concerns or sensitivities, we can provide detailed information
                      about our materials and work with you to select the most appropriate options for your needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="sustainable-materials">
                  <AccordionTrigger>Are the materials used in Roman Plaster sustainable?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The core materials used in traditional Roman Plaster are generally considered sustainable:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Lime:</span> The primary ingredient is derived from limestone, an
                        abundant natural resource. The production process does require energy for heating, but the
                        finished product reabsorbs CO2 during curing, partially offsetting its carbon footprint.
                      </li>
                      <li>
                        <span className="font-medium">Marble dust:</span> Often sourced as a byproduct of marble
                        processing, giving new life to material that might otherwise be discarded.
                      </li>
                      <li>
                        <span className="font-medium">Natural pigments:</span> Many of our colors use earth pigments and
                        mineral-based colorants that have minimal environmental impact.
                      </li>
                      <li>
                        <span className="font-medium">Water-based formulations:</span> Our plasters use water as a
                        carrier rather than petroleum-based solvents.
                      </li>
                    </ul>
                    <p className="mb-2">
                      Modern Roman Plaster may include some additives to improve workability and performance. We select
                      products that balance environmental considerations with performance requirements.
                    </p>
                    <p>
                      For projects with specific sustainability goals or certification requirements (such as LEED), we
                      can provide detailed information about material sourcing and composition.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Hiring Professionals</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="diy-possible">
                  <AccordionTrigger>Can I apply Roman Plaster myself, or do I need professionals?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      While there are DIY Roman Plaster products available, we strongly recommend professional
                      application for several reasons:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Skill and experience:</span> Professional application requires
                        specialized techniques developed through years of training and practice. The distinctive look of
                        Roman Plaster comes from the artisan's skill in applying and burnishing multiple thin layers.
                      </li>
                      <li>
                        <span className="font-medium">Tools and equipment:</span> Professional applicators use
                        specialized trowels, burnishers, and other tools that are expensive and require expertise to use
                        properly.
                      </li>
                      <li>
                        <span className="font-medium">Material knowledge:</span> Understanding how the plaster behaves
                        under different conditions and knowing exactly when to burnish each layer is crucial to
                        achieving the desired finish.
                      </li>
                      <li>
                        <span className="font-medium">Surface preparation:</span> Proper preparation is essential for a
                        successful installation, and professionals know how to address various wall conditions.
                      </li>
                      <li>
                        <span className="font-medium">Time and effort:</span> A professional team can complete the job
                        much more efficiently and with superior results compared to a DIY attempt.
                      </li>
                    </ul>
                    <p>
                      DIY attempts often result in disappointing finishes that lack the depth, polish, and durability of
                      professionally applied Roman Plaster. Given the investment in materials, we believe professional
                      application offers the best value and ensures you'll be delighted with the results.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="what-to-look-for">
                  <AccordionTrigger>What should I look for when hiring Roman Plaster artisans?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      When selecting professionals to apply Roman Plaster in your home, consider these important
                      factors:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Experience and specialization:</span> Look for artisans who
                        specialize in Roman Plaster specifically, not just general painters who offer it as a side
                        service.
                      </li>
                      <li>
                        <span className="font-medium">Portfolio:</span> Review their previous work to ensure they can
                        achieve the style and finish you desire. Ask to see projects that are similar to what you're
                        envisioning.
                      </li>
                      <li>
                        <span className="font-medium">References:</span> Request and check references from past clients,
                        particularly for projects completed several years ago to assess durability.
                      </li>
                      <li>
                        <span className="font-medium">Samples:</span> Ask to see physical samples of their work, and
                        ideally, visit a completed installation to see the finish in person.
                      </li>
                      <li>
                        <span className="font-medium">Knowledge:</span> The artisan should be able to clearly explain
                        different finish options, the application process, and maintenance requirements.
                      </li>
                      <li>
                        <span className="font-medium">Detailed quotes:</span> Ensure their quote includes all aspects of
                        the job, including surface preparation, materials, labor, and cleanup.
                      </li>
                      <li>
                        <span className="font-medium">Insurance and warranties:</span> Verify they have appropriate
                        insurance and offer warranties on their workmanship.
                      </li>
                    </ul>
                    <p>
                      At AccentWallsPro, our artisans have specialized training and years of experience specifically in
                      Roman Plaster application. We're happy to provide references, samples, and detailed information
                      about our process during your consultation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="our-process">
                  <AccordionTrigger>What is your process for Roman Plaster projects?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our comprehensive process ensures a smooth experience and exceptional results:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 mb-2">
                      <li>
                        <span className="font-medium">Initial consultation:</span> We meet with you to understand your
                        vision, assess your space, and discuss finish options. We'll bring samples and photos to help
                        you visualize possibilities.
                      </li>
                      <li>
                        <span className="font-medium">Proposal and quote:</span> We provide a detailed proposal
                        outlining the scope of work, materials, timeline, and cost.
                      </li>
                      <li>
                        <span className="font-medium">Color and finish selection:</span> We work with you to select the
                        perfect color and finish, creating custom samples if needed to view in your space.
                      </li>
                      <li>
                        <span className="font-medium">Project scheduling:</span> Once the proposal is approved, we
                        schedule your project and confirm all details.
                      </li>
                      <li>
                        <span className="font-medium">Preparation:</span> Our team prepares the space, protecting
                        furniture and floors, and properly preparing the walls.
                      </li>
                      <li>
                        <span className="font-medium">Application:</span> Our skilled artisans apply the Roman Plaster
                        in multiple layers, with appropriate drying time between coats.
                      </li>
                      <li>
                        <span className="font-medium">Final inspection:</span> We conduct a thorough inspection with you
                        to ensure your complete satisfaction.
                      </li>
                      <li>
                        <span className="font-medium">Care instructions:</span> We provide detailed care and maintenance
                        instructions for your specific finish.
                      </li>
                      <li>
                        <span className="font-medium">Follow-up:</span> We check in after completion to ensure you
                        remain delighted with your Roman Plaster walls.
                      </li>
                    </ol>
                    <p>
                      Throughout the process, we maintain clear communication and are available to answer any questions
                      you may have. Our goal is to make the experience as enjoyable as the final result.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="my-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/faq/professional-application.jpg"
                  alt="Professional Roman Plaster Application"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-6 max-w-lg">
                    <h3 className="text-xl font-bold mb-2">Expert Craftsmanship</h3>
                    <p>
                      Our skilled artisans have years of specialized training in traditional Roman Plaster techniques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 p-8 rounded-xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            If you didn't find the answer you were looking for, our team is here to help. Contact us for personalized
            assistance with your Roman Plaster project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/services/roman-plaster">Explore Roman Plaster Options</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Roman Plaster Color Guide</h3>
              <p className="text-muted-foreground mb-4">
                Explore our comprehensive guide to selecting the perfect Roman Plaster color for your space.
              </p>
              <Button asChild variant="outline">
                <Link href="/guides/roman-plaster-colors">View Color Guide</Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-3">Roman Plaster Portfolio</h3>
              <p className="text-muted-foreground mb-4">
                Browse our gallery of completed Roman Plaster projects to find inspiration for your home.
              </p>
              <Button asChild variant="outline">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
