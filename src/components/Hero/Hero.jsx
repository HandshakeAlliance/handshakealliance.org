import React, { Component } from 'react';
import * as Hero from './styled-components';
import NodeMapComponent from '../NodeMap/NodeMap';

export default class HeroComponent extends Component {

  render() {
    return (
      <Hero.Wrapper>
        <Hero.Description>
          Here is where we will put the objective statement
          <Hero.LearnButton>Learn More</Hero.LearnButton>
        </Hero.Description>
        <Hero.Map>
          <NodeMapComponent />
        </Hero.Map>
      </Hero.Wrapper>
    )
  }
}
