import React, { useState } from "react";
import { connect } from "react-redux";

const DisplayBike = ({ selectedCompany, selectedModel }) => {
  const images = {
    Honda: {
      "Honda CBR1000RR": [
        "/images/Honda CBR1000RR 1.jpg",
        "/images/Honda CBR1000RR 2.jpg",
        "/images/Honda CBR1000RR 3.jpg",
      ],
      "Honda CRF450R": [
        "/images/Honda CRF450R 1.jpg",
        "/images/Honda CRF450R 2.jpg",
        "/images/Honda CRF450R 3.jpg",
      ],
      "Honda Golden Wing": [
        "/images/Honda Golden Wing 1.jpg",
        "/images/Honda Golden Wing 2.jpg",
        "/images/Honda Golden Wing 3.jpg",
      ],
    },
    Royal_Enfield: {
      "Royal Enfield Bullet 350": [
        "/images/Royal Enfield Bullet 350 1.jpg",
        "/images/Royal Enfield Bullet 350 2.jpg",
        "/images/Royal Enfield Bullet 350 3.jpg",
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
