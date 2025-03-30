"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TestimonialCard from "./testimonial-card"
import { Button } from "@/components/ui/button"

// Define a more flexible testimonial type that can work with MySQL results
type TestimonialType = {
  id: number
  name: string
  location: string
  image: string
  rating: number
  testimonial: string
}

interface TestimonialSliderProps {
  testimonials: TestimonialType[] | any[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [visibleItems, setVisibleItems] = useState(3)

  // For drag functionality
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1280) {
        setVisibleItems(3)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize() // Initial call
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Check if arrows should be shown
  useEffect(() => {
    if (!sliderRef.current) return

    setShowLeftArrow(scrollPosition > 0)
    setShowRightArrow(scrollPosition < sliderRef.current.scrollWidth - sliderRef.current.clientWidth - 10)
  }, [scrollPosition])

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return

    const cardWidth = sliderRef.current.clientWidth / visibleItems
    const newPosition =
      direction === "left"
        ? Math.max(0, scrollPosition - cardWidth)
        : Math.min(sliderRef.current.scrollWidth - sliderRef.current.clientWidth, scrollPosition + cardWidth)

    sliderRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })
    setScrollPosition(newPosition)
  }

  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft)
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)

    // Change cursor style
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grabbing"
      sliderRef.current.style.userSelect = "none"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    const x = e.pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    // Reset cursor style
    if (sliderRef.current) {
      sliderRef.current.style.cursor = "grab"
      sliderRef.current.style.userSelect = "auto"
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)

      // Reset cursor style
      if (sliderRef.current) {
        sliderRef.current.style.cursor = "grab"
        sliderRef.current.style.userSelect = "auto"
      }
    }
  }

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!sliderRef.current) return

    setIsDragging(true)
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
    setScrollLeft(sliderRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft
    const walk = (x - startX) * 2
    sliderRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="relative">
      {showLeftArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      )}

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 pb-4 cursor-grab"
        onScroll={handleScroll}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {testimonials.map((testimonial: any) => (
          <div key={testimonial.id} className="snap-start flex-none" style={{ width: `calc(100% / ${visibleItems})` }}>
            <TestimonialCard
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image || "/placeholder.svg?height=100&width=100"}
              rating={testimonial.rating}
              testimonial={testimonial.testimonial}
            />
          </div>
        ))}
      </div>

      {showRightArrow && (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}

