import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen">
      {/* ==Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen w-1/5 ${
          isSidebarOpen ? "" : "hidden"
        } sm:block`}
      >
        <div className="p-4">
          <img
            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            className="w-40 h-30"
            alt=""
          />
        </div>
        <ul className="py-12">
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "Dashboard" ? "bg-blue-500" : ""
            }`}
            onClick={() => handleTabClick("Dashboard")}
          >
            <MdDashboard className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Dashboard</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "Manage ID" ? "bg-blue-500" : ""
            }`}
            onClick={() => handleTabClick("Manage ID")}
          >
            <MdAppRegistration className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Manage ID</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === "Manage Residents" ? "bg-blue-500" : ""
            }`}
            onClick={() => handleTabClick("Manage Residents")}
          >
            <FaUserAlt className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Manage Residents</span>
          </li>
        </ul>
      </div>
      {/* ==end */}
      {/* ==Navbar */}
      <div className="w-full sm:w-4/5 bg-white">
        {/* Navbar */}
        <div className="bg-gray-200 flex justify-between items-center p-4">
          <button className="block sm:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div>
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
              className="w-30 h-10"
              alt=""
            />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-lg px-2 py-1"
            />
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <img
                src="https://source.unsplash.com/random/30x30"
                alt="Avatar"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-200 pb-4 flex flex-col items-center justify-center">
          <div className="w-full h-56 bg-gray-600"></div>
          <div className="relative -mt-20">
            <img
              src="https://source.unsplash.com/random/200x200"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
          <div className="bg-gray-200 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg mt-4 max-w-md">
            <h1 className="text-2xl font-bold  mb-2">John Doe</h1>
            <p className="text-gray-600  mb-4">Frontend Developer</p>
            <p className="text-gray-800 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
