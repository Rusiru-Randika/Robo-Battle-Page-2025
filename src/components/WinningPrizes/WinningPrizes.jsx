import React from "react";
import { GiTrophyCup } from "react-icons/gi";
import gaintnut from "../../assets/GaintNut.svg";

const WinningPrizes = () => {
  return (
    <div className="px-10 md:px-20 p-5 max-w-screen h-full w-f  min-h-screen py-10 items-center justify-center mt-10">
      <div className=" font-krona text-2xl text-white justify-center items-center content-center flex">
        <h1 className=" font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
          PRIZES
        </h1>
      </div>

      <div className="font-transrobotics flex flex-col justify-center items-center gap-2 md:gap-8 mt-10 md:flex-row md:items-center md:justify-center lg:justify-center md:content-center">
        <LargeCard>Light Weight Category</LargeCard>
        <LargeCard>Heavy Weight Category</LargeCard>
      </div>
    </div>
  );
};

function LargeCard({ children }) {
  return (
    <div className="grid gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md md:py-2 p-3 w-full max-w-md">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] text-2xl md:text-3xl text-center">
        {children}
      </h1>
      <MediumCard
        className="col-span-2 row-span-1"
        reward="LKR 30,000 + GIANT NUT"
      >
        WINNER
      </MediumCard>
      <div className="grid grid-cols-2 gap-5 w-full">
        <SmallCard reward="LKR 20,000">1ST RUNNER UP</SmallCard>
        <SmallCard reward="LKR 20,000">2ND RUNNER UP</SmallCard>
      </div>
    </div>
  );
}

function SmallCard({ children, reward, className }) {
  return (
    <div className={className}>
      <div className="gap-5 justify-center items-center content-center border border-purple-500 rounded-md md:py-2 py-3 px-2 flex flex-col items-center text-center w-full h-full">
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
      <div className="gap-5 justify-center items-center content-center border border-purple-500 rounded-md md:py-2 p-3 flex flex-col items-center text-center w-full h-full">
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

function Old() {
  return (
    <>
      {/* light weight */}
      <div className=" py-5">
        <h2 className=" flex flex-col gap-5  font-krona text-xl text-white justify-center items-center content-center ">
          Light-weight
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          {/* card one */}
          <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md md:py-2 p-3">
            <div className=" text-7xl text-yellow-400">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins p-8 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-2 items-center justify-center content-center">
                Champions
              </p>
              <p className=" border rounded-xl border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 md:px-3 px-3 ">
                Rs.100,000 + Giant Nut
              </p>
            </div>
          </div>
          {/* card one */}
          <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md md:py-2 py-3 px-2">
            <div className=" text-7xl text-stone-200">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins p-8 md:p-2 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 md:px-7 px-3  py-2 items-center justify-center  content-center w-[200px]">
                1st Runners up
              </p>
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7">
                Rs.10,000{" "}
              </p>
            </div>
          </div>
          {/* card one */}
          <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md py-2">
            <div className=" text-7xl text-amber-700">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins md:p-2 p-8 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7 items-center justify-center content-center">
                2nd Runners up
              </p>
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7">
                Rs.5000
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* heavy weight */}
      <div className=" mt-5 flex flex-col justify-center items-center">
        <div>
          <h2 className=" font-krona text-xl text-white justify-center items-center content-center">
            Heavy-weight
          </h2>
        </div>
        {/* giant nut image */}
        <div className="flex flex-col justify-center items-center gap-5 mt-5 py-8">
          <div className="mt-3">
            <img className=" w-40 md:w-80" src="/nut.png" alt="#" />
          </div>
          <div className="flex gap-4 mt-4 justify-center items-center content-center border border-purple-500 rounded-md py-2">
            <div className=" text-7xl text-yellow-400 ml-2">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins md:p-2 p-9 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-2 items-center justify-center content-center">
                Champions
              </p>
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7 w-[200px]">
                Giant Nut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WinningPrizes;
