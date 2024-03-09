import React from "react";
import { NavLink } from "react-router-dom";

const NoVehicle = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl mb-6">Would you like to own a vehicle ?</h1>
          <div className="flex">
            <NavLink
              to="/noo"
              className="flex-1 border border-red-500 shadow-sm hover:shadow-md bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
              activeClassName="bg-red-700"
            >
              No
            </NavLink>
            <NavLink
              to="/yes"
              className="flex-1 border border-blue-500 shadow-sm hover:shadow-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
              activeClassName="bg-blue-700"
            >
              Yes
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NoVehicle;
