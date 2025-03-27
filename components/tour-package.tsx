"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, Clock } from "lucide-react"
import { useState, useEffect } from "react"

interface TourPackageProps {
  image: string
  title: string
  duration: string
  price: number
  description: string
  rating: number
}

export default function TourPackage({ image, title, duration, price, description, rating }: TourPackageProps) {
  // Use client-side only rendering for components with dynamic data
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="relative h-60">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        {isClient && (
          <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full font-medium text-sm">${price}</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {isClient && (
          <div className="flex items-center mb-3">
            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
            <span className="text-sm text-muted-foreground">{duration}</span>
            <div className="flex items-center ml-4">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          </div>
        )}
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={`/tours/${slug}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
          <Button size="sm">Book Now</Button>
        </div>
      </div>
    </div>
  )
}

