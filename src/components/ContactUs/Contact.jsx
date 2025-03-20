import React from "react";
import kasunsir from "../../assets/Kasun Sir.jpg";

const teamMembers = [
  {
    role: "Project Manager",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
  },
  {
    role: "Senior Treasurer",
    name: "Dr Kasun Piyumal",
    phone: "+94 71 200 8778",
    email: "Kasunp@kln.ac.lk",
    photo: kasunsir,
    description:
      "Lecturer, Department of Physics and Electronics, Faculty of Science, University of Kelaniya",
  },
  {
    role: " President",
    name: "Chamith Dilshan",
    phone: "+94 78 256 3766",
    email: "dilshankmc@gmail.com",
  },
];

const TeamCard = ({ member, className, index }) => (
  <div
    className={`text-white bg-gradient-to-b from-purple-950 to-indigo-950 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center ${className}`}
  >
    <img
      src={member.photo}
      alt={member.name}
      className="w-24 h-24 mb-4 rounded-full"
    />
    <h3 className="mb-2 text-3xl font-bold ">{member.role}</h3>
    <p className="mb-2 ">{member.name}</p>
    {member.description && (
      <p className="mb-2 text-sm opacity-90">{member.description}</p>
    )}
    <div className="text-sm">
      {index !== 1 && <p className="mb-1 opacity-60">📞 {member.phone}</p>}
      <p className="opacity-60">📧 {member.email}</p>
    </div>
  </div>
);

const Team = () => (
  <div className=" md:mb-20 md:mt-[-50px] mb-10 -mt-10">
    <h2 className="relative pt-20 pb-2 mt-5 mb-6 text-3xl font-bold text-center text-white md:text-4xl font-krona md:mt-20">
      CONTACT US
    </h2>
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
