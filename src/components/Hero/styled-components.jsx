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

export const Description = styled.div`
  align-items: center;
  max-width: 80%;
  display: flex;
  flex-grow: 2;
  font-size: 28px;
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

export const LearnButton = styled.button`
  background: #693afa;
  border-color: #693afa;
  border-radius: 5px;
  color: #f2f2f2;
  font-size: 20px;
  padding: 10px 15px;
  margin: 25px 0;
  outline: none;
  &:hover {
    background: #4223a4;
    border-color: #4223a4;
    color: #f2f2f2;
    cursor: pointer;
    transition: .2s ease-in-out;
  }
`;
