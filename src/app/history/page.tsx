'use client'

import { useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { CyclesContext } from '@/contexts/CyclesContext'
import { Status } from '@/components/status'
import {
    TableRoot,
    TableHead,
    TableTh,
    TableBody,
    TableTd,
    TableRow,
} from '@/components/table'

export default function History() {
    const { cycles } = useContext(CyclesContext)

    return (
        <main className="flex-1 flex flex-col p-14">
            <h1 className="text-xl text-gray-100  font-bold">
                {' '}
                Meu histórico{' '}
            </h1>

            <TableRoot>
                <TableHead>
                    <TableRow>
                        <TableTh> Tarefa </TableTh>
                        <TableTh> Duração </TableTh>
                        <TableTh> Início </TableTh>
                        <TableTh> Status </TableTh>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {cycles &&
                        cycles.length > 0 &&
                        cycles.map((cycle) => {
                            return (
                                <TableRow key={cycle.id}>
                                    <TableTd> {cycle.task} </TableTd>

                                    <TableTd>
                                        {cycle.minutesAmount} minutos
                                    </TableTd>

                                    <TableTd>
                                        {formatDistanceToNow(
                                            new Date(cycle.startDate),
                                            {
                                                addSuffix: true,
                                                locale: ptBR,
                                            },
                                        )}
                                    </TableTd>

                                    <TableTd>
                                        {cycle.finishedDate && (
                                            <Status name="Concluído" />
                                        )}

                                        {cycle.interruptedDate && (
                                            <Status name="Interrompido" />
                                        )}

                                        {!cycle.finishedDate &&
                                            !cycle.interruptedDate && (
                                                <Status name="Em andamento" />
                                            )}
                                    </TableTd>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </TableRoot>
        </main>
    )
}
