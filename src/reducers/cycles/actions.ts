import { Cycle } from '@/types/cycle'

export enum CyclesActionTypes {
    ADD_CYCLE = 'ADD_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE',
}

/**
 * FORMA DE TIPAR AS ACTIONS QUE VI NA B7WEB
 *
    export interface AddCycleAction {
        type: CyclesActionTypes.ADD_CYCLE
        payload: {
            newCycle: Cycle
        }
    }

    export interface InterruptCurrentCycleAction {
        type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE
        payload: {
            activeCycleId: string
        }
    }

    export interface FinishedCurrentCycleAction {
        type: CyclesActionTypes.FINISHED_CURRENT_CYCLE
        payload: {
            activeCycleId: string
        }
    }

    export type CyclesAction = AddCycleAction | InterruptCurrentCycleAction | FinishedCurrentCycleAction
 */

export const addNewCycleAction = (newCycle: Cycle) => {
    return {
        type: CyclesActionTypes.ADD_CYCLE,
        payload: {
            newCycle,
        },
    }
}

export const markCurrentCycleAsFinishedAction = () => {
    return {
        type: CyclesActionTypes.FINISHED_CURRENT_CYCLE,
    }
}

export const interruptCurrentCycleAction = () => {
    return {
        type: CyclesActionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}
