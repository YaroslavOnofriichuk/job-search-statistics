import styled from 'styled-components';

export const StyledNote = styled.div`
  ul {
    max-width: 600px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    background: rgba(25, 1, 65, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  li {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }

  span {
    overflow: hidden;

    &:first-child {
      text-align: center;
      width: 100%;
      background: #47406f;
    }
  }

  div {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
