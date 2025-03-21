import React from "react";
import Button from "../Button/Button";
import homeLogo from "../../../public/Branding/Home-Logo.svg"; // Ensure the path is correct

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 text-center mt-20 mb-5">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left gap-2 md:gap-5 md:px-20">
          <h2 className="font-transrobotics text-xl md:text-3xl opacity-90">
            UOK
          </h2>
          <h1 className="font-transrobotics text-5xl md:text-7xl mt-2 md:mt-0 bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
            ROBOT <br /> BATTLES
          </h1>
          <h2 className="font-transrobotics text-xl md:text-3xl opacity-90">
            2025
          </h2>
          {/* Event Description & Buttons */}
          <div className="flex flex-col items-center font-bebasneue mt-5">
            <p className="text-white text-lg md:text-xl leading-normal opacity-80 max-w-2xl">
              Experience the thrill of high-stakes competition, where every
              strategy is a calculated risk, and every engineering feat is a
              masterpiece. This is more than a contest.
            </p>
            <div className="flex gap-5 mt-5">
              <Button
                text={"Public Calender"}
                url={"/Calender"}
                className="font-transrobotics bg-gradient-to-r from-white to-sky-400 hover:text-blue-600 text-black rounded-[54px] px-6 py-3 hover:bg-gradient-to-r hover:from-white hover:to-sky-400 hover:text-blue-600 border-none"
              />
              <Button
                text={"Register"}
                url={"/Register"}
                className="font-transrobotics bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-[54px] px-6 py-3 hover:bg-gradient-to-r hover:text-black border-none"
              />
            </div>
          </div>
        </div>
        {/* Right Content - Logo */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-5 md:mt-0">
          <img src={homeLogo} alt="Home Logo" className="mx-auto" width="550" />
        </div>
      </div>
    </div>
  );
};

export default Home;
