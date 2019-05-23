import React from 'react';
import './App.scss';

import {ThemeProvider} from 'styled-components';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import HeroComponent from './components/Hero/Hero.jsx';
import ObjectiveComponent from './components/Objective/Objective.jsx';

import themes from './theme-variable.js';
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
      </div>
    </ThemeProvider>
  );
}

export default App;
