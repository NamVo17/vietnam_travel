import Link from "next/link"
import { Button } from "@/components/ui/button"
import { query } from "@/database/connection"

export default async function DestinationsPage() {
  // Fetch all destinations from the database
  const destinations = await query(`
    SELECT 
      d.id, d.name, d.slug, d.description, d.image
    FROM destinations d
    ORDER BY d.name ASC
  `)

  return (
    <div className="pt-16">
      <div className="bg-slate-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Explore Vietnam's Destinations</h1>
            <p className="text-muted-foreground mb-8">
              Discover breathtaking landscapes, ancient cities, and hidden gems throughout Vietnam
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination: any) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.slug}`}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60 overflow-hidden group rounded-xl">
  <img
    src={destination.image || "/placeholder.svg"}
    alt={destination.name}
    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
  />
</div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <p className="text-muted-foreground mb-4">{destination.description}</p>
                <Button variant="outline" size="sm">
                  Explore More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

