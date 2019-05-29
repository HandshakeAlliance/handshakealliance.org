import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #202020;
  display: flex;
  flex-direction: column-reverse;
  height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightMobile});
  overflow: hidden;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    flex-direction: row;
    height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightDesktop});
    top: ${props => props.theme.breakpoint.navbarHeightDesktop};
  }
`;

export const Description = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 2;
  font-size: 24px;
  justify-content: center;
`;

export const Map = styled.div`
  flex-grow: 1;
`;

export const SubscribeButton = styled.button`
  background: #693afa;
  border: 1px solid #693afa;
  border-radius: 1px;
  color: #f2f2f2;
  font-size: 14px;
  padding: 8px;

  &:hover {
    background: #693afa;
    color: #f2f2f2;
    cursor: pointer;
  }
`;
