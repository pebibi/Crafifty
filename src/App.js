import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Page/Homepage';
import AboutUs from './Page/AboutUs';
import Explore from './Page/Explore';
import HowItWorks from './Page/HowItWorks';
import DashboardArtist from './Page/Artist/DashboardArtist';
import Community from './Page/Artist/Community';
import SignUpPage from './Page/Artist/SignUpPage';
import ProfileSetupPage from './Page/Artist/ProfileSetupPage';
import ProfileSetupPage2 from './Page/Artist/ProfileSetupPage2';
import ProfileSetupPage3 from './Page/Artist/ProfileSetupPage3';
import ProfileSetupPage4 from './Page/Artist/ProfileSetupPage4';
import ProfileSetupPage5 from './Page/Artist/ProfileSetupPage5';
import ProfileSetupClientPage from './Page/Client/ProfileSetupClientPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile-setup-page-1" element={<ProfileSetupPage />} />
        <Route path="/profile-setup-page-2" element={<ProfileSetupPage2 />} />
        <Route path="/profile-setup-page-3" element={<ProfileSetupPage3 />} />
        <Route path="/profile-setup-page-4" element={<ProfileSetupPage4 />} />
        <Route path="/profile-setup-page-5" element={<ProfileSetupPage5 />} />
        <Route path="/sign-up-client" element={<SignUpPageClient />} />
        <Route path="/profile-setup-client-page-1" element={<ProfileSetupClientPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/dashboard-artist" element={<DashboardArtist />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;