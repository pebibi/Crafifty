import React, { useState } from 'react';

const ProfileSetupPage3 = () => {
  const [professionalTitle, setProfessionalTitle] = useState({
    visualArt: true,
    digitalArt: false,
    craftArt: false,
  });
  const [specialty, setSpecialty] = useState("");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setProfessionalTitle((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Middle Section */}
      <div className="w-full max-w-4xl p-8 bg-white mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Professional Information</h3>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Professional Title</label>
            <div className="mt-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="visualArt"
                  name="visualArt"
                  checked={professionalTitle.visualArt}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="visualArt" className="mr-4">Visual Art</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="digitalArt"
                  name="digitalArt"
                  checked={professionalTitle.digitalArt}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="digitalArt" className="mr-4">Digital Art</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="craftArt"
                  name="craftArt"
                  checked={professionalTitle.craftArt}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="craftArt" className="mr-4">Craft Art</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="specialty" className="block text-sm font-medium text-gray-700">Specialty</label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              placeholder="(e.g., Portrait Painting, 3D Modeling, Textile Art)"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
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

export default ProfileSetupPage3;