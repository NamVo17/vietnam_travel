import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import AOSProvider from "@/components/aos-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vietnam Travel - Khám phá vẻ đẹp Việt Nam",
  description: "Khám phá vẻ đẹp Việt Nam với các tour du lịch đặc sắc và trải nghiệm độc đáo.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AOSProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

