import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetupPage3 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    preferredProjectType: '',
    preferredClient: '',
    preferredMedium: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Handle next step logic here
    console.log('Next step', formData);
    navigate('/profile-setup-page-4', { state: { formData } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Header Section */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-orange-600">Work Preferences</h1>
      </div>

      {/* Form Fields */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Work Preferences</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleNext}>
          <div>
            <label htmlFor="preferredProjectType" className="block text-sm font-medium text-gray-700">Preferred Project Type*</label>
            <select
              id="preferredProjectType"
              name="preferredProjectType"
              value={formData.preferredProjectType}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select project type</option>
              <option value="One-Time">One-Time</option>
              <option value="Ongoing">Ongoing</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredClient" className="block text-sm font-medium text-gray-700">Preferred Client*</label>
            <select
              id="preferredClient"
              name="preferredClient"
              value={formData.preferredClient}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select client type</option>
              <option value="Individual">Individual</option>
              <option value="Company">Company</option>
            </select>
          </div>
          <div>
            <label htmlFor="preferredMedium" className="block text-sm font-medium text-gray-700">Preferred Medium*</label>
            <select
              id="preferredMedium"
              name="preferredMedium"
              value={formData.preferredMedium}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select medium</option>
              <option value="Digital Art">Digital Art</option>
              <option value="Traditional Art">Traditional Art</option>
              <option value="Mixed Media">Mixed Media</option>
            </select>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability*</label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select availability</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelance">Freelance</option>
            </select>
          </div>
        </form>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-300 rounded"></div>
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

export default ProfileSetupPage3;