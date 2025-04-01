"use client"

import { useState, useEffect, useRef } from "react"

type AnimationVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "zoomIn" | "none"

interface UseScrollAnimationProps {
  variant?: AnimationVariant
  threshold?: number
  delay?: number
}

export function useScrollAnimation({ variant = "fadeUp", threshold = 0.1, delay = 0 }: UseScrollAnimationProps = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Kích hoạt sớm hơn một chút
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"

    const baseClass = "transition-all duration-1000 ease-out opacity-100"

    switch (variant) {
      case "fadeUp":
        return `${baseClass} translate-y-0`
      case "fadeLeft":
        return `${baseClass} translate-x-0`
      case "fadeRight":
        return `${baseClass} translate-x-0`
      case "zoomIn":
        return `${baseClass} scale-100`
      default:
        return baseClass
    }
  }

  const getInitialClass = () => {
    switch (variant) {
      case "fadeUp":
        return "opacity-0 translate-y-32" // Tăng khoảng cách từ 16px lên 32px
      case "fadeLeft":
        return "opacity-0 -translate-x-full" // Di chuyển từ ngoài màn hình bên trái
      case "fadeRight":
        return "opacity-0 translate-x-full" // Di chuyển từ ngoài màn hình bên phải
      case "zoomIn":
        return "opacity-0 scale-75"
      default:
        return "opacity-0"
    }
  }

  return {
    ref,
    isVisible,
    className: isVisible ? getAnimationClass() : getInitialClass(),
  }
}

