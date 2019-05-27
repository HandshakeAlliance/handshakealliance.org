import React, { Component } from 'react';
import styled from 'styled-components';

const Logolink = styled.a`
  color: #fff;
  width: 48px;
`;

export default class FooterComponent extends Component {
  render() {
    return (
      <div>
        <Logolink href="https://github.com/HandshakeAlliance" className="link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-alt"></i>
        </Logolink>
        <Logolink href="https://twitter.com/HNSalliance" className="link" target="_blank" rel="noopener noreferrer">
          <i className="fa-twitter"></i>
        </Logolink>
        <Logolink href="https://medium.com/@handshakealliance" className="link" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium-m"></i>
        </Logolink>
      </div>
    )
  }
}