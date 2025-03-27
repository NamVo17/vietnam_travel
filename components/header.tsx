"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          <span className={isScrolled ? "text-primary" : "text-black"}>Vietnam</span>
          <span className={isScrolled ? "text-foreground" : "text-black"}>Travel</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/destinations"
            className={`font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-black hover:text-black/60"}`}
          >
            Destinations
          </Link>
          <Link
            href="/tours"
            className={`font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-black hover:text-black/60"}`}
          >
            Tours
          </Link>
          <Link
            href="/about"
            className={`font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-black hover:text-black/60"}`}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-black hover:text-black/60"}`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`font-medium ${isScrolled ? "text-foreground hover:text-primary" : "text-black hover:text-black/60"}`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className={`flex items-center ${isScrolled ? "text-foreground" : "text-black"}`}>
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">+84 123 456 789</span>
          </div>
          <Button>Book Now</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={isScrolled ? "outline" : "secondary"} size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/destinations" className="font-medium text-lg py-2">
                Destinations
              </Link>
              <Link href="/tours" className="font-medium text-lg py-2">
                Tours
              </Link>
              <Link href="/about" className="font-medium text-lg py-2">
                About
              </Link>
              <Link href="/blog" className="font-medium text-lg py-2">
                Blog
              </Link>
              <Link href="/contact" className="font-medium text-lg py-2">
                Contact
              </Link>
              <div className="pt-4">
                <Button className="w-full">Book Now</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

