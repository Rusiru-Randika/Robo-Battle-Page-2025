import React from "react";

const Rules = () => {
  return (
    <div className="py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto bg-[#1A1F39] rounded-3xl p-8 shadow-lg">
        <h1 className="font-transrobotics text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#6EE7B7] to-[#3B82F6] mb-6">
          Rules and Regulations
        </h1>
        <div className="font-poppins text-base md:text-lg leading-tight text-white space-y-4">
          <h2 className="text-2xl font-bold">Team Requirements</h2>
          <ul className="list-disc list-inside ">
            <li>Each participant can only join one team.</li>
            <li>A team must consist of a maximum of 5 members.</li>
            <li>Must have a unique name and a team leader.</li>
            <li>A team can only compete in one category.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">Heavy Weight</h3>
          <ul className="list-disc list-inside ">
            <li>
              Team members must be affiliated with the same university or
              school.
            </li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">Light Weight</h3>
          <ul className="list-disc list-inside ">
            <li>Team members must be Sri Lankan nationals.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">Robot Specification</h2>
          <h3 className="text-xl font-semibold pt-2 md:block hidden">
            General
          </h3>
          <ul className="list-disc list-inside md:block hidden">
            <li>Chassis must be custom-made.</li>
            <li>Power supply must be internal.</li>
            <li>
              The maximum voltage between any pair of points cannot exceed 24 V.
            </li>
            <li>
              Immobilized electrolytes can be used (e.g., lithium-ion, sealed
              lead-acid).
            </li>
            <li>Internal combustion engines are not allowed.</li>
            <li>
              Participants should bring fully charged batteries and spares.
            </li>
            <li>Should have an indicated START/STOP switch.</li>
            <li>
              Weaponized robots must have a Master Kill Switch or auto shutdown.
            </li>
            <li>Must be remotely controllable once powered on.</li>
            <li>Must not pose hazard to others.</li>
            <li>Damage must be limited to the opposing robot.</li>
            <li>Robots obstructing audience view will be disqualified.</li>
            <li>All robots must pass technical inspection before combat.</li>
            <li>Must prevent radio frequency conflicts.</li>
            <li>Full disclosure of operating principles is required.</li>
            <li>
              No weapons using electricity, liquids, explosives, projectiles,
              lasers, or entanglers.
            </li>
            <li>Sharp weapon edges must be covered outside the arena.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">Heavy Weight</h3>
          <ul className="list-disc list-inside ">
            <li>Weight must not exceed 15kg.</li>
            <li>Dimensions within 45 cm × 45 cm (L x W).</li>
            <li>Can expand to 60cm after battle starts.</li>
          </ul>

          <h3 className="text-xl font-semibold pt-2">Light Weight</h3>
          <ul className="list-disc list-inside ">
            <li>Weight must not exceed 2.5kg.</li>
            <li>Dimensions within 25 cm × 25 cm (L x W).</li>
            <li>Can expand to 35cm after battle starts.</li>
          </ul>

          <h2 className="text-2xl font-bold pt-4">Safety Requirements</h2>
          <ul className="list-disc list-inside ">
            <li>Entrants must pass safety and technical inspections.</li>
            <li>No fluid or gas leaks allowed.</li>
            <li>Operators must avoid entering the combat zone.</li>
            <li>Sharp edges must be covered outside the arena.</li>
          </ul>
        </div>

        <div className="flex justify-center mt-8">
          <button className="font-transrobotics text-xl px-6 py-3 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] rounded-[54px] hover:from-[#3B82F6] hover:to-[#6EE7B7] transition-all duration-300">
            <a
              href="https://drive.google.com/file/d/1rTUN0DA0Xbr2zOjoA7ALjxlJ-97MV1mB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
