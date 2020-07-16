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
  width: 95%;
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

const Announcement = styled(Flex)`
  height: 25px;
  background: #693AFA;
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
        <span>This website is still under construction. Some links and pages be fully functional yet</span>
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
              <NavBar.Item>Handshake</NavBar.Item>
              <NavBar.Item hoverable dropdown>
                <NavBar.Link>Individuals</NavBar.Link>
                <NavBar.Dropdown>
                  <NavBar.Item>Link</NavBar.Item>
                  <NavBar.Item>Link</NavBar.Item>
                </NavBar.Dropdown>
              </NavBar.Item>
              <NavBar.Item hoverable dropdown>
                <NavBar.Link>Developers</NavBar.Link>
                <NavBar.Dropdown>
                  <NavBar.Item>Link</NavBar.Item>
                  <NavBar.Item>Link</NavBar.Item>
                </NavBar.Dropdown>
              </NavBar.Item>
              <NavBar.Item>Community</NavBar.Item>
            </NavBar.Start>
          </NavBar.Menu>
        </NavbarContainer>
      </CustomNavbar>
    </Wrapper>
  )
};

export default Navbar;
