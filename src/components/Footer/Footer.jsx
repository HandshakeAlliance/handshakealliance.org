import React, { Component } from 'react';
import AllianceDesktopLogo from '../Logos/AllianceDesktopLogo';
import * as Footer from './styled-components';

export default class FooterComponent extends Component {

  handleSubmit = e => {
    e.preventDefault();
    console.log('submitting!');
  }

  render() {
    return (
      <Footer.Wrapper>
        <Footer.ActionContainer>

          <Footer.BlockColumn onSubmit={this.handleSubmit}>
            <AllianceDesktopLogo height="36px" />
            <Footer.SubscribeLabel>Want to save the internet? Subscribe for notifications.</Footer.SubscribeLabel>
            <Footer.SubscribeInput placeholder="Enter Your Email" type="email" name="EMAIL" />
            <Footer.SubscribeButton type="submit">Join Us</Footer.SubscribeButton>
          </Footer.BlockColumn>

          <Footer.BlockRow>
            <Footer.LinkContainer>
              <Footer.Header>Resources</Footer.Header>
              <Footer.Link href="https://hnscan.com/" target="_blank" rel="noopener noreferrer">HNScan</Footer.Link>
              <Footer.Link href="https://nameian.com/" target="_blank" rel="noopener noreferrer">Nameian</Footer.Link>
              <Footer.Link href="https://handshakeacademy.org/en/" target="_blank" rel="noopener noreferrer">Academy</Footer.Link>
              <Footer.Link href="https://handshake.community/" target="_blank" rel="noopener noreferrer">Community</Footer.Link>
            </Footer.LinkContainer>
            <Footer.LinkContainer>
              <Footer.Header>Related</Footer.Header>
              <Footer.Link href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">Github</Footer.Link>
              <Footer.Link href="https://handshakehash.com/" target="_blank" rel="noopener noreferrer">Pool</Footer.Link>
              <Footer.Link href="https://handshake-org.github.io/api-docs/" target="_blank" rel="noopener noreferrer">Docs</Footer.Link>
            </Footer.LinkContainer>
          </Footer.BlockRow>

        </Footer.ActionContainer>

        <Footer.InfoContainer>
          <Footer.TextContainer>
            <Footer.Bold>CONTACT</Footer.Bold>
            <span>support@handshakealliance.org</span>
          </Footer.TextContainer>
        </Footer.InfoContainer>

        <Footer.IconContainer>
          <Footer.Fa href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt"></i>
          </Footer.Fa>
          <Footer.Fa href="https://twitter.com/HNSalliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </Footer.Fa>
          <Footer.Fa href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium-m"></i>
          </Footer.Fa>
        </Footer.IconContainer>
        <Footer.Copyright>
          Copyright © 2019 Urkel Labs.
          All rights reserved.
        </Footer.Copyright>

      </Footer.Wrapper>
    )
  }
}
