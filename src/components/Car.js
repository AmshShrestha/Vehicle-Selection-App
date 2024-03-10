import React from "react";
import { NavLink } from "react-router-dom";
import { setSelectedCompany, setSelectedModel } from "../redux/action";
import { connect } from "react-redux";

const Car = ({
  setSelectedCompany,
  setSelectedModel,
  selectedCompany,
  selectedModel,
}) => {
  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl mb-6 text-center text-gray-800">
            Car Details
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700">Company Name</label>
            <select
              value={selectedCompany}
              onChange={handleCompanyChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Company</option>
              <option value="BMW">BMW</option>
              <option value="Ford">Ford</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model </label>
            <select
              value={selectedModel}
              onChange={handleModelChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Model</option>

              {selectedCompany === "BMW" && (
                <>
                  <option value="BMW 3 Series">BMW 3 Series</option>
                  <option value="BMW 5 Series">BMW 5 Series</option>
                </>
              )}
              {selectedCompany === "Ford" && (
                <>
                  <option value="Ford F-150">Ford F-150</option>
                  <option value="Ford Explorer">Ford Explorer</option>
                </>
              )}
            </select>
          </div>
          <NavLink
            to="/carDetails"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Okay
          </NavLink>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  selectedCompany: state.selectedCompany,
  selectedModel: state.selectedModel,
});

const mapDispatchToProps = {
  setSelectedCompany,
  setSelectedModel,
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
