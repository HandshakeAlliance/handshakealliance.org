import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyles, breakpoint } from "@urkellabs/ucl";

// Components
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import lightColors from "components/theme/lightColors";

const Content = styled.main`
  width: 90%;
  margin: 0 auto;

  ${breakpoint.desktop} {
    width: 95%;
  }
`;

const Layout = ({ children }) => {
  const [boxShadow, setBoxShadow] = useState(false);

  useEffect(() => {
    if (window) {
      const handleScroll = () => {
        window.scrollY > 10 ? setBoxShadow(true) : setBoxShadow(false);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <GlobalStyles fontFamily="'Open Sans', sans-serf" lightColors={lightColors} />
      <Navbar boxShadow={boxShadow} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
};

export default Layout;
