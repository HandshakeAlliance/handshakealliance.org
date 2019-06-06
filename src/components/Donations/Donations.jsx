import React, { Component } from 'react';
import * as Donations from './styled-components';
import { toast } from 'react-toastify';

export default class DonationsComponent extends Component {
  onClick = e => {
    const el = e.target;
    el.select();
    document.execCommand('copy');
    toast('Copied to clipboard');
  }

  render() {
    return (
      <Donations.Wrapper>
        <Donations.Header>Feeling Generous?</Donations.Header>
        <Donations.Hr />
        <Donations.Body>All proceeds will go directly towards the teams developing the infrastructure for the Handshake protocol</Donations.Body>
        <Donations.Address onClick={this.onClick} readOnly value="bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq" />
      </Donations.Wrapper>
    )
  }
}