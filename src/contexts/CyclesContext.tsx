import { ReactNode, createContext, useState } from 'react'

interface CreaterCycleProps {
    task: string
    minutesAmount: number
}

interface CycleProps {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}

interface CycleContextProps {
    cycles: CycleProps[]
    activeCycle: CycleProps | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreaterCycleProps) => void
    interruptCurrentCycle: () => void
}

interface CyclesContextProviderProps {
    children: ReactNode
}

export const CyclesContext = createContext({} as CycleContextProps)

export const CyclesContextProvider = ({ children }: CyclesContextProviderProps) => {
    const [cycles, setCycles] = useState<CycleProps[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

    const setSecondsPassed = (seconds: number) => {
        setAmountSecondsPassed(seconds)
    }

    const markCurrentCycleAsFinished = () => {
        setCycles((state) =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return {
                        ...cycle,
                        finishedDate: new Date(),
                    }
                } else {
                    return cycle
                }
            }),
        )
    }

    const createNewCycle = (data: CreaterCycleProps) => {
        const id = String(new Date().getTime())

        const newCycle: CycleProps = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        // forma correta de modificar a state quando a mesma depende do seu valor anterior...
        setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)
        setAmountSecondsPassed(0)
    }

    const interruptCurrentCycle = () => {
        setCycles((state) =>
            state.map((cycle) => {
                if (cycle.id === activeCycleId) {
                    return {
                        ...cycle,
                        interruptedDate: new Date(),
                    }
                } else {
                    return cycle
                }
            }),
        )
        setActiveCycleId(null)
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
