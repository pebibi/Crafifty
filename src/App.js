import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Page/Homepage';
import AboutUs from './Page/AboutUs';
import Explore from './Page/Explore';
import HowItWorks from './Page/HowItWorks';
import DashboardArtist from './Page/DashboardArtist';
import Community from './Community';
import SignUpPage from './Page/SignUpPage';
import ProfileSetupPage from './Page/ProfileSetupPage';
import ProfileSetupPage2 from './Page/ProfileSetupPage2';
import ProfileSetupPage3 from './Page/ProfileSetupPage3';
import ProfileSetupPage4 from './Page/ProfileSetupPage4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/ProfileSetupPage" element={<ProfileSetupPage />} />
        <Route path="/ProfileSetupPage2" element={<ProfileSetupPage2 />} />
        <Route path="/ProfileSetupPage3" element={<ProfileSetupPage3 />} />
        <Route path="/ProfileSetupPage4" element={<ProfileSetupPage4 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/DashboardArtist" element={<DashboardArtist />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
    </Router>
  );
};

export default App;