import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #202020;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  overflow: hidden;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    flex-direction: row;
    height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightDesktop});
    top: ${props => props.theme.breakpoint.navbarHeightDesktop};
  }
`;

export const Description = styled.div`
  align-items: flex-start;
  max-width: 40%;
  display: flex;
  flex-grow: 2;
  font-size: 45px;
  flex-direction: column;
  padding: 90px 0 0 50px;
  text-align: left;
`;

export const Map = styled.div`
  flex-grow: 1;
  padding-right: 30px;
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
