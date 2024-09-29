import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import heroImage1 from '../assets/hero1.png'; // Adjust the path as necessary
import heroImage2 from '../assets/hero2.png'; // Adjust the path as necessary
import heroImage3 from '../assets/hero3.png'; // Adjust the path as necessary
import portrait from '../assets/MATCH.png'; // Adjust the path as necessary
import heroImage4 from '../assets/hero4.png'; // Adjust the path as necessary
import heroImage5 from '../assets/hero5.png'; // Adjust the path as necessary
import heroImage6 from '../assets/hero6.png'; // Adjust the path as necessary
import heroImage7 from '../assets/hero7.png'; // Adjust the path as necessary
import heroImage8 from '../assets/hero8.png'; // Adjust the path as necessary
import heroImage9 from '../assets/hero9.png'; // Adjust the path as necessary
import heroImage10 from '../assets/hero10.png'; // Adjust the path as necessary
import Navbar from '../Navbars/Navbar';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-16 bg-[#FBD3A7]">
        <div className="flex justify-center space-x-4 mb-8">
          <img src={heroImage1} alt="Person painting on canvas" className="h-64 w-64 object-cover rounded-md shadow-md" />
          <img src={heroImage2} alt="Person painting on canvas" className="h-64 w-64 object-cover rounded-md shadow-md" />
          <img src={heroImage3} alt="Person painting on canvas" className="h-64 w-64 object-cover rounded-md shadow-md" />
        </div>
        <h1 className="text-4xl font-bold mb-4">DISCOVER THE PERFECT LOCAL ARTIST IMMEDIATELY</h1>
        <button className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
          Get Started
        </button>
      </section>

      {/* Category Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Art Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {['Paintings', 'Sculptures', 'Pottery', 'Graphic Design', 'Animation', 'Textile', 'Woodworking'].map(category => (
            <div key={category} className="p-4 bg-beige-200 rounded-md shadow-md text-center border border-[#CA5310]">
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
        <div className="relative w-full md:w-1/2">
          <img src={portrait} alt="Luis 'Junyee' Yee, Jr." className="w-full h-auto object-cover " />
          <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply"></div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">UNLOCK CREATIVE COLLABORATIONS WITH ARTISTIC TALENTS</h1>
        </div>
      </section>
      
      <section className="text-center py-16 bg-white">
      <h1 className="text-4xl font-bold mb-4">SELECT AND PERSONALIZE THE <span className="text-orange-600">ART OF YOUR CHOICE</span></h1>
        <div className="flex justify-center space-x-4 mb-8">
          <img src={heroImage4} alt="Artist working on painting" className="h-64 w-64 object-cover rounded-md shadow-md" />
          <img src={heroImage5} alt="Artist working on painting" className="h-64 w-64 object-cover rounded-md shadow-md" />
          <img src={heroImage6} alt="Artist working on painting" className="h-64 w-64 object-cover rounded-md shadow-md" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg">
                <div className="mb-4">
                  <img src={heroImage7} alt="Verified User Profiles" className="mx-auto h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified User Profiles</h3>
                <p className="text-gray-600">Ensuring trustworthiness with verified profiles.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg">
                <div className="mb-4">
                  <img src={heroImage8} alt="Personal Recommendation" className="mx-auto h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personal Recommendation</h3>
                <p className="text-gray-600">Receive personalized recommendations based on reviews.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg">
                <div className="mb-4">
                  <img src={heroImage9} alt="Easy Matching" className="mx-auto h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Matching</h3>
                <p className="text-gray-600">Seamlessly connect with others on the platform.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 p-6">
              <div className="bg-white shadow-md p-8 rounded-lg">
                <div className="mb-4">
                  <img src={heroImage10} alt="Secure Payment Processing" className="mx-auto h-16 w-16" />
                </div>
                <h3 className="text-xl font-bold mb-2">Secure Payment Processing</h3>
                <p className="text-gray-600">Enjoy secure and encrypted payment transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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

export default Homepage;