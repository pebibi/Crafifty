import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Explore from './Explore';
import DashboardArtist from './DashboardArtist';

const App = () => {
  return (
    <DashboardArtist />
  );
};

export default App;