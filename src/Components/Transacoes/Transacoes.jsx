import React, { useState } from "react";
import { transacoesCadastradas } from "./DadosTransacoes";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "../Bancos/BancoCadastrado.style";

function Transacoes() {
  const [transacoes, setTransacoes] = useState(
    transacoesCadastradas.slice(0, 3)
  );
  //transacoesCadastradas.filter((item) => item.bancoId);

  return (
    <>
      <TotalStyled>
        <h2>Transacoes</h2>
      </TotalStyled>

      {transacoes.map(({ tipo, data, valor }) => (
        <BancoCadastradoContainer>
          <p>{tipo}</p>
          <p>{data}</p>
          <p>R${valor}</p>
        </BancoCadastradoContainer>
      ))}
    </>
  );
}

export default Transacoes;
