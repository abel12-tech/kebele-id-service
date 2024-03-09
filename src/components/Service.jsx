import React from "react";

const Service = () => {
  return (
    <div className="flex flex-col py-6 border-gray-400 items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <div className="text-center text-4xl text-blue-500">🎉</div>
          <h2 className="text-xl font-bold text-center mt-4">
            Start New Appilication
          </h2>
          <p className="text-gray-600 mt-2">
            To have Addis Ababa ID seamlessly start your Appilication right now
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <div className="text-center text-4xl text-green-500">🚀</div>
          <h2 className="text-xl font-bold text-center mt-4">Register</h2>
          <p className="text-gray-600 mt-2">
            Register for applying and getting status update to your phone number
            through SMS.
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
  );
};

export default Service;
