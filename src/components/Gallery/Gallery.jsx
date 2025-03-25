import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Sample images (Replace with actual paths)
import image1 from "../../../public/PlaceHolder.png";
import image2 from "../../../public/PlaceHolder.png";
import image3 from "../../../public/PlaceHolder.png";
import image4 from "../../../public/PlaceHolder.png";
import image5 from "../../../public/PlaceHolder.png";

const images = [image1, image2, image3, image4, image5];

const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-10 font-transrobotics md:text-4xl justify-center items-center content-center px-10 flex md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
        YEAR 2024
      </h1>
      <div className="w-full max-w-6xl mx-auto mt-10">
        {/* First Slider Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Adjust for responsiveness
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2800} // Adjust speed (Lower = Faster)
          freeMode={true} // Makes it slide smoothly
          modules={[Autoplay]}
          className="rounded-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full max-w-6xl mx-auto mt-10">
        {/* Second Slider Section */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Adjust for responsiveness
          loop={true}
          autoplay={{
            delay: 5,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={3000} // Adjust speed (Lower = Faster)
          freeMode={true} // Makes it slide smoothly
          modules={[Autoplay]}
          className="rounded-lg"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Add SVGs below the gallery */}
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
