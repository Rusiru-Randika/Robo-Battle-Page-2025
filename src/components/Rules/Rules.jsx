import React from "react";

const Rules = () => {
  return (
    <div className="py-20 px-10 text-white">
      <div className="max-w-4xl mx-auto bg-[#1A1F39] rounded-3xl p-10 shadow-lg">
        <h1 className="font-transrobotics text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#6EE7B7] to-[#3B82F6] mb-8">
          Rules and Regulations
        </h1>
        <div className="font-poppins text-lg text-white space-y-6">
          <h2 className="text-2xl font-bold">Team Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Each participant can only join one team.</li>
            <li>A team must consist of a maximum of 5 members.</li>
            <li>Must have a unique name and a team leader.</li>
            <li>A team can only compete in one category.</li>
          </ul>
          <h3 className="text-xl font-semibold">Heavy Weight</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Team members must be affiliated with the same university or
              school.
            </li>
          </ul>
          <h3 className="text-xl font-semibold">Light Weight</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Team members must be Sri Lankan nationals.</li>
          </ul>

          <h2 className="text-2xl font-bold">Robot Specification</h2>
          <h3 className="text-xl font-semibold">General</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Chassis must be custom-made.</li>
            <li>Power supply must be internal.</li>
            <li>
              The maximum voltage between any pair of points cannot exceed 24 V.
            </li>
            <li>
              Immobilized electrolytes can be used (nickel-cadmium, lithium-ion,
              lithium polymer, and sealed lead-acid gel cells).
            </li>
            <li>Internal combustion engines are not allowed.</li>
            <li>
              Participants are strongly advised to bring fully charged batteries
              and spares.
            </li>
            <li>Should have an indicated START/STOP switch.</li>
            <li>
              Weaponized robots must include a Master Kill Switch or
              automatically shut down upon signal or tether loss.
            </li>
            <li>Must be remotely controllable once powered on.</li>
            <li>
              Must not pose any hazard to judges, spectators, or other teams.
            </li>
            <li>Damage must be limited to the opposing robot.</li>
            <li>
              Robots obstructing the audience's view will be disqualified.
            </li>
            <li>
              All robots will undergo a mandatory technical inspection before
              combat.
            </li>
            <li>
              Must be equipped to prevent radio frequency conflicts via digital
              transmitters or tethers.
            </li>
            <li>
              Full disclosure of operating principles is required; failure may
              lead to disqualification.
            </li>
            <li>
              No weapons with electrical discharges, liquids (except water),
              explosives, projectiles, lights directed to entrants, or
              entanglement tools are allowed.
            </li>
            <li>
              Sharp edges of the weapons must be covered outside the arena.
            </li>
          </ul>
          <h3 className="text-xl font-semibold">Heavy Weight</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weight must not exceed 15kg.</li>
            <li>Dimensions must be within 45 cm × 45 cm (L x W).</li>
            <li>Allowed to expand up to 60cm once the battle starts.</li>
          </ul>
          <h3 className="text-xl font-semibold">Light Weight</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Weight must not exceed 2.5kg.</li>
            <li>Dimensions must be within 25 cm × 25 cm (L x W).</li>
            <li>Allowed to expand up to 35cm once the battle starts.</li>
          </ul>

          <h2 className="text-2xl font-bold">Safety Requirements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Entrants must pass a technical and safety inspection.</li>
            <li>No fluid/gas leaks allowed.</li>
            <li>Operators must keep their bodies out of the combat zone.</li>
            <li>
              Sharp edges of the weapons must be covered outside the arena.
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <button className="font-transrobotics text-2xl px-8 py-4 bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] rounded-[54px] hover:from-[#3B82F6] hover:to-[#6EE7B7] transition-all duration-300">
            <a href="/rules">Read More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rules;
