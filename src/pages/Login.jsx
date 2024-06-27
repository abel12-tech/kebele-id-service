import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useLoginMutation } from "../features/authentication/api/authApi";
import { useDispatch } from "react-redux";
import { setTokenOnLogin } from "../features/authentication/slice/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   toast.error("Passwords do not match", {
    //     position: "top-right",
    //   });
    //   return;
    // }

    try {
      const res = await login({ phoneNumber, password });
      if (res.error) {
        throw new Error(res.error.data.message);
      }

      dispatch(setTokenOnLogin(res.data.data));
      navigate("/");
      window.location.reload();
      toast.success("Login successful", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8 md:p-16">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <ToastContainer position="top-right" duration={2000} />
          <h1 className="text-2xl mb-6 text-center">Sign in to your account</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-800 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right">
              <Link to="/forget-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
