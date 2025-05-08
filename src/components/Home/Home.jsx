import React, { useEffect } from "react";
import Button from "../Button/Button";
import homeLogo from "/public/Branding/Home-Logo.svg";

const Home = ({ onLoad }) => {
  useEffect(() => {
    // Simulate loading completion for the Home section
    const timer = setTimeout(() => {
      if (onLoad) onLoad(); // Trigger the onLoad callback
    }, 500); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, [onLoad]);

  return (
    <div className="flex flex-col justify-center items-center px-10 text-center mt-20 mb-5">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left gap-2 md:gap-5 md:px-20">
          <h2 className="font-transrobotics scroll-animate text-xl md:text-3xl opacity-90">
            UOK
          </h2>
          <h1 className="font-transrobotics text-5xl scroll-animate md:text-7xl mt-2 md:mt-0 bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
            ROBOT <br /> BATTLES
          </h1>
          <h2 className="font-transrobotics scroll-animate text-xl md:text-3xl opacity-90">
            2025
          </h2>
          <div className="flex flex-col items-center font-bebasneue mt-5 animate-fade-in">
            <p className="text-white text-lg md:text-xl leading-normal opacity-80 max-w-2xl">
              Experience the thrill of high-stakes competition, where every
              strategy is a calculated risk, and every engineering feat is a
              masterpiece. This is more than a contest.
            </p>
            <div className="flex flex-col md:flex-row gap-5 mt-5 items-center">
              <Button
                text={"Public Calender"}
                url={"/Calender"}
                className="font-transrobotics text-grey-100 bg-gradient-to-r from-white to-sky-100 hover:text-blue-600 rounded-[54px] px-6 py-3 hover:bg-gradient-to-r hover:from-white hover:text-blue-600 hover:to-sky-400 border-none"
              />
              <Button
                text={"Register"}
                url={"https://forms.google.com/your-form-url"} // Replace with your actual Google Form URL
                className="font-transrobotics bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-[54px] px-6 py-3 hover:bg-gradient-to-r hover:from-white hover:to-sky-400 hover:text-blue-600 border-none"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center scroll-animate items-center mt-5 md:mt-0">
          <img src={homeLogo} alt="Home Logo" className="mx-auto" width="550" />
        </div>
      </div>
    </div>
  );
};

export default Home;
