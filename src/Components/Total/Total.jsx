import React from "react";
import TotalStyled from "./Total.style";

function Total() {
  return (
    <TotalStyled>
      <p1>Saldo em Conta</p1>
      <p>R$28412,00</p>
      {/*O total aqui deveria ser responsivo mas acabou ficando estatico pq priorizei outras funcionalidades*/}
    </TotalStyled>
  );
}

export default Total;
