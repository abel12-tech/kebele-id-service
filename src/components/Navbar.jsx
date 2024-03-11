import React, { useState } from "react";
import logo from "../assets/kebele-id-service-high-resolution-logo.png";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex w-full items-center justify-between flex-wrap bg-gray-800 px-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img src={logo} alt="Logo" className=" h-24 w-50 bg-black mr-2 " />
        </Link>
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
              <Link
                to="/"
                className="nav-link text-gray-400 font-bold md:text-1xl"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link text-gray-400 font-bold lg:text-1xl "
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-gray-400 font-bold lg:text-1xl"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link text-gray-400 font-bold lg:text-1xl"
              >
                Contact
              </Link>
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
  );
};

export default Navbar;
