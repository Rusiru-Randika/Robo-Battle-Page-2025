import React from "react";

// StartCap Component
export function StartCap() {
  return (
    <div className="flex right-4 relative w-full md:w-auto">
      <svg
        className="hidden md:block" // Hide on mobile
        width="54"
        height="213"
        viewBox="0 0 54 213"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.333333 27C0.333333 41.7276 12.2724 53.6667 27 53.6667C41.7276 53.6667 53.6667 41.7276 53.6667 27C53.6667 12.2724 41.7276 0.333334 27 0.333333C12.2724 0.333333 0.333334 12.2724 0.333333 27ZM22 27L22 213L32 213L32 27L22 27Z"
          fill="white"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

// MiddleComponent (Repeatable)
export function MiddleComponent({ title, description, date, children }) {
  return (
    <div className="relative w-full">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-auto">
          <svg
            className="hidden md:block" // Hide on mobile
            width="936"
            height="491"
            viewBox="0 0 936 491"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_246_57)">
              <path
                d="M9 5V0H4V5H9ZM178 5L181.918 1.89404L180.417 0H178V5ZM210.5 46L206.582 49.106L208.083 51H210.5V46ZM878.333 46C878.333 60.7276 890.272 72.6667 905 72.6667C919.728 72.6667 931.667 60.7276 931.667 46C931.667 31.2724 919.728 19.3333 905 19.3333C890.272 19.3333 878.333 31.2724 878.333 46ZM4 489.5C4 492.261 6.23858 494.5 9 494.5C11.7614 494.5 14 492.261 14 489.5H4ZM9 10H178V0H9V10ZM174.082 8.10596L206.582 49.106L214.418 42.894L181.918 1.89404L174.082 8.10596ZM210.5 51H905V41H210.5V51ZM4 5V489.5H14V5H4Z"
                fill="white"
                stroke="white"
                strokeWidth="1"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_246_57"
                x="0"
                y="0"
                width="935.667"
                height="502.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_246_57"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_246_57"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h1 className="w-full translate-y-4 md:translate-y-8 px-3 font-poppins text-center md:text-left text-base md:text-lg">
          {date}
        </h1>
      </div>
      <div className="absolute top-10 md:top-20 w-full flex justify-center">
        <div className="border p-3 md:p-10 rounded-3xl bg-[rgba(217,217,217,0.2)] backdrop-blur-sm w-11/12 md:w-4/5 h-auto">
          <h2
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            className="font-bebasneue pl-3 md:pl-7 text-white text-base md:text-2xl"
          >
            {title}
          </h2>
          <p className="font-poppins pl-3 md:pl-7 text-white text-sm md:text-base">
            {description}
          </p>
          <div className="flex justify-center md:justify-start">{children}</div>
        </div>
      </div>
    </div>
  );
}

// EndCap Component
export function EndCap() {
  return (
    <div className="flex right-4 relative w-full md:w-auto bottom-2">
      <svg
        className="hidden md:block" // Hide on mobile
        width="173"
        height="312"
        viewBox="0 0 173 312"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 10L29.6786 5.77804L22 0.906304L22 10L27 10ZM0.333345 285C0.333346 299.728 12.2724 311.667 27 311.667C41.7276 311.667 53.6667 299.728 53.6667 285C53.6667 270.272 41.7276 258.333 27 258.333C12.2724 258.333 0.333345 270.272 0.333345 285ZM146 85.5L151 85.5L151 82.7508L148.679 81.278L146 85.5ZM119.333 201.5C119.333 216.228 131.272 228.167 146 228.167C160.728 228.167 172.667 216.228 172.667 201.5C172.667 186.772 160.728 174.833 146 174.833C131.272 174.833 119.333 186.772 119.333 201.5ZM22 10L22 285L32 285L32 10L22 10ZM24.3214 14.222L143.321 89.722L148.679 81.278L29.6786 5.77804L24.3214 14.222ZM141 85.5C141 104.833 141 133.833 141 158C141 170.083 141 180.958 141 188.812C141 192.74 141 195.911 141 198.102C141 199.197 141 200.046 141 200.622C141 200.91 141 201.129 141 201.277C141 201.351 141 201.406 141 201.444C141 201.463 141 201.476 141 201.486C141 201.492 141 201.493 141 201.496C141 201.498 141 201.499 141 201.499C141 201.5 141 201.5 146 201.5C151 201.5 151 201.5 151 201.499C151 201.499 151 201.498 151 201.496C151 201.494 151 201.491 151 201.486C151 201.476 151 201.463 151 201.444C151 201.406 151 201.351 151 201.277C151 201.129 151 200.91 151 200.622C151 200.046 151 199.197 151 198.102C151 195.911 151 192.74 151 188.812C151 180.958 151 170.083 151 158C151 133.833 151 104.833 151 85.5L141 85.5Z"
          fill="white"
          stroke="white"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

// Timeline Component (Default Export)
export default function Timeline() {
  return (
    <div className="pt-10 md:pt-20">
      <h1 className="font-transrobotics text-2xl md:text-4xl justify-center items-center content-center px-5 md:px-10 flex text-center md:text-start md:flex text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
        Timeline
      </h1>
      <div className="text-white relative flex-col px-5 md:px-10 h-auto">
        <StartCap />
        <MiddleComponent
          title="Registration closes"
          date="2024 June 12"
          description="Registration deadline for UOK Robot battle 2025"
        >
          <button className="font-transrobotics text-lg md:text-3xl justify-center items-center content-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#139DFF] to-[#0B5E99] rounded-[54px]">
            <a href="Registration">Register today</a>
          </button>
        </MiddleComponent>
        <MiddleComponent
          title="Event012"
          date="2024 June 24"
          description="Awareness session"
        ></MiddleComponent>
        <EndCap />
      </div>
    </div>
  );
}
