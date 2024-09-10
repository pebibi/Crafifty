import React, { useState } from 'react';

const ProfileSetupPage2 = () => {
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [educationalBackground, setEducationalBackground] = useState({
    bachelors: true,
    masters: false,
    certifications: false,
    workshops: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setEducationalBackground((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white font-poppins">
      {/* Middle Section */}
      <div className="w-full max-w-4xl p-8 bg-white  mt-8">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Professional Information</h3>
        <form className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="professionalTitle" className="block text-sm font-medium text-gray-700">Professional Title</label>
            <input
              type="text"
              id="professionalTitle"
              name="professionalTitle"
              placeholder="(e.g., Painter, Graphic Designer, Ceramic Artist)"
              value={professionalTitle}
              onChange={(e) => setProfessionalTitle(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700">Experience Level</label>
            <input
              type="text"
              id="experienceLevel"
              name="experienceLevel"
              placeholder="(Beginner, Intermediate, Expert)"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700">Years of Experience</label>
            <input
              type="text"
              id="yearsOfExperience"
              name="yearsOfExperience"
              placeholder="(e.g., 1, 5, 10)"
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-orange-600 rounded-md shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Educational Background</label>
            <div className="mt-1">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="bachelors"
                  name="bachelors"
                  checked={educationalBackground.bachelors}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="bachelors" className="mr-4">Bachelor's Degree</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="masters"
                  name="masters"
                  checked={educationalBackground.masters}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="masters" className="mr-4">Masters</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="certifications"
                  name="certifications"
                  checked={educationalBackground.certifications}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="certifications" className="mr-4">Certifications</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="workshops"
                  name="workshops"
                  checked={educationalBackground.workshops}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor="workshops" className="mr-4">Workshops</label>
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

export default ProfileSetupPage2;