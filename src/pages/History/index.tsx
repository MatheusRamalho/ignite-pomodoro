import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Status } from '../../components/Status'
import { Table } from '../../components/Table'

import { HistoryContainer } from './styles'

export const History = () => {
    const { cycles } = useContext(CyclesContext)

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
                    {cycles.map((cycle) => {
                        return (
                            <tr key={cycle.id}>
                                <Table.Td> {cycle.task} </Table.Td>
                                <Table.Td> {cycle.minutesAmount} minutos </Table.Td>

                                <Table.Td>
                                    {' '}
                                    {formatDistanceToNow(new Date(cycle.startDate), {
                                        addSuffix: true,
                                        locale: ptBR,
                                    })}{' '}
                                </Table.Td>

                                <Table.Td>
                                    {cycle.finishedDate && <Status name="Concluído" statusColor="green" />}
                                    {cycle.interruptedDate && <Status name="Interrompido" statusColor="red" />}
                                    {!cycle.finishedDate && !cycle.interruptedDate && (
                                        <Status name="Em andamento" statusColor="yellow" />
                                    )}
                                </Table.Td>
                            </tr>
                        )
                    })}
                </Table.Body>
            </Table.Root>
        </HistoryContainer>
    )
}
