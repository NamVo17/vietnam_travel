import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">VietnamTravel</h3>
            <p className="text-slate-300 mb-6">
              Discover the beauty of Vietnam with our expertly crafted tours and travel experiences. From north to
              south, we'll help you explore this amazing country.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-300 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-slate-300 hover:text-white">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <span className="text-slate-300">123 Nguyen Hue Street, District 1, Ho Chi Minh City, Vietnam</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <span className="text-slate-300">+84 123 456 789</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <span className="text-slate-300">info@vietnamtravel.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-300 mb-4">Subscribe to receive updates on travel deals and tips</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-slate-800 border-slate-700" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} VietnamTravel. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

