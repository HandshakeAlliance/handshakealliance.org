import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #252525;
  /* TODO This height isn't right. Let's play with it */
  height: auto;
  padding: 75px 25px;
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 75px 45px 65px 45px;
  }
`;

export const Header = styled.h2`
  color: #f2f2f2;
  font-size: 26px;
  margin-bottom: 45px;
  text-decoration: underline #693afa;
  text-underline-position: under;
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
  filter: grayscale(100%);
  margin: 45px;

  &:hover {
    filter: none;
  }
`;
