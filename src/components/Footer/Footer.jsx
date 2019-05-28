import React, { Component } from 'react';
import styled from 'styled-components';
import * as Footer from './styled-components';



export default class FooterComponent extends Component {
  render() {
    return (
      <Footer.Wrapper>
        {/* TODO Consider adding backlinks to other sites here... Much like our other sites' footers */}

        <Footer.FaContainer>
          <Footer.Fa href="https://github.com/HandshakeAlliance" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt fa-2x"></i>
          </Footer.Fa>
          <Footer.Fa href="https://twitter.com/HNSalliance" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </Footer.Fa>
          <Footer.Fa href="https://medium.com/@handshakealliance" className="link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium-m fa-2x"></i>
          </Footer.Fa>
        </Footer.FaContainer>

      </Footer.Wrapper>
    )
  }
}