import React, { Component } from 'react';
import * as Objective from './styled-components';

export default class ObjectiveComponent extends Component {
  render() {
    return (
      <Objective.Wrapper>
        <Objective.Paragraph>
        Here is where we will put the objective statement saying something
        significant
        </Objective.Paragraph>
      </Objective.Wrapper>
    )
  }
}
