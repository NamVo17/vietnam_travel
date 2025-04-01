import Link from "next/link"
import { Button } from "@/components/ui/button"
import { query } from "@/database/connection"
import { Clock, Star } from "lucide-react"

export default async function ToursPage() {
  // Fetch all tours from the database
  const tours = await query(`
    SELECT 
      id, title, slug, duration, price, description, 
      image, rating, review_count
    FROM tours
    ORDER BY title ASC
  `)

  return (
    <div className="pt-16">
      <div className="relative py-12 md:py-24">
        <div className="absolute inset-0">
          <img
            src="/tour.jpg" // Thay bằng đường dẫn hình ảnh của bạn
            alt="Vietnam Destinations"
            className="w-full h-full object-fill brightness-75"
          />
          <div className="absolute inset-0 bg-black/30"></div> {/* Lớp phủ tối */}
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Vietnam Tour Packages</h1>
            <p className="mb-8">
            Carefully curated tours to give you the best Vietnam experience
            </p>
          </div>
        </div>
      </div>
      {/* <div className="bg-slate-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Vietnam Tour Packages</h1>
            <p className="text-muted-foreground mb-8">
              Carefully curated tours to give you the best Vietnam experience
            </p>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour: any) => (
            <div key={tour.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative h-60">
                <img
                  src={tour.image || "/placeholder.svg?height=400&width=600"}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full font-medium text-sm">
                  ${tour.price}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                <div className="flex items-center mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                  <div className="flex items-center ml-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm">{tour.rating}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={`/tours/${tour.slug}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button size="sm">Book Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

