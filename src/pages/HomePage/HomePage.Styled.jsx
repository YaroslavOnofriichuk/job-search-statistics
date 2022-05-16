import styled from 'styled-components';

export const HomePageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    padding: 20px;

    width: 100%;
    position: fixed;
    z-index: 2;

    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    top: 0;
    left: 0;
  }
`;
