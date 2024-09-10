import React, { useState } from 'react';
import logo from '../src/assets/logo.png'; // Adjust the path according to your project structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#5C0601] focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/Homepage" className="text-[#5C0601] hover:text-gray-900 font-semibold">
            Home
          </a>
          <a href="#Explore" className="text-[#5C0601] hover:text-gray-900 font-semibold">
            Explore
          </a>
          <a href="#About-us" className="text-[#5C0601] hover:text-gray-900 font-semibold">
            About Us
          </a>
          <a href="#How-it-works" className="text-[#5C0601] hover:text-gray-900 font-semibold">
            How It Works
          </a>
          <a
            href="#"
            className="bg-[#5C0601] text-white py-2 px-4 font-semibold rounded-md hover:bg-[#5c0601ed]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
