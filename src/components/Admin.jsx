import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleDropdown = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white w-1/5 ${isSidebarOpen ? '' : 'hidden'} sm:block`}>
        <div className="p-4">Logo</div>
        <ul>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Dashboard' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Dashboard')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Dashboard</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Sales' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Sales')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Sales</span>
          </li>
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Products' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Products')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Products</span>
          </li>
          {activeTab === 'Products' && (
            <ul className="dropdown">
              <li className="flex items-center p-4 cursor-pointer">Option 1</li>
              <li className="flex items-center p-4 cursor-pointer">Option 2</li>
              <li className="flex items-center p-4 cursor-pointer">Option 3</li>
            </ul>
          )}
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Orders' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Orders')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Orders</span>
          </li>
          {activeTab === 'Orders' && (
            <ul className="dropdown">
              <li className="flex items-center p-4 cursor-pointer">Option A</li>
              <li className="flex items-center p-4 hover-bg-gray-700">Option B</li>
              <li className="flex items-center p-4 cursor-pointer">Option C</li>
            </ul>
          )}
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Customers' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Customers')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Customers</span>
          </li>
          {activeTab === 'Customers' && (
            <ul className="dropdown">
              <li className="flex items-center p-4 cursor-pointer">Option X</li>
              <li className="flex items-center p-4 cursor-pointer">Option Y</li>
              <li className="flex items-center p-4 cursor-pointer">Option Z</li>
            </ul>
          )}
          <li
            className={`flex items-center p-4 cursor-pointer ${
              activeTab === 'Settings' ? 'bg-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Settings')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden sm:inline">Settings</span>
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="w-full sm:w-4/5 bg-white">
        {/* Navbar */}
        <div className="bg-gray-200 flex justify-between items-center p-4">
          <button
            className="block sm:hidden"
            onClick={toggleSidebar}
          >
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
          <div>Logo</div>
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
        <div className="p-4">
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
              <img src="https://source.unsplash.com/random/400x200" alt="Histogram Chart" />
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
              <img src="https://source.unsplash.com/random/400x200" alt="Pie Chart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;