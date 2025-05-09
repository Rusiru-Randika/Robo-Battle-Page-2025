import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import Person0 from "../../../public/People/TR.png"; // Updated path
import Person1 from "../../../public/People/PM1.png";
import Person2 from "../../../public/People/PM2.png"; // Updated path
import Person3 from "../../../public/People/PM3.png"; // Updated path
import Person4 from "../../../public/People/ER1.png"; // Updated path
import Person5 from "../../../public/People/ER2.png"; // Updated path

const teamMembers = [
  {
    role: "Senior Treasurer",
    name: "Dr Kasun Piyumal",
    phone: "", // Removed phone number
    email: "kasunp@kln.ac.lk",
    photo: Person0,
  },
  {
    role: "Project Manager",
    name: "Supun Tharaka",
    phone: "+94 77 109 2426",
    email: "tharaka-ec21028@stu.kln.ac.lk",
    photo: Person1,
  },
  {
    role: "Project Manager",
    name: "Maneesha Gunarathna",
    phone: "+94 77 109 2426",
    email: "gunarat-ec21026@stu.kln.ac.lk",
    photo: Person2,
  },
  {
    role: "Project Manager",
    name: "Kavindu Pabasara",
    phone: "+94 71 866 9299",
    email: "bandara-ec21031@stu.kln.ac.lk",
    photo: Person3,
  },
  {
    role: "ER Coordinator",
    name: "D.R.R.C.Dasanayake",
    phone: "+94 70 494 9802",
    email: "dasanay-ec21074@stu.kln.ac.lk",
    photo: Person4,
  },
  {
    role: "ER Coordinator",
    name: "A.P.V.P Rajarathne ",
    phone: "+94 71 076 9883",
    email: "rajarat-ec21009@stu.kln.ac.lk",
    photo: Person5,
  },
];

const TeamCard = ({ member, index }) => (
  <div className="text-white flex flex-col items-center font-bebasneue bg-gradient-to-b from-[#0A0F29] to-[#0A0F29] rounded-lg shadow-lg p-4 scroll-animate hover:scale-105 transition-transform duration-300">
    {/* Member Photo */}
    <div className="relative w-32 h-32 flex items-center justify-center">
      <img
        src={member.photo}
        alt={member.name}
        className="w-full h-full object-cover rounded-full"
      />
    </div>

    {/* Content */}
    <div className="flex flex-col items-center text-center gap-2 mt-4">
      {/* Position Badge */}
      <div className="w-auto px-4 py-1 bg-[#0066FF] rounded-full">
        <h3 className="font-bold text-sm">{member.role}</h3>
      </div>

      {/* Name */}
      <h1 className="text-lg font-bold">{member.name}</h1>

      {/* Phone */}
      {member.phone && (
        <div className="flex items-center gap-2 text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500 w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
              clipRule="evenodd"
            />
          </svg>
          <a href={`tel:${member.phone}`} className="hover:underline">
            {member.phone}
          </a>
        </div>
      )}

      {/* Email */}
      <div className="flex items-center gap-2 text-base">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-500 w-4 h-4"
        >
          <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
          <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
        </svg>
        <a
          href={`mailto:${member.email}`}
          className="font-poppins lowercase text-lg font-bold hover:underline"
        >
          {member.email}
        </a>
      </div>
    </div>
  </div>
);

const Team = () => (
  <div className="md:mb-12 md:mt-[50px] py-5 px-4 md:px-10 flex flex-col items-center justify-center">
    <h1 className="py-10 font-transrobotics text-3xl md:text-4xl content-center px-10 flex md:text-start text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] scroll-animate hover:scale-105 transition-transform duration-300">
      CONTACT US
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {teamMembers.map((member, index) => (
        <TeamCard
          key={`${member.name}-${index}`}
          member={member}
          index={index}
        />
      ))}
    </div>
  </div>
);

export default Team;
