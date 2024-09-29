import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSetupPage4 = () => {
  const navigate = useNavigate();
  const [sampleWorks, setSampleWorks] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setSampleWorks(files);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Handle save logic here
    console.log('Sample works saved', sampleWorks);
    // Navigate to the next step or dashboard
    navigate('/DashboardArtist');
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Header Section */}
      <div className="text-left w-full max-w-4xl mt-8">
        <h1 className="text-3xl font-bold text-orange-600">Sample Works</h1>
        <p className="text-orange-600 mt-2">Upload Sample Projects*</p>
      </div>

      {/* File Upload Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <div className="border-2 border-orange-600 border-dashed rounded-md p-8 flex flex-col items-center justify-center">
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-6xl text-orange-600">+</div>
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
          {sampleWorks.length > 0 && (
            <div className="mt-4">
              <ul>
                {sampleWorks.map((file, index) => (
                  <li key={index} className="text-gray-700">{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-600 rounded"></div>
          <div className="w-8 h-2 bg-orange-300 rounded"></div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          onClick={handleSave}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupPage4;