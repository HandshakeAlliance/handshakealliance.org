import React, { Component } from 'react';
import * as Accordion from './styled-components';

export default class AccordionComponent extends Component {
  render() {
    return (
      <Accordion.Wrapper>
        {this.props.children}
        <Accordion.BurgerIcon></Accordion.BurgerIcon>
      </Accordion.Wrapper>
    )
  }
}