import React from "react"
import styled from "styled-components"
import { NavBar, Flex, breakpoint } from "@urkellabs/ucl"

// Components
import NavLogo from "components/img/NavLogo"

const Wrapper = styled(NavBar)`
  box-shadow: 0px 5px 10px 0px var(--color-gray-2);
  border-bottom: none;
`

const NavbarContainer = styled(NavBar.Container)`
  ${breakpoint.mobile} {
    width: 100%;
  }
`

const NavbarBrand = styled(NavBar.Brand)`
  margin-right: 25px;
`

const Navbar = () => {
  return (
    <Wrapper height="75px" >
      <NavbarContainer>
        <NavbarBrand>
          <Flex align="center">
            <NavLogo />
            <NavBar.Burger />
          </Flex>
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
          </NavBar.Start>
        </NavBar.Menu>
      </NavbarContainer>
    </Wrapper>
  )
}

export default Navbar
