import React, { Component } from 'react';
import * as Donations from './styled-components';
import { toast } from 'react-toastify';

export default class DonationsComponent extends Component {
  onClick = e => {
    const el = e.target;
    el.select();
    document.execCommand('copy');
    toast('Copied to clipboard', {
      className: 'toast-success'
    });
  }

  render() {
    return (
      <Donations.Wrapper>
        <Donations.Header>Support Development</Donations.Header>
        <Donations.Hr />
        <Donations.Body>All proceeds will go directly towards the teams developing the infrastructure for the Handshake protocol</Donations.Body>
        <Donations.Address onClick={this.onClick} readOnly value="37jov2n9YKofVjCQX43MVSSc36GeL2RSss" />
      </Donations.Wrapper>
    )
  }
}