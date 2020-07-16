import React from "react";
import styled from "styled-components";
import { Header, Hidden } from "@urkellabs/ucl";

// Components
import Map from "components/img/Map";

const Wrapper = styled.section`
  min-height: 380px;
  padding: 125px 0 75px 0;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 0; 
  right: 0; 
  margin: 0 auto;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.5) 75%, rgba(255,255,255,0) 100%);
  width: 500px;
  text-align: center;
`;

const Text = styled(Header)`
  letter-spacing: 2px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Map />
      <TextWrapper>
        <Hidden upToTablet>
          <Text large bold>Together, We Can</Text>
          <Text large bold>Change the Internet</Text>
        </Hidden>
        <Hidden tablet>
          <Text bold>Together, We Can</Text>
          <Text bold>Change the Internet</Text>
        </Hidden>
      </TextWrapper>
    </Wrapper>
  )
};

export default Hero;