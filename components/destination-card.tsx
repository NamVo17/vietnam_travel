"use client"

import Link from "next/link"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

interface DestinationCardProps {
  image: string
  name: string
  description: string
  rating: number
  reviewCount: number
}

export default function DestinationCard({ image, name, description, rating, reviewCount }: DestinationCardProps) {
  // Use client-side only rendering for components with dynamic data
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const slug = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <Link href={`/destinations/${slug}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="relative h-60">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          {isClient && (
            <div className="flex items-center">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{rating}</span>
              </div>
              <span className="text-muted-foreground text-sm ml-2">({reviewCount} reviews)</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

