"use client"

import { useState, useEffect } from "react"

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, query: "Woman speaking on stage with passion" },
    { id: 2, query: "Healing and wellness meditation scene" },
    { id: 3, query: "Writing and journaling therapeutic moment" },
    { id: 4, query: "Community gathering and connection" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={`/.jpg?height=1080&width=1920&query=${encodeURIComponent(slide.query)}`}
            alt={slide.query}
            className="slideshow-image absolute inset-0 w-full h-full object-cover"
          />
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
