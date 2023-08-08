import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "SUITE";
    src: url("/fonts/SUITE-Variable.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: "SUITE", sans-serif;
  }
`;
