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

    
    background: #2c3e50;  
    background: -webkit-linear-gradient(to right, #3498db, #2c3e50); 
    background: linear-gradient(to right, #3498db, #2c3e50); 
    background-repeat: no-repeat;
    background-attachment: fixed;


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
