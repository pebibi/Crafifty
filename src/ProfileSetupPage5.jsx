import React from 'react';

const ProfileSetupPage5 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Title Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-2 text-orange-600">Sample Works</h3>
        <h4 className="text-sm font-medium text-gray-700 mb-4">Upload Sample Works *</h4>
        
        {/* Upload Area */}
        <div className="flex justify-center items-center border-2 border-orange-600 border-dashed h-64">
          <span className="text-black text-4xl">+</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-4xl p-8 mt-8 flex justify-center">
        <button type="submit" className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A200A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C]">Next</button>
      </div>
    </div>
  );
};

export default ProfileSetupPage5;