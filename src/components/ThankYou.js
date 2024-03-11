import React from "react";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-6 text-center text-gray-800 font-bold">
          Thank you for your response
        </h1>
        <p className="text-lg text-gray-700">We appreciate your feedback!</p>
      </div>
    </div>
  );
};

export default ThankYou;
