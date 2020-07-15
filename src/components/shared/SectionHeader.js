import React from 'react';
import styled from "styled-components";
import { Flex, Header } from "@urkellabs/ucl";

const StyledHeader = styled(Header)`
  margin: 0 0 16px;
  letter-spacing: 1px;
  font-weight: 500;
`;

const Subtext = styled.div`
  max-width: 600px;
  text-align: center;
`;

const Underline = styled.div`
  border: 2px solid var(--color-primary-3);
  margin-top: 50px;
  width: 100px;
`;

export default function SectionHeader({ children, title, align, ...rest }) {
  return (
    <Flex columns align={align} mt={50} mb={50}>
      <StyledHeader {...rest}>{title}</StyledHeader>
      <Subtext>{children}</Subtext>
      <Underline />
    </Flex>
  );
}