import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "@urkellabs/ucl";

// Components
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import lightColors from "components/theme/lightColors";

const Content = styled.main`
  width: 95%;
  margin: 0 auto;
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
      <GlobalStyles fontFamily="'Inter', sans-serf" lightColors={lightColors} />
      <Navbar boxShadow={boxShadow} />
      <Content>{children}</Content>
      <Footer />
    </>
  )
};

export default Layout;
