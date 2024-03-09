import React from "react";
import how from "../assets/how.jpg";
import { IoMdCheckmark } from "react-icons/io";
const NeedToApply = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center px-3 py-12">
      <div className="rounded-lg w-full">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="w-full">
            <img
              className=" h-72 w-full rounded object-cover"
              src={how}
              alt="Random"
            />
          </div>
          <div className="p-8 flex flex-col w-full">
            <h2 className="block mt-1 text-3xl leading-tight font-bold text-black">
              Before You Apply
            </h2>
            <ul className="mt-3">
              <li className="flex items-center p-2">
                <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                You have to Live in Addis Ababa at least for 1 year.
              </li>
              <li className="flex items-center p-2 lg:truncate">
                <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                If your age is above 18 , the last id you took should be
                provided.
              </li>
              <li className="flex items-center p-2 lg:truncate">
                <IoMdCheckmark className="w-8 h-8 lg:w-6 lg:h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                For relocation the id and letter should be brought from where
                you have been living before.
              </li>
              <li className="flex items-center p-2">
                <IoMdCheckmark className="w-6 h-6 text-purple-700 font-bold mr-2 bg-white  rounded" />
                To apply for ID your age must be above 18.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedToApply;
