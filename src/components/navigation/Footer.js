import React from "react";
import styled from "styled-components";
import { Row, Col, Header } from "@urkellabs/ucl";

const StyledFooter = styled.footer`
  margin: 150px 0 25px 0;
`;

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledHeader = styled(Header)`
  font-size: 14px;
  margin-bottom: 15px;
`;

// @TODO: build out pages for each item and add gatsby links
const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Row>
          <Col mobile={12} tablet={6} desktop>
            <StyledHeader bold>Individuals</StyledHeader>
            <StyledHeader>What is Handshake?</StyledHeader>
            <StyledHeader>What is HNS?</StyledHeader>
            <StyledHeader>Use Handshake</StyledHeader>
            <StyledHeader>Handshake Wallets</StyledHeader>
            <StyledHeader>Guides and Resources</StyledHeader>
          </Col>
          <Col mobile={12} tablet={6} desktop>
            <StyledHeader bold>Developers</StyledHeader>
            <StyledHeader>Get Started</StyledHeader>
            <StyledHeader>Developer Resources</StyledHeader>
            <StyledHeader>Handshake Whitepaper</StyledHeader>
            <StyledHeader>Developer Roadmap</StyledHeader>
          </Col>
          <Col mobile={12} tablet={6} desktop>
            <StyledHeader bold>Community</StyledHeader>
            <StyledHeader>Blog</StyledHeader>
            <StyledHeader>How Can I Help?</StyledHeader>
            <StyledHeader>Developer Assets</StyledHeader>
            <StyledHeader>Support</StyledHeader>
          </Col>
          <Col mobile={12} tablet={6} desktop>
            <StyledHeader bold>About Handshakealliance.org</StyledHeader>
            <StyledHeader>About Us</StyledHeader>
            <StyledHeader>Language Support</StyledHeader>
            <StyledHeader>Privacy Policy</StyledHeader>
            <StyledHeader>Terms of Use</StyledHeader>
            <StyledHeader>Cookie Policy</StyledHeader>
            <StyledHeader>Contact</StyledHeader>
          </Col>
        </Row>
      </Wrapper>
    </StyledFooter>
  )
};

export default Footer;