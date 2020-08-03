import React from 'react';
import styled from "styled-components";
import { Flex, Header, Spacer, breakpoint } from "@urkellabs/ucl";

const StyledHeader = styled(Header)`
  margin: 0 0 16px;
  letter-spacing: 1px;
  font-weight: 500;
  text-align: center;
`;

const Subtext = styled.div`
  max-width: 600px;
  text-align: center;
`;

const Underline = styled.div`
  border: 2px solid var(--color-primary-3);
  width: 100px;
`;

export default function SectionHeader({ children, title, ...rest }) {
  return (
    <Flex columns align="center" mt={50} mb={50}>
      <StyledHeader {...rest}>{title}</StyledHeader>
      <Subtext>{children}</Subtext>
      {children ? <Spacer px={50} /> : <Spacer />}
      <Underline />
    </Flex>
  );
}