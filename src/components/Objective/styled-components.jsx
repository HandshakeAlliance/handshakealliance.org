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
  background: #262626;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  padding: 75px 0 100px 0;
`;

export const Header = styled.h2`
  color: #fff;
  font-size: 24pt;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Hr = styled.hr`
  border: 1px solid #693afa;
  margin: 0 0 25px;
  width: 50px;
`;

export const AboutParagraph = styled.div`
  height: auto;
  line-height: 20px;
  margin: 25px 0 40px 0;
  width: 90%;
  font-size: 14pt;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    height: 100px;
    width: 750px;
    margin: 25px 0 10px 0;
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  width: auto;
`;

export const Tab = styled.div`
  border-bottom: 1.5px solid #434343;
  font-size: 14px;
  padding: 8px 10px;
  text-transform: uppercase;
  white-space: nowrap;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    font-size: inherit;
    padding: 12px 14px;
  }

  @media(max-width: 445px) {
    font-size: 12px;
  }

  &.active {
    border-bottom: 1.5px solid #693afa;
  }

  &:hover {
    cursor: pointer;
    color: #a1a1a1;
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
  height: 460px;
  font-size: 12pt;
  justify-content: center;
  position: relative;
  width: 80%;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    height: 400px;
    width: 750px;
  }
`;

// There are 2 wrapper containers to allow arrows to sit above both wrappers
export const CarContainer = styled.div`
  /* Must match above h/w */
  height: 460px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    height: 400px;
    width: 750px;
  }
`;

export const CarSlide = styled.div`
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

export const SlideBody = styled.div`
  margin: 0 auto;
  max-width: 600px;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    padding-top: 24px;
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
