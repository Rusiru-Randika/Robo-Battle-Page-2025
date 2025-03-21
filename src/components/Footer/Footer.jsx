import React, { useState } from "react";
import { IoLogoFacebook } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";
import { ImYoutube } from "react-icons/im";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <footer className="footer-distributed relative min-h-[70vh] bg-black">
      <div className="flex flex-wrap justify-between items-center px-2 md:px-16 lg:px-24 py-6 bg-black font-poppins">
        <a
          href="/#"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          Home
        </a>
        <a
          href="/#rules"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          Rules
        </a>
        <a
          href="/#about"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          About
        </a>
        <a
          href="/#prizes"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          Prizes
        </a>
        <a
          href="/#timeline"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          Time Line
        </a>
        <a
          href="/#contact"
          className="text-white text-base md:text-lg hover:text-blue-400 flex-1 text-center"
        >
          Contact
        </a>
      </div>

      {/* Logo section with 3 evenly spaced logos */}
      <div className="flex justify-center items-center gap-8 md:gap-16 lg:gap-24 py-8 bg-black">
        <div className="flex justify-center items-center">
          <img
            src="../../../public/Branding/UniLogo.svg"
            alt="Logo 1"
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="../../../public/Branding/Home-Logo.svg"
            alt="Logo 2"
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="public/club_logo.png"
            alt="Logo 3"
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>
      </div>

      {/* SVG Element */}
      <svg
        className="absolute left-0 bottom-0 h-full w-auto"
        width="141"
        height="628"
        viewBox="0 0 141 628"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M138.5 443.5H140.5V442.672L139.914 442.086L138.5 443.5ZM52 357H50V357.828L50.5858 358.414L52 357ZM41.3333 227C41.3333 232.891 46.109 237.667 52 237.667C57.891 237.667 62.6667 232.891 62.6667 227C62.6667 221.109 57.891 216.333 52 216.333C46.109 216.333 41.3333 221.109 41.3333 227ZM140.5 626.5V443.5H136.5V626.5H140.5ZM139.914 442.086L53.4142 355.586L50.5858 358.414L137.086 444.914L139.914 442.086ZM54 357V227H50V357H54Z"
          fill="#00BBFF"
          fill-opacity="0.2"
        />
        <path
          d="M100.5 630.5V462L9.5 371V56L-41 5.5L-61 289.5"
          stroke="white"
          stroke-opacity="0.2"
          stroke-width="4"
        />
      </svg>

      {/* Connect With Us section */}
      <div className="flex justify-center items-center py-6 bg-black">
        <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-poppins">
          Connect With Us
        </h2>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-8 py-4 bg-black">
        <a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            className="hover:fill-blue-400 transition-colors"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/UOKRobotBattles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            className="hover:fill-blue-400 transition-colors"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            className="hover:fill-blue-400 transition-colors"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      <p className="text-gray-400 text-xs md:text-sm font-normal text-center mb-8 mt-5 md:mb-9">
        © 2025 All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
