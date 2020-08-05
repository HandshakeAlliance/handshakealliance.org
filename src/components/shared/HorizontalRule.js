import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledHorizontalRule = styled.hr`
  border-width: ${props => props.borderWidth}px;
  border-style: solid;
  border-color: var(--color-gray-2);
  margin: 50px 0;
`;

export default function HorizontalRule({ borderWidth }) {
  return <StyledHorizontalRule borderWidth={borderWidth} />
}

HorizontalRule.defaultProps = {
  borderWidth: 1
}

HorizontalRule.propTypes = {
  borderWidth: PropTypes.number
}