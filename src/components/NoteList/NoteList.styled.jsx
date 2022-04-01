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
  }

  div {
    padding: 5px;
    width: 16%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  P {
    overflow: hidden;
    word-break: break-word;

    &:first-child {
      background: #47406f;
    }
  }
`;
