import React from "react";
import styled from "styled-components";
import { NavBar, Flex, breakpoint } from "@urkellabs/ucl";

// Components
import Logo from "components/img/Logo";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
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
            <Flex align="center">
              <Logo />
            </Flex>
            <NavBar.Burger />
          </NavbarBrand>
          <NavBar.Menu>
            <NavBar.Start>
              <NavbarItem>Handshake</NavbarItem>
              <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Individuals</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem>Link</NavbarItem>
                  <NavbarItem>Link</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown>
              <NavbarLinkDropdown hoverable dropdown>
                <NavBar.Link className="link">Developers</NavBar.Link>
                <NavBar.Dropdown>
                  <NavbarItem>Link</NavbarItem>
                  <NavbarItem>Link</NavbarItem>
                </NavBar.Dropdown>
              </NavbarLinkDropdown>
              <NavbarItem>Community</NavbarItem>
            </NavBar.Start>
          </NavBar.Menu>
        </NavbarContainer>
      </CustomNavbar>
    </Wrapper>
  )
};

export default Navbar;
