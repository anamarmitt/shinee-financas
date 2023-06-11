import React, { useState } from "react";
import HomeContainer from "./Home.styled";
import Header from "../Header/Header";
import Total from "../Total/Total";
import Grafico from "../Chart/Grafico";
import { DadosUsuario } from "../../Dados";
import Bancos from "../Bancos/Bancos";

function Home() {
  const [dadosSaldo, setDadosSaldo] = useState({
    labels: DadosUsuario.map((dados) => dados.mes),

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
    </HomeContainer>
  );
}

export default Home;
