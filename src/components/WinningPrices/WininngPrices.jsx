import React from 'react'

const WininngPrices = () => {
  return (
    <div className="px-20 p-5 max-w-screen h-full w-f  min-h-screen py-10 items-center justify-center mt-10">
      <div className=" font-krona text-2xl text-white justify-center items-center content-center flex">

        <h1 className=" font-krona text-2xl text-white justify-center items-center content-center">

          WINNING PRICES
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 mt-10 md:flex-row md:items-center md:justify-between md:content-center">
        {/* light weight */}
        <div className=" py-5">
          <h2 className=" flex flex-col gap-5  font-krona text-xl text-white justify-center items-center content-center ">
            Light-weight
          </h2>
         <div className="flex flex-col gap-5 mt-5">
           {/* card one */}
           <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md py-2">
            <div className=" text-7xl text-yellow-400">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins p-2 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-2 items-center justify-center content-center">
                Champions
              </p>
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-3">
                Rs.20,000 + Giant Nut
              </p>
            </div>
          </div>
          {/* card one */}
          <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md py-2">
            <div className=" text-7xl text-stone-200">
              <GiTrophyCup />
            </div>
            <div className=" text-white font-poppins p-2 flex flex-col gap-1">
              <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7 items-center justify-center content-center">
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
            <div className=" text-white font-poppins p-2 flex flex-col gap-1">
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
        <div className="mt-5 flex flex-col justify-center items-center">
          <div>
            <h2 className=" font-krona text-xl text-white justify-center items-center content-center">
              Havy-weight
            </h2>
          </div>
          {/* giant nut image */}
          <div className="flex flex-col justify-center items-center gap-5 mt-5 py-8">
            <div className="mt-3">
              <img className=" w-40 md:w-60" src="/nut.png" alt="#" />
            </div>
            <div className="flex gap-5 mt-4 justify-center items-center content-center border border-purple-500 rounded-md py-2">
              <div className=" text-7xl text-yellow-400">
                <GiTrophyCup />
              </div>
              <div className=" text-white font-poppins p-2 flex flex-col gap-1">
                <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-2 items-center justify-center content-center">
                  Champions
                </p>
                <p className=" border rounded-full border-purple-500 bg-gradient-to-r from-purple-700 to-fuchsia-950 px-7">
                  Giant Nut
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WininngPrices