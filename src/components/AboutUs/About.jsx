import React from "react";
import Button from "../Button/Button";

const About = () => {
  return (
    <div className="md:px-20 px-10 p-5 max-w-screen h-full w-f  min-h-screen py-10 items-center justify-center mt-20">
      <div className=" font-krona text-3xl md:text-4xl text-white ">
        <h1 className="  text-center md:text-start font-krona">About Us</h1>
      </div>
      <div className=" flex flex-col justify-center items-center gap-8 mt-10 content-center md:flex-row md:justify-between lg:justify-between ">
        {/* image */}
        <div className=" ">
          <img
            className="md:w-[3000px] hidden md:block shadow-2xl shadow-violet-500 rounded-lg md:mb-20 "
            src="/about-lg.jpg"
            alt="robo"
          />
        </div>
        <div>
          <img
            className=" md:hidden shadow-2xl shadow-violet-500 rounded-lg w-60 h-60"
            src=" /about-front.jpg"
            alt="robo  mobile screen"
          />
        </div>
        <div className="md:flex md:items-start flex flex-col justify-center items-center gap-4 content-center md:mt-10 md:ml-20 ">
          <div className=" font-krona text-xl md:text-3xl text-white text-center md:text-start ">
            <h1 className="md:text-start md:flex md:justify-start md:items-start">
              What is the <br /> UOK Robot Battles ?
            </h1>
          </div>
          <div className=" font-poppins text-white text-lg">
            <p className=" text-center opacity-80 md:justify-center md:text-start md:py-5">
              UOK Robot Battles 2025, an intra-university open event hosted by
              the University of Kelaniya's Electronics and Computer Science
              Club, aims to foster innovation and technological advancement
              among students by providing a platform to showcase their
              creativity and engineering skills in robotics. The event features
              two competition categories: Heavy-Weight (max 15 KG, 45 CM x 45
              CM) and Light-Weight (max 2.5 KG, 25 CM x 25 CM). It seeks to
              inspire excellence in technology, encouraging students to
              experiment, collaborate, and explore the potential of robotics
              while bringing together a community of passionate enthusiasts.
            </p>
            <div className="py-5 flex justify-center md:flex md:justify-start">
              {/* <a href=" https://drive.google.com/drive/folders/13tm3gtQj4lEXUJWDt4vntjc1XGCUjIaE ">
                <button className=" bg-gradient-to-r from-pink-500 border-pink-400 border-2 to-fuchsia-800 text-lg text-white font-poppins px-4 py-2 rounded-full cursor-pointer">
                  Read More...
                </button>{" "}
              </a> */}
              <div className="mt-5">
                <Button
                  text="Read More..."
                  url="https://drive.google.com/drive/folders/13tm3gtQj4lEXUJWDt4vntjc1XGCUjIaE"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
