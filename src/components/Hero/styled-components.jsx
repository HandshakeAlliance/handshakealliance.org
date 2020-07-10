import styled from 'styled-components';
import { breakpoint } from "@urkellabs/ucl";

export const Wrapper = styled.div`
  background: #202020;
  display: flex;
  flex-direction: column-reverse;
  height: auto;
  overflow: hidden;
  align-items: center;

  ${breakpoint.desktop} {
    align-items: stretch;
    flex-direction: row;
    height: auto;
    padding: 15px 0 135px 0;
    top: 80px;
  }
`;

export const Description = styled.h1`
  align-items: center;
  max-width: 80%;
  display: flex;
  flex-grow: 2;
  font-size: 28px;
  font-weight: 400;
  flex-direction: column;
  padding: 40px 0 70px 0;

  ${breakpoint.desktop} {
    align-items: flex-start;
    max-width: 40%;
    display: flex;
    flex-grow: 2;
    font-size: 42px;
    flex-direction: column;
    padding: 90px 0 0 50px;
    text-align: left;
  }
`;

export const Map = styled.div`
  flex-grow: 1;
  padding: 20px;

  ${breakpoint.desktop} {
    padding: 0 30px 0 0;
  }
`;
