import React, { Component } from 'react';
import * as Objective from './styled-components';
import { Swipeable, defineSwipe } from 'react-touch';


export default class ObjectiveComponent extends Component {
  constructor(props) {
    super(props);

    this.distributedRef = React.createRef();
    this.uncensorableRef = React.createRef();
    this.scaleableRef = React.createRef();
    this.rootZoneRef = React.createRef();
    this.openSourceRef = React.createRef();

    this.state = {
      slides: [
        { name: 'Distributed', key: 'distributed', url: '', body: 'Compressed and distributed to thousands of child nodes around the world, handshake can be found on any user\'s computer.', ref: this.distributedRef},
        { name: 'Uncensorable', key: 'uncensorable', url: '', body: 'Driven by a consensus-based blockchain, names cannot be taken down by anyone with political or malicious intent. Once on the chain, the action is all but immutable.', ref: this.uncensorableRef},
        { name: 'Scalable', key: 'scaleable', url: '', body: 'Handshake uses a Merkle Tree, an innovative data structure that uses nearly no memory space to maintain.', ref: this.scaleableRef},
        { name: 'Root Zone', key: 'root-zone', url: '', body: 'halp. I dont know what this even means...', ref: this.rootZoneRef},
        { name: 'Open Source', key: 'open-source', url: '', body: 'All code for Handshake is entirely open source, meaning the community has every chance to ensure it\'s safety and quality.', ref: this.openSourceRef},
      ],
      activeSlide: 'distributed'
    };
  }

  componentDidMount() {
    this.updateActiveTab();
    this.updateActiveSlide();
  }

  updateActiveTab = (e, key) => {
    let tabs = document.getElementById('tabs').children;

    if (!e && !key) {
      // set default active if no event exists
      tabs[0].classList.add('active');
      return;
    }

    // Loop through to seek and destroy 'active' class onclick
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].classList.contains('active')) {
        tabs[i].classList.remove('active');
      }
    }

    this.updateActiveSlide(key)

    // Was not called via a click
    if (!e) {
      // Loop through slides, find passed key, set corresponding tag
      for (let i in this.state.slides) {
        if (this.state.slides[i].key === key) {
          tabs[i].classList.add('active')
        }
      }
      return;
    }

    e.target.classList.add('active');
  }

  displaySlides = () => {
    let output = [];
    for(let slide of this.state.slides) {
      output.push(
      <Objective.CarImage
        key={'slide' + slide.key}
        ref={slide.ref}>
        {slide.body}
      </Objective.CarImage>
      )
    }
    return output;
  }

  displayTabs = () => {
    let output = [];
    for(let tab of this.state.slides) {
      output.push(
        <Objective.Tab
          key={'tab-' + tab.key}
          onClick={e => this.updateActiveTab(e, tab.key)}>
          {tab.name}
        </Objective.Tab>
      )
    }
    return output;
  }

  previous = () => {
    // Find current slide, then update to the following slide
    let i;
    for (i = this.state.slides.length - 1; i >= 0; i--) {
      if (this.state.slides[i].key === this.state.activeSlide) break;
    }
    if (i === 0) {
      this.updateActiveTab(null, 'open-source')
    } else {
      this.updateActiveTab(null, this.state.slides[i - 1].key)
    }
  }

  next = () => {
    // Find current slide, then update to the following slide
    let i;
    for(i = 0; i < this.state.slides.length; i++) {
      if (this.state.slides[i].key === this.state.activeSlide) break;
    }
    if (i === this.state.slides.length - 1) {
      this.updateActiveTab(null, 'distributed')
    } else {
      this.updateActiveTab(null, this.state.slides[i + 1].key)
    }
  }

  // TODO: Move all Carousel logic and styling into a separate component
  // This function does a little bit of everything (sorry)
  // @params to?: string - key of desired slide
  updateActiveSlide = to => {
    if (!to) {
      // set default
      this.state.slides[0].ref.current.classList.add('inRight');
      return;
    }

    // escape if we're already at the target
    if (to === this.state.activeSlide) return;
    let atIndex, toIndex = -1;

    // Find the relative position of both slides
    for(let index in this.state.slides) {
      if (this.state.slides[index].key === to) toIndex = index;
      if (this.state.slides[index].key === this.state.activeSlide) atIndex = index;
    }

    let toElement = this.state.slides[toIndex].ref.current;
    let atElement = this.state.slides[atIndex].ref.current;

    this.clearAllAnimations(atElement)

    if (atIndex > toIndex) {
      atElement.classList.add('outRight');
      toElement.classList.add('inLeft')
    } else {
      atElement.classList.add('outLeft');
      toElement.classList.add('inRight')
    }

    // update active
    this.setState({activeSlide: this.state.slides[toIndex].key})
  }

  // Clears all leftover animation styles on all child nodes
  clearAllAnimations = node => {
    node.classList.remove('outLeft')
    node.classList.remove('outRight')
    node.classList.remove('inLeft')
    node.classList.remove('inRight')
  }

  render() {
    const swipe = defineSwipe({swipeDistance: 50});

    return (
      <Objective.Wrapper>
        <Objective.AboutHeader>
          The Alliance
        </Objective.AboutHeader>
        <Objective.AboutParagraph>
          Handshake is a proposed replacement to the trusted actors that control the web through centralization. These ... have and will fail again, sacrificing the integrity of the web.
          The alliance around Handshake aims to never let this happen again. We are a group of passionate developers trying to make the world a safer, more secure place.
        </Objective.AboutParagraph>
        <Objective.Tabs id='tabs'>
          {this.displayTabs()}
        </Objective.Tabs>

        <Objective.Car>

          <Swipeable config={swipe} onSwipeLeft={this.next} onSwipeRight={this.previous}>
            <Objective.CarContainer>
              {this.displaySlides()}
            </Objective.CarContainer>
          </Swipeable>


            <Objective.RightArrow onClick={this.next}>
              <i className='fas fa-chevron-right'></i>
            </Objective.RightArrow>
            <Objective.LeftArrow onClick={this.previous}>
              <i className='fas fa-chevron-left'></i>
            </Objective.LeftArrow>
        </Objective.Car>

      </Objective.Wrapper>
    )
  }
}
