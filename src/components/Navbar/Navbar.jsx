import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/Branding/logo.svg"; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close menu on mobile when a link is clicked
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#00000066] shadow-[0px_4px_4px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] font-transrobotics">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden center sm:flex sm:items-center sm:ml-6 sm:space-x-4">
            {["home", "rules", "about", "timeline", "prizes", "contact"].map(
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
            <Link
              to="/register"
              className="bg-gradient-to-r text-white from-sky-500 to-sky-700 rounded-[54px] px-4 py-2 hover:bg-gradient-to-r hover:from-white hover:to-sky-400 hover:text-blue-600"
            >
              <div className="text-center text-xl font-normal">Register</div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Backdrop Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar - Mobile */}
      <div
        className={`fixed top-0 right-0 z-50 w-full h-full p-6 bg-black transform transition-transform duration-300 shadow-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <button onClick={toggleMenu}>
            <FiX className="w-8 h-8 text-white" />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 text-lg font-semibold text-white">
          {["home", "rules", "about", "timeline", "prizes", "contact"].map(
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
          <Link
            to="/register"
            onClick={toggleMenu}
            className="w-full bg-gradient-to-r from-sky-500 to-sky-700 text-white rounded-full px-6 py-3 text-center shadow-lg hover:from-white hover:to-sky-400 hover:text-blue-600 transition duration-300"
          >
            Register
          </Link>
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
