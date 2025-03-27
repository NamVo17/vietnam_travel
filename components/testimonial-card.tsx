"use client"

import { Star } from "lucide-react"
import { useState, useEffect } from "react"

interface TestimonialCardProps {
  name: string
  location: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialCard({ name, location, image, rating, testimonial }: TestimonialCardProps) {
  // Use client-side only rendering for components with dynamic data
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
      {isClient && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
      )}
      <p className="text-muted-foreground italic">"{testimonial}"</p>
    </div>
  )
}

