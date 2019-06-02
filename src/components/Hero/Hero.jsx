import React, { Component } from 'react';
import * as Hero from './styled-components';
import NodeMapComponent from '../NodeMap/NodeMap';

export default class HeroComponent extends Component {

  render() {
    return (
      <Hero.Wrapper>
        <Hero.Description>
          Working together to save the future of the internet
          <Hero.LearnButton>Learn More</Hero.LearnButton>
        </Hero.Description>
        <Hero.Map>
          <NodeMapComponent />
        </Hero.Map>
      </Hero.Wrapper>
    )
  }
}
