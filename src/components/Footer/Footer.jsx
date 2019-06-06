import React, { Component } from 'react';
import AllianceDesktopLogo from '../Logos/AllianceDesktopLogo';
import * as Footer from './styled-components';
import $ from "jquery";
import { toast } from 'react-toastify';

export default class FooterComponent extends Component {

  handleSubmit = e => {
    e.preventDefault();

    let email = $(`input[name="EMAIL"]`);
    let form = $(".emailContainer");

    if (email.val() === "") {
      //Handle some error here
        toast('Please enter an email', {className: 'toast-warning'});
      // toastr.error("Please enter an email");
      // form.addClass("shake");
      // removeAnimation();
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
        toast('Something went wrong, please try again or contact us.', {className: 'toast-danger'});
        // toastr.error("Something went wrong, please try again later.");
        // form.addClass("shake");
        // removeAnimation();
        console.log("Uh, oh. There was an error:", err);
      }
    }) // All done! Let's show the user a success message:
      .done(function (data) {
        if (data.result === "error") {
          toast('This email is already registered', {className: 'toast-danger'});
          // toastr.error("This email is already registered");
          // form.addClass("shake");
          // removeAnimation();
          console.log('error')
          return;
        } else {
          console.log('success')
          //Send google analytics hit
          window.ga("send", "event", "email", "submit");
          // $("#heroEmailForm").hide();
          toast('Welcome to the alliance!', {className: 'toast-success'});
          // $(".successMessage").show(); // Show the checkmark
          // $("svg").addClass("active"); // Start animation of checkmark
        }
      });
  }

  render() {
    return (
      <Footer.Wrapper>
        <Footer.ActionContainer>

          <Footer.BlockColumn onSubmit={this.handleSubmit}>
            <AllianceDesktopLogo height="36px" />
            <Footer.SubscribeLabel>Want to save the internet? Subscribe for notifications.</Footer.SubscribeLabel>
            <Footer.SubscribeInput placeholder="Enter Your Email" type="email" name="EMAIL" />
            <Footer.SubscribeButton type="submit">Join Us</Footer.SubscribeButton>
          </Footer.BlockColumn>

          <Footer.BlockRow>
            <Footer.LinkContainer>
              <Footer.Header>Resources</Footer.Header>
              <Footer.Link href="https://hnscan.com/" target="_blank" rel="noopener noreferrer">HNScan</Footer.Link>
              <Footer.Link href="https://nameian.com/" target="_blank" rel="noopener noreferrer">Nameian</Footer.Link>
              <Footer.Link href="https://handshakeacademy.org/en/" target="_blank" rel="noopener noreferrer">Academy</Footer.Link>
              <Footer.Link href="https://handshake.community/" target="_blank" rel="noopener noreferrer">Community</Footer.Link>
            </Footer.LinkContainer>
            <Footer.LinkContainer>
              <Footer.Header>Related</Footer.Header>
              <Footer.Link href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">Github</Footer.Link>
              <Footer.Link href="https://handshakehash.com/" target="_blank" rel="noopener noreferrer">Pool</Footer.Link>
              <Footer.Link href="https://handshake-org.github.io/api-docs/" target="_blank" rel="noopener noreferrer">Docs</Footer.Link>
            </Footer.LinkContainer>
          </Footer.BlockRow>

        </Footer.ActionContainer>

        <Footer.InfoContainer>
          <Footer.TextContainer>
            <Footer.Bold>CONTACT</Footer.Bold>
            <span>support@handshakealliance.org</span>
          </Footer.TextContainer>
        </Footer.InfoContainer>

        <Footer.IconContainer>
          <Footer.Fa href="https://github.com/HandshakeAlliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-alt"></i>
          </Footer.Fa>
          <Footer.Fa href="https://twitter.com/HNSalliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </Footer.Fa>
          <Footer.Fa href="https://medium.com/@handshakealliance" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-medium-m"></i>
          </Footer.Fa>
        </Footer.IconContainer>
        <Footer.Copyright>
          Copyright © 2019 Urkel Labs.
          All rights reserved.
        </Footer.Copyright>

      </Footer.Wrapper>
    )
  }
}
