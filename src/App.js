import React from 'react';
import ReactGA from 'react-ga';
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

// TODO: is there a better way to do this - read react-ga docs
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
  );
}
