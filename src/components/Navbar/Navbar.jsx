import React, { Component } from 'react';
import * as Navbar from './styled-components';
import AllianceLogo from './AllianceDesktop.jsx';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar.Wrapper>
        <Navbar.LogoLeft>
          <AllianceLogo />
        </Navbar.LogoLeft>
      </Navbar.Wrapper>
    )
  }
}
