import React, { useState } from "react";
import { transacoesCadastradas } from "./DadosTransacoes";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "../Bancos/BancoCadastrado.style";
import CadastroContainer from "../Bancos/Bancos.styled";
import Wrapper from "../Wrappers/Wrapper.style";

function Transacoes() {
  //usando o array de transacoes pro componente e cortando só as primeiras 3, começando no indice 0
  const [transacoes, setTransacoes] = useState(
    transacoesCadastradas.reverse().slice(0, 3) //reverse pra exibir as ultimas primeiro
  );
  const [tipo, setTipo] = useState();
  const [data, setData] = useState();
  const [valor, setValor] = useState();
  const [ids, setIds] = useState();

  const limparTransacao = () => {
    setTipo("");
    setData("");
    setValor("");
  };

  const cadastrarTrasacao = () => {
    const novaTransacao = {
      id: ids,
      tipo: tipo,
      data: data,
      valor: valor,
    };

    setTransacoes([...transacoes, novaTransacao]);

    setIds(ids + 1);
    limparTransacao();
  };

  return (
    <>
      <TotalStyled>
        <h2>Transacoes</h2>
      </TotalStyled>

      <CadastroContainer>
        {/*pegando o valor do input*/}
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => {
            setTipo(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="dia/mes/ano"
          onChange={(e) => {
            setData(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Valor"
          onChange={(e) => {
            setValor(e.target.value);
          }}
        ></input>
        <button onClick={cadastrarTrasacao}>Adcionar</button>
      </CadastroContainer>

      {/*mapeando pelos dados das transacoes*/}
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
