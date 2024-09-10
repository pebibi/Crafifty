import React, { useState } from 'react';
import logo from '../src/assets/logo.png'; // Adjust the path as necessary
import sideImage from '../src/assets/first.png'; // Adjust the path as necessary

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Welcome Back</h2>
        <div className="text-center md:text-left mb-4">
          <button type="button" className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 flex items-center justify-center">
            <img src="" alt="Google Icon" className="h-5 w-5 mr-2" />
            Login with Google
          </button>
        </div>
        <p className="text-center md:text-center text-sm text-gray-600 mb-4">or enter account details</p>
        <form className="space-y-4">
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
          <div className="flex justify-between items-center">
            <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C]">Login</button>
          </div>
        </form>
        <p className="mt-6 text-center md:text-left text-sm text-gray-600">
          Don’t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;