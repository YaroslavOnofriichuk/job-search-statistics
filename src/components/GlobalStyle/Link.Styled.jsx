import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  background: rgba(25, 1, 65, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 10px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    cursor 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-image: linear-gradient(
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    );
  }
`;
