import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

     background-color: #185a9d;
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2990' height='1990' preserveAspectRatio='none' viewBox='0 0 2990 1990'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1026%26quot%3b)' fill='none'%3e%3crect width='2990' height='1990' x='0' y='0' fill='url(%23SvgjsLinearGradient1027)'%3e%3c/rect%3e%3cpath d='M2990 0L2672.92 0L2990 650.79z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M2672.92 0L2990 650.79L2990 1223.82L1686.5700000000002 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M1686.57 0L2990 1223.82L2990 1253.34L1316.3799999999999 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M1316.3799999999999 0L2990 1253.34L2990 1393.52L866.5899999999999 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 1990L138.58 1990L0 1812.16z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 1812.16L138.58 1990L1561.4299999999998 1990L0 1391.48z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 1391.48L1561.4299999999998 1990L1996.9299999999998 1990L0 632.4300000000001z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 632.4300000000001L1996.9299999999998 1990L2081.3999999999996 1990L0 366.80000000000007z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1026'%3e%3crect width='2990' height='1990' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='91.64%25' y1='112.56%25' x2='8.36%25' y2='-12.56%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1027'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(9%2c 97%2c 209%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"); */
    font-family: 'Oswald', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 1.2;

    color: #FFFFFF;
    height: 100%;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
