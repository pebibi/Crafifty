import React from 'react';
import Navbar from '../Navbars/Navbar';
import hero1 from '../assets/hero1.png'; // Adjust the path as necessary
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Explore = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
      <Navbar />
      <div className="container mx-auto text-center py-20">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12">
          Explore Craftify and join our <span className="text-orange-600">growing community</span> to discover numerous <span className="text-orange-600">opportunities</span>.
        </h1>

        {/* Hire Artist Section */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:ml-4">
              <img src={hero1} alt="Hire Artist" className="mx-auto h-64 w-64 " />
              <div className="flex justify-center md:justify-start mt-4">
                <span className="h-2 w-2 bg-orange-600 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              </div>
            </div>  
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">HIRE ARTIST</h2>
              <p className="text-gray-600 mb-6">Placeholder text for a description or value proposition about hiring an artist.</p>
              <button className="bg-[#5C0601] text-white py-2 px-4 rounded-md hover:bg-[#5c0601ed]">HIRE ARTIST NOW</button>
            </div>
          </div>
        </div>

        {/* Find Client Section */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-4">
              <img src={hero1} alt="Find Client" className="mx-auto h-64 w-64" />
              <div className="flex justify-center md:justify-start mt-4">
                <span className="h-2 w-2 bg-orange-600 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              </div>
            </div>
            <div className="text-center md:text-right md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">FIND CLIENT</h2>
              <p className="text-gray-600 mb-6">Placeholder text for a description about finding clients.</p>
              <button className="bg-[#5C0601] text-white py-2 px-4 rounded-md hover:bg-[#5c0601ed]">FIND CLIENT NOW</button>
            </div>
          </div>
        </div>

        {/* Craftify Community Section */}
        <div className="w-full p-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="mb-4 md:mb-0 md:ml-4">
              <img src={hero1} alt="Craftify Community" className="mx-auto h-64 w-64" />
              <div className="flex justify-center md:justify-start mt-4">
                <span className="h-2 w-2 bg-orange-600 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
                <span className="h-2 w-2 bg-gray-300 rounded-full mx-1"></span>
              </div>
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">CRAFTIFY COMMUNITY</h2>
              <p className="text-gray-600 mb-6">Placeholder text for a description or value proposition about the Craftify community.</p>
            </div>
          </div>
        </div>

        {/* Craftify Opportunities Section */}
        <div className="w-full p-6">
        <div className="flex flex-col md:flex-row items-center">
  <div className="text-center md:text-left md:flex-1">
    <h2 className="text-2xl font-bold text-orange-600 mb-4">CRAFTIFY OPPORTUNITIES</h2>
  </div>       
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div className=" flex items-center justify-center">
    <img src={hero1} alt="Opportunity 1" className="h-64 w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg " />
  </div>
  <div className="">
    <img src={hero1} alt="Opportunity 2" className="h-80 w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
  </div>
  <div className=" flex items-center justify-center">
    <img src={hero1} alt="Opportunity 3" className="h-64 w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
  </div>
</div>
<div className="text-center md:text-left md:flex-1 p-4">
  <p className="text-black mb-6 text-center font-bold">Placeholder text for a description or value proposition about the Craftify community.</p>
</div>
</div>

{/* Shop Section */}
<div className=" p-6">
  <h2 className="text-2xl font-bold text-orange-600 mb-4">SHOP SECTION</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white shadow-md p-4 rounded-lg border border-orange-600">
      <img src={hero1} alt="Opportunity 1" className="mx-auto h-64 w-50 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <p className="text-orange-600 mt-2">₱1,000.00</p>
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg border border-orange-600">
      <img src={hero1} alt="Opportunity 2" className="mx-auto h-64 w-50 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <p className="text-orange-600 mt-2">₱1,000.00</p>
    </div>
    <div className="bg-white shadow-md p-4 rounded-lg border border-orange-600">
      <img src={hero1} alt="Opportunity 3" className="mx-auto h-64 w-50 object-cover rounded-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-lg" />
      <p className="text-orange-600 mt-2">₱1,000.00</p>
    </div>
  </div>
</div>

        {/* Call to Action */}
        <div className="w-full text-center py-6">
          <button className="bg-[#5C0601] text-white py-2 px-4 rounded-md hover:bg-[#5c0601ed]">JOIN CRAFTIFY NOW</button>
        </div>

        
      </div>
      {/* Footer */}
      <footer className="bg-[#FBD3A7] text-white py-8">
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

    
  );
};

export default Explore;