import React from "react";

const Registration = () => {
  return (
    <div className="px-20 p-5 max-w-screen h-full w-f  min-h-screen py-10 mt-20 md:mt-[150px]">
      <h1
        className=" text-white font-krona text-3xl md:text-4xl flex items-center justify-center md:justify-start md:flex md:text-start
      "
      >
        Registration
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 md:justify-between md:gap-10 md:flex-row py-5 mt-5">
        <div className="">
          <img src="/robo.png" alt="robot photo" />
        </div>
        <div className="md:flex md:flex-col md:justify-start md:text-start ">
          <p className=" text-white font-poppins text-justify-end opacity-90 text-xl md:text-start text-center mt-3 font-normal leading-relaxed  md:text-xl md:ml-[300px]">
            Be a part of the UOK Robot Battles 2k24! This thrilling event is
            your chance to immerse yourself in the exciting world of robotics.
            Witness cutting-edge technology in action and compete with fellow
            enthusiasts in a battle of innovation and skill. Don't miss out on
            this extraordinary opportunity to be a part of something truly
            remarkable. Register here before June 4 to secure your
            spot in the action!
          </p>
          <div className=" flex justify-center items-center text-center md:text-start md:flex md:flex-row md:ml-[230px] ">
            <div className=" flex flex-col j justify-between mt-10 md:flex-row  md:gap-20 md:mr-[200px] md:justify-end gap-5 ">
              <a href="https://docs.google.com/forms/d/1aW2N9A0GmMuo4zoIm7gCOGZIWwO4zoyA-lY4JXlxypQ/viewform?edit_requested=true">
                <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full cursor-pointer">
                  Register Now
                </button>
              </a>
              <a href="#">
                <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full">
                  Robot Design Rules
                  <a href="#"></a>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
