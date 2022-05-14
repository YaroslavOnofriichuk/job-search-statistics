import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  min-height: 100%;

  a {
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.3;

    color: #ffffff;
  }

  @media (min-width: 1170px) {
    flex-direction: row;
  }
`;

export const Header = styled.header`
  background-color: #2c3e50;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  z-index: 1000;

  a {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .active svg {
    fill: #3498db;
  }

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 400px;

    @media (min-width: 1170px) {
      flex-direction: column;
      height: 500px;
      width: 100px;
    }
  }

  @media (min-width: 1170px) {
    flex-direction: column;
    width: 100px;
    min-height: 100vh;
  }
`;

export const Main = styled.main`
  padding: 20px 10px 70px 10px;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1170px) {
    padding: 20px 20px 20px 120px;
  }
`;
