import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #262626;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 12px;

  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 80px;
  }
`;

export const LogoLeft = styled.div`
  background: blue;
  height: 40px;
  width: 40px;
`;

export const LogoRight = styled.div`
  background: #262626;
  background: blue;
  height: 40px;
  width: 40px;
`;

