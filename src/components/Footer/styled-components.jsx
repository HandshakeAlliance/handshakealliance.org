import styled from 'styled-components';
import { breakpoint } from "@urkellabs/ucl";

export const Wrapper = styled.div`
  padding: 75px 24px 35px;
  background: #202020;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${breakpoint.tablet} {
    flex-direction: row;
    padding: 0 50px;
  }
`;

export const BlockColumn = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoint.tablet} {
    align-items: flex-start;
  }
`;

export const BlockRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 40px;

  ${breakpoint.tablet} {
    justify-content: flex-start;
  }
`;

export const SubscribeLabel = styled.div`
  font-size: 14px;
  margin: 20px 0 6px 0;
  text-align: left;

  ${breakpoint.tablet} {
    margin: 12px 0 6px 0;
  }
`;

export const SubscribeInput = styled.input`
  background: #363636;
  border: 1.5px solid #696969;
  border-radius: 2px;
  color: #fafafa;
  font-size: 16px;
  margin-bottom: 12px;
  min-width: 220px;
  max-width: 350px;
  outline: none;
  padding: 8px;
  width: 100%;
`;

export const SubscribeButton = styled.button`
  background: #693afa;
  border: 1px solid #693afa;
  border-radius: 2px;
  color: #f2f2f2;
  font-size: 14px;
  padding: 8px;

  &:hover, &:focus {
    background: #4223a4;
    border-color: #4223a4;
    color: #f2f2f2;
    cursor: pointer;
    outline: none;
    transition: .2s ease-in-out;
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
  color: #f2f2f2;
  font-size: 14px;
  font-weight: 300;
  padding: 5px 0;
  text-decoration: none;

  &:visited {
    color: #f2f2f2;
  }
  &:hover {
    color: #693afa;
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
  margin: 20px 0 6px 0;
  &.boldLink {
    font-size: 11pt;
    padding-bottom: 5px;
  }
`;

// export const InfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   height: auto;
//   align-items: center;
// `;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Fa = styled.a`
  color: #fff;
  margin: 24px;
  font-size: 14pt;

  &:hover {
    color: #693afa;
  }
`;

export const Copyright = styled.div`
  font-size: 14px;
  opacity: .4;
`;
