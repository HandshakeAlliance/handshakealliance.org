import React, { Component } from 'react';
import * as Hero from './styled-components';
import NodeMap from '../NodeMap/NodeMap';

export default class HeroComponent extends Component {

  render() {
    return (
      <Hero.Wrapper>
        <NodeMap />
      </Hero.Wrapper>
    )
  }
}