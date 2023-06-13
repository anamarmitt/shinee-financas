import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import GraficoContainer from "./Grafico.style";

function Grafico({ saldoGrafico }) {
  return (
    <GraficoContainer>
      <Bar
        data={saldoGrafico}
        options={{
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    </GraficoContainer>
  );
}

export default Grafico;
