import styled from 'styled-components';

export const AvatarContainer = styled.div`
  border: 5px solid #ffffff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-position: center;
`;
