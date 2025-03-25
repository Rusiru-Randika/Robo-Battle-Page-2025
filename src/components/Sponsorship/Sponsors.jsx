import React from "react";

const fileLocation = "/public/SponsorsLogo/";
const sponsors = [
  {
    id: 1,
    name: "Sponsor A",
    logo: "sponsor-logo1.png",
    link: "https://sponsorA.com",
  },
  {
    id: 2,
    name: "Sponsor B",
    logo: "sponsor-logo1.png",
    link: "https://sponsorB.com",
  },
  {
    id: 3,
    name: "Sponsor C",
    logo: "sponsor-logo1.png",
    link: "https://sponsorC.com",
  },
  {
    id: 4,
    name: "Sponsor D",
    logo: "sponsor-logo1.png",
    link: "https://sponsorD.com",
  },
];

const SponsorsSection = () => {
  return (
    <section className="pt-12 ">
      <div className="text-white container mx-auto text-center">
        <h1 className=" font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
          OUR SPONSORS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 shadow rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={`${fileLocation}${sponsor.logo}`}
                alt={sponsor.name}
                className="h-30 "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
