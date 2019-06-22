import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

import {ThemeProvider} from 'styled-components';

import NavbarComponent from './components/Navbar/Navbar.jsx';
import HomeScreen from './screens/Home';
import ProjectsScreen from './screens/Projects';
import FooterComponent from './components/Footer/Footer.jsx';

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
        <Router>
          {/* <Route path="/" exact component={HomeScreen}/> */}
          <Route path="/projects" exact component={ProjectsScreen}/>
          {/* <Route path="/donations" exact component={DonationsScreen}/> */}
          {/* <Route path="*" component={NotFound}/> */}
        </Router>
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
