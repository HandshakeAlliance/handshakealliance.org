import styled from 'styled-components';

export const Wrapper = styled.div`
  background: green;
  height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightMobile});

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: calc(100vh - ${props => props.theme.breakpoint.navbarHeightDesktop});
  }
`;

