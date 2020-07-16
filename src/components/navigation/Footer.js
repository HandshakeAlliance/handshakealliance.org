import React from "react";
import styled from "styled-components";
import { Row, Col, Flex, Header, Hidden, Spacer, breakpoint } from "@urkellabs/ucl";

const StyledFooter = styled.footer`
  margin: 100px 0 25px 0;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  overflow: hidden;

  ${breakpoint.desktop} {
    width: 95%;
  }
`;

const StyledHeader = styled(Header)`
  font-size: 14px;
  margin-bottom: 15px;
`;

const FooterLink = styled(Header)`
  font-size: 14px;
  margin-bottom: 15px;
  cursor: pointer;
  color: var(--color-gray-6);

  &:hover {
    color: var(--color-primary);
  }
`;

// @TODO: build out pages for each item and add gatsby links
const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Row>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>Individuals</StyledHeader>
            <FooterLink>What is Handshake?</FooterLink>
            <FooterLink>What is HNS?</FooterLink>
            <FooterLink>Use Handshake</FooterLink>
            <FooterLink>Handshake Wallets</FooterLink>
            <FooterLink>Guides and Resources</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>Developers</StyledHeader>
            <FooterLink>Get Started</FooterLink>
            <FooterLink>Developer Resources</FooterLink>
            <FooterLink>Handshake Whitepaper</FooterLink>
            <FooterLink>Developer Roadmap</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>Community</StyledHeader>
            <FooterLink>Blog</FooterLink>
            <FooterLink>How Can I Help?</FooterLink>
            <FooterLink>Developer Assets</FooterLink>
            <FooterLink>Support</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>About Handshakealliance.org</StyledHeader>
            <FooterLink>About Us</FooterLink>
            <FooterLink>Language Support</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Use</FooterLink>
            <FooterLink>Cookie Policy</FooterLink>
            <FooterLink>Contact</FooterLink>
          </Col>
        </Row>
      </Wrapper>
    </StyledFooter>
  )
};

export default Footer;