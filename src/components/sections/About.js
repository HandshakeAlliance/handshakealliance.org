import React from "react";
import styled from "styled-components";

// Components
import SectionHeader from "components/shared/SectionHeader";

const Wrapper = styled.section`
  min-height: 380px;
`;

const About = () => {
  return (
    <Wrapper>
      <SectionHeader small align="center" title="Handshake is a decentralized, permissionless naming protocol">
        <span>where every peer validates and manages the root DNS naming zone for an alternative to existing certificate authorities and naming systems</span>
      </SectionHeader>
    </Wrapper>
  )
};

export default About;