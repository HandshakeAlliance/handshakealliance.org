import React, { Component } from 'react';
import * as Navbar from './styled-components';
import AllianceDesktopLogo from '../Logos/AllianceDesktopLogo.jsx';
// import AllianceMobileLogo from './AllianceMobileLogo.jsx';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar.Wrapper>
        <Navbar.LogoLeft>
          <AllianceDesktopLogo height="32px" />
          {/* <AllianceMobileLogo /> */}
        </Navbar.LogoLeft>
      </Navbar.Wrapper>
    )
  }
}
