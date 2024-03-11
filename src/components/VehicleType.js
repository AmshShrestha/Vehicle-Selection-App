import React from "react";
import { NavLink } from "react-router-dom";

const VehicleType = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Bike or Car?
        </h1>
        <div className="flex justify-center space-x-4">
          <NavLink
            to="/bike"
            className="flex-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border border-blue-500 transition duration-300"
            activeClassName="bg-blue-700"
          >
            Bike
          </NavLink>
          <NavLink
            to="/car"
            className="flex-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded border border-red-500 transition duration-300"
            activeClassName="bg-red-700"
          >
            Car
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default VehicleType;
