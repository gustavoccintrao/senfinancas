import React, {useEffect, useState} from "react";

export default function Cards() {
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <div className ="cards-wrap">
      <div className="card" id="incomes">
        <h3> Entradas </h3>
        <span>R$ {incomes}</span>
        <button onClick={() => setIncomes(incomes+10)}>
          Entradas </button>
      </div>
      <div className="card" id="expenses">
        <h3> Saídas </h3>
        <span>R$ {expenses}</span>
      </div>
      <div className="card" id="total">
        <h3> Total </h3>
        <span>R$ {total}</span>
      </div>
    </div>
  );
}
