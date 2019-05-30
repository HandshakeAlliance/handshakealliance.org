import styled from 'styled-components';

export const Wrapper = styled.div`
  /* debug*/
  align-items: center;
  background: #202020;
  border: 1px solid #262626;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  padding-bottom: 15px;
`;

export const Tabs = styled.div`
  border-bottom: 1.5px solid #262626;
  display: flex;
  justify-content: center;
  margin-bottom: 36px;
  width: 275px;
`;

export const Tab = styled.div`
  padding: 12px;
  text-transform: uppercase;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: #693afa;
  }
`;

// stands for Carousel
export const Car = styled.div`
  /* Change below */
  border: 1px solid #262626;
  height: 350px;
  width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20pt;
  color: #fff;
`;
