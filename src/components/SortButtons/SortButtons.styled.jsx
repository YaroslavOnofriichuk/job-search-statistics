import styled from 'styled-components';

export const Div = styled.div`
  width: 163px;
  height: 40px;
  background: #47406f;
  backdrop-filter: blur(15px);
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    background: #47406f;
    backdrop-filter: blur(15px);
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    li {
      &:nth-child(n + 4) {
        display: none;
      }

      @media (min-width: 660px) {
        &:nth-child(n + 4) {
          display: flex;
        }
      }
    }
  }
`;
