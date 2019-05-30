import React, { Component } from 'react';
import * as Objective from './styled-components';

export default class ObjectiveComponent extends Component {
  constructor(props) {
    super(props);

    // setting up various tabs as refs (probably not doing this right)
    // this.fastRef = React.createRef();
    // this.decRef = React.createRef();
    // this.scaleRef = React.createRef();
    // this.collRef = React.createRef();
    // this.bridRef = React.createRef();
    // this.openRef = React.createRef();

    // this.state = {
    //   activeRef: this.fastRef
    // }
  }

  // updateActiveTab = e => {

  // }

  render() {
    return (
      <Objective.Wrapper>
        <Objective.Tabs>
          {/* TODO For the love of God, change these to NOT plagarize */}
          <Objective.Tab onClick={this.updateActiveTab} className="active">Fast</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Decenteralized</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Scalable</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Collaborative</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Bridging</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Open Source</Objective.Tab>
          {/* <Objective.Tab ref={this.fastRef}>Fast</Objective.Tab>
          <Objective.Tab ref={this.decRef}>Decenteralized</Objective.Tab>
          <Objective.Tab ref={this.scaleRef}>Scalable</Objective.Tab>
          <Objective.Tab ref={this.collRef}>Collaborative</Objective.Tab>
          <Objective.Tab ref={this.bridRef}>Bridging</Objective.Tab>
          <Objective.Tab ref={this.openRef}>Open Source</Objective.Tab> */}
        </Objective.Tabs>

        <Objective.Car>
        [ Here is the Objective Carousel Slider ]
        </Objective.Car>
      </Objective.Wrapper>
    )
  }
}
