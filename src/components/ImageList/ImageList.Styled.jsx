import styled from 'styled-components';

export const ImageListSection = styled.section`
  ul {
    margin: 0 auto;
    padding-top: 90px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }

  p {
    margin-bottom: 30px;
    text-align: center;
  }

  img {
    border: 3px solid #ffffff;
    border-radius: 5px;
  }

  .disappear {
    opacity: 0;
    object-fit: cover;
    transform: translateX(-50%);
  }

  .appear {
    transform: translateX(0);
    transition: all 1000ms;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.6, 1.34);
    opacity: 1;
  }
`;
