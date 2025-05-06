import React from "react";

export default function Timeline() {
  return (
    <div className="pt-10 md:pt-20 relative h-screen">
      {/* Heading */}
      <h1 className="font-transrobotics text-2xl md:text-4xl justify-center items-center px-5 md:px-10 flex text-center md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        Timeline
      </h1>

      {/* Timeline Row */}
      <div className="relative flex justify-center items-center mt-10 px-10 h-auto">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1">
          <div className="h-full bg-white w-[4px]" />
        </div>

        {/* Row Content */}
        <div className="flex flex-row justify-between items-center w-full z-10">
          {/* Date on the left */}
          <div className="w-1/3 flex justify-end">
            <p className="font-transrobotics justify-center items-center px-5 md:px-10 flex text-center md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              2024 June 12
            </p>
          </div>

          {/* Center Node */}
          <div className="relative w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 266 257"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M103.858 16.6927C121.981 6.62263 144.019 6.62263 162.142 16.6927L217.324 47.354C236.369 57.9368 248.181 78.0129 248.181 99.8014V157.199C248.181 178.987 236.369 199.063 217.324 209.646L162.142 240.307C144.019 250.377 121.981 250.377 103.858 240.307L48.6764 209.646C29.6305 199.063 17.8186 178.987 17.8186 157.199V99.8014C17.8186 78.0129 29.6305 57.9368 48.6764 47.354L103.858 16.6927Z"
                fill="#D9D9D9"
              />
              <ellipse cx="129.5" cy="128.5" rx="68.5" ry="74" fill="#020101" />
              {/* Optional icon can be placed here */}
            </svg>
          </div>

          {/* Registration box on the right */}
          <div className="w-1/3 flex justify-start">
            <div className="bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white rounded-lg p-2 md:p-6 max-w-md shadow-lg">
              <h2 className="text-sm md:text-lg font-bold mb-2 font-transrobotics md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 ">
                REGISTRATION OFFICIALLY OPEN
              </h2>
              <p className="text-xs md:text-sm mb-3 font-poppins">
                Registrations for UOK ROBOT BATTLE 2025 officially open on the
                2025 June 12
              </p>
              <button className="bg-blue-500 font-poppins font-bold text-white text-sm px-3 py-2 rounded hover:bg-blue-600 transition">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
