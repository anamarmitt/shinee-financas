import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
margin: 0px;
padding: 0px;
box-sizing: border-box;
}

p{
  line-height: 0.2rem;
}
`;

export default GlobalStyle;
