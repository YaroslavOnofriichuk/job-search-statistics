import styled from 'styled-components';

export const Div = styled.div`
  margin: 10px auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;

  button {
    display: none;

    @media (min-width: 660px) {
      display: flex;

      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
`;
