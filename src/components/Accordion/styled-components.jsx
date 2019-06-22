import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 2px solid #696969;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 16px 40px;
  position: relative;
  margin: 16px 40px;
  max-width: 800px;
  height: 96px;
`;

export const BurgerIcon = styled.div`
  align-self: center;
  border: 1px solid red;
  margin: 0 auto;
  position: absolute;
  bottom: 0;

  height: 32px;
  width: 32px;
`;