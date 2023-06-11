import React from "react";
import WrapperColumn from "../../WrapperColumn.style";
//import Wrapper from "../../Wrapper.style";
import BancoCadastradoContainer from "./BancoCadastrado.style";

function BancoCadastrado() {
  const bancosCadastrados = [
    {
      id: 1,
      nome: "Santander",
      saldo: 14206.0,
    },
    {
      id: 2,
      nome: "Nubank",
      saldo: 14206.0,
    },
  ];

  //const adcionaBanco = () => {
  //funçao que de um push num banco novo com saldo 0
  //};

  return (
    <BancoCadastradoContainer>
      <WrapperColumn>
        {bancosCadastrados.map(({ nome }) => (
          <p>{nome}</p>
        ))}
      </WrapperColumn>
      <WrapperColumn>
        {bancosCadastrados.map(({ saldo }) => (
          <p>R${saldo}</p>
        ))}
      </WrapperColumn>
    </BancoCadastradoContainer>
  );
}

export default BancoCadastrado;
