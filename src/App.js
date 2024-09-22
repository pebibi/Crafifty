import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Explore from './Explore';
import HowItWorks from './HowItWorks';
import DashboardArtist from './DashboardArtist';
import Community from './Community';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
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