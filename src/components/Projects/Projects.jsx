import React, { Component } from 'react';
import * as Projects from './styled-components';
import HNScan from '../Logos/HNScan';
import HNSAcademy from '../Logos/HNSAcademy';
import HNSPool from '../Logos/HNSPool';
import Nameian from '../Logos/Nameian';
import HA from '../Logos/HA';
import Handshake from '../Logos/Handshake';

// TODO consider adding roadmap or progress notes to each card

export default class ProjectsComponent extends Component {
  render() {
    return (
      <Projects.Wrapper>
        <Projects.Header>Projects</Projects.Header>
        <Projects.CardContainer>
          <Projects.Card href="https://hnscan.com" target="_blank">
            <Projects.Brand><HNScan /></Projects.Brand>
            The unofficial Handshake block explorer. Claim your airdrops or delve into the chain here.
          </Projects.Card>

          <Projects.Card href="https://handshakehash.com/" target="_blank">
            <Projects.Brand><HNSPool /></Projects.Brand>
            Never mine alone again. Join a community of miners dedicated to solving blocks efficiently.
          </Projects.Card>

          <Projects.Card href="https://handshakeacademy.org" target="_blank">
            <Projects.Brand><HNSAcademy /></Projects.Brand>
            Whether you're just getting started with Handshake, or if you're a veteran developer, this is the defacto location for online resources.
          </Projects.Card>

          <Projects.Card href="https://nameian.com" target="_blank">
            <Projects.Brand><Nameian /></Projects.Brand>
            The primary Name notification service. Names on the network go fast, so be the first to know.
          </Projects.Card>

          <Projects.Card href="https://handshake.community/categories" target="_blank">
            <Projects.Brand><HA />Handshake Community</Projects.Brand>
            Join the Handshake Community on our forums. Discuss development, mining, or anything else Handshake related. Start contributing!
          </Projects.Card>

          <Projects.Card href="https://handshake.org/">
            <Projects.Brand><Handshake />&nbsp;Documentation</Projects.Brand>
            General Handshake documentation for newbies. You can find the notes on the daemon and node here.
          </Projects.Card>
        </Projects.CardContainer>
      </Projects.Wrapper>
    )
  }
}