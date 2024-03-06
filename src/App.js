import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import kebele1 from "./assets/kebele1.jpg";
import kebele3 from "./assets/kebele3.jpg";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="https://source.unsplash.com/random/50x50"
            alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="font-semibold text-xl tracking-tight">
            MyWebsite
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
            <button className="bg-transparent hover:bg-white text-gray-400 font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded">
              Register
            </button>
            <button className="bg-transparent hover:bg-white text-gray-400 font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded ml-4">
              Login
            </button>
          </div>
        </div>
      </nav>
      {/* === carousel */}
      <div className="relative h-96">
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
            <h2 className="text-xl font-bold mt-4">Card 1</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-center text-4xl text-green-500">🚀</div>
            <h2 className="text-xl font-bold mt-4">Card 2</h2>
            <p className="text-gray-600 mt-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
            <div className="text-center text-4xl text-indigo-500">🌟</div>
            <h2 className="text-xl font-bold mt-4">Card 3</h2>
            <p className="text-gray-600 mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      {/* === How to apply == */}
      <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          How To Apply For ID
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-96 mx-4 mb-8 md:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/400x200"
                alt="ID Card"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Get Started</h3>
                <p className="text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="block w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                  See More
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-96 mx-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://source.unsplash.com/random/400x201"
                alt="ID Application"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-700 mb-4">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <button className="block w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600">
                  See More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===Other */}
      <div className="bg-gray-400 flex items-center justify-center p-3">
        <div className="rounded-lg w-full">
          <div className="flex lg:flex-row flex-col w-full">
            <div className="w-full">
              <img
                className=" h-auto w-full rounded object-cover"
                src="https://source.unsplash.com/random"
                alt="Random"
              />
            </div>
            <div className="p-8 flex flex-col w-full">
              <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">
                Before You Apply
              </h2>
              <ul className="list-disc mt-3">
                <li>
                  All applicants should secure an online appointment when
                  applying for a passport
                </li>
                <li>
                  All applicants should secure an online appointment when
                  applying for a passport
                </li>
                <li>
                  All applicants should secure an online appointment when
                  applying for a passport
                </li>
                <li>
                  All applicants should secure an online appointment when
                  applying for a passport
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* == Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto">
          <div className="flex justify-around p-4">
            <div>
              <h2 className="text-lg font-bold mb-4">About</h2>
              <ul>
                <li className="mb-2">Our Story</li>
                <li className="mb-2">Mission</li>
                <li className="mb-2">Team</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Contact Us</h2>
              <ul>
                <li className="mb-2">Email</li>
                <li className="mb-2">Phone</li>
                <li className="mb-2">Location</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Help and Support</h2>
              <ul>
                <li className="mb-2">FAQ</li>
                <li className="mb-2">Terms and Conditions</li>
                <li className="mb-2">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-700 py-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2022 
        </p>
      </div>
    </>
  );
};

export default App;
