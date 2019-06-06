import React from 'react';
import './App.scss';

import {ThemeProvider} from 'styled-components';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import HeroComponent from './components/Hero/Hero.jsx';
import ObjectiveComponent from './components/Objective/Objective.jsx';
import ProjectsComponent from './components/Projects/Projects.jsx';
import PartnersComponent from './components/Partners/Partners.jsx';
import DonationsComponent from './components/Donations/Donations.jsx';
import FooterComponent from './components/Footer/Footer.jsx';

import themes from './theme-variables.js';
import { breakpoints } from './breakpoint-variables.js';

const theme = {
  breakpoint: breakpoints,
  ...themes
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <ObjectiveComponent />
        <ProjectsComponent />
        <PartnersComponent />
        <DonationsComponent />
        <FooterComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
