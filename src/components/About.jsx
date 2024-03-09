import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto p-6">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-700">
                This institution was established to coordinate prosperity reform
                works in Ethiopia. It is called FDRE Immigration, Nationality,
                and Vital Events Agency. The history of this agency dates back
                to 1942.
                <br />
                <br />
                The agency is responsible for vital events registration,
                starting from Emperor Menelik to issuing birth and death
                documents to foreign citizens. It operates under legal outlines
                and has been serving the community since its inception.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://source.unsplash.com/random"
                alt="About us"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-8">
            <div className="lg:w-full">
              <p className="text-gray-700">
                Based on 1951 law notification number 150/43 to assign the place
                for cemetery, controlling cemetery and it is counted as one of
                activities issued to the municipality by the civil code law
                drafted on 1960 to implement vital events registration many
                articles included on this law number 3361 /1/ for implementing
                those articles concerning with civil status till unique
                regulation drafted the aim of vital events the process and
                implementation when it is compared with the modern and proper
                registration work manner even though it is tried to include some
                points reserving the gaps concerning vital events registration
                and collecting information works conducted in different
                governmental organizations (i.e Municipality, city
                administration offices, central statistics agency and health
                center. On this hand, the processes of registration of vital
                events were conducted in religious organizations. So, in 1943
                marriage, in 1954 birth, in 1968 death registration started.
                This registration done for legal and administrational affairs
                and by the persons who are willing to register the events
                certificate is issued. Participants of vital events registration
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row items-center justify-center lg:justify-between p-6 mt-8">
            <div className="lg:w-1/3 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision being one of the 10 best agencies in Africa in 2022
                through supporting the information and service provision with
                technology, making the quality fits with international standards
                and ensuring its security.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision being one of the 10 best agencies in Africa in 2022
                through supporting the information and service provision with
                technology, making the quality fits with international standards
                and ensuring its security.
              </p>
            </div>
            <div className="lg:w-1/3 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision being one of the 10 best agencies in Africa in 2022
                through supporting the information and service provision with
                technology, making the quality fits with international standards
                and ensuring its security.
              </p>
            </div>
          </div>
        </div>
      </div>
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
            <h3 className="text-lg font-bold mb-2">About ID Service</h3>
            <p>
              <ul>
                <li>Requirements</li>
                <li>Schedule an Appointment</li>
                <li>Status</li>
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

export default About;
