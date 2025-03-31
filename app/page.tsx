import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Calendar, Users, ArrowRight, Plane, Hotel, Utensils, Camera } from "lucide-react"
import DestinationCard from "@/components/destination-card"
import TourPackage from "@/components/tour-package"
import TestimonialCard from "@/components/testimonial-card"
import { query } from "@/database/connection"
import Link from "next/link"
import TestimonialSlider from "@/components/testimonial-slider"
export default async function HomePage() {
  // Fetch featured destinations
  const destinations = await query(`
    SELECT id, name, slug, description, image, rating, review_count
    FROM destinations
    ORDER BY rating DESC
    LIMIT 6
  `)

  // Fetch popular tours
  const tours = await query(`
    SELECT id, title, slug, duration, price, description, image, rating
    FROM tours
    ORDER BY rating DESC
    LIMIT 3
  `)

  // Fetch all testimonials
  const testimonials = await query(`
    SELECT id, name, location, image, rating, testimonial
    FROM testimonials
    ORDER BY id DESC
  `)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="bg.jpg?height=1080&width=1920"
            alt="Beautiful Vietnam landscape"
            fill
            className="object-fill brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Beauty of Vietnam</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experience breathtaking landscapes, rich culture, and unforgettable adventures
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Destinations <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 -mt-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="font-medium text-sm">Destination</label>
                <div className="flex items-center border rounded-md p-2">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-2" />
                  <Input placeholder="Where to go?" className="border-0 p-0 focus-visible:ring-0" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm">Check-in Date</label>
                <div className="flex items-center border rounded-md p-2">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-2" />
                  <Input type="date" className="border-0 p-0 focus-visible:ring-0" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-medium text-sm">Duration</label>
                <div className="flex items-center border rounded-md p-2">
                  <Users className="h-5 w-5 text-muted-foreground mr-2" />
                  <select className="w-full border-0 p-0 focus-visible:ring-0 bg-transparent">
                    <option>3-5 days</option>
                    <option>1 week</option>
                    <option>2 weeks</option>
                    <option>Custom</option>
                  </select>
                </div>
              </div>
              <Button className="h-full mt-8 md:mt-0">
                <Search className="h-5 w-5 mr-2" /> Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Explore Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto max-w-[1200px] flex items-center justify-between">
          {/* Hình ảnh */}
          <div className="flex gap-4 w-full">
            {/* Cột 1 */}
            <div className="w-1/4 h-96 overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/cot1.jpg"
                alt="Mountain"
                className="w-full h-full object-cover drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] "
              />
            </div>
            {/* Cột 2 */}
            <div className="w-1/4 h-96 mt-10 overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/cot2.jpg"
                alt="Boat"
                className="w-full h-full object-cover "
              />
            </div>
            {/* Cột 3 */}
            <div className="w-1/4 h-96 overflow-hidden rounded-lg shadow-lg">
              <img
                src="/cot3.jpg"
                alt="Adventure"
                className="w-full h-full object-cover "
              />
            </div>
            {/* Cột 4 */}
            <div className="w-1/4 h-96 mt-10 overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/cot4.jpg"
                alt="Mountains"
                className="w-full h-full object-cover "
              />
            </div>
          </div>

          {/* Nội dung */}
          <div className="ml-8"> {/* Thay đổi từ ml-8 thành ml-5 */}
            <h1 className="text-6xl font-bold italic text-primary leading-none">VIET NAM</h1>
            <p className="text-2xl text-muted-foreground italic mt-2 tracking-wide">in the eyes of the world</p>
            <p className="text-muted-foreground max-w-md mt-4">
            A country that still has many wild natural beauties, friendly and hospitable people, diverse cuisine, and diverse national identities.
            </p>
          </div>
        </div>
      </section>
      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore Vietnam's most beloved destinations, from bustling cities to serene landscapes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination: any) => (
              <DestinationCard
                key={destination.id}
                image={destination.image || "/placeholder.svg?height=400&width=600"}
                name={destination.name}
                description={destination.description}
                rating={destination.rating}
                reviewCount={destination.review_count}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/destinations`}>
              <Button variant="outline" size="lg">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Travel Section */}
      <section className="relative py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Hình ảnh lớn */}
            <div className="relative col-span-2 h-[300px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/tour1.jpg" // Thay bằng đường dẫn hình ảnh lớn
                alt="Travel"
                className="w-full h-full object-fill"
              />
              {/* Tiêu đề */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white ">Diversity</h1>
                <p className="text-lg md:text-xl text-white mt-2">in cuisine, as well as cultural traditions create a country full of color.</p>
              </div>
            </div>

            {/* Hình ảnh nhỏ */}
            <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[148px] overflow-hidden rounded-lg shadow-lg mb-2">
                <img
                  src="/tour2.jpg" // Thay bằng đường dẫn hình ảnh nhỏ 1
                  alt="Destination 1"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="relative h-[148px] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/tour3.jpg" // Thay bằng đường dẫn hình ảnh nhỏ 2
                  alt="Destination 2"
                  className="w-full h-full object-fill"
                />
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/tour4.jpg" // Thay bằng đường dẫn hình ảnh nhỏ 3
                alt="Destination 3"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Tour Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully curated tours to give you the best Vietnam experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour: any) => (
              <TourPackage
                key={tour.id}
                image={tour.image || "/placeholder.svg?height=400&width=600"}
                title={tour.title}
                duration={tour.duration}
                price={tour.price}
                description={tour.description}
                rating={tour.rating}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href={`/tours`}>
              <Button variant="outline" size="lg">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're dedicated to making your Vietnam journey unforgettable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-105 transform duration-700">
              <Image
                src="/wcu_bg1.jpg"
                alt="Customized Itineraries"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/60"></div> {/* Lớp phủ */}
              <div className="relative z-10 text-center text-white p-6">
                <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold text-xl mb-2">Customized Itineraries</h3>
                <p>Tailor-made travel plans to suit your preferences and interests</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-105 transform duration-700">
              <Image
                src="/wcu_bg2.jpg"
                alt="Quality Accommodations"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/60"></div> {/* Lớp phủ */}
              <div className="relative z-10 text-center text-white p-6">
                <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hotel className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold text-xl mb-2">Quality Accommodations</h3>
                <p>Carefully selected hotels for comfort and authentic experiences</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-105 transform duration-700">
              <Image
                src="/wcu_bg3.jpg"
                alt="Culinary Experiences"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/60"></div> {/* Lớp phủ */}
              <div className="relative z-10 text-center text-white p-6">
                <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold text-xl mb-2">Culinary Experiences</h3>
                <p>Authentic food experiences showcasing Vietnam's rich cuisine</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow hover:scale-105 transform duration-700">
              <Image
                src="/wcu_bg4.jpg"
                alt="Local Insights"
                fill
                className="object-fill"
              />
              <div className="absolute inset-0 bg-black/60"></div> {/* Lớp phủ */}
              <div className="relative z-10 text-center text-white p-6">
                <div className="bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-bold text-xl mb-2">Local Insights</h3>
                <p>Expert local guides who share authentic cultural experiences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from travelers who have experienced Vietnam with us
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Video Section */}
      <section className="relative flex flex-col items-center justify-center pb-16 mr-4 ml-4">
        <h2 className="text-3xl font-light italic mb-4 text-center font-playfair">Video Travel Viet Nam</h2>
        <div className="relative w-full max-w-4xl aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/04Kf_0kppPM?autoplay=1&mute=1&loop=1&playlist=04Kf_0kppPM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get Travel Inspiration</h2>
            <p className="mb-6">
              Subscribe to our newsletter for travel tips, exclusive offers, and Vietnam travel guides
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

