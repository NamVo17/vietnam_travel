import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, ThumbsUp, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="Vietnam landscape"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white max-w-2xl">
            Dedicated to creating unforgettable travel experiences in Vietnam since 2010
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  Founded in 2010, VietnamTravel began with a simple mission: to share the authentic beauty and culture
                  of Vietnam with travelers from around the world. What started as a small team of passionate local
                  guides has grown into one of Vietnam's most trusted travel companies.
                </p>
                <p>
                  Our founders, Minh and Linh, were born and raised in Vietnam and have spent years exploring every
                  corner of this diverse country. Their deep knowledge and love for Vietnam's landscapes, traditions,
                  and people form the foundation of our company.
                </p>
                <p>
                  Over the years, we've helped thousands of travelers discover the hidden gems of Vietnam, from the
                  misty mountains of Sapa to the bustling streets of Ho Chi Minh City. We take pride in creating
                  journeys that go beyond typical tourist experiences, allowing our guests to connect with local
                  communities and experience Vietnam's rich cultural heritage.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at VietnamTravel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Authentic Experiences</h3>
              <p className="text-muted-foreground">
                We create journeys that showcase the real Vietnam, beyond the tourist trails
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Community Connection</h3>
              <p className="text-muted-foreground">
                We support local communities and create meaningful cultural exchanges
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Responsible Tourism</h3>
              <p className="text-muted-foreground">
                We're committed to sustainable practices that protect Vietnam's natural beauty
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-2">Excellence in Service</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in every aspect of your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of travel experts is dedicated to creating unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Minh Nguyen" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-xl">Minh Nguyen</h3>
              <p className="text-primary mb-2">Co-Founder & CEO</p>
              <p className="text-muted-foreground">
                Born in Hanoi, Minh has over 15 years of experience in tourism and a passion for sharing Vietnam's
                culture.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Linh Tran" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-xl">Linh Tran</h3>
              <p className="text-primary mb-2">Co-Founder & Operations Director</p>
              <p className="text-muted-foreground">
                With a background in hospitality, Linh ensures every tour runs smoothly and exceeds expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Hai Pham" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-xl">Hai Pham</h3>
              <p className="text-primary mb-2">Head Tour Guide</p>
              <p className="text-muted-foreground">
                A certified guide with extensive knowledge of Vietnam's history, culture, and hidden gems.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=200" alt="Mai Le" fill className="object-cover" />
              </div>
              <h3 className="font-bold text-xl">Mai Le</h3>
              <p className="text-primary mb-2">Customer Experience Manager</p>
              <p className="text-muted-foreground">
                Dedicated to ensuring every traveler has a personalized and memorable journey through Vietnam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Vietnam?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let our team of experts help you plan the perfect Vietnamese adventure tailored to your interests and
            preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours">
              <Button variant="secondary" size="lg">
                Browse Our Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

