"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, DollarSign, Star, Check, MapPin, Users, X } from "lucide-react"
import BookingForm from "@/components/booking-form"
import { use } from "react";

interface Tour {
  id: number
  title: string
  slug: string
  duration: string
  price: number
  description: string
  fullDescription: string
  itinerary: {
    day: number
    title: string
    description: string
  }[]
  image: string
  rating: number
  reviewCount: number
}

export default function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); 
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch("/api/tours");
        const data = await res.json();
        const found = data.find((t: Tour) => t.slug === slug);

        if (found) {
          setTour(found);
        }
      } catch (error) {
        console.error("Error fetching tour:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTour();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading tour information...</p>
        </div>
      </div>
    )
  }

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-8">The tour you're looking for doesn't exist or has been removed.</p>
          <Link href="/tours">
            <Button>View All Tours</Button>
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
            src={tour.image || "/placeholder.svg"}
            alt={tour.title}
            fill
            className="object-fill brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{tour.title}</h1>
          <div className="flex flex-wrap items-center text-white gap-x-6 gap-y-2">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              <span>From ${tour.price}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-2" />
              <span>
                {tour.rating} ({tour.reviewCount} reviews)
              </span>
            </div>
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
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="includes">What's Included</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                    <p className="text-muted-foreground">{tour.fullDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-bold">Duration</h3>
                      </div>
                      <p className="text-muted-foreground">{tour.duration}</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-bold">Destinations</h3>
                      </div>
                      <p className="text-muted-foreground">Multiple locations across Vietnam</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Calendar className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-bold">Departures</h3>
                      </div>
                      <p className="text-muted-foreground">Daily departures available</p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Users className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-bold">Group Size</h3>
                      </div>
                      <p className="text-muted-foreground">Maximum 12 travelers</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary">
                  <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {tour.itinerary.map((day) => (
                      <AccordionItem key={day.day} value={`day-${day.day}`}>
                        <AccordionTrigger>
                          <div className="flex items-center">
                            <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                              {day.day}
                            </span>
                            <span>{day.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground pl-11">{day.description}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="includes">
                  <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-lg mb-4">Included</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Accommodation as per itinerary</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Professional English-speaking guide</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Transportation in air-conditioned vehicles</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Meals as mentioned in the itinerary</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>Entrance fees for all mentioned activities</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-4">Not Included</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                          <span>International flights</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                          <span>Travel insurance</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                          <span>Personal expenses</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                          <span>Drinks during meals</span>
                        </li>
                        <li className="flex items-start">
                          <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                          <span>Tips for guides and drivers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="bg-white p-6 rounded-xl shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
                <div className="flex items-center justify-between mb-6 pb-4 border-b">
                  <span className="text-lg">Price</span>
                  <span className="text-2xl font-bold">${tour.price}</span>
                </div>
                <BookingForm tourId={tour.id} tourName={tour.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

