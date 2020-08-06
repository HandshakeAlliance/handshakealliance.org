import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Row, Col, Header, Flex, breakpoint } from "@urkellabs/ucl";

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
  color: var(--color-gray-6);

  &:hover {
    color: var(--color-primary);
  }
`;

const FooterExternalLink = styled.a`
  font-size: 14px;
  margin-bottom: 15px;
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
          <Col mobile={12} tablet={6} desktop mb={50}>
            <Flex columns align="center">
              <StyledHeader bold>Individuals</StyledHeader>
              <FooterLink to="/individuals">What is Handshake?</FooterLink>
              <FooterLink to="/individuals/#the-handshake-coin">Handshake Coin (HNS)</FooterLink>
              <FooterLink to="/individuals/#earn-hns">Earn HNS</FooterLink>
              <FooterLink to="/individuals/#purchase-hns">Purchase HNS</FooterLink>
              <FooterLink to="/individuals/#handshake-wallets">Handshake Wallets</FooterLink>
              {/* <FooterLink to="/guides">Guides and Resources</FooterLink> */}
            </Flex>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={50}>
            <Flex columns align="center">
              <StyledHeader bold>Developers</StyledHeader>
              <FooterLink to="/build">Get Started</FooterLink>
              <FooterLink to="/resources">Developer Resources</FooterLink>
              <FooterLink to="/whitepaper">Handshake Whitepaper</FooterLink>
              <FooterLink to="/roadmap">Developer Roadmap</FooterLink>
            </Flex>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={50}>
            <Flex columns align="center">
              <StyledHeader bold>Community</StyledHeader>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/support">Support</FooterLink>
              <FooterLink to="/help">How Can I Help?</FooterLink>
              <FooterLink to="/assets">Developer Assets</FooterLink>
              <FooterExternalLink
                href="https://calendar.google.com/calendar/b/0?cid=YW9odjY1NjMwYmNvYW1pazdsMWQ3Y25sNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Monthly Meeting
            </FooterExternalLink>
            </Flex>
          </Col>
          <Col mobile={12} tablet={6} desktop mb={50}>
            <Flex columns align="center">
              <StyledHeader bold>About Handshakealliance.org</StyledHeader>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/language">Language Support</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Use</FooterLink>
              <FooterLink to="/cookies">Cookie Policy</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </Flex>
          </Col>
        </Row>
      </Wrapper>
    </StyledFooter>
  )
};

export default Footer;