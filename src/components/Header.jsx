import React from "react";
import logo from "../assets/logoMark.svg";
import header from "../assets/Header_Profile.png";

const Header = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center border border-b-2 ">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-4" />
      </div>
      <nav className="flex items-center justify-center">
        <a
          href="/"
          className="text-gray-800 font-medium hover:text-gray-900 px-4 py-2"
        >
          Materials
        </a>
        <a
          href="/about"
          className="text-gray-800 font-medium hover:text-gray-900 px-4 py-2"
        >
          Elements
        </a>
        <a
          href="/services"
          className="text-gray-800 font-medium hover:text-gray-900 px-4 py-2"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="text-gray-800 font-medium hover:text-gray-900 px-4 py-2"
        >
          Manufacturers
        </a>
        <a
          href="/contact"
          className="text-purple-600 bg-purple-100 rounded-xl font-medium  hover:text-gray-900 px-4 py-2"
        >
          Collections
        </a>
      </nav>
      <div className="flex items-center">
        <img src={header} alt="User" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
