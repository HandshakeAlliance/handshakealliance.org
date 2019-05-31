import React, { Component } from 'react';
import Amentum from '../Logos/Amentum';
import Namebase from '../Logos/Namebase';
import Provide from '../Logos/Provide';
import Urkel from '../Logos/Urkel';
import * as Partners from './styled-components';

export default class PartnersComponent extends Component {
  render() {
    return (
      <Partners.Wrapper>

        <Partners.Header>Collaborators</Partners.Header>

        <Partners.Logos>
          <Partners.LogoWrapper href="https://namebase.io/" target="_blank" rel="noopener noreferrer">
            <Namebase height="35px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://urkel.io/" target="_blank" rel="noopener noreferrer">
            <Urkel height="60px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://amentum.org/" target="_target" rel="noopener noreferrer">
            <Amentum height="70px" />
          </Partners.LogoWrapper>
          <Partners.LogoWrapper href="https://provide.services/" target="_blank" rel="noopener noreferrer">
            <Provide height="70px" />
          </Partners.LogoWrapper>
        </Partners.Logos>

      </Partners.Wrapper>
    )
  }
}
