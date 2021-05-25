import React, { useEffect, useState } from "react";
import entradas from "../img/entradas.svg";
import saidas from "../img/saidas.svg";
import totalImg from "../img/totalImg.svg";

export default function Cards() {
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className="cards-wrap">
      <div className="card" id="incomes">
        <h3>
          Entradas
          <img src={entradas} alt="entradas" />
        </h3>
        <span>R$ {incomes}</span>
        <button onClick={() => setIncomes(incomes + 10)}>Entradas </button>
      </div>
      <div className="card" id="expenses">
        <h3>
          Saídas
          <img src={saidas} alt="saidas" />
        </h3>
        <span>R$ {expenses}</span>
      </div>
      <div className="card" id="total">
        <h3>
          Total
          <img src={totalImg} alt="total" />
        </h3>
        <span>R$ {total}</span>
      </div>
    </div>
  );
}
