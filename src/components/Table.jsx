import React from "react";

const Table = () => {
  const data = [
    { firstname: "John", lastname: "Doe", status: "Active" },
    { firstname: "Jane", lastname: "Smith", status: "Inactive" },
    { firstname: "Bob", lastname: "Johnson", status: "Pending" },
  ];

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="w-full bg-gray-800 text-white">
              <th className="py-2 px-4">First Name</th>
              <th className="py-2 px-4">Last Name</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{row.firstname}</td>
                <td className="py-2 px-4">{row.lastname}</td>
                <td className="py-2 px-4">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
