"use client";

import { useState, useEffect } from "react";

export default function HeaderSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://zcrgzubhqitumevwpsiz.supabase.co/storage/v1/object/public/images/assets/header1.jpg",
    "https://zcrgzubhqitumevwpsiz.supabase.co/storage/v1/object/public/images/assets/header2.jpg",
    "https://zcrgzubhqitumevwpsiz.supabase.co/storage/v1/object/public/images/assets/header3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen md:h-[75vh] lg:h-[40vh] lg:min-h-[400px] overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={`slide-${index}`}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out
            ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50 bg-opacity-40 z-10" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-30 px-5">
        <div className="text-white max-w-4xl pl-5 md:pl-[60px] lg:pl-[100px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">Funch Hotel</h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-30">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`h-3 border-2 border-white rounded-full transition-all duration-300 hover:bg-white/50
              ${index === currentSlide ? "w-[30px] bg-white rounded-md" : "w-3 bg-transparent"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
