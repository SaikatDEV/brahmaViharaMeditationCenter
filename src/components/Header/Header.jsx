import React, { useState, useRef } from "react";

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <header className="header bg-white fixed w-full px-8 h-30 z-10">
      <div className="header_container flex items-center justify-between">
        <div className="header_logo">
          <img
            className="w-20 mt-1 p-1"
            src="/public/images/all/logo.jpg"
            alt="logo"
          />
        </div>
        <div className="header_menu">
          <ul className="header_menu-list text-black flex items-center space-x-12 font-semibold text-xl font-roboto">
            <li>
              <button>
                <a href="#home">Home</a>
              </button>
            </li>

            <li>
              <button>
                <a href="#aboutUs">About Us</a>
              </button>
            </li>

            <li>
              <button>Teachings</button>
            </li>

            <li>
              <button>Ordination</button>
            </li>

            <li>
              <button>Donation</button>
            </li>

            <li>
              <button>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
