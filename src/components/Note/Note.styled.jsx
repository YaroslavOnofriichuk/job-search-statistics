import styled from 'styled-components';

export const StyledNote = styled.div`
  ul {
    max-width: 600px;
    margin: 20px auto;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(25, 1, 65, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    li {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      a {
        text-decoration: underline;
      }

      span {
        &:first-child {
          text-align: center;
          width: 100%;
          background: #47406f;
        }

        &:last-child {
          word-break: break-word;
        }
      }
    }
  }

  div {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
