import React from 'react';
import styled from "styled-components";
import { Flex, Row, Col, Header, Spacer, Hidden, breakpoint } from "@urkellabs/ucl";

// Components
import SectionWrapper from "components/shared/SectionWrapper";
import SectionHeader from "components/shared/SectionHeader";

// Logos
import bittrex from "img/bittrex.png";
import gate from "img/gate.png";
import hotbit from "img/hotbit.png";
import mxc from "img/mxc.png";
import namebase from "img/namebase.png";

const Image = styled.img`
  height: 25px;
  width: auto;
  margin-bottom: 10px;
`;

const ImageWrapper = styled.a`
  height: 200px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0 rgba(105,57,250,0.2);
  cursor: pointer;
  color: #3F3F44;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0 5px 0 rgba(105,57,250,0.35);
    border-radius: 5%;
  }

  ${breakpoint.tablet} {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    transition: 0.25s;
  }
`;

const SectionInfo = styled.p`
  max-width: 600px;
  line-height: 1.25rem;
`;

const MarketDataLink = styled.a`
  text-decoration: none;
  border-bottom: 1px solid #3F3F44;
  color: #3F3F44;
  &:hover { border-color: #693afa; }
`;

const BuildExchanges = () => {
  const exchanges = [
    {
      name: "Bittrex",
      link: "https://bittrex.com",
      image: bittrex
    },
    {
      name: "Gate",
      link: "https://gate.io",
      image: gate
    },
    {
      name: "Hotbit",
      link: "https://www.hotbit.io/",
      image: hotbit
    },
    {
      name: "MXC",
      link: "https://www.mxc.com/",
      image: mxc
    },
    {
      name: "Namebase",
      link: "https://www.namebase.io",
      image: namebase
    },
  ];

  return exchanges.map((exchange, i) => (
    <React.Fragment key={i}>
      <Col mobile={12} tablet>
        <Flex justify="center">
          <ImageWrapper href={exchange.link} target="_blank">
            <Image src={exchange.image} alt={`${exchange.name} Logo`} />
            <Header xsmall>{exchange.name}</Header>
          </ImageWrapper>
        </Flex>
      </Col>
      {i !== exchanges.length - 1 && (<Hidden tablet as={Spacer} />)}
    </React.Fragment>
  ));
}

export default function ExchangesComponent() {
  return (
    <SectionWrapper>
      <SectionHeader>Exchanges</SectionHeader>
      <Flex justify="center" mb={50}>
        <SectionInfo>
          Purchasing HNS is currently possible on the following exchanges. Visit their sites for more information on
          market pairs or you can see them here on <MarketDataLink href="https://www.coingecko.com/en/coins/handshake#markets" target="_blank">CoinGecko</MarketDataLink>
          &nbsp;or <MarketDataLink href="https://coinmarketcap.com/currencies/handshake/markets" target="_blank">Coin Market Cap</MarketDataLink>
        </SectionInfo>
      </Flex>
      <Row>
        <BuildExchanges />
      </Row>
    </SectionWrapper>
  );
}