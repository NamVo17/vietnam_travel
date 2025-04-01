"use client"

import type React from "react"
import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
      delay: 100,
      // Disable AOS on mobile devices for better performance
      disable: window.innerWidth < 768,
    })
  }, [])

  // Only initialize AOS after component has mounted on the client
  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}

