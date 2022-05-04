import styled from 'styled-components';

export const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    display: flex;
  }

  span {
    &:first-child {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-top: 5px;
      margin-right: 10px;
    }
  }

  a:first-child {
    margin-bottom: 10px;
  }
`;
