import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Header } from "@urkellabs/ucl";

const Wrapper = styled(Flex)`
  background: ${props => props.backgroundColor};
  height: auto;
  padding: 75px 25px;
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 75px 45px 50px 45px;
  }
`;

export default function SectionWrapper({ children, ...rest }) {
  return (
    <Wrapper columns align="center" {...rest}>
      {children}
    </Wrapper>
  );
}

SectionWrapper.propTypes = {
  backgroundColor: PropTypes.string
};

SectionWrapper.defaultProps = {
  backgroundColor: "#f2f2f2"
};