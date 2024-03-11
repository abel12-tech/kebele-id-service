import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import kebele1 from "../assets/kebele1.jpg";
import kebele3 from "../assets/kebele3.jpg";

const Hero = () => {
  const images = [kebele3, kebele1, kebele3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, images.length]);

  return (
    <div
      className="relative h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Add a semi-transparent overlay to improve readability of text */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className=" absolute top-40 w-1/2 md:left-1/2 sm:left-64 left-48 mt-6 lg:left-1/3 transform -translate-x-1/2 -translate-y-8 text-gray-300 text-3xl lg:text-6xl font-medium z-10">
        Welcome To 4 Kilo Kebele ID Service
      </h1>
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-96 object-cover"
      />
      <div className="absolute  bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white rounded-full p-2"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Hero;
