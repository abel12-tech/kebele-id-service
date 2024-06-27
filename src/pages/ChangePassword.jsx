import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useChangePasswordMutation } from "../features/authentication/api/authApi";
import Navbar from "../components/Navbar";

const ChangePassword = () => {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePassword, { isLoading, isSuccess, isError, error }] =
    useChangePasswordMutation();

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    try {
      await changePassword({ oldPassword, newPassword }).unwrap();
      toast.success("Password changed successfully!");
      navigate("/profile");
    } catch (err) {
      console.error("Failed to change password:", err);
      toast.error("Failed to change password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-8 md:px-16">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <ToastContainer position="top-right" autoClose={2000} />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-500">
                  Change Password
                </h1>
                <p className="text-gray-500">
                  Enter your old and new passwords below
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="password"
                  value={oldPassword}
                  onChange={handleOldPasswordChange}
                  placeholder="Old Password"
                  className="rounded-lg border-gray-300 border px-3 py-2 w-full"
                  required
                />
                <input
                  type="password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  placeholder="New Password"
                  className="rounded-lg border-gray-300 border px-3 py-2 w-full"
                  required
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Confirm New Password"
                  className="rounded-lg border-gray-300 border px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Changing..." : "Change Password"}
                </button>
              </div>
              {isSuccess && (
                <p className="mt-4 text-green-500">
                  Password changed successfully!
                </p>
              )}
              {isError && (
                <p className="mt-4 text-red-500">Error: {error.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
