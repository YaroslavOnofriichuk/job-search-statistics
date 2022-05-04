import styled from 'styled-components';

export const StyledDeleteModal = styled.div`
  width: 200px;
  padding: 5px;

  background: rgba(25, 1, 65, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #ffffff;

  display: flex;
  flex-direction: column;

  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 1170px) {
    left: 54%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
