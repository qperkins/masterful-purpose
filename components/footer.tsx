import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Image 
              src="/pamlogo.png" 
              alt="Logo" 
              width={300} 
              height={100}
              className="h-auto"
            />
            <p className="text-sm text-foreground/60">Narrative medicine speaker, poet, and transformation guide.</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/speaker" className="hover:text-primary transition-colors">
                  Speaking
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.pameladpoetry.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Poetry
                </a>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  The Seven Keys
                </a>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Online Courses
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-foreground text-sm">Connect</h4>
            <div className="space-y-2 text-sm text-foreground/60">
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} />
                <a href="tel:+18337446483">(833) 7-IGNITE</a>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} />
                <a href="mailto:info@masterfulpurpose.com">Get in touch</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
            <p>&copy; 2025 Masterful purposes. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
