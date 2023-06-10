import React, { useState } from "react";
import HomeContainer from "./Home.styled";
import Header from "../Header/Header";
import Total from "../Total/Total";
import Grafico from "../Chart/Grafico";
import { DadosUsuario } from "../../Dados";

function Home() {
  const [dadosSaldo, setDadosSaldo] = useState({
    labels: DadosUsuario.map((dados) => dados.mes),
    datasets: [
      {
        label: "Ganhos",
        data: DadosUsuario.map((dados) => dados.ganhos),
        backgroundColor: ["#55F0C2"],
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      },
    ],
  });

  return (
    <HomeContainer>
      <Header />
      <Total />
      <Grafico saldoGrafico={dadosSaldo} />
    </HomeContainer>
  );
}

export default Home;
