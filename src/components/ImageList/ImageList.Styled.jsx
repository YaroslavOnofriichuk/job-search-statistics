import styled from 'styled-components';

export const ImageListSection = styled.section`
  ul {
    margin: 0 auto;
    /* max-width: 1300px; */
  }

  li {
    margin-bottom: 20px;
    /* width: 700px;
    height: 700px;
    display: block; */
  }

  .disappear {
    transform: translateX(-50%);
    opacity: 0;
    object-fit: cover;
  }

  .appear {
    transform: translateX(0);
    transition: all 1000ms;
    transition-timing-function: cubic-bezier(0.17, 0.67, 1, 1.77);
    opacity: 1;
  }
`;
