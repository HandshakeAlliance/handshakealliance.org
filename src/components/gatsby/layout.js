import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "@urkellabs/ucl";

// Components
import Navbar from "components/navigation/Navbar";
import lightColors from "components/theme/lightColors";

const Content = styled.main`
  width: 95%;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles fontFamily="'Inter', sans-serf" lightColors={lightColors} />
      <Navbar />
      <Content>{children}</Content>
    </>
  )
};

export default Layout;
