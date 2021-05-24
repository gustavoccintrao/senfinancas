import React from 'react'

export default function TransactionTable() {
    return (
        <div className="transaction-table-wrap">
            <h2>Transações</h2>
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Tipo</th>
                        <th>Categoria</th>
                        <th>Valor</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luz</td>
                        <td>Saída</td>
                        <td>Contas Mensais</td>
                        <td>R$ 250,00</td>
                        <td>21/05/2020</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td>Saída</td>
                        <td>Contas Mensais</td>
                        <td>R$ 150,00</td>
                        <td>23/05/2020</td>
                    </tr>
                    <tr>
                        <td>Mesada</td>
                        <td>Entrada</td>
                        <td>Mesada</td>
                        <td>R$ 200,00</td>
                        <td>23/05/2020</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
