import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { NavBar, Flex, breakpoint } from "@urkellabs/ucl";

// Components
import Logo from "components/img/Logo";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background: var(--color-gray-1);
  z-index: 10;
`;

const CustomNavbar = styled(NavBar)`
  box-shadow: ${props => props.boxShadow ? "0px 5px 10px 0px rgba(0, 0, 0, .05)" : "none"};
  border-bottom: none;
  width: 100%;
`;

const NavbarContainer = styled(NavBar.Container)`
  width: 90%;
  
  ${breakpoint.desktop} {
    width: 95%;
  }
`;

const NavbarBrand = styled(NavBar.Brand)`
  margin-right: 25px;
  ${breakpoint.upToDesktop} {
    width: 100%;
  }
`;

const NavbarItem = styled(NavBar.Item)`
  &:hover {
    color: var(--color-primary);
  }
`;

const NavbarLinkDropdown = styled(NavBar.Item)`
  a {
    &::after {
      border-color: var(--color-black);
      border-width: 1.75px;
      height: 0.5em;
      width: 0.5em;
    }
  }

  &:hover {
    & .link {
      color: var(--color-primary);
    }
    a {
      &::after {
        border-color: var(--color-primary);
      }
    }
  }
`;

const Announcement = styled(Flex)`
  height: 25px;
  background: var(--color-primary);
  color: var(--color-gray-1);
  font-size: 12px;
  font-weight: 500;
`;

// @TODO: get menu and links working
const Navbar = ({ boxShadow }) => {
  return (
    <Wrapper>
      {/* @TODO: remove when all of the pages are navigable */}
      <Announcement justify="center" align="center">
        <span>This site is under construction. Some features are not available yet</span>
      </Announcement>
      <CustomNavbar height="75px" boxShadow={boxShadow}>
        <NavbarContainer>
          <NavbarBrand>
            <Flex align="center" as={Link} to="/">
              <Logo />
            </Flex>
            <NavBar.Burger />
          </NavbarBrand>
          <NavBar.Menu>
            <NavBar.Start>
              <NavbarItem as={Link} to="/">Handshake</NavbarItem>
              <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Individuals</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/what-is-handshake">What is Handshake?</NavbarItem>
                  <NavbarItem as={Link} to="/what-is-hns">What is HNS?</NavbarItem>
                  <NavbarItem as={Link} to="/earn-hns">Earn HNS</NavbarItem>
                  <NavbarItem as={Link} to="/use-handshake">Use Handshake</NavbarItem>
                  <NavbarItem as={Link} to="/handshake-wallets">Handshake Wallets</NavbarItem>
                  <NavbarItem as={Link} to="/guides-and-resources">Guides and Resources</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown>
              <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Developers</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/get-started">Get Started</NavbarItem>
                  <NavbarItem as={Link} to="/developer-resources">Developer Resources</NavbarItem>
                  <NavbarItem as={Link} to="/handshake-whitepaper">Handshake Whitepaper</NavbarItem>
                  <NavbarItem as={Link} to="/developer-roadmap">Developer Roadmap</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown>
              <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Community</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/blog">Blog</NavbarItem>
                  <NavbarItem as={Link} to="/how-can-i-help">How Can I Help?</NavbarItem>
                  <NavbarItem as={Link} to="/developer-assets">Developer Assets</NavbarItem>
                  <NavbarItem as={Link} to="/support">Support</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown>
            </NavBar.Start>
          </NavBar.Menu>
        </NavbarContainer>
      </CustomNavbar>
    </Wrapper>
  )
};

export default Navbar;
