import React, { Component } from 'react';
import * as Navbar from './styled-components';

export default class NavbarComponent extends Component {

  render() {
    return (
      <Navbar.Wrapper>
        <Navbar.LogoLeft></Navbar.LogoLeft>
        <Navbar.LogoRight></Navbar.LogoRight>
      </Navbar.Wrapper>
    )
  }
}