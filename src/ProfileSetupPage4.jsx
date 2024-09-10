import React, { useState } from 'react';

const ProfileSetupPage4 = () => {
  const [preferredProjectTypes, setPreferredProjectTypes] = useState({
    oneTime: true,
    ongoing: false,
    largeScale: false,
  });
  const [preferredClientTypes, setPreferredClientTypes] = useState({
    individuals: true,
    smallBusinesses: false,
    nonprofits: false,
    startUp: false,
    any: false,
  });

  const handleProjectTypeChange = (event) => {
    const { name, checked } = event.target;
    setPreferredProjectTypes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleClientTypeChange = (event) => {
    const { name, checked } = event.target;
    setPreferredClientTypes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Middle Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Project Preferences</h3>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Project Types</label>
            <div className="mt-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="oneTime"
                  name="oneTime"
                  checked={preferredProjectTypes.oneTime}
                  onChange={handleProjectTypeChange}
                  className="mr-2"
                />
                <label htmlFor="oneTime" className="mr-4">One-Time</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ongoing"
                  name="ongoing"
                  checked={preferredProjectTypes.ongoing}
                  onChange={handleProjectTypeChange}
                  className="mr-2"
                />
                <label htmlFor="ongoing" className="mr-4">Ongoing</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="largeScale"
                  name="largeScale"
                  checked={preferredProjectTypes.largeScale}
                  onChange={handleProjectTypeChange}
                  className="mr-2"
                />
                <label htmlFor="largeScale" className="mr-4">Large-Scale</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Client Types</label>
            <div className="mt-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="individuals"
                  name="individuals"
                  checked={preferredClientTypes.individuals}
                  onChange={handleClientTypeChange}
                  className="mr-2"
                />
                <label htmlFor="individuals" className="mr-4">Individuals</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="smallBusinesses"
                  name="smallBusinesses"
                  checked={preferredClientTypes.smallBusinesses}
                  onChange={handleClientTypeChange}
                  className="mr-2"
                />
                <label htmlFor="smallBusinesses" className="mr-4">Small Businesses</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nonprofits"
                  name="nonprofits"
                  checked={preferredClientTypes.nonprofits}
                  onChange={handleClientTypeChange}
                  className="mr-2"
                />
                <label htmlFor="nonprofits" className="mr-4">Nonprofits</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="startUp"
                  name="startUp"
                  checked={preferredClientTypes.startUp}
                  onChange={handleClientTypeChange}
                  className="mr-2"
                />
                <label htmlFor="startUp" className="mr-4">Start Up</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="any"
                  name="any"
                  checked={preferredClientTypes.any}
                  onChange={handleClientTypeChange}
                  className="mr-2"
                />
                <label htmlFor="any" className="mr-4">Any</label>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-4xl p-8 mt-8 flex justify-center">
        <button type="submit" className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A200A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C]">Next</button>
      </div>
    </div>
  );
};

export default ProfileSetupPage4;