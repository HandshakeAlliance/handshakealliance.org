import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 380px;
  padding-top: 150px;
  width: 90%;
  margin: 0 auto;
`;

const About = () => (
  <Wrapper>
    <h1>About Us</h1>
    <p>We are the handshake alliance</p>
  </Wrapper>
);

export default About;