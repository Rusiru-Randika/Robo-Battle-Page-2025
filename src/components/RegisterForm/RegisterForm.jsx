import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    robot: "",
    link: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbytX4ZM82gqhIRTkV_H5HHJLXWpijoP5vFk8eW9Ye2E-YAInHWN4ph4_grbxdL63fwOdA/exec";
    const params = new URLSearchParams(formData).toString();
    const url = `${scriptUrl}?${params}`;

    try {
      const response = await fetch(url, { method: "GET" });
      const result = await response.text();
      console.log("Response:", result);

      if (response.ok) {
        setIsRegistered(true);
        setFormData({
          name: "",
          email: "",
          team: "",
          robot: "",
          link: "",
        });
        setTimeout(() => setIsRegistered(false), 3000);
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 md:px-10 text-center min-h-screen pt-10 md:pt-20">
      {/* Adjusted padding (pt-10 for small screens, md:pt-20 for larger screens) */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center md:items-start text-center md:text-left gap-2 md:gap-5 md:px-20 mb-5 md:mb-0">
          {/* Added font-bebasneue for shadow text */}
          <h1 className="font-transrobotics font-bebasneue text-5xl md:text-7xl mt-2 md:mt-0 bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
            REGISTER
          </h1>
          <h2 className="font-transrobotics font-bebasneue text-xl md:text-3xl opacity-90">
            FOR UOK ROBOT BATTLES 2025
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-b from-[#0A0F29] to-[#1A1F39] p-8 rounded-3xl shadow-lg w-full max-w-md"
          >
            {/* Reduced max width from max-w-md to max-w-sm */}
            <div className="mb-3">
              <label
                className="block text-white text-lg font-transrobotics mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none font-bebasneue border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-white text-lg font-transrobotics mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none font-bebasneue border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-white text-lg font-transrobotics mb-2"
                htmlFor="team"
              >
                Team Name
              </label>
              <input
                className="shadow appearance-none font-bebasneue border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="team"
                type="text"
                placeholder="Team Name"
                value={formData.team}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-white text-lg font-transrobotics mb-2"
                htmlFor="robot"
              >
                Robot Name
              </label>
              <input
                className="shadow appearance-none font-bebasneue border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="robot"
                type="text"
                placeholder="Robot Name"
                value={formData.robot}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-white text-lg font-transrobotics mb-2"
                htmlFor="link"
              >
                Payment Receipt Link
              </label>
              <input
                className="shadow appearance-none font-bebasneue border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="link"
                type="url"
                placeholder="Link"
                value={formData.link}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="font-transrobotics bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline flex items-center"
                type="submit"
                disabled={isLoading} // Disable the button while loading
              >
                Register
                {isLoading && (
                  <div className="ml-2">
                    {/* Spinner */}
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                )}
              </button>
              {/* Show "Registered" message after successful submission */}
              {isRegistered && (
                <span className="font-transrobotics text-green-600 ml-4">
                  Registered ✅
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
