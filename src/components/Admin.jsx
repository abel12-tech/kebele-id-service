import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
import logo from "../assets/kebele-id-service-high-resolution-logo.png";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const data = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Jane", lastName: "Doe" },
    { id: 3, firstName: "Alice", lastName: "Smith" },
    { id: 4, firstName: "Bob", lastName: "Johnson" },
    { id: 5, firstName: "Eve", lastName: "Williams" },
    { id: 6, firstName: "Charlie", lastName: "Brown" },
    { id: 7, firstName: "David", lastName: "Miller" },
    { id: 8, firstName: "Emily", lastName: "Wilson" },
    { id: 9, firstName: "Frank", lastName: "Davis" },
    { id: 10, firstName: "Grace", lastName: "Moore" },
    { id: 11, firstName: "Henry", lastName: "Lee" },
    { id: 12, firstName: "Ivy", lastName: "Clark" },
    { id: 13, firstName: "Jack", lastName: "Young" },
    { id: 14, firstName: "Kim", lastName: "Hall" },
    { id: 15, firstName: "Leo", lastName: "Adams" },
  ];

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-1/5 ${
          isSidebarOpen ? "" : "hidden"
        } sm:block`}
      >
        <div className="p-4">
          <img src={logo} className="w-40 h-30" alt="" />
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
      {/* Main Content */}
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
            <img src={logo} className="w-30 h-10" alt="" />
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
        {/* Main Content Area */}
        {/* <div className="p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>Total Customers</div>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-center">1000</div>
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>Total Orders</div>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-center">500</div>
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>Additional Information</div>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div className="text-center">Lorem ipsum</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>Histogram Chart</div>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <img
                src="https://source.unsplash.com/random/400x200"
                alt="Histogram Chart"
              />
            </div>
            <div className="bg-white border p-4 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div>Pie Chart</div>
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <img
                src="https://source.unsplash.com/random/400x200"
                alt="Pie Chart"
              />
            </div>
          </div>
        </div> */}
        {/* Table ==== */}
        <div className="flex flex-col items-center p-8 justify-center">
          <table className="min-w-full divide-y divide-gray-200 overflow-hidden shadow-md sm:min-w-screen-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.slice(startIndex, endIndex).map((row) => (
                <tr key={row.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {row.firstName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {row.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2">
                      Update Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => handlePageChange("prev")}
              className="mx-1 px-3 py-1 rounded-lg bg-blue-500 text-white"
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange("next")}
              className="mx-1 px-3 py-1 rounded-lg bg-blue-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
