import React from "react";
//import Home from "./Components/Home/Home";
//import Header from "./Components/Header/Header.jsx";
//import HomeContainer from "./Components/Home/Home.styled";
import GlobalStyle from "./GlobalStyle.style.js";
import Wrapper from "./Wrapper.style.js";
import Home from "./Components/Home/Home.jsx";
//import styled from "styled-components"

function App() {
  return (
    <>
      <Wrapper>
        <GlobalStyle />
        <Home />
      </Wrapper>
    </>
  );
}

export default App;
