import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/Branding/logo.svg"; // Adjust path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#00000066] shadow-[0px_4px_4px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] font-transrobotics">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-12 h-12 cursor-pointer"
              onClick={() => (window.location.href = "/#home")} // Navigate to home
            />
          </div>

          {/* Desktop Nav Links */}
          {/* Visible only on screens larger than the 'sm' breakpoint (640px) */}
          <div className="hidden center sm:flex sm:items-center sm:ml-6 sm:space-x-4">
            {["home", "about", "rules", "timeline", "prizes", "contact"].map(
              (section) => (
                <NavLink
                  key={section}
                  to={`/#${section}`}
                  activeLink={activeLink}
                  onClick={() => handleLinkClick(`/#${section}`)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </NavLink>
              )
            )}
          </div>

          {/* Register Button */}
          <div className="relative right-0 flex items-center">
            <a
              href="https://forms.google.com/your-form-url" // Replace with your actual Google Form URL
              className="bg-gradient-to-r text-white from-sky-500 to-sky-700 rounded-[54px] px-4 py-2 hover:bg-gradient-to-r hover:from-white hover:to-sky-400 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-center text-xl font-normal">Register</div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          {/* Visible only on screens smaller than the 'sm' breakpoint (640px) */}
          <div className="sm:hidden">
            <button
              className="p-2 text-white rounded-md hover:text-blue-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-8 h-8" />
              ) : (
                <FiMenu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {/* Visible only on screens smaller than the 'sm' breakpoint (640px) */}
      <div
        className={`fixed inset-0 z-50 w-full min-h-screen pt-6 bg-[#020230] transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex items-center justify-between px-6">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 cursor-pointer"
            onClick={() => {
              toggleMenu();
              window.location.href = "/#home"; // Navigate to home
            }}
          />
          <button onClick={toggleMenu}>
            <FiX className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center p-6 space-y-4 text-lg font-semibold text-white">
          {["home", "about", "rules", "timeline", "prizes", "contact"].map(
            (section) => (
              <NavLink
                key={section}
                to={`/#${section}`}
                activeLink={activeLink}
                onClick={() => handleLinkClick(`/#${section}`)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            )
          )}
          <a
            href="https://forms.google.com/your-form-url" // Replace with your actual Google Form URL
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-full px-6 py-3 text-center shadow-lg hover:from-white hover:to-sky-400 hover:text-blue-600 transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  );
};

// NavLink Component
const NavLink = ({ to, children, activeLink, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const sectionId = to.replace("/#", "");
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      navigate(to);
    }
    onClick();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`w-full px-4 py-2 text-xl font-medium text-white rounded-full transition duration-200 hover:text-[#23C4FF] ${
        activeLink === to ? "text-[#23C4FF]" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
