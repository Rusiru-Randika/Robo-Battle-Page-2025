import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import image1 from "../../../public/Gallery/1.jpg";
import image2 from "../../../public/Gallery/2.jpg";
import image3 from "../../../public/Gallery/3.jpg";
import image4 from "../../../public/Gallery/4.jpg";
import image5 from "../../../public/Gallery/5.jpg";
import image6 from "../../../public/Gallery/6.jpg";
import image7 from "../../../public/Gallery/7.jpg";
import image8 from "../../../public/Gallery/8.jpg";
import image9 from "../../../public/Gallery/9.jpg";
import image10 from "../../../public/Gallery/10.jpg";

const topImages = [image1, image2, image3, image4, image5];
const bottomImages = [image6, image7, image8, image9, image10];

const Gallery = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#05074f] min-h-screen py-10">
      <h1
        ref={headingRef}
        className="text-center text-4xl font-bold font-transrobotics scroll-trigger px-10 text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]"
      >
        YEAR 2024
      </h1>

      {/* Top Slider */}
      <div className="w-full max-w-6xl mx-auto mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2800}
          modules={[Autoplay]}
          className="rounded-lg"
        >
          {topImages.map((src, index) => (
            <SwiperSlide key={`top-${index}`}>
              <div className="relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Slider */}
      <div className="w-full max-w-6xl mx-auto mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{
            delay: 5,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000}
          modules={[Autoplay]}
          className="rounded-lg"
        >
          {bottomImages.map((src, index) => (
            <SwiperSlide key={`bottom-${index}`}>
              <div className="relative">
                <img
                  src={src}
                  alt={`Slide ${index + 6}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Dots */}
      <div className="w-full max-w-6xl mx-auto mt-10 flex justify-center items-center">
        <svg width="10" height="10" viewBox="0 0 10 10" className="mr-2">
          <circle cx="5" cy="5" r="5" fill="#ffffff" />
        </svg>
        <svg width="70" height="10" viewBox="0 0 70 10">
          <rect width="70" height="10" rx="5" fill="#ffffff" />
        </svg>
        <svg width="10" height="10" viewBox="0 0 10 10" className="ml-2">
          <circle cx="5" cy="5" r="5" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
};

export default Gallery;
