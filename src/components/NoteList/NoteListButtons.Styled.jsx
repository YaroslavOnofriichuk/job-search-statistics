import styled from 'styled-components';

export const Div = styled.div`
  margin: 10px auto;
  padding: 5px;
  display: flex;

  button {
    /* width: 16%; */

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
