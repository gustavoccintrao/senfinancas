import React from "react";
import add_blue from "../img/add_blue.svg";
import minus from "../img/minus.png";

export default function TransactionTable() {
  return (
    <div className="transaction-table-wrap">
      <a href="#" className="button new-transaction">
        <img src={add_blue} alt="Nova Transação" />
        Nova Transação
      </a>

      <table id="data-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Tipo</th>
            <th>Categoria</th>
            <th>Valor</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Luz</td>
            <td>Saída</td>
            <td>Contas Mensais</td>
            <td className="expense">-R$ 250,00</td>
            <td>21/05/2020</td>
            <td>
              <img
                src={minus}
                width="24px"
                height="24px"
                alt="Excluir Transação"
              />
            </td>
          </tr>
          <tr>
            <td>Internet</td>
            <td>Saída</td>
            <td>Contas Mensais</td>
            <td className="expense">-R$ 150,00</td>
            <td>23/05/2020</td>
            <td>
              <img
                src={minus}
                width="24px"
                height="24px"
                alt="Excluir Transação"
              />
            </td>
          </tr>
          <tr>
            <td>Mesada</td>
            <td>Entrada</td>
            <td>Mesada</td>
            <td className="income">+R$ 200,00</td>
            <td>23/05/2020</td>
            <td>
              <img
                src={minus}
                width="24px"
                height="24px"
                alt="Excluir Transação"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
