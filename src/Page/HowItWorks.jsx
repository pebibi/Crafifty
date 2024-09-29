import React from 'react';
import { FaUserPlus, FaSearch, FaClipboardCheck, FaProjectDiagram, FaUsers, FaChartLine } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import step1Image from '../assets/step1.png'; // Example image paths
import step2Image from '../assets/step2.png';
import step3Image from '../assets/step3.png';
import step4Image from '../assets/step4.png';
import step5Image from '../assets/step5.png';
import step6Image from '../assets/step6.png';
import Navbar from '../Navbars/Navbar';

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
    <Navbar />
    <div className="min-h-screen bg-gray-100 font-poppins flex flex-col items-center">
     
      
      {/* Header Title */}
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8 p-6">HOW IT WORKS</h1>
      
      {/* Step-by-Step Process */}
      <div className="space-y-8 w-full max-w-5xl">
        {/* Step 1 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step1Image} alt="Step 1" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Sign Up and Create a Profile</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-red-600 h-8 mx-auto"></div>
        
        {/* Step 2 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step2Image} alt="Step 2" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Find Services and Projects</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-red-600 h-8 mx-auto"></div>
        
        {/* Step 3 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step3Image} alt="Step 3" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Match</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-red-600 h-8 mx-auto"></div>
        
        {/* Step 4 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step4Image} alt="Step 4" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Manage Project</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-red-600 h-8 mx-auto"></div>
        
        {/* Step 5 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step5Image} alt="Step 5" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Grow and Network</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-dashed border-red-600 h-8 mx-auto"></div>
        
        {/* Step 6 */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={step6Image} alt="Step 6" className="mx-auto h-64 w-64 " />
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">Showcase and Sell</h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FBD3A7] text-white py-8 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
          <img src={logo} alt="Craftify Logo" className="h-12 mb-4 md:mb-0" />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-bold mb-2 text-black">Quick Links</h3>
              <ul>
                <li><a href="/" className="hover:underline text-[#5C0601]">Home</a></li>
                <li><a href="/explore" className="hover:underline text-[#5C0601]">Explore</a></li>
                <li><a href="/about" className="hover:underline text-[#5C0601]">About Us</a></li>
                <li><a href="/how-it-works" className="hover:underline text-[#5C0601]">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Legal</h3>
              <ul>
                <li><a href="/privacy-policy" className="hover:underline text-[#5C0601]">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:underline text-[#5C0601]">Terms and Services</a></li>
                <li><a href="/cookie-policy" className="hover:underline text-[#5C0601]">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Contact Us</h3>
              <ul>
                <li><a href="mailto:contact@craftify.com" className="hover:underline text-[#5C0601]">contact@craftify.com</a></li>
                <li><a href="tel:123-456-7890" className="hover:underline text-[#5C0601]">123-456-7890</a></li>
                <li className='text-[#5C0601]'>Davao City</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-black">Follow Us</h3>
              <ul>
                <li><a href="https://www.craftify/facebook.com" className="hover:underline text-[#5C0601]">Facebook</a></li>
                <li><a href="https://www.craftify/instagram.com" className="hover:underline text-[#5C0601]">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default HowItWorks;