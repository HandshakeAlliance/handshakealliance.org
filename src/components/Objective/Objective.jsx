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

  updateActiveTab = e => {
    let tabs = document.getElementById("tabs").children;
    // Loop through to seek and destroy 'active' class onclick
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains("active")) {
        tabs[i].classList.remove("active");
      }
    }

    e.target.classList.add("active");

  }

  render() {
    return (
      <Objective.Wrapper>
        <Objective.AboutHeader>
          About Handshake
        </Objective.AboutHeader>
        <Objective.AboutParagraph>
          Rockstar facebook paradigm shift virality incubator entrepreneur stealth business-to-consumer
          bootstrapping deployment learning curve android MVP. Angel investor holy grail infrastructure
          graphical user interface buzz termsheet traction marketing investor iPhone direct mailing value
          proposition deployment.
        </Objective.AboutParagraph>
        <Objective.Tabs id="tabs">
          <Objective.Tab onClick={this.updateActiveTab} className="active">Distrubuted</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Uncensorable</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Scalable</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Root Zone</Objective.Tab>
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
