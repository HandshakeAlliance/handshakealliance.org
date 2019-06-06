import React, { Component } from 'react';
import * as Objective from './styled-components';
import { Swipeable, defineSwipe } from 'react-touch';

import { ReactComponent as Distributed } from '../../img/distributed.svg';
import { ReactComponent as Uncensorable } from '../../img/uncensorable.svg';
import { ReactComponent as Scalable } from '../../img/scalable.svg';
import { ReactComponent as OpenSource } from '../../img/open-source.svg';

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
        { name: 'Community', key: 'distributed', component: <Scalable /> , body: 'We are a coalition of companies and organizations who have come together with a shared common goal- to ensure the success of Handshake.  All are welcome!', ref: this.distributedRef},
        { name: 'Educate', key: 'uncensorable', component: <Uncensorable />, body: 'We believe that a market is only as strong as its educational foundation. The alliance is focused on providing educational resources for all audiences, whether you are a developer or completely new to blockchain.', ref: this.uncensorableRef},
        { name: 'Adoption', key: 'scaleable', component: <Distributed />, body: 'Handshakes success is determined solely by if it is being used. Therefore, the alliance will provide the infrastructure and necessary open sourced tools for future developers looking to integrate or build on top of Handshake.', ref: this.scaleableRef},
        { name: 'Support', key: 'open-source', component: <OpenSource />, body: 'We are here to help! The alliance is responsible for supporting any and all inquiries regarding Handshake. Seriously, anything! Give us a shout.', ref: this.openSourceRef},
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
