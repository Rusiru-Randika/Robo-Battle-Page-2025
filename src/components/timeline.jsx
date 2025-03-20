import React from "react";

const desktopEvents = [
  { date: "2024 . 04 . 12", title: "Registration open", x: 5, y: 40 },
  { date: "2024 . 05 . 02", title: "Arena set up", x: 15, y: 27 },
  { date: "2024 . 05 . 14", title: "Workshop", x: 40, y: 65 },
  { date: "2024 . 06 . 04", title: "Registration closing", x: 65, y: 27 },
  { date: "2024 . 06 . 08", title: "Awareness meeting", x: 90, y: 63 },
  { date: "2024 . 06 . 13", title: "Robot battle", x: 102, y: 50 },
];

const mobileEvents = [
  { date: "2024 . 04 . 12", title: "Registration open" },
  { date: "2024 . 05 . 02", title: "Arena set up" },
  { date: "2024 . 05 . 14", title: "Workshop" },
  { date: "2024 . 06 . 04", title: "Registration closing" },
  { date: "2024 . 06 . 08", title: "Awareness meeting" },
  { date: "2024 . 06 . 13", title: "Robot battle" },
];

// Function to parse and compare dates
const parseDate = (dateString) => new Date(dateString.split(" . ").join("-"));

//  mobile events by date
const sortedMobileEvents = mobileEvents.sort(
  (a, b) => parseDate(a.date) - parseDate(b.date)
);

// const Timeline = () => {
//   return (
//     <>
//       <h2 className="text-white text-center text-2xl md:text-3xl font-krona font-bold  pb-2 relative mt-20 md:mt-20">
//         TIMELINE
//         {/* <span className="block w-48 h-1 bg-white absolute left-1/2 transform -translate-x-1/2 bottom-0 mt-18 mb-0"></span> */}
//       </h2>
//       <div className="hidden md:flex items-center justify-center min-h-[80vh] bg-gradient-to-r text-white overflow-hidden px-4 mt-0 pt-0">
//         <div className="relative w-full max-w-6xl">
//           <svg
//             className="absolute top-1/2 transform -translate-y-1/2 w-full h-96"
//             viewBox="0 0 1000 200"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M 0 100 Q 125 0, 250 100 T 500 100 T 750 100 T 1000 100"
//               stroke="rgba(128, 90, 213, 0.5)"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>
//           <div className="relative z-10 flex justify-between items-center w-full h-96">
//             {desktopEvents.map((event, index) => (
//               <div
//                 key={index}
//                 className={`absolute transform -translate-x-1/2 ${
//                   index % 2 === 0 ? "translate-y-6" : "-translate-y-6"
//                 }`}
//                 style={{ left: `${event.x}%`, top: `${event.y}%` }}
//               >
//                 <div className="relative w-8 h-8 bg-pink-500 rounded-full mb-2">
//                   <div className="absolute w-8 h-8 bg-pink-500 rounded-full animate-ping"></div>
//                 </div>
//                 <div className="p-2 rounded-lg text-xs md:text-sm">
//                   <p className="text-xs md:text-sm">{event.date}</p>
//                   <p className="font-bold">{event.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="md:hidden min-h-[80vh] bg-gradient-to-r text-white flex flex-col items-center px-4 py-8">
//         <div className="w-full max-w-lg">
//           {sortedMobileEvents.map((event, index) => (
//             <div
//               key={index}
//               className="relative mb-8 flex flex-col items-center"
//             >
//               <div className="relative w-8 h-8 bg-pink-600 rounded-full mb-2">
//                 <div className="absolute w-8 h-8 bg-pink-600 rounded-full animate-ping"></div>
//               </div>
//               <div className="p-4 bg-gradient-to-r from-slate-950 to-violet-900 text-white rounded-lg text-center w-full">
//                 <p className="text-sm">{event.date}</p>
//                 <p className="font-bold font-poppins">{event.title}</p>
//               </div>
//               {index < sortedMobileEvents.length - 1 && (
//                 <div className="w-1 h-8 bg-pink-600 mt-2"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

export default Timeline;
