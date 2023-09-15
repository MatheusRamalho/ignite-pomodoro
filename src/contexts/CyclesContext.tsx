import { ReactNode, createContext, useEffect, useReducer, useState } from 'react'

import { Cycle } from '../types/Cycle'

import { cyclesReducer } from '../reducers/cycles/reducer'
import {
    addNewCycleAction,
    interruptCurrentCycleAction,
    markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

const CYCLES_STATE_LOCAL_STORAGE = '@ignite-pomodoro:cycles-state'

interface CreateCycleData {
    task: string
    minutesAmount: number
}

interface CycleContextProps {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}

export const CyclesContext = createContext({} as CycleContextProps)

interface CyclesContextProviderProps {
    children: ReactNode
}

export const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
    const [cyclesState, dispatch] = useReducer(
        cyclesReducer,
        {
            cycles: [],
            activeCycleId: null,
        },
        (initialState) => {
            const storadeStateAsJSON = localStorage.getItem(CYCLES_STATE_LOCAL_STORAGE)

            if (storadeStateAsJSON) {
                return JSON.parse(storadeStateAsJSON)
            }

            return initialState
        },
    )

    const { cycles, activeCycleId } = cyclesState
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)
        localStorage.setItem(CYCLES_STATE_LOCAL_STORAGE, stateJSON)
    }, [cyclesState])

    const setSecondsPassed = (seconds: number) => {
        setAmountSecondsPassed(seconds)
    }

    const markCurrentCycleAsFinished = () => {
        dispatch(markCurrentCycleAsFinishedAction())
    }

    const createNewCycle = (data: CreateCycleData) => {
        const id = String(new Date().getTime())

        const newCycle: Cycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch(addNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    const interruptCurrentCycle = () => {
        dispatch(interruptCurrentCycleAction())
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                amountSecondsPassed,
                markCurrentCycleAsFinished,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}
