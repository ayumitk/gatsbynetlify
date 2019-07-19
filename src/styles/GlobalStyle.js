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
    font-weight: 600;
    src: url("../../font/nsjpb.woff") format("woff");
  }

  @font-face {
    font-family: "nsjp";
    font-style: normal;
    font-weight: 800;
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "nsjp", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
    font-family: 'Nunito Sans', "nsjp", sans-serif;
    font-weight: 900;
  }

  a{
    color: ${theme.color.blue500};
    text-decoration: none;
    &:hover{
      color: ${theme.color.blue600};
      text-decoration: underline;
    }
  }

  button{
    line-height: 1.6;
    font-size: 1.8rem;
    font-weight: 400;
    cursor: pointer;
    text-align: center;
  }
`;

export default GlobalStyle;
