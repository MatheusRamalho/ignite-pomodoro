import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, CountdownSeparator } from './Countdown.styles'

export const Countdown = () => {
    const { activeCycle, activeCycleId, markCurrentCycleAsFinished, amountSecondsPassed, setSecondsPassed } =
        useContext(CyclesContext)

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

    useEffect(() => {
        let interval: number

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)

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
    }, [activeCycle, totalSeconds, activeCycleId, markCurrentCycleAsFinished, setSecondsPassed])

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
    }, [minutes, seconds])

    return (
        <CountdownContainer>
            <span> {minutes[0]} </span>
            <span> {minutes[1]} </span>
            <CountdownSeparator> : </CountdownSeparator>
            <span> {seconds[0]} </span>
            <span> {seconds[1]} </span>
        </CountdownContainer>
    )
}
