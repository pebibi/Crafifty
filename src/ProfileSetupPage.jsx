import React, { useState } from 'react';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary

const ProfileSetupPage = () => {
  const [artistName, setArtistName] = useState("Artist Name"); // Replace with actual artist name
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Top Section */}
      <div className="w-full p-8 flex flex-col items-center">
        <div className="w-full flex justify-start items-center">
          <img src={logo} alt="Craftify Logo" className="h-12" />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-orange-600">Hi {artistName}! Let's Complete your profile.</h2>
        <div className="mt-6">
          <div className="relative w-32 h-32 rounded-full border-2 border-orange-600 flex items-center justify-center overflow-hidden">
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <>
                <span className="text-4xl text-orange-600">+</span>
                <span className="absolute bottom-2 text-sm text-orange-600">Add Photo</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={handlePhotoUpload}
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="w-full max-w-4xl p-8 bg-white  mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Basic Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="user@gmail.com" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="+639083937657" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
            <input type="number" id="age" name="age" placeholder="18" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate</label>
            <input type="text" id="birthdate" name="birthdate" placeholder="MM/DD/YY" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Current Address</label>
            <input type="text" id="address" name="address" placeholder="Toril, Davao City" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
            <input type="text" id="postalCode" name="postalCode" placeholder="8000" required className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <div className="mt-1 flex items-center">
              <input type="radio" id="male" name="gender" value="Male" className="mr-2" />
              <label htmlFor="male" className="mr-4">Male</label>
              <input type="radio" id="female" name="gender" value="Female" className="mr-2" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-4xl p-8 mt-8 flex justify-center">
        <button type="submit" className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">Next</button>
      </div>
    </div>
  );
};

export default ProfileSetupPage;