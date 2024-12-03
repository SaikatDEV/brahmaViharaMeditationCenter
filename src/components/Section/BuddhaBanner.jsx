import React, { useEffect } from "react";

function BuddhaBanner() {
  useEffect(() => {
    // Scroll to the top of the page when this component is rendered
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="home" className="relative">
      {/* Scrollable Banner */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="/images/all/buddha.jpg"
          alt="BUDDHA BANNER IMAGE"
        />

        {/* Blurred Edges */}
        <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>

        {/* Title Section */}
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-titleFadeIn px-4">
          <div className="flex flex-col items-center">
            {/* Title and Address */}
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold drop-shadow-md">
                Brahma Vihara Meditation Center
              </h1>
              <p className="text-xs sm:text-sm md:text-lg mt-4 leading-relaxed">
                26 Hicksville Rd, Westbury, NY 11590 USA
                <br />
                (646) 600-0385
                <br />
                <a
                  href="mailto:bvmcnewyork@gmail.com"
                  className="underline hover:text-orange-300"
                >
                  bvmcnewyork@gmail.com
                </a>
              </p>
            </div>
            {/* Button */}
            <div>
              <button className="text-white font-bold text-sm sm:text-lg md:text-xl bg-orange-500 px-6 sm:px-8 md:px-10 py-2 sm:py-3 mt-6 sm:mt-8 md:mt-10 rounded-xl hover:bg-orange-800 transition-all duration-300">
                PLAN YOUR VISIT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-orange-800 text-white text-center py-8 sm:py-10 text-sm sm:text-xl md:text-3xl font-extralight px-4">
        <p>
          "Discover the art of meditation: Your journey to enlightenment begins
          here!"
        </p>
      </div>
    </div>
  );
}

export default BuddhaBanner;
