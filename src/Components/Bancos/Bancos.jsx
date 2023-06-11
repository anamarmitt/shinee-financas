import React from "react";
import CadastroContainer from "./Bancos.styled";
import Wrapper from "../../Wrapper.style";
import TotalStyled from "../Total/Total.style";
//import Dropdown from "./Select.style";
import BancoCadastrado from "./BancoCadastrado";

function Bancos() {
  return (
    <div>
      <TotalStyled>
        <h2>Meus Bancos</h2>
      </TotalStyled>

      <CadastroContainer>
        <input type="number" placeholder="Agência"></input>
        <input type="number" placeholder="Saldo"></input>
        <button>✓</button>
      </CadastroContainer>
      <BancoCadastrado />

      <Wrapper>
        <button>Mesclar</button>
        <button>Deletar</button>
      </Wrapper>
    </div>
  );
}

export default Bancos;
