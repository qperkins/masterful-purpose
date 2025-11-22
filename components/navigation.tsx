"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/pamlogo.png" 
              alt="Logo" 
              width={120} 
              height={40}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#speaking" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Speaking
            </Link>
            <Link href="#resources" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18337446483"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              (833) 7-IGNITE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="#about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#speaking" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Speaking
            </Link>
            <Link href="#resources" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Resources
            </Link>
            <Link href="#contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
              Contact
            </Link>
            <a
              href="tel:+18337446483"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors inline-block"
            >
              (833) 7-IGNITE
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
