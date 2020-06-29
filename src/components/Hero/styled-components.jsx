import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #202020;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  overflow: hidden;
  align-items: center;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    align-items: stretch;
    flex-direction: row;
    height: auto;
    padding: 15px 0 135px 0;
    /* height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightDesktop}); */
    top: ${props => props.theme.breakpoint.navbarHeightDesktop};
  }
`;

export const Description = styled.h1`
  align-items: center;
  max-width: 80%;
  display: flex;
  flex-grow: 2;
  font-size: 28px;
  font-weight: 400;
  flex-direction: column;
  padding: 40px 0 70px 0;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    align-items: flex-start;
    max-width: 40%;
    display: flex;
    flex-grow: 2;
    font-size: 42px;
    flex-direction: column;
    padding: 90px 0 0 50px;
    text-align: left;
  }
`;

export const Map = styled.div`
  flex-grow: 1;
  padding: 20px;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 0 30px 0 0;
  }
`;
