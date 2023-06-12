import React, { useState } from "react";
import CadastroContainer from "./Bancos.styled";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "./BancoCadastrado.style";

function Bancos() {
  let nextId = 3;

  const bancosCadastrados = [
    {
      id: 1,
      agencia: 123456,
      conta: 879,
      nome: "Santander",
      saldo: 14206.0,
    },
    {
      id: 2,
      agencia: 543210,
      conta: 989,
      nome: "Nubank",
      saldo: 14206.0,
    },
  ];

  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [banco, setBanco] = useState(bancosCadastrados);

  const cadastrarBanco = () => {
    const insertAt = 3;
    const novoBanco = [
      ...banco.slice(0, insertAt),
      //novo item
      { id: nextId++, nome: nome, saldo: saldo },
      ...banco.slice(insertAt),
    ];
    setBanco(novoBanco);
    setNome("");
    //setSaldo(0);
  };

  const deletarBanco = (id) => {
    const bancosAtuais = banco.filter((b) => b.id !== id);
    setBanco(bancosAtuais);
  };

  //funciona mas deleta todos os novos itens tentar pop

  return (
    <>
      <TotalStyled>
        <h2>Meus Bancos</h2>
      </TotalStyled>
      <CadastroContainer>
        <input
          type="text"
          placeholder="Banco"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
        <input type="number" placeholder="Agência"></input>
        <input type="number" placeholder="Numero da conta"></input>
        <button onClick={cadastrarBanco}>Cadastrar</button>
      </CadastroContainer>
      {banco.map((banco, saldo) => (
        <BancoCadastradoContainer>
          <p key={banco.id}>{banco.nome}</p>
          <p key={saldo.id}>{banco.saldo}</p>
          <button onClick={() => deletarBanco(banco.id)}>Deletar</button>
        </BancoCadastradoContainer>
      ))}
    </>
  );
}

export default Bancos;
