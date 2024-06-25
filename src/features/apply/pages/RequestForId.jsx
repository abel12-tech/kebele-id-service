import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useApplyForIdMutation } from "../api/applyApi";
import Navbar from "../../../components/Navbar";
import { storage } from "../../../firebase";
import { selectResidentInfo } from "../../authentication/slice/authSlice";

const RequestForId = () => {
  const [document, setDocument] = useState([]);
  const [idType, setIdType] = useState("New");
  const [photo, setUserPhoto] = useState(null);
  const [lastIdImage, setLastIdImage] = useState(null);
  const [apply, { isLoading }] = useApplyForIdMutation();
  const residentInfo = useSelector(selectResidentInfo);
  const resident = residentInfo ? residentInfo._id : "";
  const [reservationDate, setReservationDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0, 16);
    setReservationDate(currentDate);
  }, []);

  const navigate = useNavigate();

  const handleFileChange = async (e, setImage, imageType) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, `documents/${file.name}`);
    await uploadBytes(fileRef, file);
    const fileUrl = await getDownloadURL(fileRef);

    if (imageType === "userPhoto") {
      setUserPhoto(fileUrl);
    } else if (imageType === "lastIdImage") {
      setLastIdImage(fileUrl);
    }
  };

  const handleMultipleFilesChange = async (e) => {
    const files = Array.from(e.target.files);
    const fileUrls = await Promise.all(
      files.map(async (file) => {
        const fileRef = ref(storage, `documents/${file.name}`);
        await uploadBytes(fileRef, file);
        return await getDownloadURL(fileRef);
      })
    );
    setDocument(fileUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!residentInfo) {
      toast.error(
        "You must be registered to request an ID. Redirecting to registration page...",
        {
          position: "top-right",
        }
      );

      setTimeout(() => {
        navigate("/register");
      }, 2000);
      return;
    }

    try {
      const res = await apply({
        resident,
        document,
        idType,
        photo: idType === "Renewal" ? photo : null,
        lastIdImage: idType === "Renewal" ? lastIdImage : null,
        reservationDate,
      });
      if (res.error) {
        throw new Error(res.error.data.message);
      }

      navigate("/");
      window.location.reload();
      toast.success("Apply successful", {
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
          <h1 className="text-2xl mb-6 text-center">Request ID</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="document"
                className="block text-gray-800 font-semibold mb-2"
              >
                Document Images
              </label>
              <input
                type="file"
                id="document"
                name="document"
                accept="image/*"
                multiple
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                onChange={handleMultipleFilesChange}
              />
            </div>
            <div>
              <label
                htmlFor="userPhoto"
                className="block text-gray-800 font-semibold mb-2"
              >
                Photo
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                onChange={(e) => handleFileChange(e, setUserPhoto, "photo")}
              />
            </div>
            {idType === "Renewal" && (
              <div>
                <label
                  htmlFor="lastIdImage"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Last ID Image
                </label>
                <input
                  type="file"
                  id="lastIdImage"
                  name="lastIdImage"
                  accept="image/*"
                  className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                  onChange={(e) =>
                    handleFileChange(e, setLastIdImage, "lastIdImage")
                  }
                />
              </div>
            )}
            <div>
              <label
                htmlFor="idType"
                className="block text-gray-800 font-semibold mb-2"
              >
                ID Type
              </label>
              <select
                id="idType"
                name="idType"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value="New">New</option>
                <option value="Renewal">Renewal</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="reservationDate"
                className="block text-gray-800 font-semibold mb-2"
              >
                Reservation Date
              </label>
              <input
                type="datetime-local"
                id="reservationDate"
                name="reservationDate"
                className="w-full outline-none border border-gray-300 p-2 rounded-lg"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                disabled={isLoading}
              >
                {isLoading ? "Requesting..." : "Request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestForId;
