import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; // Adjust the path as necessary
import sideImage from '../../assets/first.png'; // Adjust the path as necessary

const ProfileSetupClientPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    region: '',
    birthdate: '',
  });
  const [errors, setErrors] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    if (location.state && location.state.formData) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: location.state.formData.email,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Navigate to the next setup page
    navigate('/profile-setup-page-2', { state: { formData } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 font-poppins">
      {/* Header Section */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-orange-600">
          Hi {location.state?.formData?.firstName || 'Artist'}! Let’s Complete your profile
        </h1>
      </div>

      {/* Profile Picture Placeholder */}
      <div className="flex justify-center mt-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-2 border-orange-600 flex items-center justify-center overflow-hidden">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-orange-600">+ Add Photo</span>
            )}
          </div>
          <input
            type="file"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handlePhotoUpload}
          />
        </div>
      </div>

      {/* Basic Information Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Basic Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleNext}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@gmail.com"
              required
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+63123456789"
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age*</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender*</label>
            <div className="mt-1 flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-2"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label htmlFor="female" className="mr-4">Female</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-2"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Current Address*</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region*</label>
            <input
              type="text"
              id="region"
              name="region"
              placeholder="Region"
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.region}
              onChange={handleChange}
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Birthdate*</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              placeholder="mm/dd/yy"
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
              value={formData.birthdate}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-8 h-2 bg-orange-300 rounded"></div>
          <div className="w-8 h-2 bg-gray-300 rounded"></div>
          <div className="w-8 h-2 bg-gray-300 rounded"></div>
          <div className="w-8 h-2 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupClientPage;