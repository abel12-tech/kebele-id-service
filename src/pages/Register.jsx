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
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [countryFrom, setCountryFrom] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [motherName, setMotherName] = useState("");
  const [kebele, setKebele] = useState("");
  const [job, setJob] = useState("");
  const [residentAddress, setResidentAddress] = useState({
    subcity: "",
    woreda: "",
    street: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profile, setProfile] = useState(null);
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

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setRegistering(true);

      const imageRef = ref(storage, `Profile-images/${profile.name + v4()}`);
      await uploadBytes(imageRef, profile);
      const imageUrl = await getDownloadURL(imageRef);

      const formData = {
        firstName,
        lastName,
        dob,
        gender,
        placeOfBirth,
        countryFrom,
        emergencyContact,
        bloodGroup,
        houseNo,
        motherName,
        job,
        residentAddress,
        profile: imageUrl,
        phoneNumber,
        kebele: kebele,
        password,
        status: "Active",
      };

      const res = await register(formData);

      setRegistering(false);

      dispatch(setTokenOnRegister(res.data.data));

      toast.success("User registered successfully", {
        position: "top-right",
      });

      navigate("/");

      setFirstName("");
      setLastName("");
      setDob("");
      setGender("");
      setPlaceOfBirth("");
      setCountryFrom("");
      setEmergencyContact("");
      setBloodGroup("");
      setHouseNo("");
      setMotherName("");
      setJob("");
      setResidentAddress({ subcity: "", woreda: "", street: "" });
      setPhoneNumber("");
      setProfile(null);
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to register user");
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

            <div>
              <label
                htmlFor="dob"
                className="block text-gray-800 font-semibold mb-2"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
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
                htmlFor="gender"
                className="block text-gray-800 font-semibold mb-2"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="placeOfBirth"
                className="block text-gray-800 font-semibold mb-2"
              >
                Place of Birth
              </label>
              <input
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your place of birth"
                value={placeOfBirth}
                onChange={(e) => setPlaceOfBirth(e.target.value)}
                required
              />
            </div>

            {/* Country From input */}
            <div>
              <label
                htmlFor="countryFrom"
                className="block text-gray-800 font-semibold mb-2"
              >
                Country From
              </label>
              <input
                type="text"
                id="countryFrom"
                name="countryFrom"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your country of origin"
                value={countryFrom}
                onChange={(e) => setCountryFrom(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="emergencyContact"
                className="block text-gray-800 font-semibold mb-2"
              >
                Emergency Contact
              </label>
              <input
                type="text"
                id="emergencyContact"
                name="emergencyContact"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter emergency contact number"
                value={emergencyContact}
                onChange={(e) => setEmergencyContact(e.target.value)}
                required
              />
            </div>

            <div>
              <label
                htmlFor="bloodGroup"
                className="block text-gray-800 font-semibold mb-2"
              >
                Blood Group
              </label>
              <input
                type="text"
                id="bloodGroup"
                name="bloodGroup"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your blood group"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              />
            </div>

            {/* House No input */}
            <div>
              <label
                htmlFor="houseNo"
                className="block text-gray-800 font-semibold mb-2"
              >
                House No
              </label>
              <input
                type="text"
                id="houseNo"
                name="houseNo"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your house number"
                value={houseNo}
                onChange={(e) => setHouseNo(e.target.value)}
                required
              />
            </div>

            {/* Mother's Name input */}
            <div>
              <label
                htmlFor="motherName"
                className="block text-gray-800 font-semibold mb-2"
              >
                Mother's Name
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your mother's name"
                value={motherName}
                onChange={(e) => setMotherName(e.target.value)}
                required
              />
            </div>

            {/* Job input */}
            <div>
              <label
                htmlFor="job"
                className="block text-gray-800 font-semibold mb-2"
              >
                Job
              </label>
              <input
                type="text"
                id="job"
                name="job"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your job title"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
              />
            </div>

            {/* Resident Address inputs */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="subcity"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Subcity
                </label>
                <input
                  type="text"
                  id="subcity"
                  name="subcity"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter subcity"
                  value={residentAddress.subcity}
                  onChange={(e) =>
                    setResidentAddress({
                      ...residentAddress,
                      subcity: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="woreda"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Woreda
                </label>
                <input
                  type="text"
                  id="woreda"
                  name="woreda"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter woreda"
                  value={residentAddress.woreda}
                  onChange={(e) =>
                    setResidentAddress({
                      ...residentAddress,
                      woreda: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="street"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter street"
                  value={residentAddress.street}
                  onChange={(e) =>
                    setResidentAddress({
                      ...residentAddress,
                      street: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Phone Number input */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-800 font-semibold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            {/* Profile Picture input */}
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

            {/* Password input */}
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

            {/* Confirm Password input */}
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

            {/* Register button */}
            <div>
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
