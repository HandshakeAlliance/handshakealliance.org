import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 72px 25px;
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 72px 45px;
  }
`;

export const Header = styled.h2`
  color: #f2f2f2;
  font-size: 26px;
  margin-bottom: 36px;
  text-decoration: underline #693afa;
`;

export const Logos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(min-width: ${props => props.theme.breakpoint.tabletMin}) {
    flex-direction: row;
  }
`;

export const LogoWrapper = styled.a`
  cursor: pointer;
  margin: 24px;
`;