import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import images
import person1 from "../../../public/People/person1.png";

const teamMembers = [
  {
    role: "Project Manager",
    name: "Supun Tharaka",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
  {
    role: "Post",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
  {
    role: "Post",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
  {
    role: "Post",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
  {
    role: "Post",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
  {
    role: "Post",
    name: "L H G Gunawardhana",
    phone: "+94 76 786 3340",
    email: "himalgeethanjana18@gmail.com",
    photo: person1,
  },
];

const TeamCard = ({ member, index }) => (
  <div className={`text-white py-6 flex`}>
    {/* background */}
    <div className="w-[146.29px] h-[263.62px] z-10 bg-gradient-to-b from-[#D9D9D9] via-[#62B8EE] to-[#009DFF] rounded-[48px_0px]"></div>
    {/* details */}
    <div className="pl-[100px] flex-col justify-center py-7">
      {/* position */}
      <div className=" flex justify-center items-center w-[161px] h-[30px] bg-[#0066FF] rounded-[32px_0px]">
        <h3 className="font-bold ">{member.role}</h3>
      </div>
      <div className=" inline-grid ">
        <h1 className="font-poppins text-4xl">{member.name}</h1>
        <div className="flex items-center">
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
          <p className="inline-flex px-4">{member.phone}</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-500 size-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
          <p className="inline-flex px-4">{member.email}</p>
        </div>
      </div>
    </div>
    <img
      src={member.photo}
      alt={member.name}
      className="absolute w-80 z-20 translate-y-[-55px] translate-x-[-30px]"
    />
  </div>
);

const Team = () => (
  <div className="md:mb-20 md:mt-[-50px] py-20">
    <h1 className="py-10 md: font-transrobotics text-3xl md:text-4xl justify-center items-center content-center px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
      CONTACT US
    </h1>
    <Swiper
      className="overflow-visible"
      spaceBetween={100}
      slidesPerView={window.innerWidth < 760 ? 1 : 2} // Adjust for responsiveness
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={2800} // Adjust speed (Lower = Faster)
      freeMode={true} // Makes it slide smoothly
      modules={[Autoplay]}
    >
      {teamMembers.map((member, index) => (
        <SwiperSlide key={member.name}>
          <TeamCard member={member} index={index} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Team;
