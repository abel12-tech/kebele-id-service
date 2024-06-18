import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import how from "../assets/id2.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-16 min-h-screen">
        <div className="containe mx-aut p-6">
          <div className="flex flex-col gap-x-16 lg:flex-row items-center justify-center lg:justify-between p-8">
            <div className="lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">What We Do</h2>
              <p className="text-gray-700">
                This is system is developed by Addis Ababa University Computer
                science students for enable Addis Ababa city residents easily
                apply for id and get it without hassle.
                <br />
                <br />
                The agency is responsible for vital events registration,
                starting from Emperor Menelik to issuing birth and death
                documents to foreign citizens. It operates under legal outlines
                and has been serving the community since its inception.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src={how} alt="About us" className="rounded-lg shadow-lg" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-8">
            <div className="lg:w-full">
              <p className="text-gray-700">
                We are currently working in improving and the system to enable
                handle multiple requests. the system will accept the following
                requests. new Id request and Id renewal request. which both are
                could enable the admins to check detail and make an appointment
                for the request made by customer.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row items-center justify-center lg:justify-between p-6 mt-8">
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className=" border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision to improve the process and speed of getting id and
                making the life of Addis Ababa make more easier.
              </p>
            </div>
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Mission</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                our mission is to establish this system as the one which is used
                by most kebeles and most residents for simplify the manual
                processing of the document .
              </p>
            </div>
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Team</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our Team is currently composed of three computer science
                students which have a deep understanding of website development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
