import React from "react";
import styled from "styled-components";
import { Header } from "@urkellabs/ucl";

// Components
import SectionHeader from "components/shared/SectionHeader";

const Wrapper = styled.section`
  min-height: 380px;
`;

const About = () => {
  return (
    <Wrapper>
      <SectionHeader small align="center" title="Handshake is a decentralized, permissionless naming protocol">
        <Header xsmall>every peer on the network validates and manages the root DNS naming zone for an alternative to existing certificate authorities and naming systems</Header>
      </SectionHeader>
    </Wrapper>
  )
};

export default About;