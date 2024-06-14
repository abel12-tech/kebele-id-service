import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { selectResidentInfo } from "../features/authentication/slice/authSlice";
import { useContactUsMutation } from "../features/apply/api/applyApi";

const ContactUs = () => {
  const residentInfo = useSelector(selectResidentInfo);
  const firstName = residentInfo ? residentInfo.firstName : "";
  const lastName = residentInfo ? residentInfo.lastName : "";

  const [message, setMessage] = useState("");
  const [sendMessage, { isLoading, isSuccess, isError }] =
    useContactUsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendMessage({ firstName, lastName, message });
      console.log(res);
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-8 md:p-16 mt-8 md:mt-16 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto md:mx-0">
          <h1 className="text-3xl mb-6 text-center">Contact Us</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-gray-800 font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={firstName}
                  readOnly
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={lastName}
                  readOnly
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </form>
          {isSuccess && (
            <p className="text-green-500 mt-4">Message sent successfully!</p>
          )}
          {isError && (
            <p className="text-red-500 mt-4">
              Failed to send message. Please try again.
            </p>
          )}
        </div>
        <div className="w-full max-w-lg mx-auto md:mx-0">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102769.93811653371!2d38.69406962431633!3d9.02273614660945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17c85c9f8c2ba3e1%3A0x6f187f7e7e2a673e!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1616742056584!5m2!1sen!2set"
            className="w-full h-96 rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
