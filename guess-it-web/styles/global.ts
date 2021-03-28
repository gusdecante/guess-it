import { createGlobalStyle } from "styled-components"

import colors from "./colors"

export default createGlobalStyle`
  :root {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${colors.background};
    font-family: 'Roboto', sans-serif; //regular, bold and black
  }
`