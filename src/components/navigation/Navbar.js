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

// const NavbarLinkDropdown = styled(NavBar.Item)`
//   a {
//     &::after {
//       border-color: var(--color-black);
//       border-width: 1.75px;
//       height: 0.5em;
//       width: 0.5em;
//     }
//   }

//   &:hover {
//     & .link {
//       color: var(--color-primary);
//     }
//     a {
//       &::after {
//         border-color: var(--color-primary);
//       }
//     }
//   }
// `;

const Announcement = styled(Flex)`
  height: 25px;
  background: var(--color-primary);
  color: var(--color-gray-1);
  font-size: 12px;
  font-weight: 500;
`;

const MeetingLink = styled.a`
  margin: 0;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 12px;
  background-color: transparent;
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  color: var(--color-primary);
  cursor: pointer;
  font-weight: 525;

  &:hover {
    color: var(--color-primary-dark);
    border-color: var(--color-primary-dark);
  }
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
              <NavbarItem as={Link} to="/individuals">Individuals</NavbarItem>
              {/* <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Individuals</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/handshake">What is Handshake?</NavbarItem>
                  <NavbarItem as={Link} to="/hns">What is HNS?</NavbarItem>
                  <NavbarItem as={Link} to="/earn">Earn HNS</NavbarItem>
                  <NavbarItem as={Link} to="/use">Use Handshake</NavbarItem>
                  <NavbarItem as={Link} to="/wallets">Handshake Wallets</NavbarItem>
                  <NavbarItem as={Link} to="/guides">Guides and Resources</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown> */}
              <NavbarItem as={Link} to="/developers">Developers</NavbarItem>
              {/* <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Developers</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/build">Get Started</NavbarItem>
                  <NavbarItem as={Link} to="/resources">Developer Resources</NavbarItem>
                  <NavbarItem as={Link} to="/whitepaper">Handshake Whitepaper</NavbarItem>
                  <NavbarItem as={Link} to="/roadmap">Developer Roadmap</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown> */}
              <NavbarItem as={Link} to="/community">Community</NavbarItem>
              {/* <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Community</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem as={Link} to="/blog">Blog</NavbarItem>
                  <NavbarItem as={Link} to="/help">How Can I Help?</NavbarItem>
                  <NavbarItem as={Link} to="/assets">Developer Assets</NavbarItem>
                  <NavbarItem as={Link} to="/support">Support</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown> */}
            </NavBar.Start>
            <NavBar.End>
              <Flex justify="center" align="center">
                <MeetingLink
                  href="https://calendar.google.com/calendar/b/0?cid=YW9odjY1NjMwYmNvYW1pazdsMWQ3Y25sNjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Monthly Meeting
              </MeetingLink>
              </Flex>
            </NavBar.End>
          </NavBar.Menu>
        </NavbarContainer>
      </CustomNavbar>
    </Wrapper>
  )
};

export default Navbar;
