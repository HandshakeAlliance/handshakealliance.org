import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  background: #252525;
  display: flex;
  flex-direction: column;
  height: 60vh;
`;

export const Header = styled.h2`
  color: #f2f2f2;
  font-size: 32px;
  margin-bottom: 0 0 45px;
`;

export const Body = styled.p`
  color: #f2f2f2;
  max-width: 700px;
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
`;