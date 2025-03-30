"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Check if we're on the homepage
  const isHomePage = pathname === "/"

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        // Only set to transparent on homepage
        setIsScrolled(isHomePage ? false : true)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check - important to make header visible on page load
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage])

  // Determine text color based on page and scroll state
  const textColorClass =
    isHomePage && !isScrolled ? "text-white hover:text-gray-200" : "text-gray-700 hover:text-primary"

  // Determine header background based on scroll state
  const headerBgClass = isScrolled || !isHomePage ? "bg-white shadow-sm" : "bg-transparent"

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`font-bold text-xl ${isHomePage && !isScrolled ? "text-white" : "text-primary"}`}>
            Vietnam Travel
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className={textColorClass}>
              Home
            </Link>
            <Link href="/destinations" className={textColorClass}>
              Destinations
            </Link>
            <Link href="/tours" className={textColorClass}>
              Tours
            </Link>
            <Link href="/blog" className={textColorClass}>
              Blog
            </Link>
            <Link href="/about" className={textColorClass}>
              About
            </Link>
            <Link href="/contact" className={textColorClass}>
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button>Book a Tour</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isHomePage && !isScrolled ? "text-white" : "text-gray-700"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/tours"
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary py-2" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-primary py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="mt-2" onClick={() => setIsMenuOpen(false)}>
                Book a Tour
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

