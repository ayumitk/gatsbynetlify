import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 400;
    src: url("../../font/nsjpdl.woff") format("woff");
  }

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 700;
    src: url("../../font/nsjpb.woff") format("woff");
  }

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 900;
    src: url("../../font/nsjpbl.woff") format("woff");
  }

  html{
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    line-height: 1.6;
    color: ${theme.color.black};
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "nsjp", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; */
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "nsjp", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
  }

  p, ul, ol, li{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6{
    line-height: 1.25;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }

  h1{
    font-size: 4rem;
  }

  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2rem;
  }

  a{
    color: ${theme.color.blue500};
    text-decoration: none;
    &:hover{
      color: ${theme.color.blue600};
      text-decoration: underline;
    }
  }

  button, input, textarea{
    line-height: 1.6;
    font-size: 1.8rem;
    font-weight: 400;
  }

  button{
    cursor: pointer;
    text-align: center;
    border:0;
  }
`;

export default GlobalStyle;
