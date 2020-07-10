import React, { Component } from 'react';
import { Flex, Header, breakpoint } from "@urkellabs/ucl";
import styled from "@emotion/styled";
import AllianceDesktopLogo from '../Logos/AllianceDesktopLogo';
import $ from "jquery";
import { toast } from 'react-toastify';

const Link = styled.a`
  color: #f2f2f2;
  font-size: 14px;
  font-weight: 300;
  padding: 5px 0;
  text-decoration: none;

  &:visited {
    color: #f2f2f2;
  }
  &:hover {
    color: #693afa;
  }
`;

const TextContainer = styled.div`
  width: 75%;
  max-width: 325px;
  min-width: 260px;
  margin-top: 10px;
  font-size: 11pt;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 75px 24px 35px;
  background: #202020;
`;

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${breakpoint.tablet} {
    flex-direction: row;
    padding: 0 50px;
  }
`;

const BlockColumn = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoint.tablet} {
    align-items: flex-start;
  }
`;

const SubscribeLabel = styled.div`
  font-size: 14px;
  margin: 20px 0 6px 0;
  text-align: left;

  ${breakpoint.tablet} {
    margin: 12px 0 6px 0;
  }
`;

const SubscribeInput = styled.input`
  background: #363636;
  border: 1.5px solid #696969;
  border-radius: 2px;
  color: #fafafa;
  font-size: 16px;
  margin-bottom: 12px;
  min-width: 220px;
  max-width: 350px;
  outline: none;
  padding: 8px;
  width: 100%;
`;

const SubscribeButton = styled.button`
  background: #693afa;
  border: 1px solid #693afa;
  border-radius: 2px;
  color: #f2f2f2;
  font-size: 14px;
  padding: 8px;

  &:hover, &:focus {
    background: #4223a4;
    border-color: #4223a4;
    color: #f2f2f2;
    cursor: pointer;
    outline: none;
    transition: .2s ease-in-out;
  }
`;

const Fa = styled.a`
  color: #fff;
  margin: 24px;
  font-size: 14pt;

  &:hover {
    color: #693afa;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  opacity: .4;
`;

export default function FooterComponent() {

  const handleSubmit = e => {
    e.preventDefault();

    let email = $(`input[name="EMAIL"]`);

    if (email.val() === "") {
      toast('Please enter an email', { className: 'toast-warning' });
      return;
    }

    let formData = email.serialize();

    $.ajax({
      type: "post",
      url:
        "https://urkel.us19.list-manage.com/subscribe/post-json?u=4f327a17a091f4dc9fddf20f5&amp;id=d7753e97c9&c=?",
      data: formData,
      cache: false,
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      encode: true,
      error: function (err) {
        toast('Something went wrong, please try again or contact us.', { className: 'toast-danger' });
        console.log("Uh, oh. There was an error:", err);
      }
    }) // All done! Let's show the user a success message:
      .done(function (data) {
        if (data.result === "error") {
          toast('This email is already registered', { className: 'toast-danger' });
          console.log('error')
          return;
        } else {
          console.log('success')
          //Send google analytics hit
          window.ga("send", "event", "email", "submit");
          toast('Welcome to the alliance!', { className: 'toast-success' });
        }
      });
  }

  return (
    <Wrapper>

      <ActionContainer>
        <BlockColumn onSubmit={handleSubmit}>
          <AllianceDesktopLogo height="36px" />
          <SubscribeLabel>Want to save the internet? Subscribe for notifications.</SubscribeLabel>
          <SubscribeInput placeholder="Enter Your Email" type="email" name="EMAIL" />
          <SubscribeButton type="submit">Join Us</SubscribeButton>
        </BlockColumn>
        <Flex justify="space-around" mt={50} mb={50}>
          <Flex columns align="flex-start" m={24}>
            <Header xsmall bold>RESOURCES</Header>
            <Link href="https://hnscan.com/" target="_blank" rel="noopener noreferrer">HNScan</Link>
            <Link href="https://handshakeacademy.org/en/" target="_blank" rel="noopener noreferrer">Academy</Link>
            <Link href="https://handshake.community/" target="_blank" rel="noopener noreferrer">Community</Link>
          </Flex>
          <Flex columns align="flex-start" m={24}>
            <Header xsmall bold>RELATED</Header>
            <Link href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">Github</Link>
            <Link href="https://hnspool.com/" target="_blank" rel="noopener noreferrer">Pool</Link>
            <Link href="https://hsd-dev.org/" target="_blank" rel="noopener noreferrer">Docs</Link>
          </Flex>
        </Flex>
      </ActionContainer>

      <Flex columns justify="center" align="center" mt={20}>
        <TextContainer>
          <Header xsmall bold>CONTACT</Header>
          <span>support@handshakealliance.org</span>
        </TextContainer>
      </Flex>

      <Flex justify="center">
        <Fa href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github-alt"></i>
        </Fa>
        <Fa href="https://twitter.com/HNSalliance" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </Fa>
        <Fa href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-medium-m"></i>
        </Fa>
      </Flex>

      <Copyright>
        Copyright © 2019 Urkel Labs.
        All rights reserved.
      </Copyright>
    </Wrapper>
  )
}
