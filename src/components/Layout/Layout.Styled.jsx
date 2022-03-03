import styled from 'styled-components';

export const Section = styled.section`
  display: flex;

  a {
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;

    color: #ffffff;
  }
`;

export const Header = styled.header`
  background-image: linear-gradient(
    rgba(47, 48, 58, 0.2),
    rgba(47, 48, 58, 0.2)
  );
  width: 100px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    /* border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff; */
    /* border-right: 1px solid #ffffff; */
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    border-right: none;
  }
`;

export const Main = styled.main`
  padding: 20px;
  width: 100%;
`;
