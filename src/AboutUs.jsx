import React from "react";
import Navbar from './Navbar'; 
import logo from '../src/assets/logo.png'; 

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-poppins">
     <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo} alt="Craftify Logo" className="h-12" />
        <nav className="space-x-4">
          <a href="/" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold ">Home</a>
          <a href="/Explore" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold ">Explore</a>
          <a href="/AboutUs" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold ">About Us</a>
          <a href="/HowItWorks" className="text-[#5C0601] hover:text-gray-900 uppercase font-semibold ">How It Works</a>
          <a href="/signup" className="py-2 px-4 bg-[#5C0601] text-white font-semibold rounded-md shadow-sm hover:bg-[#7A1F0A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601] uppercase">Sign Up</a>
          <a href="/login" className="py-2 px-4 border border-[#5C0601] text-[#5C0601] font-semibold rounded-md shadow-sm hover:bg-[#FBD3A7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5C0601] uppercase">Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#FBD3A7] text-[#5C0601] py-20">
        <div className="container mx-auto text-center py-20">
          <h1 className="text-5xl font-bold mb-6">About Craftify</h1>
          <p className="text-lg mb-8">
            Bringing Artists and Art Lovers Together through a Personalized Commissioning Platform.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#5C0601]">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed px-6 md:px-20">
            At Craftify, we are passionate about making art accessible and personal. We aim to connect artists with clients who want to commission unique, personalized pieces of art. Whether it's a painting, sculpture, or digital design, Craftify enables artists and clients to collaborate and bring their visions to life.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#5C0601]">How Craftify Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Discover Art</h3>
                <p className="text-gray-600">Browse a wide range of artists and their portfolios. Explore their previous work and find the style that fits your vision.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Collaborate</h3>
                <p className="text-gray-600">Connect with your chosen artist. Share your ideas, preferences, and specific needs to personalize the artwork.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Commission</h3>
                <p className="text-gray-600">Finalize the details and commission your personalized piece of art. Enjoy a seamless and secure process from start to finish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#5C0601]">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Jhonna Mae Awayan</h3>
                <p className="text-gray-600">Project Manager & Project Leader</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Phoebe Kaye Lerog</h3>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg border hover:bg-[#FBD3A7]">
                <h3 className="text-xl font-bold mb-4 text-[#5C0601]">Jaydie Ranes</h3>
                <p className="text-gray-600">Backend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default AboutUs;
