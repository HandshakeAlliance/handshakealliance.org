import React, { Component } from 'react';
import * as Navbar from './styled-components';
import AllianceDesktopLogo from '../Logos/AllianceDesktopLogo.jsx';

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar.Wrapper>
        <Navbar.LogoLeft>
          <AllianceDesktopLogo height="32px" />
          <Navbar.Item></Navbar.Item>
        </Navbar.LogoLeft>
      </Navbar.Wrapper>
    )
  }
}
