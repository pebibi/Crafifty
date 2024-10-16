import React from 'react';
import { FaHeart, FaEnvelope, FaUser, FaSearch, FaFilter, FaComment, FaBell, FaTrash, FaEdit, FaCheck, FaEllipsisH, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
import profilePic from '../../assets/logo.png'; // Example profile picture path
import sampleWork1 from '../../assets/logo.png'; // Example sample work image path
import sampleWork2 from '../../assets/logo.png'; // Example sample work image path
import NavbarArtist from '../../Navbars/NavbarArtist'; // Import the NavbarArtist component

// Define the missing variables or import them if they are defined elsewhere
const toggleChat = () => {};
const showChat = false;
const activeChat = null;
const setShowChat = () => {};
const toggleNotifications = () => {};
const showNotifications = false;
const notifications = [];
const markAsRead = () => {};
const onMessageClick = () => {};

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      {/* Header Section */}
      <NavbarArtist 
        toggleChat={toggleChat} 
        showChat={showChat} 
        activeChat={activeChat} 
        setShowChat={setShowChat} 
        toggleNotifications={toggleNotifications} 
        showNotifications={showNotifications} 
        notifications={notifications} 
        markAsRead={markAsRead} 
        onMessageClick={onMessageClick}
      />

      {/* Profile Header Section */}
      <div className="text-center mt-8">
        <img src={profilePic} alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
        <button className="mt-4 py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601]">
          Edit Profile
        </button>
        <h1 className="text-2xl font-bold text-[#5C0601] mt-4">Jeon Jungkook</h1>
      </div>

      {/* Profile Description Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Profile Description</h2>
        <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur.</p>
        </div>
      </div>

      {/* Sample Works Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Sample Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={sampleWork1} alt="Sample Work 1" className="w-full h-auto rounded-md shadow-md" />
          <img src={sampleWork2} alt="Sample Work 2" className="w-full h-auto rounded-md shadow-md" />
          <div className="w-full h-64 bg-[#FBD3A7] rounded-md shadow-md flex items-center justify-center">
            <span className="text-gray-500">Add More Works</span>
          </div>
        </div>
      </div>

      {/* For Sale Artworks Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">For Sale Artworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full h-64 bg-[#FBD3A7] rounded-md shadow-md flex items-center justify-center">
            <span className="text-gray-500">Artwork 1</span>
          </div>
          <div className="w-full h-64 bg-[#FBD3A7] rounded-md shadow-md flex items-center justify-center">
            <span className="text-gray-500">Artwork 2</span>
          </div>
          <div className="w-full h-64 bg-[#FBD3A7] rounded-md shadow-md flex items-center justify-center">
            <span className="text-gray-500">Artwork 3</span>
          </div>
        </div>
      </div>

      {/* Client Reviews Section */}
      <div className="container mx-auto p-4 mt-8">
        <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Client Reviews</h2>
        <div className="space-y-4">
          <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <div className="flex text-red-500">
                <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
              </div>
              <h3 className="text-lg font-bold ml-2">Excellent Work</h3>
            </div>
            <p className="text-sm text-gray-700">Joshua Hong</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          </div>
          <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <div className="flex text-red-500">
                <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
              </div>
              <h3 className="text-lg font-bold ml-2">Excellent Work</h3>
            </div>
            <p className="text-sm text-gray-700">Joshua Hong</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          </div>
          <div className="bg-[#FBD3A7] p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <div className="flex text-red-500">
                <FaHeart /><FaHeart /><FaHeart /><FaHeart /><FaHeart />
              </div>
              <h3 className="text-lg font-bold ml-2">Excellent Work</h3>
            </div>
            <p className="text-sm text-gray-700">Joshua Hong</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;