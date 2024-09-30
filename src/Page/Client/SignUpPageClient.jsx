import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import sideImage from '../assets/first.png'; // Adjust the path as necessary
import { FaGoogle } from 'react-icons/fa';

const SignUpPageClient = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';
    return newErrors;
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Navigate to ProfileSetupPage with form data
      navigate('/profile-setup-page-1', { state: { formData } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100 font-poppins">
      <div className="relative w-full h-1/2 md:h-full md:w-1/2">
        <div className="absolute top-4 left-4">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="absolute top-32 left-12 text-black text-3xl font-bold">
          Transform your passion into profession with Craftify.
        </div>
        <img src={sideImage} alt="Side Image" className="object-cover w-3/4 h-full" />
      </div>
      
      <div className="w-full h-full md:w-1/2 p-8 bg-custom-color flex flex-col justify-center min-h-screen relative">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-[#CA5310] rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={formData.terms}
              onChange={handleChange}
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              Agree to the terms of services & privacy policy
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-1/2 py-2 px-4 bg-[#8F250C] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F250C] mb-4">Create Account</button>
          </div>
        </form>
        <div className="text-center md:text-left mb-4 flex justify-center">
          <a href="#" className="w-1/2 py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 flex items-center justify-center">
            <FaGoogle className="h-5 w-5 mr-2" />
            Sign Up with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPageClient;