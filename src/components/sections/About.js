import React from "react";
import styled from "styled-components";
import { Row, Col, Flex, Header, Hidden, Spacer, breakpoint } from "@urkellabs/ucl";

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
  font-weight: 600;
`;

const SectionSubtext = styled(Header)`
  color: var(--color-gray-6);
`;

const Subtext = styled(Header)`
  color: var(--color-gray-6);
  margin-bottom: 25px;
  max-width: 600px;

  ${breakpoint.onlyTablet} {
    min-height: 100px;
    margin-bottom: 0;
  }
`;

// @TODO: replace with Gatsby Link
const StyledLink = styled.div`
  color: var(--color-primary);
  cursor: pointer;

  &:hover {
    color: var(--color-primary-dark);
    & .arrow {
      transform: translate(5px, 0);
      transition: all 0.25s;
    }
  }
`;

const Arrow = styled.div`
  display: inline-block;
  padding-left: 5px;
`;

const About = () => {
  return (
    <Wrapper>
      <SectionHeader small align="center" title="Handshake is a decentralized, permissionless naming protocol">
        <SectionSubtext xsmall>every peer on the network validates and manages the root DNS naming zone for an alternative to existing certificate authorities and naming systems</SectionSubtext>
      </SectionHeader>
      <Spacer px={75} />
      <Row>
        <Col mobile={12} desktop mb={25} mt={25}>
          <Research />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>About Handshake</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Get to know the Handshake Protocol, why it was created, and how it would benefit
              those using it
            </Subtext>
            <StyledLink>
              Get started with Handshake
              <Arrow className="arrow">&rarr;</Arrow>
            </StyledLink>
          </Flex>
        </Col>
        <Col mobile={12} desktop mb={25} mt={25}>
          <Developers />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>Developers</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Learn about the technical details of the Handshake Protocol and how you can help
            </Subtext>
            <StyledLink>
              <Flex>
                Start building
                <Arrow className="arrow">&rarr;</Arrow>
              </Flex>
            </StyledLink>
          </Flex>
        </Col>
        <Col mobile={12} desktop mb={25} mt={25}>
          <Community />
          <Flex columns mt={50}>
            <StyledHeader xsmall bold>Community</StyledHeader>
            <Spacer />
            <Subtext xsmall>
              Making a positive impact requires the work of many. Join the conversation of a better internet
            </Subtext>
            <StyledLink>
              <Flex>
                Explore the community
                <Arrow className="arrow">&rarr;</Arrow>
              </Flex>
            </StyledLink>
          </Flex>
        </Col>
      </Row>
    </Wrapper>
  )
};

export default About;