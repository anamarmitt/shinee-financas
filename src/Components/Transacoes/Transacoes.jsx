import React, { useState } from "react";
import { transacoesCadastradas } from "./DadosTransacoes";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "../Bancos/BancoCadastrado.style";
import CadastroContainer from "../Bancos/Bancos.styled";

function Transacoes({ bancos }) {
  const [transacoes, setTransacoes] = useState(
    transacoesCadastradas.slice(0, 3)
  );
  //transacoesCadastradas.filter((item) => item.bancoId);

  return (
    <>
      <TotalStyled>
        <h2>Transacoes</h2>
      </TotalStyled>

      <CadastroContainer>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Data"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
        <input
          type="number"
          placeholder="Valor"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
        <button onClick={``}>Adcionar</button>
      </CadastroContainer>

      {transacoes.map(({ tipo, data, valor }) => {
        return (
          <BancoCadastradoContainer>
            <p>{tipo}</p>
            <p>{data}</p>
            <p>R${valor}</p>
          </BancoCadastradoContainer>
        );
      })}
    </>
  );
}

export default Transacoes;
