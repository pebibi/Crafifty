import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaUser, FaSearch, FaFilter } from 'react-icons/fa';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary

const DashboardArtist = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <nav className="space-x-4">
          <a href="/" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Home</a>
          <a href="/track-project" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Track Project</a>
          <a href="/community" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Community</a>
          <a href="/opportunity" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Opportunity</a>
        </nav>
        <div className="flex space-x-4 relative">
          <FaHeart className="text-[#5C0601] hover:text-gray-900" />
          <div className="relative">
            <FaEnvelope className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleNotifications} />
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                <ul>
                  <li className="mb-2">You have a new message from John Doe.</li>
                  <li className="mb-2">Your project has been approved.</li>
                  <li className="mb-2">New comment on your post.</li>
                </ul>
              </div>
            )}
          </div>
          <FaUser className="text-[#5C0601] hover:text-gray-900" />
        </div>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center items-center p-4 mt-4">
        <div className="relative w-full max-w-lg">
          <input type="text" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
          <FaSearch className="absolute top-2 right-10 text-gray-400" />
          <FaFilter className="absolute top-2 right-2 text-gray-400" />
        </div>
      </div>

      <div className="container mx-auto py-8">
        {/* Section 1: Matched for you! */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Matched for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-[#FBD3A7] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-[#8F250C] text-white py-2 px-4 rounded-md hover:bg-[#7A1F0A]">Interested</button>
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">Save for Later</button>
            </div>
          </div>
          <div className="bg-[#FBD3A7] p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-[#8F250C] text-white py-2 px-4 rounded-md hover:bg-[#7A1F0A]">Interested</button>
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">Save for Later</button>
            </div>
          </div>
        </div>

        {/* Section 2: Recommended for you! */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Recommended for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
        </div>

        {/* Section 3: Explore more! */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Explore more!</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Name: Joshua Hong</h3>
            <p className="text-sm text-gray-700">Role: Art Collector</p>
            <p className="mt-2">Looking for: Abstract Painting</p>
            <p>Project Requirement:</p>
            <p>Project Budget:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardArtist;