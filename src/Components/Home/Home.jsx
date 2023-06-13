import React, { useState } from "react";
import HomeContainer from "./Home.styled";
import Header from "../Header/Header";
import Total from "../Total/Total";
import Grafico from "../Grafico/Grafico";
import { DadosUsuario } from "../Grafico/Dados";
import Bancos from "../Bancos/Bancos";
import Wrapper from "../Wrappers/Wrapper.style";
import TotalStyled from "../Total/Total.style";
//import Transacoes from "../Transacoes/Transacoes";

function Home() {
  const [dadosSaldo, setDadosSaldo] = useState({
    labels: DadosUsuario.map((dados) => dados.mes),

    //estilizando o grafico
    datasets: [
      {
        label: "Gastos",
        data: DadosUsuario.map((dados) => dados.gastos),
        backgroundColor: ["#f05564"],
      },
      {
        label: "Ganhos",
        data: DadosUsuario.map((dados) => dados.ganhos),
        backgroundColor: ["#55F0C2"],
      },
    ],
  });

  return (
    <HomeContainer>
      <Header />
      <Total />
      <Grafico saldoGrafico={dadosSaldo} />
      <Bancos />
      <TotalStyled>
        <button>Solicitar histórico</button>
      </TotalStyled>
    </HomeContainer>
  );
}

export default Home;
