import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRegisterResidentMutation } from "../features/authentication/api/authApi";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setTokenOnRegister } from "../features/authentication/slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllKebelesQuery } from "../features/kebele/kebeleApi";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [kebele, setKebele] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const [register] = useRegisterResidentMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: kebeles,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllKebelesQuery();

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // here is where validation should be done .
    // validating the first and last name.
    const nameRegex = /^[A-Za-z\s'-]+$/;
    if (!(nameRegex.test(firstName) && nameRegex.test(lastName))) {
      setError("Name must be a valid String.");
      return;
    }
    // Validate phone number
    const isValid =
      /^(09|07)\d{8}$/.test(phoneNumber) || /^(9|7)\d{8}$/.test(phoneNumber);
    if (!isValid) {
      setError("Phone number must start with 09 or 07 and be 10 digits long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setRegistering(true);
      const imageRef = ref(storage, `Blog-images/${profile.name + v4()}`);
      await uploadBytes(imageRef, profile);
      const imageUrl = await getDownloadURL(imageRef);
      const res = await register({
        firstName,
        lastName,
        phoneNumber,
        profile: imageUrl,
        kebele,
        password,
      });

      setRegistering(false);

      dispatch(setTokenOnRegister(res.data.data));
      toast.success("User registered successfully", {
        position: "top-right",
      });
      navigate("/");
      window.location.reload();

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setProfile(null);
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      setError("Invalid phone number or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-y-hidden p-4 sm:p-8 md:p-16">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md w-full max-w-lg">
          <ToastContainer position="top-right" duration={2000} />
          <h1 className="text-2xl mb-6 text-center">Register</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="profile"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Profile Picture
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  accept="image/*"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="kebele"
                className="block text-gray-800 font-semibold mb-2"
              >
                Kebele
              </label>
              <select
                id="kebele"
                name="kebele"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                value={kebele}
                onChange={(e) => setKebele(e.target.value)}
                required
              >
                <option value="">Select your kebele</option>
                {isLoading && <option>Loading kebeles...</option>}
                {isError && <option>Error loading kebeles</option>}
                {isSuccess &&
                  kebeles.map((kebele) => (
                    <option key={kebele._id} value={kebele._id}>
                      {kebele.name}
                    </option>
                  ))}
              </select>
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
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-800 font-semibold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                disabled={registering}
              >
                {registering ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
