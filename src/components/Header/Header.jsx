import React, { useState } from "react";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="fixed w-full px-4 sm:px-8 h-20 z-30 bg-gray-700 shadow-md">
      <div className="flex items-center justify-between h-full">
        {/* Logo Section */}
        <div className="header_logo">
          <img
            className="w-16 sm:w-20 mt-1"
            src="/images/all/logo.png"
            alt="LOGO IMAGE"
          />
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
        <div className="hidden sm:block text-white">
          <ul className="flex items-center space-x-8 font-semibold text-xl font-roboto">
            <li>
              <a href="#home" className="hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#aboutUs" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#teachings" className="hover:text-orange-500">
                Teachings
              </a>
            </li>
            <li>
              <a href="#ordination" className="hover:text-orange-500">
                Ordination
              </a>
            </li>
            <li>
              <a href="#donation" className="hover:text-orange-500">
                Donation
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {dropdownVisible && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4 font-semibold text-lg font-roboto">
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
