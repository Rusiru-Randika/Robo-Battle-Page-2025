import React from "react";

const events = [
  {
    date: "2024 June 12",
    title: "REGISTRATION OFFICIALLY OPEN",
    description:
      "Registrations for UOK ROBOT BATTLE 2025 officially open on the 2025 June 12",
    button: "Register",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    date: "2025 July 10",
    title: "WORKSHOP DAY",
    description:
      "A special robotics workshop will be held at UOK on 2025 July 10",
    button: "Learn More",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    date: "2025 August 01",
    title: "SUBMISSION DEADLINE",
    description:
      "All participants must submit their design reports before 2025 August 01",
    button: "Submit Now",
    buttonColor: "bg-yellow-500 hover:bg-yellow-600 text-black",
  },
  {
    date: "2025 August 15",
    title: "TECHNICAL INSPECTION",
    description:
      "Robot inspection and qualification will be held on 2025 August 15",
    button: "View Rules",
    buttonColor: "bg-red-500 hover:bg-red-600",
  },
  {
    date: "2025 August 20",
    title: "FINAL BATTLE",
    description:
      "The final competition will take place on 2025 August 20 at the UOK Main Hall",
    button: "See Details",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];

export default function Timeline() {
  return (
    <div className="pt-10 md:pt-20 relative min-h-screen bg-[#020230]">
      {/* Heading */}
      <h1 className="font-transrobotics text-2xl md:text-4xl justify-center items-center px-5 md:px-10 flex text-center md:text-start text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        Timeline
      </h1>

      {/* Timeline Container */}
      <div className="relative flex flex-col items-center mt-10 px-5 md:px-10">
        {/* Vertical Line */}
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-[4px] bg-white z-0" />

        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center w-full z-10 my-10"
          >
            {/* Left side content */}
            {index % 2 === 0 ? (
              <>
                {/* Date */}
                <div className="w-1/3 flex justify-end">
                  <p className="font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-sm md:text-base">
                    {event.date}
                  </p>
                </div>

                {/* Node */}
                <TimelineNode />

                {/* Box */}
                <div className="w-1/3 flex justify-start">
                  <TimelineCard event={event} />
                </div>
              </>
            ) : (
              <>
                {/* Box */}
                <div className="w-1/3 flex justify-end">
                  <TimelineCard event={event} />
                </div>

                {/* Node */}
                <TimelineNode />

                {/* Date */}
                <div className="w-1/3 flex justify-start">
                  <p className="font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-sm md:text-base">
                    {event.date}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Timeline Dot Node SVG
function TimelineNode() {
  return (
    <div className="relative w-[80px] h-[80px] flex-shrink-0 flex items-center justify-center z-10">
      <svg
        width="80"
        height="80"
        viewBox="0 0 266 257"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M103.858 16.6927C121.981 6.62263 144.019 6.62263 162.142 16.6927L217.324 47.354C236.369 57.9368 248.181 78.0129 248.181 99.8014V157.199C248.181 178.987 236.369 199.063 217.324 209.646L162.142 240.307C144.019 250.377 121.981 250.377 103.858 240.307L48.6764 209.646C29.6305 199.063 17.8186 178.987 17.8186 157.199V99.8014C17.8186 78.0129 29.6305 57.9368 48.6764 47.354L103.858 16.6927Z"
          fill="#D9D9D9"
        />
        <ellipse cx="129.5" cy="128.5" rx="68.5" ry="74" fill="#020101" />
      </svg>
    </div>
  );
}

// Timeline Card Content
function TimelineCard({ event }) {
  return (
    <div className="bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] text-white rounded-lg p-3.5 md:p-6 max-w-md shadow-lg">
      <h2 className="text-sm md:text-lg font-bold mb-2 font-transrobotics text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
        {event.title}
      </h2>
      <p className="text-xs md:text-sm mb-3 font-poppins">
        {event.description}
      </p>
      <button
        className={`${event.buttonColor} font-poppins font-bold text-white text-sm px-3 py-2 rounded transition`}
      >
        {event.button}
      </button>
    </div>
  );
}
