import React, { Component } from 'react';
import HA from '../Logos/HA';
import * as Footer from './styled-components';



export default class FooterComponent extends Component {
  render() {
    return (
      <Footer.Wrapper>
        <Footer.ActionContainer>

          <Footer.BlockColumn>
            <HA color="#fff" />
            <Footer.SubscribeLabel>Want to save the internet? Subscribe for notifications.</Footer.SubscribeLabel>
            <Footer.SubscribeInput />
            <Footer.SubscribeButton>Join Us</Footer.SubscribeButton>
          </Footer.BlockColumn>

          <Footer.BlockRow>
            <Footer.LinkContainer>
              <Footer.Header>Resources</Footer.Header>
              <Footer.Link href="https://hnscan.com/">HNScan</Footer.Link>
              <Footer.Link href="https://nameian.com/">Nameian</Footer.Link>
              <Footer.Link href="https://handshakeacademy.org/en/">Academy</Footer.Link>
              <Footer.Link href="https://handshake.community/">Community</Footer.Link>
            </Footer.LinkContainer>
            <Footer.LinkContainer>
              <Footer.Header>Related</Footer.Header>
              <Footer.Link href="https://github.com/HandshakeAlliance">Github</Footer.Link>
              <Footer.Link href="https://handshakehash.com/">Pool</Footer.Link>
              <Footer.Link href="https://handshakeacademy.org/en/">Learning</Footer.Link>
              <Footer.Link href="https://handshake-org.github.io/api-docs/">Docs</Footer.Link>
            </Footer.LinkContainer>
          </Footer.BlockRow>

        </Footer.ActionContainer>

        <Footer.InfoContainer>
          <Footer.TextContainer>
            <Footer.Bold>CONTACT</Footer.Bold>
            <span>engineering@urkel.io</span>
          </Footer.TextContainer>
        </Footer.InfoContainer>

        <Footer.IconContainer>
          <Footer.Fa href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt fa-2x"></i>
          </Footer.Fa>
          <Footer.Fa href="https://twitter.com/HNSalliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </Footer.Fa>
          <Footer.Fa href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium-m fa-2x"></i>
          </Footer.Fa>
        </Footer.IconContainer>


      </Footer.Wrapper>
    )
  }
}