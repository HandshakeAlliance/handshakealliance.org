import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 24px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    flex-direction: row;
  }
`;

export const BlockColumn = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

export const BlockRow = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: ${props => props.theme.breakpoint.desktopMin}) {
    flex-direction: row;
  }
`;

export const SubscribeLabel = styled.div`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const SubscribeInput = styled.input`
  background: #363636;
  border: 1.5px solid #696969;
  color: #fafafa;
  font-size: 16px;
  margin-bottom: 8px;
  outline: none;
`;

export const SubscribeButton = styled.button`
  background: #693afa;
  border: 1px solid #693afa;
  border-radius: 1px;
  color: #f2f2f2;
  font-size: 14px;
  padding: 8px;

  &:hover {
    background: #fafafa;
    color: #262626;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  text-align: left;
`;

export const Header = styled.div`
  font-weight: 600;
  padding-bottom: 5px;
  text-transform: uppercase;
`;

export const Link = styled.a`
  font-size: 14px;
  font-weight: 300px;

  &:hover {
    color: #693afa;
    cursor: pointer;
  }

  &:visited {
    color: #f2f2f2;
    text-decoration-line: none;
  }
`;

export const TextContainer = styled.div`
  width: 75%;
  max-width: 325px;
  min-width: 260px;
  margin-top: 10px;
  font-size: 11pt;
  text-align: center;
`;

export const Bold = styled.div`
  font-weight: bold;
  font-size: 10pt;
  margin: 20px 0 0 0;
  &.boldLink {
    font-size: 11pt;
    padding-bottom: 5px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Fa = styled.a`
  color: #fff;
  padding: 24px;
  width: 48px;

  &:hover {
    color: #693afa;
  }
`;
