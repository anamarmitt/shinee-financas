import React from "react";
import HeaderStyled from "./Header.styled";
import diamond from "../../Assets/diamond.png";

function Header() {
  return (
    <HeaderStyled>
      <h1>Olá, Ana</h1>
      <img src={diamond} />
    </HeaderStyled>
  );
}

export default Header;
