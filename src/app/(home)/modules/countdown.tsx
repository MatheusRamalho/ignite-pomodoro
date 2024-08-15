'use client'

import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '@/contexts/cyclesContext'

export function Countdown() {
    const {
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
    } = useContext(CyclesContext)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: ReturnType<typeof setTimeout>

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(),
                    new Date(activeCycle.startDate),
                )

                if (secondsDifference >= totalSeconds) {
                    markCurrentCycleAsFinished()
                    setSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    setSecondsPassed(secondsDifference)
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [
        activeCycle,
        totalSeconds,
        activeCycleId,
        markCurrentCycleAsFinished,
        setSecondsPassed,
    ])

    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    const minutesAmount = Math.floor(currentSeconds / 60) // floor - arredonda para baixo...
    const secondsAmount = currentSeconds % 60

    // padStart - preenche uma string até tamanho especifico, caso ela ainda não tenha o tamanho...
    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        if (activeCycle) {
            document.title = `Ignite Pomodoro - ${minutes}:${seconds}`
        }
    }, [minutes, seconds, activeCycle])

    return (
        <div className="font-bold text-xxl leading-[160%] text-gray-100 flex gap-4">
            <span className="py-8 px-4 rounded-lg bg-gray-700">
                {minutes[0]}
            </span>

            <span className="py-8 px-4 rounded-lg bg-gray-700">
                {minutes[1]}
            </span>

            <div className="w-16 overflow-hidden py-8 px-0 text-green-500 flex justify-center">
                :
            </div>

            <span className="py-8 px-4 rounded-lg bg-gray-700">
                {seconds[0]}
            </span>

            <span className="py-8 px-4 rounded-lg bg-gray-700">
                {seconds[1]}
            </span>
        </div>
    )
}
