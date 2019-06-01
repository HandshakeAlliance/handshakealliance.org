import styled from 'styled-components';

export const Wrapper = styled.div`
  /* debug*/
  align-items: center;
  /* background: #202020; */
  background: #252525;
  /* border: 1px solid #262626; */
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
  height: 100px;
  width: 750px;
  line-height: 20px;
  margin-bottom: 35px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  width: auto;
`;

export const Tab = styled.div`
  border-bottom: 1.5px solid #434343;
  padding: 12px 14px;
  text-transform: uppercase;
  white-space: nowrap;

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
  border: 1px solid #434343;
  color: #fff;
  display: flex;
  height: 350px;
  font-size: 20pt;
  justify-content: center;
  position: relative;
  width: 750px;
`;

export const Arrow = styled.div`
  align-items: center;
  border-radius: 50px;
  /* border: 1px solid #fff; */
  border: 1px solid #696969;
  display: none;
  justify-content: center;
  height: 50px;
  position: absolute;
  top: calc(50% - 25px);
  width: 50px;

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
  left: calc(100% + 25px);
`;

export const LeftArrow = styled(Arrow)`
  left: calc(0% - 25px);
`;
