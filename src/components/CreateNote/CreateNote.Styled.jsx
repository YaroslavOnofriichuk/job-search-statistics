import styled from 'styled-components';

export const Form = styled.form`
  margin: 10px auto;
  border: 1px solid #ffffff;
  border-radius: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  max-width: 400px;
  background: rgba(25, 1, 65, 0.3);

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
