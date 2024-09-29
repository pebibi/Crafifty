import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Page/Homepage';
import AboutUs from './Page/AboutUs';
import Explore from './Page/Explore';
import HowItWorks from './Page/HowItWorks';
import DashboardArtist from './DashboardArtist';
import Community from './Community';
import SignUpPage from './Page/SignUpPage';
import ProfileSetupPage from './Page/ProfileSetupPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
        <Route path="/ProfileSetupPage" element={<ProfileSetupPage />} />
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