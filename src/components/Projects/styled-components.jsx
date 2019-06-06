import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 75px 25px;
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    padding: 75px 45px 90px 45px;
  }
`;

export const Header = styled.h2`
  color: #3f3f44;
  font-size: 26px;
  margin-bottom: 36px;
  text-decoration: underline #693afa;
  text-underline-position: under;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Card = styled.a`
  background: #f2f2f2;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  color: #3f3f44;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 260px;
  padding: 10px 50px 20px;
  margin: 8px;
  text-decoration: none;
  transition: all .2s ease-in-out;
  width: 30%;
  &:hover {
    /* border: 1px solid #693afa; */
    transition: .25s ease-in-out;
    box-shadow: 0 0 5px 0 rgba(105, 57, 250, 0.5);
  }
  @media (min-width: ${props => props.theme.breakpoint.desktopMin}) {
    height: 180px;
    margin: 10px;
  }
`;

export const Brand = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 30px;
`;
