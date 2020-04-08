import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
   height: 100%;
   width: 100%;
  }
  body  {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Roboto;
    overflow: hidden;
  }
`;

export default GlobalStyles;
