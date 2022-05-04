import styled from 'styled-components';

export const ChangeModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  max-width: 400px;
  width: 100%;

  background: rgba(25, 1, 65, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #ffffff;

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
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: end;

    svg {
      cursor: pointer;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 30px;
    margin-top: 5px;
    border: 1px solid #ffffff;
    border-radius: 1px;
    background: transparent;
    color: #ffffff;

    cursor: pointer;
  }

  select {
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ffffff;
    border-radius: 1px;
    background: transparent;
    color: #ffffff;
  }

  option {
    background: rgba(25, 1, 65, 0.3);
  }

  textarea {
    width: 100%;
    margin-top: 5px;
    border: 1px solid #ffffff;
    border-radius: 1px;
    background: transparent;
    color: #ffffff;
    resize: none;
  }
`;
