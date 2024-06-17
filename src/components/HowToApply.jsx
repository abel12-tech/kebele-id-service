import React from "react";
import id1 from "../assets/id1.jpeg";
import id2 from "../assets/id2.jpg";
import { useNavigate } from "react-router-dom";

const HowToApply = () => {
  const navigate = useNavigate();

  const handleApplyOnlineClick = () => {
    navigate("/request-for-id");
  };
  const handleGetStartClick = () => {
    navigate("/about");
  };
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">
        How To Apply For ID
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-96 mx-4 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={id1} alt="ID Card" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Get Started</h3>
              <p className="text-gray-700 mb-4">
                Find step by step guide for applying for your ID online.
              </p>
              <button
                className="block w-full bg-[#FDC351] text-gray-600 font-semibold py-2 rounded-lg hover:bg-[#d1ae67]"
                onClick={handleGetStartClick}
              >
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-96 mx-4 mb-8 md:mb-0">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={id2} alt="ID Card" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-700 mb-4">
                Find step by step guide for applying for your ID online.
              </p>
              <button
                className="block w-full bg-[#FDC351] text-gray-600 font-semibold py-2 rounded-lg hover:bg-[#d1ae67]"
                onClick={handleApplyOnlineClick}
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
