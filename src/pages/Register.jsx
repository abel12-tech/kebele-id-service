import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useRegisterResidentMutation } from "../features/authentication/api/authApi";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [kebele, setKebele] = useState("");
  const [password, setPassword] = useState("");
  const [registering, setRegistering] = useState(false);
  const [register] = useRegisterResidentMutation();

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRegistering(true);
      const imageRef = ref(storage, `Blog-images/${profile.name + v4()}`);
      await uploadBytes(imageRef, profile);
      const imageUrl = await getDownloadURL(imageRef);
      await register({
        firstName,
        lastName,
        phoneNumber,
        profile: imageUrl,
        kebele,
        password,
      });

      setRegistering(false);
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setProfile("");
      setPassword("");
    } catch (error) {
      setError("Invalid phone number or password");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-y-hidden p-4 sm:p-8 md:p-16">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md w-full max-w-lg">
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
                />
              </div>
              <div>
                <label
                  htmlFor="profile"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="profile"
                  name="profile"
                  accept="image/*"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  onChange={handleFileChange}
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
              >
                <option value="">Select your kebele</option>
                <option value="665856fccaf15bb0cbce52b1">Kebele 1</option>
                <option value="other_kebele_id">Kebele 2</option>
                {/* Add other kebele options as needed */}
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
              />
            </div>
            <div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
              >
                {registering ? "registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
