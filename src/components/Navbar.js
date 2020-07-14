import React from "react"
import styled from "styled-components"
import { Flex } from "@urkellabs/ucl"

// Components
import NavLogo from "components/img/NavLogo"

const NavigationWrapper = styled.nav`
  height: 60px;
  width: 100%;
  border: 1px solid red;
`;

const Navbar = () => {
  return (
    <NavigationWrapper>
      <div>Navbar</div>
    </NavigationWrapper>
  )
}

export default Navbar
