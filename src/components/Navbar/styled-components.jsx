import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #202020;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 12px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 80px;
  }
`;

export const LogoLeft = styled.div`
  height: 40px;
  width: auto;
`;
