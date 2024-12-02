import React from "react";
import Button from "@mui/material/Button";

function AboutUs() {
  return (
    <div
      id="aboutUs"
      className="w-full h-[750px] bg-slate-800 text-white px-8 flex justify-center"
    >
      <div className="w-full mr-8 mt-20">
        <h2 className="text-5xl font-bold text-left pt-10">About US</h2>
        <p className="mt-8 text-xl">
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

        <div className="mt-8">
          <button className="bg-blue-600 text-white text-base px-4 py-2 rounded-lg hover:bg-blue-800 transition-all duration-500">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>
      <div>
        <img
          className="max-w-[500px] mt-32 opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-500 rounded-3xl"
          src="/public/images/all/bhante.jpg"
          alt="Buddha"
        />
      </div>
    </div>
  );
}

export default AboutUs;
