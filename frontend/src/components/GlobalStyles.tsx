import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  overflow: hidden;
  background-color: #1976d2;
}
`

export default GlobalStyles
