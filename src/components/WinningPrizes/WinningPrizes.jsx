import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import gaintnut from "/PrizesImages/GaintNut.svg"; // Corrected path

const WinningPrizes = () => {
  return (
    <div className="px-10 md:px-20 p-5 max-w-screen w-full h-auto pt-10 items-center justify-center mt-10">
      <div className=" font-krona text-2xl text-white justify-center items-center content-center flex">
        <h1 className=" font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
          PRIZES
        </h1>
      </div>

      <div className="font-transrobotics flex flex-col justify-center items-center gap-2 md:gap-8 mt-10 md:flex-row md:items-center md:justify-center lg:justify-center md:content-center">
        <LargeCard>
          <span className="text-white">
            Light Weight<br></br>Category
          </span>
        </LargeCard>
        <LargeCard>
          <span className="text-white">
            Heavy Weight<br></br>Category
          </span>
        </LargeCard>
      </div>
    </div>
  );
};

function LargeCard({ children }) {
  return (
    <div className="grid gap-5 mt-4 justify-center items-center content-center rounded-md md:pt-2 pt-3 w-full max-w-md bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#009DFF] to-[#B7E3FF] text-2xl md:text-3xl text-center">
        {children}
      </h1>
      <MediumCard
        className="col-span-2 row-span-1"
        reward="LKR 30,000 + GIANT NUT"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#009DFF] to-[#B7E3FF] text-3xl md:text-4xl">
          WINNER
        </span>
      </MediumCard>
      <div className="grid grid-cols-2 gap-5 w-full">
        <SmallCard reward="LKR 20,000">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#009DFF] to-[#B7E3FF]">
            1ST RUNNER UP
          </span>
        </SmallCard>
        <SmallCard reward="LKR 20,000">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#009DFF] to-[#B7E3FF]">
            2ND RUNNER UP
          </span>
        </SmallCard>
      </div>
    </div>
  );
}

function SmallCard({ children, reward, className }) {
  return (
    <div className={className}>
      <div className="gap-5 justify-center items-center content-center rounded-md md:py-2 py-3 px-2 flex flex-col text-center w-full h-full bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-lg md:text-xl">
          {children}
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-lg md:text-xl">
          {reward}
        </div>
      </div>
    </div>
  );
}

function MediumCard({ children, reward, className }) {
  return (
    <div className={className}>
      <div className="gap-5 justify-center items-center content-center rounded-md md:py-2 p-3 flex flex-col text-center w-full h-auto bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]">
        <img src={gaintnut} alt="nut" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-lg md:text-xl">
          {children}
        </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-lg md:text-xl">
          {reward}
        </div>
      </div>
    </div>
  );
}

export default WinningPrizes;
