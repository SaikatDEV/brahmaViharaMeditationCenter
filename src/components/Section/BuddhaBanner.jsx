import React, { useEffect } from "react";

function BuddhaBanner() {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div id="home" className="relative">
      {/* Title Section */}
      <div className="absolute inset-0 flex items-end justify-center z-10 animate-titleFadeIn">
        <div className="flex flex-col items-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold">
              Brahma Vihara Meditation Center
            </h1>
            <p className="text-lg mt-2">123 Meditation Way, Peaceful City</p>
          </div>
          <div>
            <button className="text-white text-bold text-xl bg-orange-500 px-10 py-3 mt-10 rounded-xl hover:bg-orange-400">
              PLAN YOUR VISIT
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Banner */}
      <div className="h-screen w-full overflow-y-scroll">
        <img
          className="w-full h-[135vh] object-cover object-top"
          src="/images/all/buddha.jpg"
          alt="BUDDHA BANNER IMAGE"
        />
      </div>

      {/* Quote Section */}
      <div className="bg-red-900 text-white text-center py-10 text-3xl font-extralight">
        <p>
          "Discover the art of meditation: Your journey to enlightenment begins
          here!"
        </p>
      </div>
    </div>
  );
}

export default BuddhaBanner;
