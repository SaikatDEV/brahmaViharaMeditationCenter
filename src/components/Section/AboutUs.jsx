import React, { useEffect, useState, useRef } from "react";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation
        } else {
          setIsVisible(false); // Remove animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div
      id="aboutUs"
      className="pt-4 md:h-[100vh] bg-slate-700 text-white px-4 sm:px-8 flex flex-col-reverse lg:flex-row justify-center"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 mr-0 lg:mr-8 mt-20">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-left pt-4 lg:pt-10 transition-all duration-1000 ${
            isVisible ? "animate-titleFadeIn" : "opacity-0"
          }`}
        >
          About Us
        </h2>
        <p className="mt-6 sm:mt-6 lg:mt-16 text-sm sm:text-base lg:text-xl leading-relaxed">
          Welcome to Path to Better Life, your comprehensive hub for all things
          related to Buddhism, meditation, and spiritual growth. This platform
          is designed to unite Buddhists and seekers worldwide, offering a
          treasure trove of resources and connections.
          <br />
          <br />
          <h2>At Path to Better Life, you'll find:</h2>
          <br />
          <ul>
            <li>
              <strong>Meditation Techniques:</strong> Explore various meditation
              practices rooted in the Buddha's teachings.
            </li>
            <br />
            <li>
              <strong>Temple Directories:</strong> Discover Buddhist temples
              across the USA and Bangladesh, connecting you to sacred spaces and
              communities.
            </li>
            <br />
            <li>
              <strong>Sacred Texts:</strong> Access the Tripitaka and other
              timeless scriptures that illuminate the path to wisdom and
              enlightenment.
            </li>
            <br />
            <li>
              <strong>Articles and Teachings:</strong> Dive into insightful
              articles, dharma talks, and practical guidance to enrich your
              spiritual journey.
            </li>
          </ul>
          <br />
          Join us in creating a global space where Buddhism thrives, and the
          path to enlightenment becomes accessible to all.
        </p>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          <button className="bg-blue-600 text-white text-sm sm:text-base px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-800 transition-all duration-300">
            LEARN MORE ABOUT US
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mt-32 sm:mt-60">
        <img
          className="max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] lg:max-h-[500px] opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-500 rounded-3xl"
          src="/images/all/author.jpg"
          alt="AUTHOR IMAGE"
        />
      </div>
    </div>
  );
}

export default AboutUs;
