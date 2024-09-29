import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import sideImage from '../assets/first.png'; // Adjust the path as necessary

const ProfileSetupPage2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    professionalTitle: '',
    experienceLevel: '',
    yearsOfExperience: '',
    educationalBackground: '',
    school: '',
    yearGraduated: '',
  });
  const [profileImage, setProfileImage] = useState(null);

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
    navigate('/ProfileSetupPage3', { state: { formData } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Header Section */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold text-orange-600">Professional Information</h1>
      </div>

      {/* Middle Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Professional Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleNext}>
          <div>
            <label htmlFor="professionalTitle" className="block text-sm font-medium text-gray-700">Professional Title*</label>
            <input
              type="text"
              id="professionalTitle"
              name="professionalTitle"
              placeholder="e.g., Painter, Graphic Designer, Ceramic Artist"
              value={formData.professionalTitle}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">Experience Level*</label>
            <input
              type="text"
              id="experienceLevel"
              name="experienceLevel"
              placeholder="Beginner, Intermediate, Expert"
              value={formData.experienceLevel}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">Years of Experience*</label>
            <select
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select years</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
              <option value="7">7 years</option>
              <option value="8">8 years</option>
              <option value="9">9 years</option>
              <option value="10">10 years</option>
              <option value="11">11 years</option>
              <option value="12">12 years</option>
              <option value="13">13 years</option>
              <option value="14">14 years</option>
              <option value="15">15 years</option>
              <option value="16">16 years</option>
              <option value="17">17 years</option>
              <option value="18">18 years</option>
              <option value="19">19 years</option>
              <option value="20">20 years</option>
            </select>
          </div>
          <div>
            <label htmlFor="educationalBackground" className="block text-sm font-medium text-gray-700">Educational Background*</label>
            <select
              id="educationalBackground"
              name="educationalBackground"
              value={formData.educationalBackground}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select education</option>
              <option value="High School Diploma">High School Diploma</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Bachelor’s Degree">Bachelor’s Degree</option>
              <option value="Master’s Degree">Master’s Degree</option>
              <option value="Doctorate">Doctorate</option>
            </select>
          </div>
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">School*</label>
            <input
              type="text"
              id="school"
              name="school"
              placeholder="School"
              value={formData.school}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="yearGraduated" className="block text-sm font-medium text-gray-700">Year Graduated*</label>
            <select
              id="yearGraduated"
              name="yearGraduated"
              value={formData.yearGraduated}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            >
              <option value="" disabled>Select year</option>
              {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </form>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-300 rounded"></div>
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

export default ProfileSetupPage2;