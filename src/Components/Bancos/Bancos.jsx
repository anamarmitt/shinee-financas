import React, { useState } from "react";
import CadastroContainer from "./Bancos.styled";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "./BancoCadastrado.style";

function Bancos() {
  let nextId = 3;

  //const [banco, setBanco] = useState([
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

  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);
  const [banco, setBanco] = useState(bancosCadastrados);

  function cadastrarBanco() {
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
  }

  //const cadastraBanco = () => {
  //  setBanco([...banco, { id: nextId++, nome: banco }]);
  //};

  //const [banco, setBanco] = useState("");
  //const [agencia, setAgencia] = useState("");

  //const cadastraBanco = () => {
  //bancosCadastrados.push({
  // banco: { setBanco },
  // saldo: 0,
  //});

  //dar push no array de banco
  //};

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
        <button onClick={cadastrarBanco}>Cadastrar</button>
      </CadastroContainer>
      {banco.map((banco, saldo) => (
        <BancoCadastradoContainer>
          <p key={banco.id}>{banco.nome}</p>
          <p key={saldo.id}>{banco.saldo}</p>
          <button>Deletar</button>
        </BancoCadastradoContainer>
      ))}
    </>
  );
}

export default Bancos;
