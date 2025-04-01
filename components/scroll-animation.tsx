"use client"

import type React from "react"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ScrollAnimationProps {
  children: React.ReactNode
  variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "zoomIn" | "none"
  delay?: number
  className?: string
  threshold?: number
}

export default function ScrollAnimation({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  threshold = 0.1,
}: ScrollAnimationProps) {
  const { ref, className: animationClass } = useScrollAnimation({
    variant,
    delay,
    threshold,
  })

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}

