import React from "react";

const Button = ({ text, onClick, type = "button", className = "", url }) => {
  const baseClasses =
    "px-5 py-2 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg text-black";

  if (url) {
    return (
      <a
        href={url}
        className={`${baseClasses} ${className}`}
        target="_blank" // Opens the link in a new tab
        rel="noopener noreferrer" // Security measure for new tabs
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
