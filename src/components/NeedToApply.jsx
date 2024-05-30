import React from "react";
import how from "../assets/how.jpg";
import { IoMdCheckmark } from "react-icons/io";

const NeedToApply = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="rounded-lg w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-1/2">
            <img
              className="h-72 w-full rounded object-cover"
              src={how}
              alt="Before You Apply"
            />
          </div>
          <div className="p-4 sm:p-8 flex flex-col w-full lg:w-1/2">
            <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">
              Before You Apply
            </h2>
            <ul className="mt-3 space-y-3">
              <li className="flex items-center">
                <IoMdCheckmark className="text-purple-700 font-bold mr-2 bg-white rounded" style={{ width: '24px', height: '24px' }} />
                You have to live in Addis Ababa for at least 1 year.
              </li>
              <li className="flex items-center">
                <IoMdCheckmark className="text-purple-700 font-bold mr-2 bg-white rounded" style={{ width: '24px', height: '24px' }} />
                If your age is above 18, the last ID you took should be provided.
              </li>
              <li className="flex items-center">
                <IoMdCheckmark className="text-purple-700 font-bold mr-2 bg-white rounded" style={{ width: '24px', height: '24px' }} />
                For relocation, the ID and letter should be brought from where you have been living before.
              </li>
              <li className="flex items-center">
                <IoMdCheckmark className="text-purple-700 font-bold mr-2 bg-white rounded" style={{ width: '24px', height: '24px' }} />
                To apply for an ID, your age must be above 18.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedToApply;
