import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  background: #47406f;
  backdrop-filter: blur(15px);
  border-radius: 3px;
  border: none;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    cursor 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
    background-image: linear-gradient(
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    );
  }
`;
