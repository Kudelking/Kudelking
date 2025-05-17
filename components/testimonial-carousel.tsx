"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: number
  projectType: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    quote:
      "Accent Walls Pro transformed our living room with a stunning wood slat wall. The team was professional, clean, and completed the project ahead of schedule!",
    author: "Sarah M.",
    location: "Bethesda, MD",
    rating: 5,
    projectType: "Wood Slat Wall",
  },
  {
    id: "2",
    quote:
      "We couldn't be happier with our new board and batten accent wall. The attention to detail was impressive, and the final result exceeded our expectations.",
    author: "Michael T.",
    location: "Arlington, VA",
    rating: 5,
    projectType: "Board & Batten",
  },
  {
    id: "3",
    quote:
      "The media wall they built completely transformed our family room. The built-in shelving and clean cable management make it look like a magazine feature!",
    author: "Jennifer L.",
    location: "Washington, DC",
    rating: 5,
    projectType: "Media Wall",
  },
  {
    id: "4",
    quote:
      "The Roman plaster finish in our dining room is absolutely beautiful. The subtle texture and depth it adds has made the space so much more elegant.",
    author: "David R.",
    location: "Silver Spring, MD",
    rating: 5,
    projectType: "Roman Plaster",
  },
  {
    id: "5",
    quote:
      "From the initial consultation to the final walkthrough, the entire process was smooth and professional. Our fireplace buildout is now the focal point of our home.",
    author: "Emily K.",
    location: "Rockville, MD",
    rating: 5,
    projectType: "Fireplace Buildout",
  },
]

export function TestimonialCarousel({ testimonials = testimonialsData }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // свайп влево
      handleNext()
    }

    if (touchStart - touchEnd < -50) {
      // свайп вправо
      handlePrev()
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
