import React from 'react';
import styled from 'styled-components';
import { Flex } from '@urkellabs/ucl';

// Components
import * as Tools from './styled-components';
import SectionWrapper from 'components/shared/SectionWrapper';
import SectionHeader from 'components/shared/SectionHeader';

// Logos
import HNScan from 'components/Logos/HNScan';
import bobwallet from 'img/bobwallet.svg';
import github from 'img/github.svg';

const Image = styled.img`
  margin-right: 15px;
`;

export default function ToolsComponent() {
  return (
    <SectionWrapper>
      <SectionHeader>Tools</SectionHeader>
      <Tools.CardContainer>
        <Tools.Card href="https://hnscan.com" target="_blank">
          <Tools.Brand><HNScan /></Tools.Brand>
            Explore what is happening on the Handshake blockchain with HNScan
          </Tools.Card>

        <Tools.Card href="https://github.com/kyokan/bob-wallet" target="_blank">
          <Tools.Brand>
            <Flex align="center">
              <Image src={bobwallet} alt="Bob Wallet Logo" />
              {`| Bob Wallet`}
            </Flex>
          </Tools.Brand>
          Bob is a Handshake wallet with an integrated full node helping you with name auctions,
          DNS records, and more
        </Tools.Card>

        <Tools.Card href="https://github.com/handshake-org/hsd" target="_blank">
          <Tools.Brand>
            <Flex align="center">
              <Image src={github} alt="HSD Github Repo" />
              {`| HSD`}
            </Flex>
          </Tools.Brand>
          The official Handshake repository
        </Tools.Card>

        <Tools.Card href="https://github.com/UrkelLabs/rsd" target="_blank">
          <Tools.Brand>
            <Flex align="center">
              <Image src={github} alt="RSD Github Repo" />
              {`| RSD (WIP)`}
            </Flex>
          </Tools.Brand>
          Open source rust implementation of the HSD client
        </Tools.Card>

      </Tools.CardContainer>
    </SectionWrapper>
  )
}
