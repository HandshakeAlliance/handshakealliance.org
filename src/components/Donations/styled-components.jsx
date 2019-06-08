import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #252525;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 50px 0 100px 0;
`;

export const Header = styled.h2`
  color: #f2f2f2;
  font-size: 26px;
  margin: 0 0 16px;
`;

export const Hr = styled.hr`
  border: 1px solid #693afa;
  width: 60px;
  margin: 0 0 30px 0;
`;

export const Body = styled.p`
  color: #f2f2f2;
  max-width: 400px;
  margin-bottom: 35px;

  @media (min-width: ${props => props.theme.breakpoint.tabletMin}) {
    margin-bottom: 30px;
    max-width: 600px;
  }

`;

export const Address = styled.input`
  background: #363636;
  border: 1.5px solid #696969;
  border-radius: 2px;
  color: #fafafa;
  font-size: 16px;
  margin-bottom: 12px;
  min-width: 280px;
  overflow: hidden;
  outline: none;
  padding: 8px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;

  &::selection {
    background: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
