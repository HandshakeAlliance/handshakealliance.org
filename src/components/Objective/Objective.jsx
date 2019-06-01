import React, { Component } from 'react';
import * as Objective from './styled-components';

export default class ObjectiveComponent extends Component {
  constructor(props) {
    super(props);

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
        </Objective.Tabs>

        <Objective.Car>
          <Objective.CarContainer>

            <Objective.CarImage>Test</Objective.CarImage>
            <Objective.CarImage className="test">Test</Objective.CarImage>
          </Objective.CarContainer>
          <Objective.RightArrow>
            <i className="fas fa-chevron-right"></i>
          </Objective.RightArrow>
          <Objective.LeftArrow>
            <i className="fas fa-chevron-left"></i>
          </Objective.LeftArrow>
        </Objective.Car>

      </Objective.Wrapper>
    )
  }
}
