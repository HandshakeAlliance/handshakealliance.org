import React from "react";
import styled from "styled-components";
import { Row, Col, Flex, Header, Spacer, breakpoint } from "@urkellabs/ucl";

// Components
import SectionHeader from "components/shared/SectionHeader";

// Images
import Research from "components/img/Research";
import Developers from "components/img/Developers";
import Community from "components/img/Community";

const Wrapper = styled.section`
  min-height: 380px;
`;

const StyledHeader = styled(Header)`
  font-size: 20px;
  font-weight: 500;
`;

const SectionSubtext = styled(Header)`
  color: var(--color-gray-6);
`;

const Subtext = styled(Header)`
  color: var(--color-gray-6);

  ${breakpoint.tablet} {
    min-height: 150px;
  }
`;

// @TODO: replace with Gatsby Link
const StyledLink = styled.div`
  color: var(--color-primary);
  cursor: pointer;
`;

const About = () => {
  return (
    <Wrapper>
      <SectionHeader small align="center" title="Handshake is a decentralized, permissionless naming protocol">
        <SectionSubtext xsmall>every peer on the network validates and manages the root DNS naming zone for an alternative to existing certificate authorities and naming systems</SectionSubtext>
      </SectionHeader>
      <Spacer px={75} />
      <Row>
        {/* @TODO: add call to actions for each category */}
        <Col mobile={12} tablet mb={25} mt={25}>
          <Research />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>About Handshake</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Suspendisse auctor velit sit amet odio vestibulum rutrum.
              Morbi a neque at urna tincidunt varius nec sed mauris.
              Nulla id ligula imperdiet, feugiat elit sit amet, vulputate enim.
              In nec faucibus ex. Cras convallis a magna quis sodales.
            </Subtext>
            <Spacer />
            <StyledLink>Get started with Handshake --></StyledLink>
          </Flex>
        </Col>
        <Col mobile={12} tablet mb={25} mt={25}>
          <Developers />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>Developers</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Suspendisse auctor velit sit amet odio vestibulum rutrum.
              Morbi a neque at urna tincidunt varius nec sed mauris.
              Nulla id ligula imperdiet, feugiat elit sit amet, vulputate enim.
              In nec faucibus ex. Cras convallis a magna quis sodales.
            </Subtext>
            <Spacer />
            <StyledLink>Start building --></StyledLink>
          </Flex>
        </Col>
        <Col mobile={12} tablet mb={25} mt={25}>
          <Community />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>Community</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Suspendisse auctor velit sit amet odio vestibulum rutrum.
              Morbi a neque at urna tincidunt varius nec sed mauris.
              Nulla id ligula imperdiet, feugiat elit sit amet, vulputate enim.
              In nec faucibus ex. Cras convallis a magna quis sodales.
            </Subtext>
            <Spacer />
            <StyledLink>Explore the community --></StyledLink>
          </Flex>
        </Col>
      </Row>
    </Wrapper>
  )
};

export default About;