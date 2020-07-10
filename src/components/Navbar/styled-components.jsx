import styled from 'styled-components';
import { breakpoint } from "@urkellabs/ucl";

export const Wrapper = styled.div`
  align-items: center;
  background: #202020;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 12px;

  ${breakpoint.desktop} {
    height: 80px;
    padding: 0 50px;
  }
`;

export const LogoLeft = styled.div`
  height: 40px;
  width: auto;
`;
