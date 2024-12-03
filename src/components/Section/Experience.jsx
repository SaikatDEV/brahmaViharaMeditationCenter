import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import image data
import imageData from "/src/data/imageData";

export default function Experience() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="bg-gray-500 py-16 px-4 sm:px-8">
      <h2 className="mt-12 text-3xl sm:text-4xl font-bold text-center pb-8">
        The Experience
      </h2>

      {/* Card Container */}
      <div className="bg-white rounded-lg shadow-lg mx-auto w-full max-w-[90%] sm:max-w-[700px] h-[500px] sm:h-[700px] flex items-center justify-center">
        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="w-full h-full rounded-lg overflow-hidden"
        >
          {/* Dynamically Render SwiperSlide */}
          {imageData.map((image) => (
            <SwiperSlide
              key={image.id}
              className="text-center text-lg bg-white flex justify-center items-center"
            >
              <img
                src={image.src}
                alt={`Slide ${image.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}

          {/* Autoplay Progress */}
          <div
            className="absolute right-4 bottom-4 z-10 w-12 h-12 flex items-center justify-center font-bold text-[var(--swiper-theme-color)]"
            slot="container-end"
          >
            <svg
              viewBox="0 0 48 48"
              ref={progressCircle}
              className="absolute left-0 top-0 z-10 w-full h-full stroke-[4px] stroke-[var(--swiper-theme-color)] fill-none transform rotate-[-90deg]"
            >
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
