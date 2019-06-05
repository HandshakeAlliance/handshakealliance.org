import React, { Component } from 'react';
import * as Objective from './styled-components';
import { Swipeable, defineSwipe } from 'react-touch';

import { ReactComponent as Distributed } from '../../distributed.svg';
import { ReactComponent as Uncensorable } from '../../uncensorable.svg';
import { ReactComponent as Scalable } from '../../scalable.svg';
import { ReactComponent as OpenSource } from '../../open-source.svg';

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
        { name: 'Distributed', key: 'distributed', component: <Distributed />, body: 'Compressed and distributed to thousands of child nodes around the world, handshake can be found on any user\'s computer.', ref: this.distributedRef},
        { name: 'Uncensorable', key: 'uncensorable', component: <Uncensorable />, body: 'Driven by a consensus-based blockchain, names cannot be taken down by anyone with political or malicious intent. Once on the chain, the action is all but immutable.', ref: this.uncensorableRef},
        { name: 'Scalable', key: 'scaleable', component: <Scalable />, body: 'Handshake uses a Merkle Tree, an innovative data structure that uses nearly no memory space to maintain.', ref: this.scaleableRef},
        { name: 'Open Source', key: 'open-source', component: <OpenSource />, body: 'All code for Handshake is entirely open source, meaning the community has every chance to ensure it\'s safety and quality.', ref: this.openSourceRef},
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
      <Objective.CarSlide
        key={'slide' + slide.key}
        ref={slide.ref}>
        {slide.component}
          <Objective.SlideBody>
            {slide.body}
          </Objective.SlideBody>
      </Objective.CarSlide>
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
      // this.updateActiveTab(null, 'open-source')
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
      // this.updateActiveTab(null, 'distributed')
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
          We are the Handshake Alliance, a group of passionate developers
          working towards a more secure internet, open to everyone. We build
          the tools to support the <a href="https://handshake.org" className="handshake" target="_blank" rel="noopener noreferrer">Handshake</a> blockchain and help drive adoption.
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
