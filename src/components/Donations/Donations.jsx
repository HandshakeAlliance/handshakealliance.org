import React from 'react';
import { toast } from 'react-toastify';
import { Flex, breakpoint } from '@urkellabs/ucl';
import styled from "@emotion/styled";

// Components
import SectionWrapper from 'components/shared/SectionWrapper';
import SectionHeader from 'components/shared/SectionHeader';

const Body = styled.p`
  max-width: 400px;
  margin-bottom: 35px;
  ${breakpoint.tablet} {
    margin-bottom: 30px;
    max-width: 600px;
  }
`;

const Address = styled.input`
  background: #363636;
  border: 1.5px solid #696969;
  border-radius: 2px;
  color: #fafafa;
  font-size: 16px;
  margin-bottom: 12px;
  min-width: 280px;
  overflow: hidden;
  outline: none;
  padding: 8px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::selection { background: none; }
  &:hover { cursor: pointer; }
`;

export default function DonationsComponent() {
  const handleClick = event => {
    event.target.select();
    document.execCommand('copy');
    toast('Copied to clipboard', {
      className: 'toast-success'
    });
  }

  return (
    <SectionWrapper backgroundColor="#252525" color="#f2f2f2">
      <Flex columns justify="center" align="center">
        <SectionHeader>Support Development</SectionHeader>
        <Body>All proceeds will go directly towards the teams developing the infrastructure for the Handshake protocol</Body>
        <Address onClick={handleClick} readOnly value="37jov2n9YKofVjCQX43MVSSc36GeL2RSss" />
      </Flex>
    </SectionWrapper>
  )
}