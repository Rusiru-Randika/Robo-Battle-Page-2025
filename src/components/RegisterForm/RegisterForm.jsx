import React, { useState } from "react";

const RegisterForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    robot: "",
    link: "",
  });

  // State to manage loading spinner
  const [isLoading, setIsLoading] = useState(false);

  // State to manage registration success message
  const [isRegistered, setIsRegistered] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    // Google Apps Script URL (replace with your deployed script URL)
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbytX4ZM82gqhIRTkV_H5HHJLXWpijoP5vFk8eW9Ye2E-YAInHWN4ph4_grbxdL63fwOdA/exec";

    // Convert form data to query parameters
    const params = new URLSearchParams(formData).toString();
    const url = `${scriptUrl}?${params}`;

    try {
      // Send data to Google Apps Script
      const response = await fetch(url, {
        method: "GET",
      });

      // Get the response text
      const result = await response.text();
      console.log("Response:", result);

      // Check if the response is successful
      if (response.ok) {
        console.log("Registration successful!");
        setIsRegistered(true); // Show "Registered" message
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          team: "",
          robot: "",
          link: "",
        });

        // Hide the "Registered" message after 3 seconds
        setTimeout(() => {
          setIsRegistered(false);
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      // Set loading state to false (whether the request succeeds or fails)
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-krona pt-16">
      {/* Form Title */}
      <h1 className="text-3xl font-bold mb-6">
        Register for UOK Robot Battles 2k25
      </h1>

      {/* Registration Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Team Name Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="team"
          >
            Team Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="team"
            type="text"
            placeholder="Team Name"
            value={formData.team}
            onChange={handleChange}
            required
          />
        </div>

        {/* Robot Name Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="robot"
          >
            Robot Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="robot"
            type="text"
            placeholder="Robot Name"
            value={formData.robot}
            onChange={handleChange}
            required
          />
        </div>

        {/* Link Field */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="link"
          >
            Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="link"
            type="url"
            placeholder="Link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button with Spinner and "Registered" Message */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
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
            <span className="text-green-600 font-bold ml-4">Registered</span>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
