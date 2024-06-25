import React from "react";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { selectResidentInfo } from "../features/authentication/slice/authSlice";
import { useSelector } from "react-redux";

const Profile = () => {
  const resident = useSelector(selectResidentInfo);
  const profile = resident ? resident.profile : null;
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate("/update-profile");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-y-hidden p-4 sm:p-8 md:p-16">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md w-full max-w-lg">
          <ToastContainer position="top-right" duration={2000} />
          <div className="space-y-4">
            <div className="text-center">
              <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">
                {resident?.firstName} {resident?.lastName}
              </h2>
            </div>
            <div className="flex items-center justify-center mt-12">
              <button
                className="w-50 rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-2 py-2"
                onClick={handleEditProfile}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
