import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl mb-6 text-center">Contact Us</h1>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-2">
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
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="col-span-2">
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
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your last name"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 p-2 rounded-lg"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="col-span-2">
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
                ></textarea>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#FDC351] text-gray-600 hover:bg-[#d1ae67] px-4 py-2"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div>
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102769.93811653371!2d38.69406962431633!3d9.02273614660945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17c85c9f8c2ba3e1%3A0x6f187f7e7e2a673e!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1616742056584!5m2!1sen!2set"
            className="w-full h-96"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
