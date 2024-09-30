import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaUser, FaBell } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import providerIcon from '../assets/provider.png'; // Adjust the path as necessary
import seekerIcon from '../assets/seeker.png'; // Adjust the path as necessary

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setShowModal(true);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // You can perform any additional actions here, such as redirecting to a sign-up page
    console.log(`Role selected: ${role}`);
  };

  const handleNextClick = () => {
    setShowModal(false);
    navigate('/sign-up');
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <nav className="space-x-4">
          <a href="/" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Home</a>
          <a href="/explore" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Explore</a>
          <a href="/about-us" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">About Us</a>
          <a href="/hot-it-works" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">How It Works</a>
          <button onClick={handleSignUpClick} className="py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601] uppercase">Sign Up</button>
          <a href="/login" className="py-2 px-4 border border-[#5C0601] text-[#5C0601] font-semibold rounded-md shadow-sm hover:bg-[#FBD3A7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601] uppercase">Login</a>
        </nav>
      </header>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#FBD3A7] p-8 rounded-md shadow-lg w-11/12 md:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#5C0601]">PLEASE SELECT WHO YOU ARE</h3>
            <div className="flex justify-around mb-6">
              <div
                className={`flex flex-col items-center cursor-pointer p-4 bg-[#F5F5DC] border border-[#5C0601] rounded-md shadow-md transition-transform duration-300 ease-in-out ${selectedRole === 'Service Provider' ? 'bg-[#8F250C] text-white scale-105 shadow-lg border-[#7A1F0A]' : ''}`}
                onClick={() => handleRoleSelection('Service Provider')}
              >
                <img src={providerIcon} alt="Service Provider" className="h-16 mb-2" />
                <span className={`font-bold ${selectedRole === 'Service Provider' ? 'text-white' : 'text-[#5C0601]'}`}>SERVICE PROVIDER</span>
              </div>
              <div
                className={`flex flex-col items-center cursor-pointer p-4 bg-[#F5F5DC] border border-[#5C0601] rounded-md shadow-md transition-transform duration-300 ease-in-out ${selectedRole === 'Service Seeker' ? 'bg-[#8F250C] text-white scale-105 shadow-lg border-[#7A1F0A]' : ''}`}
                onClick={() => handleRoleSelection('Service Seeker')}
              >
                <img src={seekerIcon} alt="Service Seeker" className="h-16 mb-2" />
                <span className={`font-bold ${selectedRole === 'Service Seeker' ? 'text-white' : 'text-[#5C0601]'}`}>SERVICE SEEKER</span>
              </div>
            </div>
            <button onClick={handleNextClick} className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C]">NEXT</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;