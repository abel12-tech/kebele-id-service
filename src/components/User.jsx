import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import logo from '../assets/kebele-id-service-high-resolution-logo.png'
import id1 from "../assets/id1.jpeg";
import id2 from "../assets/id2.jpg";
import how from "../assets/how.jpg";
import { IoMdCheckmark } from "react-icons/io";
import kebele1 from "../assets/kebele1.jpg";
import kebele3 from "../assets/kebele3.jpg";
const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [kebele3, kebele1, kebele3];

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
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, images.length]);

  return (
    <>
      <nav className="flex w-full h-24 items-center justify-between flex-wrap bg-gray-800 px-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="Logo" className=" h-24 w-50 bg-black mr-2 " />
          <span className="font-semibold text-xl tracking-tight">
            Kebele Id Service
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 text-white hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <MdClose className="fill-current h-8 w-8" />
            ) : (
              <MdMenu className="fill-current h-8 w-8" />
            )}
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <ul className="flex flex-col gap-9 p-8 lg:p-0 items-center lg:gap-x-8 lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  href="."
                  className="nav-link text-gray-400 font-bold md:text-1xl"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="."
                  className="nav-link text-gray-400 font-bold lg:text-1xl "
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="."
                  className="nav-link text-gray-400 font-bold lg:text-1xl"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="."
                  className="nav-link text-gray-400 font-bold lg:text-1xl"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-transparent bg-[#FDC351] text-gray-600 font-semibold hover:text-gray-800 py-2 px-4 border border-white rounded">
              Register
            </button>
            <button className="bg-transparent bg-[#FDC351] text-gray-600 font-semibold hover:text-gray-800 py-2 px-4 border border-white rounded ml-4">
              Login
            </button>
          </div>
        </div>
      </nav>
      {/* === carousel */}
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
      {/* == Cards */}

      <div className="flex flex-col py-6 border-gray-400 items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-center text-4xl text-blue-500">🎉</div>
            <h2 className="text-xl font-bold text-center mt-4">
              Start New Appilication
            </h2>
            <p className="text-gray-600 mt-2">
              To have Addis Ababa ID seamlessly start your Appilication right
              now
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-center text-4xl text-green-500">🚀</div>
            <h2 className="text-xl font-bold text-center mt-4">Register</h2>
            <p className="text-gray-600 mt-2">
              Register for applying and getting status update to your phone
              number through SMS.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-center text-4xl text-indigo-500">🌟</div>
            <h2 className="text-xl font-bold text-center mt-4">Check Status</h2>
            <p className="text-gray-600 mt-2">
              Check status of your Addis Ababa ID and get notified when its
              changed.
            </p>
          </div>
        </div>
      </div>
      {/* === How to apply == */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          How To Apply For ID
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-96 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={id1}
                alt="ID Card"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Get Started</h3>
                <p className="text-gray-700 mb-4">
                  Find step by step guide for applying for your ID online.
                </p>
                <button className="block w-full bg-[#FDC351] text-gray-600 font-semibold py-2 rounded-lg hover:bg-[#d1ae67]">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-96 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={id2}
                alt="ID Card"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-700 mb-4">
                  Find step by step guide for applying for your ID online.
                </p>
                <button className="block w-full bg-[#FDC351] text-gray-600 font-semibold py-2 rounded-lg hover:bg-[#d1ae67]">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===Other */}
      <div className="bg-gray-100 flex items-center justify-center px-3 py-12">
        <div className="rounded-lg w-full">
          <div className="flex lg:flex-row flex-col w-full">
            <div className="w-full">
              <img
                className=" h-72 w-full rounded object-cover"
                src={how}
                alt="Random"
              />
            </div>
            <div className="p-8 flex flex-col w-full">
              <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">
                Before You Apply
              </h2>
              <ul className="mt-3">
                <li className="flex items-center p-2">
                  <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                  You have to Live in Addis Ababa at least for 1 year.
                </li>
                <li className="flex items-center p-2 lg:truncate">
                  <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                  If your age is above 18 , the last id you took should be
                  provided.
                </li>
                <li className="flex items-center p-2 lg:truncate">
                  <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                  For relocation the id and letter should be brought from where
                  you have been living before.
                </li>
                <li className="flex items-center p-2">
                  <IoMdCheckmark className="w-6 h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                  To apply for ID your age must be above 18.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* == Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">About ID Service</h3>
            <p>
              <ul>
                <li>Requirements</li>
                <li>Schedule an Appointment</li>
                <li>Status</li>
              </ul>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>
              <ul>
                <li>Addis Ababa,Ethiopia</li>
                <li>833 FREE CALL</li>
                <li>kebele01@idservice.gov.et</li>
              </ul>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Help and Support</h3>
            <p>
              <ul>
                <li>FAQ</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="bg-gray-700 p-4 text-center">
          <p className="text-sm">Copyright © 2023. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default User;
