import { Status } from "../../components/Status"
import { Table } from "../../components/Table"
import { HistoryContainer } from "./History.styles"

export const History = () => {
    return (
        <HistoryContainer>
            <h1> Meu histórico </h1>

            <Table.Root>
                <Table.Head>
                    <tr>
                        <Table.Th name="Tarefa" />
                        <Table.Th name="Duração" />
                        <Table.Th name="Início" />
                        <Table.Th name="Status" />
                    </tr>
                </Table.Head>

                <Table.Body>
                    <tr>
                        <Table.Td> Tarefa </Table.Td>
                        <Table.Td> 20 minutos </Table.Td>
                        <Table.Td> Há 2 meses </Table.Td>
                        <Table.Td> <Status name="Concluído" statusColor="green" /> </Table.Td>
                    </tr>

                    <tr>
                        <Table.Td> Tarefa </Table.Td>
                        <Table.Td> 20 minutos </Table.Td>
                        <Table.Td> Há 2 meses </Table.Td>
                        <Table.Td> <Status name="Concluído" statusColor="green" /> </Table.Td>
                    </tr>

                    <tr>
                        <Table.Td> Tarefa </Table.Td>
                        <Table.Td> 20 minutos </Table.Td>
                        <Table.Td> Há 2 meses </Table.Td>
                        <Table.Td> <Status name="Concluído" statusColor="green" /> </Table.Td>
                    </tr>

                    <tr>
                        <Table.Td> Tarefa </Table.Td>
                        <Table.Td> 20 minutos </Table.Td>
                        <Table.Td> Há 2 meses </Table.Td>
                        <Table.Td> <Status name="Interrompido" statusColor="red" /> </Table.Td>
                    </tr>

                    <tr>
                        <Table.Td> Tarefa </Table.Td>
                        <Table.Td> 20 minutos </Table.Td>
                        <Table.Td> Há 2 meses </Table.Td>
                        <Table.Td> <Status name="Em andamento" statusColor="yellow" /> </Table.Td>
                    </tr>
                </Table.Body>
            </Table.Root>
        </HistoryContainer>
    )
}
