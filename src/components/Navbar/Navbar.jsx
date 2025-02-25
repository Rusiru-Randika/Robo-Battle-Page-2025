import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png"; // Adjust the path to your logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full shadow-lg navbar font-krona">
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-12 h-12" />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:ml-6 sm:space-x-4">
            <NavLink to="/#home">Home</NavLink>
            <NavLink to="/#register">Register</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#timeline">Timeline</NavLink>
            <NavLink to="/#contact">Contact</NavLink>
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
            <div className="flex flex-col items-start space-y-4 " onClick={toggleMenu}>
            <NavLink to="/#home">Home</NavLink>
            <NavLink to="/#register">Register</NavLink>
            <NavLink to="/#about">About</NavLink>
            <NavLink to="/#timeline">Timeline</NavLink>
            <NavLink to="/#">Contact</NavLink>
          
            </div>
          </div>

          {/* Overlay - Close Sidebar on Click */}
          {/* <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMenu}
          ></div> */}
        </div>
      )}
    </nav>
  );
};

// NavLink Component for Consistency
const NavLink = ({ to, children }) => {
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
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className="w-full px-4 py-2 text-lg font-medium text-white rounded-full hover:bg-gradient-to-b from-purple-700 to-fuchsia-950 hover:text-pink-100"
    >
      {children}
    </Link>
  );
};

export default Navbar;
