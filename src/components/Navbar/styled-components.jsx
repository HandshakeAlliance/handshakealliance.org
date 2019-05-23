import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 12px;

  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 80px;
  }
`;

export const LogoLeft = styled.div`
  height: 40px;
  width: auto;
`;
