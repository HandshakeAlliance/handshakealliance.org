import React from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';
import styled from "@emotion/styled";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import NavbarComponent from 'components/Navbar/Navbar.jsx';
import HeroComponent from 'components/Hero/Hero.jsx';
import ObjectiveComponent from 'components/Objective/Objective.jsx';
import ToolsComponent from 'components/Tools/Tools.jsx';
import ExchangesComponent from "components/Exchanges/Exchanges";
import DonationsComponent from 'components/Donations/Donations.jsx';
import FooterComponent from 'components/Footer/Footer.jsx';
import EventsComponent from 'components/Events/Events';

import themes from './theme-variables.js';
// TODO: replace with ucl breakpoints
import { breakpoints } from './breakpoint-variables.js';

// TODO: remove and fix breakpoints
const theme = {
  breakpoint: breakpoints,
  ...themes
};

function initializeReactGA() {
  ReactGA.initialize('UA-133243722-1');
  ReactGA.pageview('/');
}

// TODO: I feel like this could just be a flex
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export default function App() {
  initializeReactGA();
  return (
    <ThemeProvider theme={theme}>
      <Content>
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
      </Content>
    </ThemeProvider>
  );
}
