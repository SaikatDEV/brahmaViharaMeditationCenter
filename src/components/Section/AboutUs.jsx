import React from "react";

function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="w-full md:h-[750px] bg-slate-800 text-white px-4 sm:px-8 flex flex-col-reverse lg:flex-row justify-center"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mr-0 lg:mr-8 mt-10 lg:mt-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left pt-4 lg:pt-10">
          About Us
        </h2>
        <p className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-xl leading-relaxed">
          Welcome to your spiritual sanctuary at Brahma Vihara Meditation
          Center. Here, you’re not just stepping into a meditation center;
          you’re beginning a transformative journey towards lasting inner peace
          and boundless happiness.
          <br />
          <br />
          At Brahma Vihara, you join a community devoted to practicing the
          Buddha’s original teachings, offering a profound and enriching pathway
          to enlightenment. Whether you are new to meditation or a seasoned
          practitioner, our center welcomes you to explore the joy of living
          with clarity, kindness, and serenity.
          <br />
          <br />
          Come, be part of a community that inspires and uplifts, and let the
          journey to inner peace and wisdom begin here at Brahma Vihara
          Meditation Center.
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button className="bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] lg:max-h-[500px] mt-4 sm:mt-10 lg:mt-32 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-500 rounded-3xl"
          src="/images/all/bhante.jpg"
          alt="BHANTE IMAGE"
        />
      </div>
    </div>
  );
}

export default AboutUs;
