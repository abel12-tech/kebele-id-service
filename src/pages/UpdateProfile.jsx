import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectResidentInfo,
  updateResidentInfo,
} from "../features/authentication/slice/authSlice";
import { useUpdateProfileMutation } from "../features/authentication/api/authApi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const resident = useSelector(selectResidentInfo);
  const [firstName, setFirstName] = useState(
    resident ? resident.firstName : null
  );
  const [lastName, setLastName] = useState(resident ? resident.lastName : null);
  const [id, setId] = useState(resident ? resident._id : null);
  const [profileImage, setProfileImage] = useState(
    resident ? resident.profile : null
  );
  const [updateProfile] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, `profiles/${file.name}`);

    try {
      await uploadBytes(fileRef, file);

      const fileUrl = await getDownloadURL(fileRef);
      setProfileImage(fileUrl);
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast.error("Failed to upload profile image");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: id,
        firstName: firstName,
        lastName: lastName,
        profile: profileImage,
      });

      dispatch(updateResidentInfo(res));

      toast.success("Profile updated successfully");
      navigate("/profile");
      window.location.reload();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-y-hidden p-4 sm:p-8 md:p-16">
        <div className="bg-white px-4 py-4 rounded-lg shadow-md w-full max-w-lg">
          <ToastContainer position="top-right" autoClose={2000} />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold">
                {firstName} {lastName}
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="First Name"
                className="rounded-lg border-gray-300 border px-3 py-2 w-full"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="Last Name"
                className="rounded-lg border-gray-300 border px-3 py-2 w-full"
                required
              />
              <input
                type="file"
                onChange={handleProfileImageChange}
                accept="image/*"
                className="rounded-lg border-gray-300 border px-3 py-2 w-full"
              />
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfile;
