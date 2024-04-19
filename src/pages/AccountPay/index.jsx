import './style.css'

function AccountPay () {
    return (
        <>
        <main>
            <div className="account-pay">
                <div className="form">
                    <form action="#">
                        <div className="form-header">
                            <div className="title">
                                <h1>Contas</h1>
                            </div>                        
                        </div>

                        <div className="form-menu-pay">
                            <div className="form-menu-pay-options">
                                <h3><a href="">Ordens</a></h3>
                                <h3><a href="">Pendentes</a></h3>
                                <h3><a href="">Arquivadas</a></h3>
                            </div>

                            <div className="button-add-account">
                                <button><a href="#">Add Conta</a></button>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Empresa</th>
                                    <th>DRE</th>
                                    <th>Centro de Custo</th>
                                    <th>Fornecedor</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1900</td>
                                    <td>Pendente</td>
                                    <td>Lopes Península</td>
                                    <td>Adminstrativo</td>
                                    <td>Operações de vendas</td>
                                    <td>DELL TECHNOLOGIES</td>
                                    <td>R$ 100.000,00</td>
                                    <td>20/03/2024</td>
                                </tr>
                                <tr>
                                    <td>1901</td>
                                    <td>Pendente</td>
                                    <td>Lopes Leblon</td>
                                    <td>Investimento</td>
                                    <td>Operações de vendas</td>
                                    <td>DELL TECHNOLOGIES</td>
                                    <td>R$ 10.000,00</td>
                                    <td>25/03/2024</td>
                                </tr>
                                <tr>
                                    <td>1902</td>
                                    <td>Pendente</td>
                                    <td>Lopes CM</td>
                                    <td>Despesas Operacionais</td>
                                    <td>Operações de vendas</td>
                                    <td>DELL TECHNOLOGIES</td>
                                    <td>R$ 2.000,00</td>
                                    <td>25/03/2024</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5"></td>
                                    <td >TOTAL</td>
                                    <td>R$  122.000,00</td>
                                    <td>3 Processos</td>
                                </tr>
                            </tfoot>
                        </table>
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}

export default AccountPay