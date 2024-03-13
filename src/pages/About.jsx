import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import how from "../assets/about.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen">
        <div className="containe mx-aut p-6">
          <div className="flex flex-col gap-x-16 lg:flex-row items-center justify-center lg:justify-between p-8">
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
              <img src={how} alt="About us" className="rounded-lg shadow-lg" />
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
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className=" border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision being one of the 10 best agencies in Africa in 2022
                through supporting the information and service provision with
                technology, making the quality fits with international standards
                and ensuring its security.
              </p>
            </div>
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-bold mb-2">Vision</h3>
              <div className="border-b-2 border-gray-300 mb-4"></div>
              <p className="text-gray-700">
                Our vision being one of the 10 best agencies in Africa in 2022
                through supporting the information and service provision with
                technology, making the quality fits with international standards
                and ensuring its security.
              </p>
            </div>
            <div className="lg:w-1/3 border-2 border-gray-300 p-4 flex flex-col justify-center items-center">
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
      <Footer />
    </>
  );
};

export default About;
