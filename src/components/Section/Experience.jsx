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
    <div
      className="relative h-[150vh]"
      style={{
        backgroundImage: "url('/images/buddha.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sticky Section */}
      <div className="sticky top-0 z-20">
        <div className="bg-gray-500 bg-opacity-85 py-20 px-4 sm:px-8">
          <h2 className="mt-8 text-2xl sm:text-5xl font-bold text-center pb-8 text-white drop-shadow-[0_6px_8px_rgba(0,0,0,.85)]">
            The Experience
          </h2>

          {/* Card Container */}
          <div className="bg-white rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,1)] mx-auto w-full max-w-[90%] sm:max-w-[700px] h-[500px] sm:h-[700px] flex items-center justify-center">
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
              className="w-full h-full rounded-3xl overflow-hidden"
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

              {/* Autoplay Progress - This is hidden*/}
              <div className="hidden">
                <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
