import React from 'react';
import ReactGA from 'react-ga';
import './App.scss';

import { ThemeProvider } from 'styled-components';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import HeroComponent from './components/Hero/Hero.jsx';
import ObjectiveComponent from './components/Objective/Objective.jsx';
import ToolsComponent from './components/Tools/Tools.jsx';
import ExchangesComponent from "components/Exchanges/Exchanges";
import DonationsComponent from './components/Donations/Donations.jsx';
import FooterComponent from './components/Footer/Footer.jsx';
import EventsComponent from 'components/Events/Events';

import themes from './theme-variables.js';
import { breakpoints } from './breakpoint-variables.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = {
  breakpoint: breakpoints,
  ...themes
};

function initializeReactGA() {
  ReactGA.initialize('UA-133243722-1');
  ReactGA.pageview('/');
}

function App() {
  initializeReactGA();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavbarComponent />
        <HeroComponent />
        <ObjectiveComponent />
        <EventsComponent />
        <ExchangesComponent />
        <ToolsComponent />
        <DonationsComponent />
        <FooterComponent />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={true}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
