import styled from 'styled-components';

export const Body = styled.p`
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
