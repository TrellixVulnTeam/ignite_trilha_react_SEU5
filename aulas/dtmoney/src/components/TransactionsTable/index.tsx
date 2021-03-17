import { useEffect } from "react";
import { Container } from "./styles";
import {api} from '../../services/api'

export function TransactionsTable(){

    useEffect(() =>{
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$ 17.400,00</td>
                        <td>Venda</td>
                        <td>13/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 1.259,00</td>
                        <td>Casa</td>
                        <td>01/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}