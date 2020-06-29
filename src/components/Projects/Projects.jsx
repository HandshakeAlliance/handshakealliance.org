import React from 'react';

// Components
import * as Projects from './styled-components';
import SectionWrapper from 'components/shared/SectionWrapper';
import SectionHeader from 'components/shared/SectionHeader';

// Logos
import HNScan from 'components/Logos/HNScan';
import HNSAcademy from 'components/Logos/HNSAcademy';
import HNSPool from 'components/Logos/HNSPool';
import Nameian from 'components/Logos/Nameian';
import HandshakeCommunity from 'components/Logos/HandshakeCommunity';
import HandshakeDocs from 'components/Logos/HandshakeDocs';


export default function ProjectsComponent() {
  return (
    <SectionWrapper>
      <SectionHeader>Projects</SectionHeader>
      <Projects.CardContainer>
        <Projects.Card href="https://hnscan.com" target="_blank">
          <Projects.Brand><HNScan /></Projects.Brand>
            The unofficial Handshake block explorer. Claim your airdrops or delve into the chain here.
          </Projects.Card>

        <Projects.Card href="https://hnspool.org" target="_blank">
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
          <Projects.Brand><HandshakeCommunity /></Projects.Brand>
            Join the Handshake Community on our forums. Discuss development, mining, or anything else Handshake related. Start contributing!
          </Projects.Card>

        <Projects.Card href="https://handshake.org/" target="_blank">
          <Projects.Brand><HandshakeDocs /></Projects.Brand>
            General Handshake documentation for newbies. You can find the notes on the daemon and node here.
          </Projects.Card>
      </Projects.CardContainer>
    </SectionWrapper>
  )
}
