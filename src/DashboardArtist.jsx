import React, { useState } from 'react';
import { FaHeart, FaEnvelope, FaUser, FaSearch, FaFilter, FaBell, FaEllipsisH, FaTimes } from 'react-icons/fa';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary
import ca1 from '../src/assets/ca-1.png'; // Example image paths

const DashboardArtist = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [activeChat, setActiveChat] = useState(null);

  const [matchedForYou, setMatchedForYou] = useState([]);
  const [recommendedForYou, setRecommendedForYou] = useState([]);
  const [exploreMore, setExploreMore] = useState([]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const markAsRead = (index) => {
    setNotifications(notifications.map((notification, i) => 
      i === index ? { ...notification, read: true } : notification
    ));
  };

  const markMessageAsRead = (index) => {
    setMessages(messages.map((message, i) => 
      i === index ? { ...message, read: true } : message
    ));
  };

  const addNotification = (message) => {
    setNotifications([{ message, read: false }, ...notifications]);
  };

  const addMessage = (sender, content) => {
    setMessages([...messages, { sender, content, read: false }]);
  };

  const addMatchedForYou = (item) => {
    setMatchedForYou([...matchedForYou, item]);
  };

  const addRecommendedForYou = (item) => {
    setRecommendedForYou([...recommendedForYou, item]);
  };

  const addExploreMore = (item) => {
    setExploreMore([...exploreMore, item]);
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const onMessageClick = (chat) => {
    setActiveChat(chat);
  };

  const ChatInterface = ({ onClose }) => {
    return (
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
          {messages.map((message, index) => (
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
    );
  };

  const ChatInterface1 = ({ chat, onClose }) => {
    return (
      <div className="fixed right-8 bottom-0 mb-2 w-80 h-120 bg-white text-black border border-gray-300 rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={chat.profilePic} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">{chat.sender}</h3>
              <p className="text-gray-600 text-sm">{chat.status}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <FaTimes className="cursor-pointer text-gray-600" onClick={onClose} />
          </div>
        </div>
        <div className="overflow-y-auto h-64 p-4 rounded-lg">
          {chat.messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-orange-400 text-white' : 'text-black'}`}>
                {message.text}
              </div>  
              <p className="text-gray-500 text-xs mt-1">{message.timestamp}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input type="text" placeholder="Aa" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <nav className="space-x-4">
          <a href="/DashboardArtist" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Home</a>
          <a href="/track-project" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Track Project</a>
          <a href="/community" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Community</a>
          <a href="/opportunity" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold">Opportunity</a>
        </nav>
        <div className="flex space-x-4 relative">
          <FaHeart className="text-[#5C0601] hover:text-gray-900" />
          <div className="relative">
            <FaEnvelope className="text-[#5C0601] hover:text-gray-900 cursor-pointer" onClick={toggleChat} />
            {showChat && !activeChat && <ChatInterface onClose={() => setShowChat(false)} />}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {matchedForYou.length === 0 ? (
            <p>No matches found</p>
          ) : (
            matchedForYou.map((item, index) => (
              <div key={index} className="bg-[#FBD3A7] p-4 rounded-lg shadow-md flex items-start">
                <img src={item.profilePic} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Name: {item.name}</h3>
                  <p className="text-sm text-gray-700">Role: {item.role}</p>
                  <p className="mt-2">Looking for: {item.lookingFor}</p>
                  <p>Project Requirement: {item.projectRequirement}</p>
                  <p>Project Budget: {item.projectBudget}</p>
                  <div className="flex space-x-4 mt-4">
                    <button className="bg-[#8F250C] text-white py-2 px-4 rounded-md hover:bg-[#7A1F0A]">Interested</button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400">Save for Later</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Section 2: Recommended for you! */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Recommended for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {recommendedForYou.length === 0 ? (
            <p>No recommendations found</p>
          ) : (
            recommendedForYou.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <img src={item.profilePic} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Name: {item.name}</h3>
                  <p className="text-sm text-gray-700">Role: {item.role}</p>
                  <p className="mt-2">Looking for: {item.lookingFor}</p>
                  <p>Project Requirement: {item.projectRequirement}</p>
                  <p>Project Budget: {item.projectBudget}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Section 3: Explore more! */}
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Explore more!</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {exploreMore.length === 0 ? (
            <p>No items to explore</p>
          ) : (
            exploreMore.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-start">
                <img src={item.profilePic} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">Name: {item.name}</h3>
                  <p className="text-sm text-gray-700">Role: {item.role}</p>
                  <p className="mt-2">Looking for: {item.lookingFor}</p>
                  <p>Project Requirement: {item.projectRequirement}</p>
                  <p>Project Budget: {item.projectBudget}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {showChat && activeChat && <ChatInterface1 chat={activeChat} onClose={() => setActiveChat(null)} />}
    </div>
  );
};

export default DashboardArtist;