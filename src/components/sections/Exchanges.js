import React from "react";
import styled from "styled-components";
import { Row, Col, Flex, Header, Hidden, Spacer, breakpoint } from "@urkellabs/ucl";

// Components
import SectionHeader from "components/shared/SectionHeader";

// Exchange Images
import Hotbit from "components/img/Hotbit";
import Mxc from "components/img/Mxc";
import Bittrex from "components/img/Bittrex";
import Gate from "components/img/Gate";
import Namebase from "components/img/Namebase";

const Wrapper = styled.section`
  min-height: 380px;
  margin: 100px 0;
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

  ${breakpoint.desktop} {
    height: 125px;
    width: 125px;
    border-radius: 50%;
    transition: 0.25s;
  }
`;

const BuildExchanges = () => {
  const exchanges = [
    {
      name: "Bittrex",
      link: "https://bittrex.com",
      image: <Bittrex />
    },
    {
      name: "Gate",
      link: "https://gate.io",
      image: <Gate />
    },
    {
      name: "Hotbit",
      link: "https://www.hotbit.io/",
      image: <Hotbit />
    },
    {
      name: "MXC",
      link: "https://www.mxc.com/",
      image: <Mxc />
    },
    {
      name: "Namebase",
      link: "https://www.namebase.io",
      image: <Namebase />
    },
  ];

  return exchanges.map((exchange, i) => (
    <React.Fragment key={i}>
      <Col mobile={12} desktop>
        <Flex justify="center">
          <ImageWrapper href={exchange.link} target="_blank">
            {exchange.image}
            <Header xsmall>{exchange.name}</Header>
          </ImageWrapper>
        </Flex>
      </Col>
      {i !== exchanges.length - 1 && (<Hidden desktop as={Spacer} />)}
    </React.Fragment>
  ));
}

const Exchanges = () => {
  return (
    <Wrapper>
      <SectionHeader small title="Exchanges Listing Handshake" />
      <Spacer px={50} />
      <Row>
        <BuildExchanges />
      </Row>
    </Wrapper>
  )
};

export default Exchanges;