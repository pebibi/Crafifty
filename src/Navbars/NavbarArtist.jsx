import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaUser, FaBell, FaEllipsisH, FaTimes, FaSearch } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import ca1 from '../assets/ca-1.png'; // Example image paths
import { useNavigate } from 'react-router-dom';

const NavbarArtist = ({ toggleChat, showChat, activeChat, setShowChat, toggleNotifications, showNotifications, notifications, markAsRead, onMessageClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleSignOut = () => {
    // Handle sign out logic here
    console.log('Sign Out');
    navigate('/');
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <button className="md:hidden text-[#5C0601] focus:outline-none" onClick={toggleDropdown}>
          <FaEllipsisH />
        </button>
      </div>
      <nav className={`md:flex space-x-4 mt-4 md:mt-0 ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <a href="/dashboard-artist" className="block md:inline-block text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Home</a>
        <a href="/track-project" className="block md:inline-block text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Track Project</a>
        <a href="/community" className="block md:inline-block text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Community</a>
        <a href="/opportunity" className="block md:inline-block text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Opportunity</a>
        <a href="/my-art" className="block md:inline-block text-[#5C0601] hover:text-gray-900 uppercase font-semibold">My Art</a>
      </nav>
      <div className="flex space-x-4 relative mt-4 md:mt-0">
        <FaHeart className="text-[#5C0601] hover:text-gray-900" />
        <div className="relative">
          <FaEnvelope className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleChat} />
          {showChat && !activeChat && (
            <div className="absolute right-0 top-16 w-80 bg-[#FBD3A7] text-black border rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Messages</h3>
                <div className="flex space-x-2">
                  <FaEllipsisH className="cursor-pointer" />
                </div>
              </div>
              <div className="relative mb-4">
                <input type="text" placeholder="Search Messages" className="w-full px-4 py-2 bg-white-700 text-black rounded-md focus:outline-none" />
                <FaSearch className="absolute top-2 right-3 text-gray-400" />
              </div>
              <div className="flex space-x-4 mb-4">
                <button className="flex-1 bg-[#5C0601] text-white py-2 rounded-md">Inbox</button>
                <button className="flex-1 bg-white text-black py-2 rounded-md">Communities</button>
              </div>
              <div className="overflow-y-auto h-64">
                {notifications.map((message, index) => (
                  <div key={index} className="flex items-center mb-4 cursor-pointer" onClick={() => onMessageClick({
                    sender: message.sender, content: message.content, profilePic: ca1, status: "Active 12m ago", messages: [
                      { text: message.content, timestamp: "6m", isUser: true }
                    ]})}>
                    <img src={ca1} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <h4 className="font-semibold">{message.sender}</h4>
                      <p className="text-black text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full text-[#5C0601] mt-4">See all in Messages</button>
            </div>
          )}
        </div>
        <div className="relative">
          <FaBell className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleNotifications} />
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Notifications</h3>
              <ul>
                {notifications.length === 0 ? (
                  <li>No notifications</li>
                ) : (
                  notifications.map((notification, index) => (
                    <li 
                      key={index} 
                      className={`mb-2 ${notification.read ? 'text-gray-500' : 'text-black'}`}
                      onClick={() => markAsRead(index)}
                    >
                      {notification.message}
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <FaUser className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleProfileDropdown} />
          {isProfileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
              <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Sign Out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavbarArtist;