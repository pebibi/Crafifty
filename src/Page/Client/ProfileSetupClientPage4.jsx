import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProfileSetupClientPage4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const artistName = location.state?.artistName || 'Artist';

  const handleNext = () => {
    // Navigate to the dashboard or next page
    navigate('/dashboard-artist');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-poppins">
      {/* Confirmation Icon */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 border-4 border-orange-600 rounded-full flex items-center justify-center">
          <div className="text-6xl text-green-600">✓</div>
        </div>
        {/* Primary Message Text */}
        <h1 className="text-3xl font-bold text-orange-600 mt-4">Profile Complete!</h1>
        {/* Secondary Message Text */}
        <p className="text-xl font-bold text-orange-600 mt-2">Welcome on board {artistName}!</p>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          onClick={handleNext}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ProfileSetupClientPage4;