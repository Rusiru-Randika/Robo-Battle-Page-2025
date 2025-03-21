import React from "react";
const fileLocation = "../../../public/People/"
const teamMembers = [
  {
    role: "Project Manager",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: "person1.png"
  },
  {
    role: "Project Manager",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: "person1.png"
  },
  {
    role: "Project Manager",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: "person1.png"
  },
];





const TeamCard = ({ member, className, index }) => (
  <div
    className={`text-white overflow ${className}`}
  >
    <div className=" z-10 flex justify-center items-center w-[161px] h-[30px] bg-[#0066FF] rounded-[32px_0px]">
      <h3 className="m-auto mb-2 text-sm font-bold ">{member.role}</h3>
    </div>


    <div className="z-20 inline-grid text-sm">
      <p className="mb-2 ">{member.name}</p>
      {member.description && (
        <p className="mb-2 text-sm opacity-90">{member.description}</p>
      )}
      <div className="flex  items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 size-6">
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
        </svg>
        <p className="mb-1 opacity-60 inline-flex px-4">
          {member.phone}
        </p>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500 size-6">
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <p className="opacity-60 inline-flex px-4">
          {member.email}
        </p>
      </div>
    </div>

    {/* image and background */}
    <div className="relative w-auto h-40">
      <img src={`${fileLocation}${member.photo}`} alt={member.name}  className="w-[280px] h-auto z-20  absolute" />
      <div className="w-[146.29px] h-[263.62px] bg-gradient-to-b from-[#D9D9D9] via-[#62B8EE] to-[#009DFF] rounded-[48px_0px]"></div>
    </div>

  </div>

);

const Team = () => (
  <div className=" md:mb-20 md:mt-[-50px]  py-20">
    <h1 className="py-10 font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
      CONTACT US
    </h1>


    <div className="flex flex-col gap-6 p-6 md:flex-row md:justify-center ">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={member.name}
          member={member}
          index={index}
          className={index === 1 ? "md:w-1/3" : "md:w-1/4"}
        />
      ))}
    </div>
  </div>
);

export default Team;





