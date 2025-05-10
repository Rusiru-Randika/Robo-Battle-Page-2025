import React, { useEffect, useRef } from "react";

export default function About() {
  const textBoxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (textBoxRef.current) {
      observer.observe(textBoxRef.current);
    }

    return () => {
      if (textBoxRef.current) {
        observer.unobserve(textBoxRef.current);
      }
    };
  }, []);

  return (
    <div className="py-20 px-10 text-white">
      <div
        ref={textBoxRef}
        className="max-w-4xl mx-auto bg-[#1A1F39] rounded-3xl p-10 shadow-lg scroll-trigger"
      >
        <h1 className="font-transrobotics text-4xl md:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#6EE7B7] to-[#3B82F6] mb-8">
          What is UOK Robot Battle?
        </h1>
        <p className="font-poppins text-lg text-white mb-8">
          Prepare for an electrifying experience as the Electronics and Computer
          Science Club of the University of Kelaniya proudly presents the second
          edition of <strong>UOK Robot Battles 2K25</strong>. Previously held as
          an intra-university event with lightweight and heavyweight divisions,
          this year’s competition expands its reach. It is now open to
          university students, school students, and independent participants
          through open categories. Building upon the success of its inaugural
          event, this year's competition promises even more thrilling encounters
          and innovative displays of engineering excellence.
        </p>
        <ul className="font-poppins text-lg text-white mb-8 list-disc list-inside hidden sm:block">
          <li>
            <strong>Lightweight Division:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>Eligibility: Open to anyone</li>
              <li>
                Specifications:
                <ul className="list-disc list-inside ml-5">
                  <li>Maximum Weight: 2.5 KG</li>
                  <li>Maximum Dimensions: 25 CM × 25 CM</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Heavyweight Division:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>
                Eligibility: Exclusively for university and school students
              </li>
              <li>
                Specifications:
                <ul className="list-disc list-inside ml-5">
                  <li>Maximum Weight: 15 KG</li>
                  <li>Maximum Dimensions: 45 CM × 45 CM</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p className="font-poppins text-lg text-white mb-8 hidden sm:block">
          Showcase your creativity and sharpen your technical skills. Experience
          the thrill of real-time robotic battles. Compete, collaborate, and
          connect with a vibrant community of innovators.
        </p>
      </div>
    </div>
  );
}
