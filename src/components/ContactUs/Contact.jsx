import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import Person1 from "../../../public/People/PM1.png"; // Updated path
import Person2 from "../../../public/People/PM2.png";

const teamMembers = [
  {
    role: "Senior Treasurer",
    name: "Dr Kasun Piyumal",
    phone: "", // Removed phone number
    email: "Kasunp@kln.ac.lk",
    photo: Person1,
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
    photo: Person1,
  },
  {
    role: "Project Manager",
    name: "Kavindu Pabasara",
    phone: "+94 71 866 9299",
    email: "bandara-ec21031@stu.kln.ac.lk",
    photo: Person2,
  },
  {
    role: "ER Coordinator",
    name: "D.R.R.C.Dasanayake",
    phone: "+94 70 494 9802",
    email: "dasanay-ec21074@stu.kln.ac.lk",
    photo: Person1,
  },
  {
    role: "ER Coordinator",
    name: "A.P.V.P Rajarathne ",
    phone: "+94 71 076 9883",
    email: "rajarat-ec21009@stu.kln.ac.lk ",
    photo: Person1,
  },
];

const TeamCard = ({ member, index }) => (
  <div className="pt-40 text-white flex flex-col lg:flex-row md:justify-center font-bebasneue">
    {/* Image and Background */}
    <div className="relative md:min-w-[250px] min-h-[300px] flex items-center justify-center  md:block w-screen md:w-auto">
      {/* Background shape */}
      <div className="absolute md:left-0 -translate-y-[20px] -translate-x-[45px] md:translate-x-0 w-[146.29px] h-[269.62px] z-10 bg-gradient-to-b from-[#D9D9D9] via-[#62B8EE] to-[#009DFF] rounded-[48px_0px]"></div>

      {/* Member Photo */}
      <img
        src={member.photo}
        alt={member.name}
        className="absolute md:left-0 min-w-80 h-80 z-20 -translate-y-[45px] -translate-x-[-10px] md:-translate-x-[30px] md:-translate-y-[70px]" 
      />
    </div>

    {/* Content */}
    <div className="flex flex-col  md:items-start items-center gap-6  max-w-[90vw] min-w-[235px]">
      {/* Position Badge */}
      <div className="flex justify-center items-center w-[161px] h-[30px] bg-[#0066FF] rounded-[32px_0px]">
        <h3 className="font-bold">{member.role}</h3>
      </div>

      {/* Name and Contact Info */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        {/* Name */}
        <h1 className="text-2xl md:text-4xl">{member.name}</h1>

        {/* Phone */}
        {member.phone && ( // Only render if phone number exists
          <div className="flex items-center gap-2">
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-500 size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="px-2">{member.phone}</p>
          </div>
        )}

        {/* Email */}
        <div className="flex items-center gap-2">
          {/* Email Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500 size-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <p className="px-2">{member.email}</p>
        </div>
      </div>
    </div>
  </div>
);

const Team = () => (
  <div className="md:mb-12 md:mt-[50px] py-20 px-4 md:px-10 flex flex-col items-center justify-center ">
    <h1 className="py-10 font-transrobotics text-3xl md:text-4xl  content-center px-10 flex md:text-start text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
      CONTACT US
    </h1>
    <Swiper
      className="w-full mx-auto"
      spaceBetween={75}
      slidesPerView={1}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      }}
      loop={true} // Enable continuous looping
      autoplay={{
        delay: 5000, // No delay between slides
        disableOnInteraction: false, // Keep autoplay active even after interaction
        pauseOnMouseEnter: false, // Prevent pausing on mouse hover
      }}
      speed={2800} // Adjust speed (Lower = Faster)
      freeMode={true} // Makes it slide smoothly
      modules={[Autoplay]}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={`${member.name}-${index}`}>
          <div className="">
            <TeamCard member={member} index={index} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Team;
