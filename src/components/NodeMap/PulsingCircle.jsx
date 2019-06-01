import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

export const Pulse = keyframes`
  0% {
    transform: scale(.8)
  }
  100% {
    transform: scale(1);
  }
`;

export const Expand = keyframes`
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
  animation: ${Expand} linear 2s infinite;
`;

const Dot = styled.circle`
  animation: ${Pulse} linear 2s infinite alternate;
`;

export default class PulsingCircle extends Component {
  constructor(props) {
    super(props);
    this.state= {
      color: props.color || '#693afa'
    };
  }

  render() {
    return (
      <Fragment>
        <Ring stroke={this.state.color} fill="none" cx={0} cy={0} r={10} />
        <Dot fill={this.state.color} cx={0} cy={0} r={5}/>
      </Fragment>
    )
  }
}
