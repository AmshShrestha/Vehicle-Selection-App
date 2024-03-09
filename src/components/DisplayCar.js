import React, { useState } from "react";
import { connect } from "react-redux";



const DisplayCar = ({selectedCompany, selectedModel}) => {
  const images = {
    Toyota: {
      "Model 1": "/images/SuzukiOne.jpg",
      "Model 2": "/images/SuzukiTwo.jpg",
      "Model 3": "/images/SuzukiThree.jpg",
    },
  };

  const [currentImage, setCurrentImage] = useState(
    images[selectedCompany]["Model 1"]
  );

  const handleImageClick = (newImageUrl) => {
    setCurrentImage(newImageUrl);
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="max-w-4xl flex justify-center items-center">
        <img
          src={currentImage}
          alt={selectedCompany}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="ml-8">
        <div className="mt-4">
          <p className="text-lg font-semibold">
            Company Name: {selectedCompany}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold">Bike Model: {selectedModel}</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {Object.keys(images[selectedCompany]).map((model, index) => (
            <img
              key={index}
              src={images[selectedCompany][model]}
              alt={`Image ${index + 1}`}
              className="w-20 h-20 cursor-pointer rounded-lg shadow-sm transition duration-300 transform hover:scale-110"
              onClick={() => handleImageClick(images[selectedCompany][model])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedCompany: state.selectedCompany,
  selectedModel: state.selectedModel,
});

export default connect(mapStateToProps)(DisplayCar);
