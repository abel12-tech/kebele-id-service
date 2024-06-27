import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/kebele-id-service-high-resolution-logo.png";
import { MdClose, MdMenu } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectIsAuthenticated,
  selectResidentInfo,
} from "../features/authentication/slice/authSlice";
import { useGetNotificationQuery } from "../features/apply/api/applyApi";
import { FaExchangeAlt } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const resident = useSelector(selectResidentInfo);
  const profile = resident ? resident.profile : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const profileMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);
  const { data: notification } = useGetNotificationQuery();

  const unreadCount = notification
    ? notification?.notifications.filter((notif) => !notif.read).length
    : 0;

  const handleClickOutside = (event) => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target) &&
      notificationMenuRef.current &&
      !notificationMenuRef.current.contains(event.target)
    ) {
      setIsProfileMenuOpen(false);
      setIsNotificationDropdownOpen(false);
    }
    setShowMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    setIsNotificationDropdownOpen(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationDropdownOpen(!isNotificationDropdownOpen);
    setIsProfileMenuOpen(false); // Close profile menu
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };

  const closeNotificationDropdown = () => {
    setIsNotificationDropdownOpen(false);
  };

  const handleLogout = () => {
    closeProfileMenu();
    dispatch(logout());
    navigate("/login");
    window.location.reload();
  };
  return (
    <nav className="fixed top-0 z-10 w-full flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="flex items-center">
        <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
          <MdMenu className="fill-current h-8 w-8" />
        </button>
        <div className="flex">
          <img src={logo} alt="Logo" className="h-10 w-50 mr-4" />
          <div className="hidden md:flex lg:flex items-center gap-x-10">
            <Link
              to="/"
              className="nav-link text-gray-400 font-bold md:text-1xl"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              About
            </Link>
            <Link
              to="/request-for-id"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Request for ID
            </Link>
            <Link
              to="/my-request-status"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              My Request Status
            </Link>
            <Link
              to="/contact"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center relative">
        {notification && (
          <div className="relative mr-10" ref={notificationMenuRef}>
            <button
              className="relative align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={toggleNotificationDropdown}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <span className="relative">
                <IoMdNotificationsOutline className="h-8 w-8" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                )}
              </span>
            </button>
            {isNotificationDropdownOpen && (
              <ul
                onClick={closeNotificationDropdown}
                className="absolute right-0 mt-2 w-56 p-2 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                aria-label="notification-menu"
              >
                {notification?.notifications.map((notif, index) => (
                  <li key={index} className="flex items-center">
                    <Link to="/my-request-status">{notif.message}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Profile Menu */}
        {isAuthenticated ? (
          <div className="relative" ref={profileMenuRef}>
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={toggleProfileMenu}
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={profile || "https://via.placeholder.com/40"} // Use a placeholder if profile is null
                alt="User Profile"
                aria-hidden="true"
              />
            </button>
            {isProfileMenuOpen && (
              <ul
                onClick={closeProfileMenu}
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
                aria-label="submenu"
              >
                <li className="flex">
                  <Link
                    to="/profile"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      aria-hidden="true"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span>Profile</span>
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    to="/change-password"
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                  >
                    <FaExchangeAlt className="w-4 h-4 mr-3" />
                    <span>Change Password</span>
                  </Link>
                </li>
                <li className="flex">
                  <button
                    className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                    onClick={handleLogout}
                  >
                    <svg
                      className="w-4 h-4 mr-3"
                      aria-hidden="true"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/register"
              className="bg-[#FDC351] text-gray-600 font-semibold py-1 px-4 border border-white rounded"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="bg-[#FDC351] text-gray-600 font-semibold py-1 px-4 border border-white rounded ml-4"
            >
              Login
            </Link>
          </>
        )}
      </div>
      {showMenu && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-gray-800 text-white p-4"
          onMouseLeave={() => setShowMenu(false)}
          onMouseEnter={() => setShowMenu(true)}
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
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              About
            </Link>
            <Link
              to="/request-appointment"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Request for ID
            </Link>
            <Link
              to="/my-request"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              My Request Status
            </Link>
            <Link
              to="/contact"
              className="nav-link text-gray-400 font-bold lg:text-1xl"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
