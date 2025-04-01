import Image from "next/image"
import Link from "next/link"
export default function BlogPage() {
  return (
    <div className="pt-16">
      <div className="bg-slate-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Travel Blog</h1>
            <p className="text-muted-foreground mb-8">Tips, guides, and stories from our Vietnam travel experiences</p>
          </div>
        </div>
      </div>
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="space-y-6 pl-8 max-w-lg">
            <h2 className="text-2xl text-slate-500 font-medium">
              PHU QUOC Island</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">

              The largest island in Vietnam
            </h1>

            <p className="text-slate-600">
              One of the famous tourist destinations with blue sea, white sand, golden sunshine and many attractive activities.
            </p>
            <div className="flex items-center mt-4">
              <img
                src="/john.jpg" 
                alt="Author Avatar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <p className="ml-4 text-slate-800 font-medium">-- Mr. John Doe --</p> 
            </div>
          </div>

          <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[500px]">
            <div className="col-span-8 row-span-3 col-start-1 row-start-1 border border-black-200">
              <Image
                src="/phuquoc1.jpg?height=300&width=400"
                alt="Couple enjoying beach vacation"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-md p-6"
              />
            </div>

            <div className="col-span-4 row-span-3 col-start-9 row-start-1 border border-black-200">
              <Image
                src="/phuquoc2.jpg?height=300&width=200"
                alt="Person celebrating on mountain top"
                width={200}
                height={300}
                className="w-full h-full object-cover rounded-md p-6"
              />
            </div>

            <div className="col-span-4 row-span-3 col-start-1 row-start-4 border border-black-200">
              <Image
                src="/phuquoc3.jpg?height=200&width=200"
                alt="Hiker exploring nature"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-md p-6"
              />
            </div>

            <div className="col-span-8 row-span-3 col-start-5 row-start-4  border border-black-200">
              <Image
                src="/phuquoc4.jpg?height=300&width=400"
                alt="Person sitting on rock overlooking landscape"
                width={400}
                height={300}
                className="w-full h-full object-fill rounded-md p-6"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="relative w-full max-w-5xl mx-auto bg-[#FFDA22] p-6 overflow-hidden rounded-lg">
          <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>

          <div className="flex flex-col gap-6 relative z-10">
            <div className="space-y-1">
              <h2 className="text-3xl font-bold">Hội An</h2>
              <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight">
                OLD TOWN UNIQUE TOURIST AREA</h1>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/5 space-y-4 relative">
                <p className="text-base md:text-lg font-medium">
                  Hoi An with its ancient yellow houses, colorful lanterns, small boats on the Hoai River and rich cuisine, is always an attractive destination for domestic and foreign tourists.
                  -- Mrs. Alina --
                </p>
                <img
                  src="/blog.png?height=300&width=200"
                  alt="Hoi An ancient town"
                  className="w-full h-auto object-cover "></img>
              </div>

              <div className="md:w-3/5 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="transform rotate-2">
                    <div className="bg-white p-2 shadow-lg rounded-sm">
                      <Image
                        src="/bloghoian1.jpg?height=120&width=180"
                        width={180}
                        height={120}
                        alt="Hoi An ancient town"
                        className="w-full h-auto object-cover"
                      />
                      <div className="h-2"></div>
                    </div>
                  </div>

                  <div className="transform -rotate-2">
                    <div className="bg-white p-2 shadow-lg rounded-sm">
                      <Image
                        src="/bloghoian2.jpg?height=120&width=180"
                        width={180}
                        height={120}
                        alt="Hoi An lanterns"
                        className="w-full h-auto object-cover"
                      />
                      <div className="h-2"></div>
                    </div>
                  </div>

                  <div className="transform -rotate-1">
                    <div className="bg-white p-2 shadow-lg rounded-sm">
                      <Image
                        src="/bloghoian3.jpg?height=120&width=180"
                        width={180}
                        height={120}
                        alt="Hoi An river boats"
                        className="w-full h-auto object-cover"
                      />
                      <div className="h-2"></div>
                    </div>
                  </div>

                  <div className="transform rotate-1">
                    <div className="bg-white p-2 shadow-lg rounded-sm">
                      <Image
                        src="/bloghoian4.jpg?height=120&width=180"
                        width={180}
                        height={120}
                        alt="Hoi An street view"
                        className="w-full h-auto object-cover"
                      />
                      <div className="h-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

