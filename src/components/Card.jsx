import React from "react";
import { useGetMyRequestQuery } from "../features/apply/api/applyApi";
import "./Card.css";
import { selectResidentInfo } from "../features/authentication/slice/authSlice";
import { useSelector } from "react-redux";

const Card = () => {
  const { data, error, isLoading, isSuccess } = useGetMyRequestQuery();
  const residentInfo = useSelector(selectResidentInfo);
  const resident = residentInfo ? residentInfo.firstName : "";

  return (
    <div className="container mt-24 mx-auto my-10 ">
      {isLoading && (
        <div className="card">
          <p className="text-center">Loading...</p>
        </div>
      )}
      {!isLoading && !error && (!data || !data.id) && (
        <div className="card">
          <h1 className="text-center font-bold">You haven't applied yet.</h1>
        </div>
      )}
      {error && (
        <div className="card">
          <p className="text-center">Error loading data.</p>
        </div>
      )}
      {isSuccess && data && data.id && (
        <div className="card flex w-full">
          <div className="p-6">
            <h3>Resident: {resident}</h3>
            <p>
              <strong>Status:</strong> {data.id.status}
            </p>
            <p>
              <strong>Reservation Date:</strong>{" "}
              {new Date(data.id.reservationDate).toLocaleString()}
            </p>
            <p>
              <strong>ID Type:</strong> {data.id.idType}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p>
              <strong>Document:</strong>
            </p>
            <img src={data.id.document[0]} alt="Document" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
