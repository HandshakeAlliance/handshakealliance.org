import styled, { keyframes } from 'styled-components';

// ***--- Carousel Animations ---*** //
const TransformOutLeft = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateX(-100vw);
  }
`;

const TransformOutRight = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: translateX(100vw);
  }
`;

const TransformInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const TransformInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  background: #252525;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 75px 0 100px 0;
`;

export const AboutHeader = styled.div`
  font-size: 24pt;
  color: #fff;
  margin-bottom: 20px;
`;

export const AboutParagraph = styled.div`
  height: auto;
  line-height: 20px;
  margin-bottom: 35px;
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    height: 100px;
    width: 750px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  width: auto;

  /* Although this isn't ideal to break off an arbitrary width, it significantly improves the view's look at mobile */
  @media(max-width: 445px) {
    display: none;
  }
`;

export const Tab = styled.div`
  border-bottom: 1.5px solid #434343;
  font-size: 12px;
  padding: 8px 10px;
  text-transform: uppercase;
  white-space: nowrap;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    font-size: inherit;
    padding: 12px 14px;
  }

  &.active {
    border-bottom: 1.5px solid #693afa;
  }

  &:hover {
    cursor: pointer;
    color: #693afa;
    transition: .2s ease-in-out;
  }
`;

// stands for Carousel
export const Car = styled.div`
  /* Change below */
  align-items: center;
  /* border: 1px solid #434343; */
  color: #fff;
  display: flex;
  height: 350px;
  font-size: 20pt;
  justify-content: center;
  position: relative;
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    width: 750px;
  }
`;

// There are 2 wrapper containers to allow arrows to sit above both wrappers
export const CarContainer = styled.div`
  /* Must match above h/w */
  height: 350px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    width: 750px;
  }
`;

export const CarImage = styled.div`
  background: #262626;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;

  &.outLeft {
    animation: ${TransformOutLeft} 1s forwards;
  }

  &.outRight {
    animation : ${TransformOutRight} 1s forwards;
  }

  &.inLeft {
    animation: ${TransformInLeft} 1s forwards;
  }

  &.inRight {
    animation : ${TransformInRight} 1s forwards;
  }
`;

export const Arrow = styled.div`
  align-items: center;
  background: #202020;
  border-radius: 50px;
  /* border: 1px solid #fff; */
  border: 1px solid #696969;
  display: none;
  justify-content: center;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  width: 50px;
  z-index: 2;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    display: flex;
  }

  &:hover {
    border: 1.5px solid #969696;
    cursor: pointer;
  }

  &:active {
    border: 1.5px solid #693afa;
  }
`;

export const RightArrow = styled(Arrow)`
  left: calc(100% - 25px);
`;

export const LeftArrow = styled(Arrow)`
  left: calc(0% - 25px);
`;
