import React from "react";
import styled from "styled-components";
import { Row, Col, Header, Spacer } from "@urkellabs/ucl";

// Components
import SectionHeader from "components/shared/SectionHeader";

// Images
import Research from "components/img/Research";
import Developers from "components/img/Developers";
import Community from "components/img/Community";

const Wrapper = styled.section`
  min-height: 380px;
`;

const About = () => {
  return (
    <Wrapper>
      <SectionHeader small align="center" title="Handshake is a decentralized, permissionless naming protocol">
        <Header xsmall>every peer on the network validates and manages the root DNS naming zone for an alternative to existing certificate authorities and naming systems</Header>
      </SectionHeader>
      <Spacer px={75} />
      <Row>
        {/* @TODO: add call to actions for each category */}
        <Col mobile={12} tablet>
          <Research />
        </Col>
        <Col mobile={12} tablet>
          <Developers />
        </Col>
        <Col mobile={12} tablet>
          <Community />
        </Col>
      </Row>
    </Wrapper>
  )
};

export default About;