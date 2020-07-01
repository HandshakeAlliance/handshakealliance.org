import React from 'react';
import { toast } from 'react-toastify';
import { Flex } from '@urkellabs/ucl';

// Components
import * as Donations from './styled-components';
import SectionWrapper from 'components/shared/SectionWrapper';
import SectionHeader from 'components/shared/SectionHeader';

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
        <Donations.Body>All proceeds will go directly towards the teams developing the infrastructure for the Handshake protocol</Donations.Body>
        <Donations.Address onClick={handleClick} readOnly value="37jov2n9YKofVjCQX43MVSSc36GeL2RSss" />
      </Flex>
    </SectionWrapper>
  )
}