import { createGlobalStyle } from 'styled-components';
import img from '../../images/background-img.jpg';


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    min-height: 100vh;
    margin: 0;
    /* font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Inter', sans-serif;
    line-height: 1.5; */
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    background-image: linear-gradient(
    rgba(47, 48, 58, 0.2),
    rgba(47, 48, 58, 0.2)
    ),
    url(${img});
    background-size: cover;
    background-attachment: fixed;
    background-color: #E5E5E5;
    backdrop-filter: blur(8px);

    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;

    color: #FFFFFF;
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