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
    <div className="container mx-auto flex justify-center items-center">
      <div className="max-w-4xl flex justify-center items-center">
        <img
          src={images[selectedCompany][selectedModel][currentImageIndex]}
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
          {images[selectedCompany][selectedModel].map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="w-20 h-20 cursor-pointer rounded-lg shadow-sm transition duration-300 transform hover:scale-110"
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
