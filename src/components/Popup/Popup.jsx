import React from "react";
import { FiX } from "react-icons/fi"; // Import close icon
import Button from "../Button/Button";

const Popup = ({ isVisible, togglePopup, buttons, containerClassName }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 m-4 sm:m-6 lg:m-8 p-6 sm:p-8 lg:p-10 rounded-lg shadow-lg text-center relative ${containerClassName}`}
      >
        <button
          onClick={togglePopup}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-all duration-300"
        >
          <FiX size={24} /> {/* Close icon */}
        </button>
        <h2 className="text-3xl font-transrobotics text-white mb-6">
          Choose Category
        </h2>
        <div className="flex flex-col gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              url={button.url}
              className={`font-transrobotics text-white rounded-[54px] px-6 py-3 shadow-md transition-all duration-300 ${button.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
