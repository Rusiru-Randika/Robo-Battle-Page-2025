import React from "react";

export default function About() {
  return (
    <div className="py-20 px-10 text-white">
      <div className="max-w-4xl mx-auto bg-[#1A1F39] rounded-3xl p-10 shadow-lg">
        <h1 className="font-transrobotics text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#6EE7B7] to-[#3B82F6] mb-8">
          What is UOK Robot Battle?
        </h1>
        <p className="font-poppins text-lg text-white mb-8">
          <strong>UOK Robot Battles 2025</strong>, an intra-university open
          event hosted by the University of Kelaniya’s Electronics and Computer
          Science Club, aims to foster innovation and technological advancement
          among students by providing a platform to showcase their creativity
          and engineering skills in robotics. The event features two competition
          categories:
        </p>
        <ul className="font-poppins text-lg text-white mb-8 list-disc list-inside">
          <li>
            <strong>Heavy-Weight:</strong> Max 15 KG, 45 CM x 45 CM
          </li>
          <li>
            <strong>Light-Weight:</strong> Max 2.5 KG, 25 CM x 25 CM
          </li>
        </ul>
        <p className="font-poppins text-lg text-white mb-8">
          It seeks to inspire excellence in technology, encouraging students to
          experiment, collaborate, and explore the potential of robotics while
          bringing together a community of passionate enthusiasts.
        </p>
        <div className="flex justify-center">
          <button className="font-transrobotics text-2xl md:text-3xl justify-center items-center content-center px-8 py-4 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] rounded-[54px] hover:from-[#3B82F6] hover:to-[#6EE7B7] transition-all duration-300">
            <a href="/about">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
}
