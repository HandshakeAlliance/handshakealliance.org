import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Row, Col, Header, breakpoint } from "@urkellabs/ucl";

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

const FooterLink = styled(Link)`
  font-size: 14px;
  margin-bottom: 15px;
  cursor: pointer;
  color: var(--color-gray-6);
  display: block;

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
            <FooterLink to="/handshake">What is Handshake?</FooterLink>
            <FooterLink to="/hns">What is HNS?</FooterLink>
            <FooterLink to="/earn">Earn HNS</FooterLink>
            <FooterLink to="/use">Use Handshake</FooterLink>
            <FooterLink to="/wallets">Handshake Wallets</FooterLink>
            <FooterLink to="/guides">Guides and Resources</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>Developers</StyledHeader>
            <FooterLink to="/build">Get Started</FooterLink>
            <FooterLink to="/resources">Developer Resources</FooterLink>
            <FooterLink to="/whitepaper">Handshake Whitepaper</FooterLink>
            <FooterLink to="/roadmap">Developer Roadmap</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>Community</StyledHeader>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/help">How Can I Help?</FooterLink>
            <FooterLink to="/assets">Developer Assets</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={25}>
            <StyledHeader bold>About Handshakealliance.org</StyledHeader>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/language">Language Support</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/terms">Terms of Use</FooterLink>
            <FooterLink to="/cookies">Cookie Policy</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </Col>
        </Row>
      </Wrapper>
    </StyledFooter>
  )
};

export default Footer;