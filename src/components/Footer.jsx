import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-2">About ID Service</h3>
          <p>
            <ul>
              <li>Requirements</li>
              <li>Schedule an Appointment</li>
              <li>Status</li>
            </ul>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>
            <ul>
              <li>Addis Ababa,Ethiopia</li>
              <li>833 FREE CALL</li>
              <li>kebele01@idservice.gov.et</li>
            </ul>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Help and Support</h3>
          <p>
            <ul>
              <li>FAQ</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="bg-gray-700 p-4 text-center">
        <p className="text-sm">Copyright © 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
