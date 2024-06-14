import React from "react";

const Table = () => {
  return (
    <div className="container mx-auto my-10 p-4">
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="w-full bg-gray-800 text-white">
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 text-center px-4">Abel</td>
              <td className="py-2 text-center  px-4">Kinfu</td>
              <td className="py-2 text-center  px-4">Up Coming</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
