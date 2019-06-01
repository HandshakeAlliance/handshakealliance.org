import React, { Component } from 'react';
import * as Objective from './styled-components';

export default class ObjectiveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        { key: 'distributed', url: '', body: ''},
        { key: 'uncensorable', url: '', body: ''},
        { key: 'scaleable', url: '', body: ''},
        { key: 'root-zone', url: '', body: ''},
        { key: 'open-source', url: '', body: ''},
      ],
      activeSlide: 'distributed'
    };
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

  displaySlides = () => {
    let output = [];
    for(let slide of this.state.slides) {
      output.push(<Objective.CarImage key={slide.key}>{slide.key}</Objective.CarImage>)
    }
    return output;
  }

  previous = () => {

  }

  next = () => {

  }

  // TODO: Move all Carousel logic and styling into a separate component
  // This function does a little bit of everything (sorry)
  updateActive = to => {
    // escape if we're already at the target
    if (to === this.state.activeSlide) return;
    let atIndex, toIndex = -1;

    // Find the relative position of both slides
    for(let index in this.state.slides) {
      if (this.state.slides[index].key === to) toIndex = index;
      if (this.state.slides[index].key === this.state.activeSlide) atIndex = index;
    }

    // set animation direction
    if (atIndex > toIndex) {
      // Right
    } else {
      // Left
    }

    // Animate out Slide

    // Animate in Slide


    // update active
    this.setState({activeSlide: this.state.slides[toIndex].key})
  }

  clearAnimation

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
          <Objective.Tab onClick={this.updateActiveTab} className="active">Distributed</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Uncensorable</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Scalable</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Root Zone</Objective.Tab>
          <Objective.Tab onClick={this.updateActiveTab}>Open Source</Objective.Tab>
        </Objective.Tabs>

        <Objective.Car>

          <Objective.CarContainer>
            {this.displaySlides()}
            {/* <Objective.CarImage className="inRight">Rest</Objective.CarImage>
            <Objective.CarImage className="outLeft">Test</Objective.CarImage> */}
          </Objective.CarContainer>

          <Objective.RightArrow onClick={this.next}>
            <i className="fas fa-chevron-right"></i>
          </Objective.RightArrow>
          <Objective.LeftArrow onClick={this.previous}>
            <i className="fas fa-chevron-left"></i>
          </Objective.LeftArrow>
        </Objective.Car>

      </Objective.Wrapper>
    )
  }
}
