import React, { Component } from 'react';
import * as Partners from './styled-components';

import Amentum from '../Logos/Amentum';
import { ReactComponent as Connext } from '../../img/connext.svg';
import Namebase from '../Logos/Namebase';
import Provide from '../Logos/Provide';
import Urkel from '../Logos/Urkel';
export default class PartnersComponent extends Component {
  render() {
    return (
      <Partners.Wrapper>

        <Partners.Header>Collaborators</Partners.Header>
        <Partners.Hr />

        <Partners.Logos>
          <Partners.LogoWrapper href="https://connext.network/" target="_blank" rel="noopener noreferrer">
            <Connext height="70px" />
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
          <Partners.LogoWrapper href="https://namebase.io/" target="_blank" rel="noopener noreferrer">
            <Namebase height="35px" />
          </Partners.LogoWrapper>
        </Partners.Logos>

      </Partners.Wrapper>
    )
  }
}
