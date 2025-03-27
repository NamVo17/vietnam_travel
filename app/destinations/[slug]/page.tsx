"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Calendar, Info, Star, ArrowRight } from "lucide-react"
import TourPackage from "@/components/tour-package"
import { useParams } from "next/navigation"


interface Destination {
  id: number
  name: string
  slug: string
  description: string
  fullDescription: string
  highlights: string[]
  bestTimeToVisit: string
  image: string
  gallery: string[]
  rating: number
  reviewCount: number
  location: {
    region: string
    coordinates: {
      lat: number
      lng: number
    }
  }
}

interface Tour {
  id: number
  title: string
  slug: string
  duration: string
  price: number
  description: string
  image: string
  rating: number
}

export default function DestinationPage() {
  const params = useParams()
  const slug = params?.slug
  const [destination, setDestination] = useState<Destination | null>(null)
  const [relatedTours, setRelatedTours] = useState<Tour[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
  
    const fetchDestination = async () => {
      try {
        const res = await fetch("/api/destinations")
        const data = await res.json()
        const found = data.find((d: Destination) => d.slug === slug)
  
        if (found) {
          setDestination(found)
  
          const toursRes = await fetch("/api/tours")
          const toursData = await toursRes.json()
          setRelatedTours(toursData.slice(0, 3))
        }
      } catch (error) {
        console.error("Error fetching destination:", error)
      } finally {
        setLoading(false)
      }
    }
  
    fetchDestination()
  }, [slug])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading destination information...</p>
        </div>
      </div>
    )
  }

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The destination you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/destinations">
            <Button>View All Destinations</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-fill brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <div className="flex items-center text-white mb-2">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{destination.location.region}, Vietnam</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{destination.name}</h1>
          <div className="flex items-center text-white">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{destination.rating}</span>
            </div>
            <span className="mx-2">•</span>
            <span>{destination.reviewCount} reviews</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="highlights">Highlights</TabsTrigger>
                  <TabsTrigger value="gallery">Gallery</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                    <p className="text-muted-foreground">{destination.fullDescription}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Best Time to Visit</h3>
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 mr-3 text-primary mt-0.5" />
                      <p className="text-muted-foreground">{destination.bestTimeToVisit}</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="highlights">
                  <h2 className="text-2xl font-bold mb-6">Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-primary/10 p-2 rounded-full mr-4">
                          <Info className="h-5 w-5 text-primary" />
                        </div>
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="gallery">
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {destination.gallery.map((image, index) => (
                      <div key={index} className="relative h-60 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${destination.name} - Image ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="bg-slate-50 p-6 rounded-xl sticky top-24">
                <h3 className="text-xl font-bold mb-4">Interested in visiting?</h3>
                <p className="text-muted-foreground mb-6">
                  Browse our selection of tours that include {destination.name} or contact us for a custom itinerary.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full">Contact Us</Button>
                  </Link>
                  <Link href="/tours">
                    <Button variant="outline" className="w-full">
                      Browse Tours
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tours */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Tours Including {destination.name}</h2>
            <Link href="/tours" className="text-primary font-medium flex items-center">
              View All Tours <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedTours.map((tour) => (
              <TourPackage
                key={tour.id}
                image={tour.image}
                title={tour.title}
                duration={tour.duration}
                price={tour.price}
                description={tour.description}
                rating={tour.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

