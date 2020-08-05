import React from 'react';
import styled from "styled-components";

const StyledHorizontalRule = styled.hr`
  border: 2px solid var(--color-gray-2);
  margin: 50px 0;
`;

export default function HorizontalRule() {
  return <StyledHorizontalRule />
}