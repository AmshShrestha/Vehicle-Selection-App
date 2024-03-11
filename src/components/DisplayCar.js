import React, { useState } from "react";
import { connect } from "react-redux";

const DisplayBike = ({ selectedCompany, selectedModel }) => {
  const images = {
    BMW: {
      "BMW 3 Series": [
        "/images/BMW 3 Series 1.png",
        "/images/BMW 3 Series 2.png",
        "/images/BMW 3 Series 3.jpg",
      ],
      "BMW 5 Series": [
        "/images/BMW 5 Series 1.jpg",
        "/images/BMW 5 Series 2.jpg",
        "/images/BMW 5 Series 3.jpg",
      ],
      "Honda Golden Wing": [
        "/images/Honda Golden Wing 1.jpg",
        "/images/Honda Golden Wing 2.jpg",
        "/images/Honda Golden Wing 3.jpg",
      ],
    },
    Ford: {
      "Ford F-150": [
        "/images/Ford F150 1.jpg",
        "/images/Ford F150 2.jpg",
        "/images/Ford F150 3.jpg",
      ],
      "Ford Explorer": [
        "/images/Ford Explorer 1.jpg",
        "/images/Ford Explorer 2.jpg",
        "/images/Ford Explorer 3.jpg",
      ],
    },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="max-w-4xl">
          <div className="flex flex-col items-center mb-4">
            <div className="mb-2">
              <img
                src={images[selectedCompany][selectedModel][currentImageIndex]}
                alt={selectedCompany}
                className="w-90 h-64 rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="mb-2">
              <p className="text-xl font-semibold text-gray-900">
                Company name: {selectedCompany}
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold text-gray-900">
                Model name: {selectedModel}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {images[selectedCompany][selectedModel].map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={`w-16 h-16 cursor-pointer rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
                index === currentImageIndex ? "opacity-50" : ""
              }`}
              onClick={() => handleImageClick(index)}
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

export default connect(mapStateToProps)(DisplayBike);
