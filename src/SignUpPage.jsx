import React, { useState } from 'react';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary
import sideImage from '../src/assets/first.png'; // Adjust the path as necessary

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 font-poppins">
      <div className="relative w-full h-1/2 md:h-full md:w-1/2">
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="absolute top-32 left-12 text-black text-3xl font-bold">
          Every masterpiece begins with a single step
        </div>
        <img src={sideImage} alt="Side Image" className="object-cover w-3/4 h-full" />
      </div>
      
      <div className="w-full h-full md:w-1/2 p-8 bg-custom-color flex flex-col justify-center min-h-screen relative">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} id="password" name="password" required className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Agree to the terms of services & privacy policy
            </label>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C]">Create Account</button>
          </div>
        </form>
        <div className="text-center md:text-left mb-4">
          <a href="#" className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 flex items-center justify-center">
            <img src="" alt="Google Icon" className="h-5 w-5 mr-2" />
            Sign Up with Google
          </a>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h3 className="text-xl font-bold mb-4">Please Select Your Role</h3>
            <div className="space-y-4">
              <button className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#FBD3A7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                I'm an artist
              </button>
              <button className="w-full py-2 px-4 bg-[#FBD3A7] text-white font-semibold rounded-md shadow-sm hover:bg-[#8F250C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600">
                I'm a client
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;