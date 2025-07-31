// src/components/client/home/HeaderSlider.js
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
    <div className="relative w-full h-screen md:h-[80vh] lg:h-[65vh] lg:min-h-[640px] overflow-hidden">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={`slide-${index}`}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1500ms] ease-in-out
            ${index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"}`}
          style={{ backgroundImage: `url(${slide})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 bg-opacity-40 z-10" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center z-30">
        <div className="container">
          <div className="row">
            <div className="text-white max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">Funch Resorts & Hotels</h1>
              <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                โรงแรมหรูหลากหลายสไตล์ที่ตั้งอยู่ในจุดหมายปลายทางยอดนิยมทั่วประเทศไทย ไม่ว่าจะเป็นกรุงเทพ เชียงใหม่ ภูเก็ต หรือยะลา
                พร้อมบริการระดับพรีเมียมและบรรยากาศที่น่าประทับใจ
              </p>
            </div>
          </div>
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
