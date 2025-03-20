import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/Logo.svg"; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#00000066] shadow-[0px_4px_4px_#00000040] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] font-transrobotics">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {" "}
          {/* Adjusted height */}
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>
          {/* Nav Links - Desktop */}
          <div className="hidden center sm:flex sm:items-center sm:ml-6 sm:space-x-4">
            <NavLink
              to="/#home"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#home")}
            >
              Home
            </NavLink>
            <NavLink
              to="/#rules"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#rules")}
            >
              Rules
            </NavLink>
            <NavLink
              to="/#about"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#about")}
            >
              About
            </NavLink>
            <NavLink
              to="/#timeline"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#timeline")}
            >
              Timeline
            </NavLink>
            <NavLink
              to="/#prizes"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#prizes")}
            >
              Prizes
            </NavLink>
            <NavLink
              to="/#contact"
              activeLink={activeLink}
              onClick={() => handleLinkClick("/#contact")}
            >
              Contact
            </NavLink>
          </div>
          <div className="relative right-0 flex items-center">
            <Link
              to="/register"
              className="bg-gradient-to-r text-white from-sky-500 to-sky-700 rounded-[54px] px-4 py-2 hover:bg-gradient-to-r hover:from-white hover:to-sky-400  hover:text-blue-600"
            >
              <div className="text-center  text-xl font-normal">Register</div>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              className="p-2 text-purple-300 rounded-md hover:text-violet-500 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar - Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Content */}
          <div className="w-full h-full bg-purple-600 p-4 space-y-4 transition-transform duration-300 ease-in-out transform backdrop-filter backdrop-blur-lg shadow-lg">
            {/* Close Button */}
            <div className="flex items-center justify-between">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <FiX className="w-10 h-10" />
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className="flex flex-col items-start space-y-4"
              onClick={toggleMenu}
            >
              <NavLink
                to="/#home"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#home")}
              >
                Home
              </NavLink>
              <NavLink
                to="/#rules"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#rules")}
              >
                Rules
              </NavLink>
              <NavLink
                to="/#about"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#about")}
              >
                About
              </NavLink>
              <NavLink
                to="/#timeline"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#timeline")}
              >
                Timeline
              </NavLink>
              <NavLink
                to="/#prizes"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#prizes")}
              >
                Prizes
              </NavLink>
              <NavLink
                to="/#contact"
                activeLink={activeLink}
                onClick={() => handleLinkClick("/#contact")}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// NavLink Component for Consistency
const NavLink = ({ to, children, activeLink, onClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (to.startsWith("/#")) {
      e.preventDefault();
      const sectionId = to.replace("/#", ""); // Remove "/#" to get the ID
      navigate("/"); // Navigate to the home page first
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay scrolling slightly after navigation
    } else {
      navigate(to);
    }
    onClick();
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`w-full px-4 py-2 text-xl font-medium text-white rounded-full hover:text-[#23C4FF] ${
        activeLink === to ? "text-[#23C4FF]" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
