"use client"; // Ensure this is a Client Component

import Link from "next/link"; // Import the Link component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../app/style.css";

export default function Slideshow() {
  const slides = [
    { id: 1, image: "/images/slide.png", link: "/products" },
    { id: 2, image: "/images/slide2.gif", link: "/products?category=laptop" },
    {
      id: 3,
      image: "/images/slide3.png",
      link: "/products?category=mobile%2Cwatch%2Cheadphone",
    },
    { id: 4, image: "/images/slide4.gif", link: "/products?category=laptop" },
  ];

  return (
    <div className="relative w-full overflow-hidden group rounded-2xl">
      {" "}
      {/* Add 'group' here */}
      {/* Full-width slideshow */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".next", // Points to the next button
            prevEl: ".prev", // Points to the previous button
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 6000, // Autoplay every 6 seconds
            disableOnInteraction: false, // Allow autoplay to continue after user interaction
          }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {/* Wrap the slide content in a Next.js Link */}
              <Link href={slide.link} className="block w-full h-full">
                <div className="h-56 md:h-[400px] flex items-center justify-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Error loading image: ${slide.image}`);
                      e.target.style.display = "none"; // Hide broken images
                    }}
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="next absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 bg-white/50 rounded-full cursor-pointer transition-opacity opacity-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7" // Left arrow icon
              />
            </svg>
          </div>
          <div className="prev absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 bg-white/50 rounded-full cursor-pointer transition-opacity opacity-0 group-hover:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7" // Right arrow icon
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
