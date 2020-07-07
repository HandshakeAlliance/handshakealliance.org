import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

export const Pulse = keyframes`
  0% {
    transform: scale(.8)
    opacity: 1;
  }
  100% {
    opacity: .8;
    transform: scale(1);
  }
`;

const Expand = keyframes`
  0% {
    opacity: 1;
    transform: scale(0.5);
  }
  100% {
    opacity: .1;
    transform: scale(1);
  }
`;

const Ring = styled.circle`
  animation: ${Expand} linear 2s ${() => (Math.random() / 2) + 's'} infinite;
`;

const Dot = styled.circle`
  animation: ${Pulse} linear 2s ${() => (Math.random() / 2) + 's'} infinite;
`;

export default class PulsingCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color || '#693afa'
    };
  }

  render() {
    if (this.props.delay) {
      return <Fragment><Ring delay={this.props.delay} stroke={this.state.color} fill="none" cx={0} cy={0} r={10} /><Dot fill={this.state.color} cx={0} cy={0} r={5} /></Fragment>
    }
    else {
      return <Fragment><Ring stroke={this.state.color} fill="none" cx={0} cy={0} r={10} /></Fragment>
    }
  }
}
