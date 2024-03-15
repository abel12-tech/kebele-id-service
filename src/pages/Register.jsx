import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-16">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md">
          <h1 className="text-2xl mb-6 text-center">Register</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phonenumber"
                  name="phonenumber"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="image"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
