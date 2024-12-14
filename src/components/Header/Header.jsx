import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaEnvelope, FaUser } from "react-icons/fa"; // Importing icons

function Header({ onAdminLogin, isAdminLoggedIn }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="fixed w-full px-4 sm:px-8 h-20 z-30 bg-gray-700 shadow-md">
      <div className="flex items-center justify-between h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <div>
            <div className="h-8 w-8 sm:h-10 sm:w-10 border-4 border-red-600 rounded-full absolute top-1 inset-[44px] animate-pulse">
              <div className="absolute h-6 w-6 sm:h-8 sm:w-8 border-4 border-yellow-400 rounded-full animate-pulse"></div>
            </div>

            <img
              className="w-16 sm:w-20 mt-1 relative -ml-1 p-2"
              src="/images/all/logo.png"
              alt="LOGO IMAGE"
            />
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 ml-4 text-white">
            <a
              href="https://www.facebook.com/groups/316334985782218"
              target="_blank"
              // This below is needed for security purposes
              // while we add any external website
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.youtube.com/@VenSaccananda"
              target="_blank"
              // This below is needed for security purposes
              // while we add any external website
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube size={25} />
            </a>
            <a
              href="mailto:bvmcnewyork@gmail.com"
              className="hover:text-orange-500"
            >
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
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
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center">
          <ul className="flex items-center space-x-8 text-white font-semibold text-lg">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/tripitaka" className="hover:text-orange-500">
                Tripitaka
              </Link>
            </li>
            <li>
              <Link to="/viharas" className="hover:text-orange-500">
                Viharas
              </Link>
            </li>
            <li>
              <Link to="/donation" className="hover:text-orange-500">
                Articles
              </Link>
            </li>
            {isAdminLoggedIn && (
              <li>
                <Link
                  to="/createpost"
                  onClick={() => setDropdownVisible(false)}
                  className="hover:text-green-500"
                >
                  Create Post
                </Link>
              </li>
            )}

            <li>
              <Link to="/buddhism" className="hover:text-orange-500">
                Buddhism
              </Link>
            </li>
          </ul>
          {/* Admin Login Icon */}
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
              <a
                href="#home"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutUs"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#teachings"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                Teachings
              </a>
            </li>
            <li>
              <a
                href="#ordination"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                Ordination
              </a>
            </li>
            <li>
              <a
                href="#donation"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                Donation
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setDropdownVisible(false)}
                className="hover:text-orange-500"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
