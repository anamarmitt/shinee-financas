import React, { useState } from "react";
import CadastroContainer from "./Bancos.styled";
import TotalStyled from "../Total/Total.style";
import BancoCadastradoContainer from "./BancoCadastrado.style";
import Transacoes from "../Transacoes/Transacoes";

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

  const [ids, setIds] = useState(3);
  const [saldo, setSaldo] = useState(0);
  //const [agencia, setAgencia] = useState("")
  //const [conta, setConta] = useState("")
  const [nome, setNome] = useState("");
  const [cadastros, setCadastros] = useState(bancosCadastrados);

  const limparCadastro = () => {
    setNome("");
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAA");
    setSaldo(0);
  };

  const cadastrarConta = () => {
    const novaConta = {
      id: ids,
      nome: nome,
      saldo: saldo,
    };
    console.log(novaConta);

    setCadastros([...cadastros, novaConta]);

    setIds(ids + 1);
    limparCadastro();
  };
  const deletarBanco = (id) => {
    const bancosAtuais = cadastros.filter((b) => b.id !== id);
    setCadastros(bancosAtuais);
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
          value={nome}
          placeholder="Banco"
          onChange={(e) => {
            setNome(e.target.value);
          }}
        ></input>
        <input type="number" placeholder="Agência"></input>
        <input type="number" placeholder="Numero da conta"></input>
        <button onClick={cadastrarConta}>Cadastrar</button>
      </CadastroContainer>
      {cadastros.map((banco) => (
        <BancoCadastradoContainer key={banco.id}>
          <p>{banco.nome}</p>
          <p>{banco.saldo}</p>
          <button onClick={() => deletarBanco(banco.id)}>Deletar</button>
        </BancoCadastradoContainer>
      ))}
      <Transacoes bancos={cadastros} />
    </>
  );
}

export default Bancos;
