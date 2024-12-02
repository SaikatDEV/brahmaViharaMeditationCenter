import React from "react";

function BuddhaBanner() {
  return (
    <div id="home" className="relative">
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
