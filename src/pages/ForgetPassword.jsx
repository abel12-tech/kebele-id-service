import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForgetPasswordMutation } from "../features/authentication/api/authApi";
import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [forgetPassword, { isLoading, isSuccess, isError, error }] =
    useForgetPasswordMutation();

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgetPassword({ phoneNumber }).unwrap();
      toast.success(`Reset link sent to your email , Check your email`);
    } catch (err) {
      console.error("Failed to send reset link:", err);
      toast.error("Failed to send reset link");
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
                  Forget Password
                </h1>
                <p className="text-gray-500">
                  Enter your phone number to receive a reset link
                </p>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Phone Number"
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
                  {isLoading ? "Sending..." : "Send To Recieve Link"}
                </button>
              </div>
              {isSuccess && (
                <p className="mt-4 text-green-500">
                  Reset link sent successfully!
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

export default ForgetPassword;
