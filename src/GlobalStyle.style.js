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

h1 {
  font-size: 1.6rem;
  font-weight: 400;
}

h2 {
  font-size: 1.2rem;
  font-weight: 400;
  display: inline-block;
  color: #fff;
  text-align: center;
}

img{
  max-width: 50px;
  max-height: 50px;
}

input{
  max-width: 80px;
  padding: 4px;
  color: #363636;
  border: none;
  box-shadow: none;
  appearance: none;
}
`;

export default GlobalStyle;
