import React from "react";
import {NavLink} from "react-router-dom";

const VehicleType = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6">Bike or Car?</h1>
          <div className="flex">
            <NavLink
              to="/bike"
              className="flex-1 border border-blue-500 shadow-sm hover:shadow-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              activeClassName="bg-blue-700"
            >
              Bike
            </NavLink>
            <NavLink
              to="/car"
              className="flex-1 border border-red-500 shadow-sm hover:shadow-md bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              activeClassName="bg-red-700"
            >
              Car
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VehicleType;
