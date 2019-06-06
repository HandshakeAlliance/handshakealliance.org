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

const FadeIn = keyframes`
  0% {opacity: 0}
  100%   { opacity: 1; }
`;

// These styled components will likely need a vocal explanation...
const Ring = styled.circle`
  animation: ${Expand} linear 2s ${() => (Math.random() / 2) + 's'} infinite;
`;

const DelayedRing = styled.circle`
  animation: ${FadeIn} linear 2s ${props => props.delay + 's'} forwards,
    ${Expand} linear 2s ${props => props.delay + 2 + 's'} infinite;
  opacity: 0;
`;

const Dot = styled.circle`
  animation: ${Pulse} linear 2s ${() => (Math.random() / 2) + 's'} infinite;
`;

const DelayedDot = styled.circle`
  animation: ${FadeIn} linear 2s ${props => props.delay + 's'} forwards,
    ${Pulse} linear 2s ${props => props.delay + 2 + 's'} infinite;
  opacity: 0;
`;

export default class PulsingCircle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      color: props.color || '#693afa'
    };
  }

  render() {
    if (this.props.delay) {
      return <Fragment><DelayedRing delay={this.props.delay} stroke={this.state.color} fill="none" cx={0} cy={0} r={10} /><DelayedDot fill={this.state.color} cx={0} cy={0} r={5} /></Fragment>
    }
    else {
      return <Fragment><Ring stroke={this.state.color} fill="none" cx={0} cy={0} r={10} /></Fragment>
    }
  }
}
