import styled from 'styled-components';

export const Ul = styled.ul`
  margin: 0 auto;

  li {
    list-style: none;
    padding: 5px;
  }

  a {
    background: rgba(25, 1, 65, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;

    @media (min-width: 660px) {
      flex-direction: row;
    }
  }

  div {
    padding: 5px;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &:nth-child(n + 4) {
      display: none;
    }

    @media (min-width: 660px) {
      width: 100%;

      &:nth-child(n + 4) {
        display: flex;
      }
    }
  }

  P {
    overflow: hidden;
    word-break: break-word;
    text-align: center;

    &:first-child {
      background: #47406f;
    }
  }
`;
