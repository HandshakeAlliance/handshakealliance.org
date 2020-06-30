import React from 'react';
import styled from "styled-components";
import { Flex } from "@urkellabs/ucl";

// Components
import SectionWrapper from "components/shared/SectionWrapper";
import SectionHeader from "components/shared/SectionHeader";

// Logos
import bittrex from "img/bittrex.png";
import gate from "img/gate.png";
import hotbit from "img/hotbit.png";
import mxc from "img/mxc.png";
import namebase from "img/namebase.png";

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  text-align: left;
`;

const Tr = styled.tr`
  height: 75px;
  border-bottom: 1px solid #d9d9d9;
  &:last-child {
    border: none;
  }
`;

const Image = styled.img`
  height: 15px;
  width: auto;
  margin-right: 10px;

  &.mxc {
    height: 13px;
    width: 15px;
  }
`;

export default function ExchangesComponent() {
  return (
    <SectionWrapper>
      <SectionHeader>Buy Handshake</SectionHeader>
      <Table>
        <thead>
          <Tr>
            <th>Exchange</th>
            <th>Price</th>
            <th>Volume (24h)</th>
            <th>Markets</th>
            <th>Updated</th>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <td>
              <Flex align="center">
                <Image src={bittrex} alt="Bittrex" />
                Bittrex
              </Flex>
            </td>
            <td>--</td>
            <td>--</td>
            <td>USDT|BTC|ETH</td>
            <td>--</td>
          </Tr>
          <Tr>
            <td>
              <Flex align="center">
                <Image src={gate} alt="Gate" />
                Gate.io
              </Flex>
            </td>
            <td>--</td>
            <td>--</td>
            <td>USDT|BTC</td>
            <td>--</td>
          </Tr>
          <Tr>
            <td>
              <Flex align="center">
                <Image src={hotbit} alt="Hotbit" />
                Hotbit
              </Flex>
            </td>
            <td>--</td>
            <td>--</td>
            <td>USDT|BTC</td>
            <td>--</td>
          </Tr>
          <Tr>
            <td>
              <Flex align="center">
                <Image src={mxc} alt="MXC" className="mxc" />
                MXC
              </Flex>
            </td>
            <td>--</td>
            <td>--</td>
            <td>USDT</td>
            <td>--</td>
          </Tr>
          <Tr>
            <td>
              <Flex align="center">
                <Image src={namebase} alt="Namebase" />
                Namebase
              </Flex>
            </td>
            <td>--</td>
            <td>--</td>
            <td>BTC</td>
            <td>--</td>
          </Tr>
        </tbody>
      </Table>
    </SectionWrapper>
  );
}