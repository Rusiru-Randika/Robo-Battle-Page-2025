import React from "react";
import HomeLogo from "/public/Branding/Home-Logo.svg"; // Import the logo

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <img
          src={HomeLogo}
          alt="Home Logo"
          className="absolute inset-0 w-10 h-10 m-auto"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
