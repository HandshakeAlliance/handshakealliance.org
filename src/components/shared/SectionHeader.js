import React from 'react';
import styled from "styled-components";
import { Header } from "@urkellabs/ucl";

const StyledHeader = styled(Header)`
  font-size: 26px;
  margin: 0 0 16px;
  letter-spacing: 1px;
`;

const Underline = styled.div`
  border: 1px solid #693afa;
  margin: 0 0 45px;
  width: 60px;
`;

export default function SectionHeader({ children }) {
  return (
    <>
      <StyledHeader small bold>{children}</StyledHeader>
      <Underline />
    </>
  );
}