import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/kebele-id-service-high-resolution-logo.png";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-50 mr-4"
        />
        <div className="hidden  md:flex lg:flex items-center gap-x-10">
          <Link to="/" className="nav-link text-gray-400 font-bold md:text-1xl">
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link text-gray-400 font-bold lg:text-1xl "
          >
            About
          </Link>
          <Link to="/" className="nav-link text-gray-400 font-bold lg:text-1xl">
            Services
          </Link>
          <Link
            to="/contact"
            className="nav-link text-gray-400 font-bold lg:text-1xl"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="hidden md:flex">
        <Link
          to="/register"
          className="bg-[#FDC351] text-gray-600 font-semibold  py-1 px-4 border border-white rounded"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="bg-[#FDC351] text-gray-600 font-semibold  py-1 px-4 border border-white rounded ml-4"
        >
          Login
        </Link>
      </div>
      <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
      <MdMenu className="fill-current h-8 w-8" />
      </button>
      {showMenu && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white p-4"
        >
          <button
            className="absolute top-0 right-0 p-2"
            onClick={() => setShowMenu(false)}
          >
            <MdClose className="fill-current h-8 w-8" />
          </button>
          <div className="flex flex-col gap-y-8 items-center mt-16 h-full">
            <Link
              to="/"
              className="nav-link text-gray-400 font-bold md:text-1xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-gray-400 font-bold lg:text-1xl "
            >
              About
            </Link>
            <Link
              to="/"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Contact
            </Link>
            <Link
              to="/register"
              className="bg-[#FDC351] text-gray-600 font-semibold  py-1 px-4 border border-white rounded"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-[#FDC351] text-gray-600 font-semibold  py-1 px-4 border border-white rounded ml-4"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
