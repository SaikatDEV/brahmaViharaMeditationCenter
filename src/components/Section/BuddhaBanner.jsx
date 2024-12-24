import React, { useEffect } from "react";
import buddhaPhrase from "../../data/buddhaPhrase.js";
import Carousel from "react-material-ui-carousel";
import banner from "/images/buddha3.jpg";
import bannerImageData from "../../data/bannerImageData.js";

function BuddhaBanner() {
  useEffect(() => {
    // Scroll to the top of the page when this component is rendered
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Function to select a random video
  // const getRandomSutta = () => {
  //   const randomIndex = Math.floor(Math.random() * suttaVideos.length);
  //   return suttaVideos[randomIndex]; // Add autoplay to the URL
  // };

  return (
    <div id="home" className="relative">
      {/* Scrollable Banner */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={banner}
          alt="BUDDHA BANNER IMAGE"
        />

        {/* Blurred Edges */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>

        {/* Title Section */}
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-titleFadeIn px-4">
          <div className="flex flex-col items-center">
            {/* Title and Address */}
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-2xl">
                Path to Enlightenment and Wisdom
              </h1>
              <p className="text-xs sm:text-sm md:text-lg mt-4 leading-relaxed"></p>
            </div>
            {/* Button */}
            <div>
              <a
                className="text-white font-bold text-sm sm:text-lg md:text-xl bg-orange-500 px-6 sm:px-8 md:px-10 py-2 sm:py-3 mt-6 sm:mt-8 md:mt-10 rounded-xl hover:bg-orange-800 transition-all duration-300 inline-block text-center"
                href="https://suttareadings.net/audio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen Suttas
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-orange-800 text-white text-center py-8 sm:py-8 text-sm sm:text-xl md:text-3xl font-extralight px-4">
        <Carousel
          indicators={false}
          animation="fade"
          autoPlay={true}
          navButtonsAlwaysInvisible={true}
          duration={700}
        >
          {buddhaPhrase?.map((each, index) => (
            <div key={index}>{each}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default BuddhaBanner;
