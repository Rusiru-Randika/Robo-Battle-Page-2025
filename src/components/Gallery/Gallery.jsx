import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Sample images (Replace with actual paths)
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <p>This is the Gallery component.</p>
      <div className="w-full max-w-6xl mx-auto mt-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={3} // Adjust for responsiveness
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={2000} // Adjust speed (Lower = Faster)
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
    </div>
  );
};

export default Gallery;
