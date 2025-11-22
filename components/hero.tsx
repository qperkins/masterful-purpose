"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = useMemo(() => [
    { id: 1, src: "/IMG-20190705-WA0004.jpg", alt: "Pamela speaking at an event" },
    { id: 2, src: "/IMG-20190706-WA0002.jpg", alt: "Pamela speaking on stage" },
    { id: 3, src: "/IMG-20190706-WA0003.jpg", alt: "Pamela addressing an audience" },
    { id: 4, src: "/IMG-20190706-WA0007.jpg", alt: "Pamela speaking passionately" },
    { id: 5, src: "/IMG-20190706-WA0009.jpg", alt: "Pamela at a speaking engagement" },
    { id: 6, src: "/IMG-20190706-WA0010.jpg", alt: "Pamela speaking from podium" },
  ], [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="hero-title text-5xl md:text-7xl font-serif font-normal text-white leading-tight">
            Healing Trauma Through <span className="text-accent">Expression</span>
          </h1>

          <p className="hero-subtitle text-lg md:text-xl text-white/85 font-light leading-relaxed max-w-3xl mx-auto">
            Discover the transformative power of narrative medicine. Through poetry, prose, and purposeful storytelling,
            we unlock the wisdom within our pain and reshape our lives.
          </p>
        </div>

        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors">
            Explore My Work
          </button>
          <button className="px-8 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
            Book a Speaking Event
          </button>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-accent w-8" : "bg-white/50 w-2 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
