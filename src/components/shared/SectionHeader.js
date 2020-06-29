import React from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Header } from "@urkellabs/ucl";

const StyledHeader = styled(Header)`
  color: ${props => props.color};
  font-size: 26px;
  margin: 0 0 16px;
  letter-spacing: 1px;
`;

const Underline = styled.div`
  border: 1px solid #693afa;
  margin: 0 0 45px;
  width: 60px;
`;

export default function SectionHeader({ children, ...rest }) {
  return (
    <>
      <StyledHeader small bold {...rest}>{children}</StyledHeader>
      <Underline />
    </>
  );
}

SectionHeader.propTypes = {
  color: PropTypes.string
};

SectionHeader.defaultProps = {
  color: "#3f3f44"
};