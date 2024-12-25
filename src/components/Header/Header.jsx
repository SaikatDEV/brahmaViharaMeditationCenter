import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaUser } from "react-icons/fa"; // Import icons
import logo from "/src/assets/images/web/logo.png";

function Header({ onAdminLogin, isAdminLoggedIn }) {
  // State to control the visibility of the mobile dropdown menu
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // State to control the visibility of the Buddhism dropdown menu
  const [buddhismDropdown, setBuddhismDropdown] = useState(false);

  // Toggles the visibility of the entire mobile menu
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Toggles the visibility of the Buddhism submenu (for desktop and mobile)
  const toggleBuddhismDropdown = () => {
    setBuddhismDropdown(!buddhismDropdown);
  };

  const closeDropdowns = () => {
    setDropdownVisible(false);
    setBuddhismDropdown(false);
  };

  return (
    <header className="fixed w-full px-4 sm:px-8 h-20 z-30 bg-gray-700 shadow-md">
      <div className="flex items-center justify-between h-full">
        {/* Logo Section */}
        <div className="flex items-center" onClick={closeDropdowns}>
          <Link to="/">
            <img
              className="w-16 sm:w-20 mt-1 relative -ml-1 p-2"
              src={logo}
              alt="LOGO IMAGE"
            />
          </Link>

          {/* Contact Section */}
          <div className="flex items-center space-x-4 ml-4 text-white">
            <a
              href="mailto:devsaikat00@gmail.com"
              target="_blank"
              className="hover:text-orange-500"
            >
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            {/* Hamburger or Close (X) icon */}
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  dropdownVisible
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center">
          <ul className="flex items-center space-x-8 text-white font-semibold text-lg">
            <li>
              <Link
                to="/"
                className="hover:text-orange-500"
                onClick={closeDropdowns}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-500"
                onClick={closeDropdowns}
              >
                About us
              </Link>
            </li>

            {/* Resources Dropdown - Desktop */}
            <li className="relative">
              <button
                onClick={toggleBuddhismDropdown}
                className="hover:text-orange-500 flex items-center"
              >
                Resources
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${
                    buddhismDropdown ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a.75.75 0 01-.53-.22l-4.5-4.5a.75.75 0 111.06-1.06L10 9.94l3.97-3.97a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-.53.22z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              {buddhismDropdown && (
                <ul className="absolute top-10 left-0 bg-white text-gray-800 rounded-md shadow-lg w-52 py-2 text-sm">
                  <li>
                    <Link
                      to="/tripitaka"
                      className="block px-4 py-1.5 hover:bg-gray-100"
                      onClick={closeDropdowns}
                    >
                      Tripitaka
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/meditationTechniques"
                      className="block px-4 py-1.5 hover:bg-gray-100"
                      onClick={closeDropdowns}
                    >
                      Meditation Techniques
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jataka"
                      className="block px-4 py-1.5 hover:bg-gray-100"
                      onClick={closeDropdowns}
                    >
                      Jataka Tales
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/stories"
                      className="block px-4 py-1.5 hover:bg-gray-100"
                      onClick={closeDropdowns}
                    >
                      Stories for Kids
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/viharas" className="hover:text-orange-500">
                Viharas
              </Link>
            </li>

            {isAdminLoggedIn && (
              <li>
                <Link
                  to="/createpost"
                  className="hover:text-green-500"
                  onClick={closeDropdowns}
                >
                  Create Post
                </Link>
              </li>
            )}
          </ul>

          <button
            onClick={onAdminLogin}
            className="ml-6 text-white hover:text-orange-500 focus:outline-none"
          >
            <FaUser size={25} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownVisible && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 font-semibold text-lg text-gray-800">
            <li>
              <Link to="/" onClick={() => setDropdownVisible(false)}>
                Home
              </Link>
            </li>

            <li>
              <button onClick={toggleBuddhismDropdown}>Resources</button>
              {buddhismDropdown && (
                <ul className="space-y-2 mt-2 text-sm">
                  <li>
                    <Link to="/tripitaka">Tripitaka</Link>
                  </li>
                  <li>
                    <Link to="/meditationTechniques">
                      Meditation Techniques
                    </Link>
                  </li>
                  <li>
                    <Link to="/jataka">Jataka Tales</Link>
                  </li>
                  <li>
                    <Link to="/stories">Stories for kids</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
