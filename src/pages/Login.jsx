import React from "react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8 md:p-16">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl mb-6 text-center">Sign in to your account</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-800 font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-800 font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
