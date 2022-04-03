import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }

  a:first-child {
    margin-bottom: 10px;
  }
`;
